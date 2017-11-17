angular.module('blocChat').controller('modalRoomCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.RoomName = "test";
  $ctrl.animationsEnabled = true;
  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-rooms' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/templates/modal-newRoom.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        RoomName: function() {
          
        }
      }
    });
    modalInstance.result.then(function (){
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
});

angular.module('blocChat').controller('ModalInstanceCtrl', function ($uibModalInstance) {
  var $ctrl = this;
  $ctrl.ok = function () {
    $uibModalInstance.close();
  };
  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});


/*
angular.module('blocChat').controller('modalRoomCtrl', function($uibModal) {

  var $ctrl = this;

  $ctrl.RoomName = "test";

  $ctrl.animationsEnabled = true;

  $ctrl.open = function() {
    var modalInstance = $uibModal.open({
      templateUrl: '/templates/modal-newRoom.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: 'sm'
    });

    modalInstance.result.then(fuction (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

});
angular.module('blocChat').controller('ModalInstanceCtrl', function($uibModalInstance){

  var $ctrl = this;

  $ctrl.ok = function () {
    alert("Button Clicked");
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dimiss('cancel');
  };

});

angular.module('blocChat').component('modalComponent', {
  templateUrl: '/templates/modal-newRoom.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.ok = function () {
      $ctrl.close();
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss();
    };
  }
});
*/
