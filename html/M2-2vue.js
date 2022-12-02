const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        results: false,
        user_id: '',
        pass: ''
    },
    //ページが読み込まれた時に動く処理
    mounted() {
    },
    updated() {
        if (this.results == true) {

        }
    },
    watch: {
        results() {
            if (this.results == true) {
                window.sessionStorage.setItem(['user_id'], this.user_id);
                location.href = "./H1-1.html";
            }
        }
    },
    methods: {
        login() {
            this.logincheck();
        },
        logincheck() {
            axios
                .get("https://mp-class.chips.jp/test.php/?login_user&user_id=" + this.user_id + "&user_pass=" + this.pass)
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
        }
    },
    computed: {
    }

});