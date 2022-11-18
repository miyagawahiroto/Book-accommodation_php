const vm = new Vue({
    el: '#app',
    data: {
        results:''
    },
    //ページが読み込まれた時に動く処理
    created() {
        axios
            .get("https://mp-class.chips.jp/test.php/?hotel_photo&id=1")
            .then((response) => (this.results = response.data))
            .catch((error) => console.log(error));
    },
    updated() {
    },
    methods: {
    },

    computed: {
    }

});