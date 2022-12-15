new Vue({
    el: '#app',
    data() {
        return {
            hotel: [],
            window: false,
            window2: false,
            window3: false,
            user_id: window.sessionStorage.getItem(['user_id']),
            hotelname: 'aaa',
            reserve_id: 0,
            username: '',
            cosename: '',
            checkin_date: 0,
            chackout_date: 0,
            reservation_number: 0,
            checkin_time: ''
        };
    },
    mounted() {
        this.get_hotellist();
    },
    methods: {
        popup(hotelname, reserve_id, username, cosename, checkin_date, checkout_date, reservation_number, checkin_time) {
            console.log(checkin_time);
            this.hotelname = hotelname;
            this.reserve_id = reserve_id;
            this.username = username;
            this.cosename = cosename;
            this.checkin_date = checkin_date;
            this.checkout_date = checkout_date;
            this.reservation_number = reservation_number;
            this.checkin_time = checkin_time;
            this.clickwindow();
        },
        clickwindow() {
            if (this.window2 == false && this.window3 == false) {
                this.window = !this.window;
            }
        },
        clickwindow2() {
            this.window = false;
            this.window2 = !this.window2;
        },
        clickwindowYes() {
            this.window2 = false;
            this.window3 = !this.window3;
            this.delete_reserve();
        },
        clickwindowNo() {
            this.window2 = false;
            this.window = true;
        },
        reset() {
            location.href = "./H1-1.html";
        },
        get_hotellist() {
            axios
                .get("https://mp-class.chips.jp/test.php/?get_reserve&user_id=" + window.sessionStorage.getItem(['user_id']),)
                .then((response) => (this.hotel = response.data))
                .catch((error) => console.log(error));
        },
        delete_reserve(){
            axios
                .get("https://mp-class.chips.jp/test.php/?delete_reserve&reserve_id=" + this.reserve_id)
                .then((response) => (console.log(response.data)))
                .catch((error) => console.log(error));
        }
    }
})