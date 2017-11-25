(function () {
  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log("Current User: " + currentUser);
    if (!currentUser || currentUser === '') {

      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal-user.html',
        controller: 'ModalUserCtrl',
        controllerAs: '$Ctrl',
        keyboard: false,
        backdrop: 'static',
        size: "sm"
      });

      modalInstance.result.then(function (name){
        console.log(name);
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
