(function() {
  function HomeCtrl(Room) {
    this.title = "Bloc Chat";
    this.rooms = [];
    this.rooms = Room.all;

    this.buttonClick = "button is clicked";
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', [ 'Room', HomeCtrl]);
})();
