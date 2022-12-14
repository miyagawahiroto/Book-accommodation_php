new Vue({
  el: "#app",
  data() {
    return {}
  },
  method:{
    clickimg(hotel_id){
      console.log(hotel_id);
      window.sessionStorage.setItem(['hotel_id'],hotel_id);
      location.href = './Y1-1.html';
    }
  }
});