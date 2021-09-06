'use strict';

angular.
  module('angularjsCrud').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController($http) {
      var self = this;

      $http.get('users/users.json').then(function (response) {
        self.users = response.data;
      });

      self.createUser = (user) => {
        console.log(user)
        self.users.push({ name: self.name, country: self.country });
        self.name = '';
        self.country = '';
      };

      self.selectUser=(user)=>{
        console.log(user)
        self.name = user.name;
        self.country = user.country;
      };

      self.updateUser=(user)=>{
         self.users.splice(self.users.indexOf(user), 1, { name: self.name, country: self.country });
      };

      self.deleteUser=user=>{
        console.log(self.users.indexOf(user))
        self.users.splice(self.users.indexOf(user),1)
      }
    }
  });