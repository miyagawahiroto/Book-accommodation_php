const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        tag_no: 'hotel_tag_1',
        keyword: 'ホテル',
        hotelids:{},
        hotels:{}
    },
    //ページが読み込まれた時に動く処理
    mounted() {
        axios
                .get("http://mp-class.chips.jp/test.php/?get_hotellist")
                .then((response) => (this.hotels = response.data))
                .catch((error) => console.log(error));
    },
    updated() {
    },
    methods: {
        hotel_tag_search() {
            this.tag_search();
        },
        tag_search() {
            axios
                .get("http://mp-class.chips.jp/test.php/?hotel_tag_search&tag="+this.tag_no+"&key="+this.keyword)
                .then((response) => (this.hotelids = response.data))
                .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});