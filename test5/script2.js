const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        hotels: {},
        users: {},
        search_hotel_id: 1,
        search_user_id: 1
    },
    //ページが読み込まれた時に動く処理
    mounted() {
        axios
            .get("http://mp-class.chips.jp/test.php/?get_hotel&hotel_id=1")
            .then((response) => (this.hotels = response.data))
            .catch((error) => console.log(error));
        axios
            .get("http://mp-class.chips.jp/test.php/?get_user&user_id=1")
            .then((response) => (this.users = response.data))
            .catch((error) => console.log(error));
    },
    methods: {
        hotel_search() {
            axios
                .get("http://mp-class.chips.jp/test.php/?get_hotel&hotel_id=" + this.search_hotel_id)
                .then((response) => (this.hotels = response.data))
                .catch((error) => console.log(error));
        },
        user_search() {
            axios
                .get("http://mp-class.chips.jp/test.php/?get_user&user_id=" + this.search_user_id)
                .then((response) => (this.users = response.data))
                .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});