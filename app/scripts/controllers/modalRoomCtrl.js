/**
* @function modalRoomCtrl
* @desc Controller used to open a modal window to allow a user to create a new chat room.
* @param {object} $uibModal
* @param {object} $log`
* @param {object} $document
*/
angular.module('blocChat').controller('modalRoomCtrl', function ($uibModal, $log, $document) {
  /**
  * @desc scope object for the controller
  * @type {object}
  */
  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  /**
  * @desc Room object to house collection of Rooms from firebaseArray
  * @type {object}
  */
  $ctrl.room = {};

  /**
  * @function open
  * @desc Sets the properties for a modal dialog then displays it on the screen.
  * @param {object} room
  */
  $ctrl.open = function (room) {
    $ctrl.room = room;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/templates/modal-newRoom.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$instanceCtrl',
      size: 'sm'
    });
    modalInstance.result.then(function (name){
      var room = {$value: name};
      $ctrl.room.add(room);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
});

/**
* @function ModalInstanceCtrl
* @desc Controller used for objects within the open modal window.
* @param {object} $uibModalInstance
*/
angular.module('blocChat').controller('ModalInstanceCtrl', function ($uibModalInstance) {
  /**
  * @desc scope object for the controller
  * @type {object}
  */
  var $ctrl = this;

  /**
  * @desc variable to store the name for a new chat room.
  * @type {object}
  */
  $ctrl.roomName = "";

  /**
  * @function ok
  * @desc function called with the ok button is clicked.  It tests for a room name and passes it along to the close
  * function if it exists else it alerts the user to either enter a name or click the cancel button.
  */
  $ctrl.ok = function () {
    if ($ctrl.roomName !== "") {
      $uibModalInstance.close($ctrl.roomName);
    } else {
      alert("You must enter a room name, or click cancel if you do not wish to create a room.");
    }
  };

  /**
  * @function cancel
  * @desc function called when the cancel button is clicked.  It dimesses the modal window witout creating a new room.
  */
  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
