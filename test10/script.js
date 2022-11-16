const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        count: 0,
        hotels: {},
        tyousyoku: {},
        tyuusyoku:{},
        yuusyoku:{},
        selectdata: 'ホテル',
        chk1: false,
        chk2: false,
        chk3: false,
        chk4: false,
        chk5: false
    },
    //ページが読み込まれた時に動く処理
    mounted() {
        this.seach_hotels();
        this.seach_tyousyoku();
        this.seach_tyuusyoku();
        this.seach_yuusyoku();
    },
    updated() {
    },
    methods: {
        chk_1() {
            if (this.chk1 == true) {
                this.count++;
                for ($i = 0; $i < this.hotels.length; $i++) {
                    for ($j = 0; $j < this.tyousyoku.length; $j++) {
                        if (this.hotels[$i].id === this.tyousyoku[$j].hotel_id) {
                            this.hotels[$i].num++;
                        }
                    }
                }
            } else {
                this.count--;
                for ($i = 0; $i < this.hotels.length; $i++) {
                    for ($j = 0; $j < this.tyousyoku.length; $j++) {
                        if (this.hotels[$i].id === this.tyousyoku[$j].hotel_id) {
                            this.hotels[$i].num--;
                        }
                    }
                }
            }
        },
        chk_2() {
            if (this.chk2 == true) {
                this.count++;
                for ($i = 0; $i < this.hotels.length; $i++) {
                    for ($j = 0; $j < this.tyuusyoku.length; $j++) {
                        if (this.hotels[$i].id === this.tyuusyoku[$j].hotel_id) {
                            this.hotels[$i].num++;
                        }
                    }
                }
            } else {
                this.count--;
                for ($i = 0; $i < this.hotels.length; $i++) {
                    for ($j = 0; $j < this.tyuusyoku.length; $j++) {
                        if (this.hotels[$i].id === this.tyuusyoku[$j].hotel_id) {
                            this.hotels[$i].num--;
                        }
                    }
                }
            }
        },
        chk_3() {
            if (this.chk1 == true) {
                this.count++;
                for ($i = 0; $i < this.hotels.length; $i++) {
                    for ($j = 0; $j < this.yuusyoku.length; $j++) {
                        if (this.hotels[$i].id === this.yuusyoku[$j].hotel_id) {
                            this.hotels[$i].num++;
                        }
                    }
                }
            } else {
                this.count--;
                for ($i = 0; $i < this.hotels.length; $i++) {
                    for ($j = 0; $j < this.yuusyoku.length; $j++) {
                        if (this.hotels[$i].id === this.yuusyoku[$j].hotel_id) {
                            this.hotels[$i].num--;
                        }
                    }
                }
            }
        },
        chk_4() {
            if (this.chk1 == true) {
                this.count++;
            } else {
                this.count--;
            }
        },
        chk_5() {
            if (this.chk1 == true) {
                this.count++;
            } else {
                this.count--;
            }
        },
        seach(){
            if(this.selectdata=='ホテル'){
                this.seach_hotels();
            }else if(this.selectdata=='旅館'){
                this.ryokan();
            }
        },
        seach_tyousyoku() {
            axios
                .get("http://mp-class.chips.jp/test.php/?hotel_tag_search1&tag=hotel_tag_2&key=朝食")
                .then((response) => (this.tyousyoku = response.data))
                .catch((error) => console.log(error));
        },
        seach_tyuusyoku() {
            axios
                .get("http://mp-class.chips.jp/test.php/?hotel_tag_search1&tag=hotel_tag_2&key=昼食")
                .then((response) => (this.tyuusyoku = response.data))
                .catch((error) => console.log(error));
        },
        seach_yuusyoku() {
            axios
                .get("http://mp-class.chips.jp/test.php/?hotel_tag_search1&tag=hotel_tag_2&key=夕食")
                .then((response) => (this.yuusyoku = response.data))
                .catch((error) => console.log(error));
        },
        seach_hotels(){
            axios
            .get("http://mp-class.chips.jp/test.php/?get_farst&num=1")
            .then((response) => (this.hotels = response.data))
            .catch((error) => console.log(error));
        },
        ryokan(){
            axios
            .get("http://mp-class.chips.jp/test.php/?get_farst&num=2")
            .then((response) => (this.hotels = response.data))
            .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});