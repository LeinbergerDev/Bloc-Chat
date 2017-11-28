
(function() {
  function ModalUserCtrl ($uibModalInstance) {
    /**
    * @desc scope object for the controller
    * @type {object}
    */
    var $ctrl = this;

    /**
     * @desc variable used to create a username in the cookie
     * @type {object}
     */
    $ctrl.username = "";

    /**
    * @function setUserName
    * @desc function called with the ok button is clicked.  It tests for a room name and passes it along to the close
    * function if it exists else it alerts the user to either enter a name or click the cancel button.
    */
    $ctrl.setUserName = function () {
      if ($ctrl.username != '') {
        $uibModalInstance.close($ctrl.username);
      }
    };
  }
  angular
    .module('blocChat')
    .controller('ModalUserCtrl', ModalUserCtrl)
})();
