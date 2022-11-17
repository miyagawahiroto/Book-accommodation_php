const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        results: false,
        error: false,
        name: '',
        pass: '',
        mail: '',
        phone: '',
        address: '',
        gender: '',
        age: ''
    },
    //ページが読み込まれた時に動く処理
    mounted() {
    },
    updated() {
    },
    methods: {
        login() {
            if (this.name==''||this.pass==''||this.mail==''||this.phone==''||this.address==''||this.gender==''||this.age=='') {
                this.error=true;
            } else {
                this.logincheck();
                location.href = "./M2-2.html";
            }

        },
        logincheck() {
            axios
                .get("https://mp-class.chips.jp/test.php/?create_user&name=" + this.name + "&pass=" + this.pass + "&mail=" + this.mail + "&tel=" + this.phone + "&address=" + this.address + "&gender=" + this.gender + "&age=" + this.age)
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});