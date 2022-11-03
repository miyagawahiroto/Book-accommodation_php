const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        hotels: {},
        users: {},
        search_hotel_id: 1,
        search_user_id: 1,
        tags: {
            tag1: {
                1: 'ホテル',
                2: '旅館',
                3: 'ビジネス',
                4: 'カジュアル',
                5: 'バリケーションスタイル'
            },
            tag2: {
                1: '朝食付',
                2: '昼食付',
                3: '夕食付',
                4: '食事なし',
                5: '朝昼食付',
                6: '３食付'
            },
            tag3: {
                1: '禁煙',
                2: 'クラブフロア',
                3: '40平米以上',
                4: 'ペットOK',
                5: 'スイート',
                6: 'ネット無料',
                7: 'バルコニー・テラス付',
                8: 'ベッド幅160cm',
                9: '離れ・コテージ',
                10: '特別室・貴賓室',
                11: 'バリアフリー',
                12: 'コネクティング利用可'
            },
            tag4: {
                1: 'ツイン',
                2: 'ダブル',
                3: '和洋室',
                4: '和室',
                5: 'シングル',
                6: 'トリプル',
                7: 'フォース',
                8: '設定なし',
            },
            tag5: {
                1: 'ホテル',
                2: '旅館',
                3: 'ビジネス',
                4: 'カジュアル',
                5: 'バリケーションスタイル'
            },
            tag6: {
            },
            tag7: {
            },
            tag8: {
            },
            tag9: {
            },
            tag10: {
            }
        }
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