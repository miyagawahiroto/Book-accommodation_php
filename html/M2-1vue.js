const vm = new Vue({
    el: '#app',
    data: {
        //初期値
        results: false,
        name:'',
        pass:'',
        mail:'',
        phone:'',
        address:'',
        gender:'',
        age:''
    },
    //ページが読み込まれた時に動く処理
    mounted() {
    },
    updated(){
    },
    methods: {
        login() {
            console.log("OK");
            this.logincheck();
            location.href = "./M2-2.html";

        },
        logincheck() {
            axios
                .get("https://mp-class.chips.jp/test.php/?create_user&name="+this.name+"&pass="+this.pass+"&mail="+this.mail+"&tel="+this.phone+"&address="+this.address+"&gender="+this.gender+"&age="+this.age)
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});