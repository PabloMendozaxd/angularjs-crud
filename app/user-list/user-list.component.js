'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('angularjsCrud').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController() {
      this.users = [
        {
          name: 'Joao',
          country: 'Brasil'
        }, {
          name: 'Jose',
          country: 'Mexico'
        }, {
          name: 'David',
          country: 'Canada'
        }
      ];
    }
  });