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

      self.createUser = () => {
        self.users.push({ name: self.name, country: self.country });
        self.name = '';
        self.country = '';
      };

      self.selectUser=(user)=>{
        self.name = user.name;
        self.country = user.country;
      };
      // self.updateUser=(user)=>{
      //   console.log(user)
      //   self.name = user.name;
      //   self.country = user.country;
      //   console.log(self.users)
      //   self.users.splice(self.users.indexOf(user), 1, { name: "modified", country: "modified" });
      // };
    }
  });