(function() {
  function HomeCtrl(Room) {
    this.title = "Bloc Chat";
    this.rooms = [];
    this.rooms = Room.all;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();