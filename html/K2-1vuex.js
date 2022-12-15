new Vue({
    el: '#app',
    data() {
        return {
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
    methods: {
        gethotel() {
            axios
                .post('https://mp-class.chips.jp/test.php', {
                    
                    asa:this.asa,
                    hiru:this.hiru,
                    yuu:this.yuu,
                    nasi:this.nasi,
                    asahiru:this.asahiru,
                    sansyoku:this.sansyoku,
                    hotel_name:this.hotel_name,
                    place_name:this.place_name,
                    search_hotel:''
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(
                    (response) => (console.log(response.data))
                )
        }
    }
});