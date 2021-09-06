'use strict';

angular.
  module('angularjsCrud').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController($http) {
      $http.get('users/users.json').then(response => {
        this.users = response.data;
      });
      this.createUser = user => {
        if (this.name && this.country) {
          this.users.push({ name: this.name, country: this.country });
          this.name = '';
          this.country = '';
        }
      };
      this.updateUser = user => {
        if (this.name && this.country) {
          this.users.splice(this.users.indexOf(user), 1, { name: this.name, country: this.country });
          this.name = '';
          this.country = '';
        } else {
          alert('You must fill the input fields with the new information');
        }
      };
      this.deleteUser = user => {
        this.users.splice(this.users.indexOf(user), 1)
      }
    }
  });