/**
* @function Room
* @desc Retreives the array of Rooms from the firebase datastore.
* @param {object} $firebaseArray
* @return {object} Room
*/
(function() {
  function Room($firebaseArray) {
    /**
    * @desc Room object that holdes a list of chat rooms available in the application
    * @type {object} Room
    */
    var Room = {};

    /**
    * @desc variable holding a reference to the firebase database child rooms.
    * @type {object} ref
    */
    var ref = firebase.database().ref().child("rooms");

    /**
    * @desc variable to hold the firebaseArray of room objects.
    * @type {array} rooms
    */
    var rooms = $firebaseArray(ref);

    /**
    * @desc vaiable to hold the firebaseArray of room objects.
    * @type {array} Room.all
    */
    Room.all = rooms;

    /**
    * @function add
    * @desc adds a room to the Rooms list and updates the firebaseArray.
    * @param {object} room
    */
    Room.add = function (room) {
      rooms.$add(room);
    };

    /**
    * @desc returning the room object
    * @type {object} Room
    */
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
