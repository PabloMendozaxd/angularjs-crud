'use strict';

angular.
  module('angularjsCrud').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController($http) {
      var self = this;
      
      $http.get('users/users.json').then(function(response) {
        self.users = response.data;
      });
    }
  });