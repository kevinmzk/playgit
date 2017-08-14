(function() {
'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.inject = ['$log'];
    function AppController($log) {
        var vm = this;
        vm.title = "hello world.";

        activate();

        ////////////////

        function activate() { }
    }
})();