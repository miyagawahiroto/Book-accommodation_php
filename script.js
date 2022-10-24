new Vue({
    el: '#app',
    data: {
        results: [],
        name: 'a',
    },
    mounted() {
        axios
            .get("http://localhost/Web/宿予約システム/return.php/?a=1")
            .then((response) => (this.results = response.data))
            .catch((error) => console.log(error));
        console.log(this.results);
    },

    computed: {
    }

});