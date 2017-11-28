(function () {
  function BlocChatCookies($cookies, $uibModal) {
    /**
     * @desc variable for current user name retrieved from cookie.
     * @type {object}
     */
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log("Current User: " + currentUser);
    if (!currentUser || currentUser === '') {
      /**
       * @function modalInstance
       * @desc opens a modal window to create a username.
       */
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal-user.html',
        controller: 'ModalUserCtrl',
        controllerAs: '$Ctrl',
        keyboard: false,
        backdrop: 'static',
        size: "sm"
      });
      /**
       * @function modalInstance.result
       * @desc processes the result when the modal window is closed
       * @param name
       */
      modalInstance.result.then(function (name){
        $cookies.put('blocChatCurrentUser', name);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

  }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
