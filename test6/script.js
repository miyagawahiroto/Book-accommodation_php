const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        results: false,
        search_user_id: 1,
        search_password: 'pass001'
    },
    //ページが読み込まれた時に動く処理
    mounted() {
    },
    updated(){
        if (this.results == true) {
            location.href = "./test2.html";
        }
    },
    methods: {
        login() {
            this.logincheck();
            this.senduser();

        },
        logincheck() {
            axios
                .get("http://mp-class.chips.jp/test.php/?login_user&user_id=" + this.search_user_id + "&user_pass=" + this.search_password)
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
        },
        senduser() {
            
        }
    },

    computed: {
    }

});