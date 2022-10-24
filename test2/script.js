const vm = new Vue({
    el: '#app',
    data: {
        results: {id:00,name:"OK"},
        name: 'a',
    },

    mounted() {
        axios
                .get("http://localhost/Web/宿予約システム/test2/test.php/?a=0&timestamp=${new Date().getTime()}")
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
    },
    methods: {
        getjson1: function () {
            axios
                .get("http://localhost/Web/宿予約システム/test2/test.php/?a=1&timestamp=${new Date().getTime()}")
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
        },
        getjson2: function () {
            axios
                .get("http://localhost/Web/宿予約システム/test2/test.php/?a=2&timestamp=${new Date().getTime()}")
                .then((response) => (this.results = response.data))
                .catch((error) => console.log(error));
        }
    },

    computed: {
    }

});