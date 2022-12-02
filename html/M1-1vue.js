const vm = new Vue({
    el: '#app',
    data: {
        user_id:window.sessionStorage.getItem(['user_id']),
        user:{}
    },
    //ページが読み込まれた時に動く処理
    mounted() {
        this.login();
    },
    updated() {
    },
    methods: {
        login() {
            axios
                .get("https://mp-class.chips.jp/test.php/?get_user&user_id="+this.user_id)
                .then((response) => (this.user = response.data))
                .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});