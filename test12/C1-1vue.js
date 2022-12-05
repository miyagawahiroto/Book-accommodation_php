const vm = new Vue({
    el: '#app',
    data: {
        room_id: '2',
        photo: '../photo/',
        room: {},
        window2: false,
        window3: false
    },
    //ページが読み込まれた時に動く処理
    mounted() {
        this.photo_seach();
        this.room_seach();
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
        bookroom(){
            this.window2 = false;
            this.window3 = !this.window3;
            setTimeout(this.sendhome, 2000);
        },
        sendhome(){
            location.href = "./H1-1.html";
        }
    },

    computed: {

    }

});