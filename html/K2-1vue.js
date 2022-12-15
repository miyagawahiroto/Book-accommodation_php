const app = new Vue({
    el: '#app',
    data() {
        return {
            date: '日時XXXX',
            roomCnt: 00,
            peopleNum: 00,
            condition: 'こだわり条件',
            selected: 'A',
            options: [
                { text: 'おすす順', value: 'A' },
                { text: '高い順', value: 'B' },
                { text: '安い順', value: 'C' }
            ],
            hotel: [
                { id: 00, name: '旅館', plan: 'プラン', location: '場所', charge: '料金', src: "../photo/hotel/hotel_10.jpg" },
                { id: 01, name: '旅館', plan: 'プラン', location: '場所', charge: '料金', src: "../photo/hotel/hotel_7.jpg" },
                { id: 02, name: '旅館', plan: 'プラン', location: '場所', charge: '料金', src: "../photo/hotel/hotel_7.jpg" }
            ],
            hotels: [],
            search_hotel_name: window.sessionStorage.getItem(['search_hotel_name']),
            place_name: window.sessionStorage.getItem(['place_name']),
            asa: window.sessionStorage.getItem(['asa']),
            hiru: window.sessionStorage.getItem(['hiru']),
            yuu: window.sessionStorage.getItem(['yuu']),
            nasi: window.sessionStorage.getItem(['nasi']),
            asahiru: window.sessionStorage.getItem(['asahiru']),
            sansyoku: window.sessionStorage.getItem(['sansyoku'])
        }
    },
    mounted() {
        this.gethotel();
    },
    methods: {
        linkRoom(hotel_id) {
            window.sessionStorage.setItem(['hotel_id'], hotel_id);
            location.href = './Y1-1.html';
        },
        gethotel() {
            axios
                .post('https://mp-class.chips.jp/test.php', {

                    asa: this.asa,
                    hiru: this.hiru,
                    yuu: this.yuu,
                    nasi: this.nasi,
                    asahiru: this.asahiru,
                    sansyoku: this.sansyoku,
                    hotel_name: this.search_hotel_name,
                    place_name: this.place_name,
                    search_hotel: ''
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(
                    (response) => (this.hotels = response.data)
                )
        }
    }
});