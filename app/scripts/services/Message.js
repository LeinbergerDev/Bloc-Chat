(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");

    var Messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId){
      var roomMessages = {};

      var messagesRef = ref.orderByChild('roomId').equalTo(roomId);

      roomMessages = $firebaseArray(messagesRef);

      return roomMessages;
    };

    Message.sendMessage = function(newMessage) {
      Messages.$add(newMessage);
    }

    return Message;
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
