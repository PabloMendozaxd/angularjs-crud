describe('userList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('angularjsCrud'));
  
    // Test the controller
    describe('UserListController', function() {
      var ctrl;
  
      beforeEach(inject(function($componentController) {
        ctrl = $componentController('userList');
      }));
  
    });
  
  });