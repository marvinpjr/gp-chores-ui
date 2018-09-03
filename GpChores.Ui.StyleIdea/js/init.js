(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

Vue.component('chorel',{
  props: ['choredata'],
  template: '<li>Chore profile:{{ choredata.desc }}.</li>'
})

var vm = new Vue({
  el: '#app',
  data: {
    vue_loaded: "Vue is loaded",
    chores: [
      { id: 0, desc: 'Wash the dishes' },
      { id: 1, desc: 'Make the bed' },
      { id: 3, desc: 'Fold the laundry' }
    ]
  }
});

