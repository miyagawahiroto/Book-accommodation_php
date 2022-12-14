const vm = new Vue({
    el: '#app',
    data: {
        user_id: window.sessionStorage.getItem(['user_id']),
        user:{},
        room_id: window.sessionStorage.getItem(['room_id']),
        photo: '../photo/',
        room: {},
        window2: false,
        window3: false,
        checkin:'',
        checkout:'',
        number:''
    },
    //ページが読み込まれた時に動く処理
    mounted() {
        this.photo_seach();
        this.room_seach();
        this.login();
    },
    updated() {
    },
    methods: {
        photo_seach() {
            axios
                .get("https://mp-class.chips.jp/test.php/?room_photo&id=" + this.room_id)
                .then((response) => (this.photo += response.data))
                .catch((error) => console.log(error));
        },
        room_seach() {
            axios
                .get("https://mp-class.chips.jp/test.php/?get_room&room_id=" + this.room_id)
                .then((response) => (this.room = response.data))
                .catch((error) => console.log(error));
        },
        takeroom() {
            this.window2 = !this.window2;
        },
        bookroom() {
            this.window2 = false;
            this.window3 = !this.window3;
            this.insert_reserve();
            setTimeout(this.sendhome, 2000);
        },
        sendhome() {
            location.href = "./H1-1.html";
        },
        login() {
            axios
                .get("https://mp-class.chips.jp/test.php/?get_user&user_id=" + this.user_id)
                .then((response) => (this.user = response.data))
                .catch((error) => console.log(error));
        },
        insert_reserve(){
            axios
                .get("https://mp-class.chips.jp/test.php/?insert_reserve&user_id="+ this.user_id+"&hotel_id="+this.room[0].hotel_id+"&room_id="+this.room_id+"&checkin="+this.checkin+"&checkout="+this.checkout+"&number="+this.number)
                .catch((error) => console.log(error));
        }
    },

    computed: {

    }

});