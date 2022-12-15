new Vue({
  el: '#app',
  data() {
    return {
      search_hotel_name: '',
      place_name: '',
      modalDefault: true,
      modalChanged: false,
      checkedNames: [
        {
          tagid: 11,
          tagName: '昼食付',
          chk: false
        }, {
          tagid: 12,
          tagName: '朝食付',
          chk: false
        }, {
          tagid: 13,
          tagName: '夕食付',
          chk: false
        }, {
          tagid: 14,
          tagName: '食事なし',
          chk: false
        }, {
          tagid: 15,
          tagName: '朝昼食付',
          chk: false
        },
        {
          tagid: 16,
          tagName: '3食付き',
          chk: false
        }
      ]
    }
  },
  methods: {
    changeModal() {
      this.modalDefault = !this.modalDefault;
      this.modalChanged = !this.modalChanged;
    },
    pushbutton() {
      window.sessionStorage.setItem(['asa'], this.checkedNames[0].chk);
      window.sessionStorage.setItem(['hiru'], this.checkedNames[1].chk);
      window.sessionStorage.setItem(['yuu'], this.checkedNames[2].chk);
      window.sessionStorage.setItem(['nasi'], this.checkedNames[3].chk);
      window.sessionStorage.setItem(['asahiru'], this.checkedNames[4].chk);
      window.sessionStorage.setItem(['sansyoku'], this.checkedNames[5].chk);
      window.sessionStorage.setItem(['search_hotel_name'], this.search_hotel_name);
      window.sessionStorage.setItem(['place_name'], this.place_name);
      if (this.place_name.length>0) {
        this.linkRoom();
      }
    },
    linkRoom() {
      location.href = './K2-1.html';
    }
  }
});