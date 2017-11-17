/**
* @function HomeCtrl
* @desc Controller used to display the home view state.
* @param {object} room
*/
(function() {
  function HomeCtrl(Room) {
    /**
    * @desc property to hold the title of the application
    * @type {object} title
    */
    this.title = "Bloc Chat";

    /**
    * @desc property to hold a rooms object.  rooms is a collection of chatrooms retreived from the firebase database.
    * @type {object} rooms
    */
    this.rooms = {};

    /**
    * @desc sets the rooms property to an array of all the room objects withing the Room object.
    * @type {array} rooms
    */
    this.rooms = Room.all;

    /**
    * @desc property to store the Room parameter passed to the function.  This varriable is passed to the modalRoomCtrl function
    * to add a new room to the list.
    * @type {object} Room
    */
    this.Room = Room;

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', [ 'Room', HomeCtrl]);
})();
