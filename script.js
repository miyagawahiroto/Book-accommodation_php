new Vue({
    el: '#app',
    data: {
        results: [],
        name: 'a',
    },
    mounted() {
        axios
            .get("http://localhost/Web/lesson/test3/return3.php/?a=0")
            .then((response) => (this.results = response.data))
            .catch((error) => console.log(error));
        console.log(this.results);
    },
    methods: {
        getjson(){
        axios
            .get("http://localhost/Web/宿予約システム/test.php/?a=1")
            .then((response) => (this.results = response.data))
            .catch((error) => console.log(error));
        console.log(this.results);
        }
    },

    computed: {
    }

});