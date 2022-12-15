const vm = new Vue({
    el: '#app',
    data() {
        return {
            get_data: false,
            info: 'infomation',
            hotel_id:window.sessionStorage.getItem(['hotel_id']),
            roomlist: [],
            hotel: [],
            hotelImg: '../photo/'
        };
    },
    created() {

    },
    mounted() {
        this.get_roomlist();
        this.get_hotel();
        this.get_hotel_photo();
    },
    methods: {
        linkRoom(room_id) {
            window.sessionStorage.setItem(['room_id'], room_id);
            location.href = './C1-1.html';
        },
        get_roomlist() {
            axios
                .get("https://mp-class.chips.jp/test.php/?room_list&hotel_id=" + this.hotel_id)
                .then((response) => (this.roomlist = response.data))
                .catch((error) => console.log(error));
        },
        get_hotel() {
            axios
                .get("https://mp-class.chips.jp/test.php/?get_hotel&hotel_id=" + this.hotel_id)
                .then((response) => (this.hotel = response.data))
                .catch((error) => console.log(error));
        },
        get_hotel_photo() {

            axios

                .get("https://mp-class.chips.jp/test.php/?hotel_photo&id=" + this.hotel_id)

                .then((response) => (this.hotelImg += response.data))

                .catch((error) => console.log(error));

        }
    },
    watch: {
        hotel: function (newdata, olddata) {
            this.get_data = true;
        }
    }
});