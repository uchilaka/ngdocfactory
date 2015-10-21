var App = angular.module('docfactoryExample', [
    /** Include the directive module **/
    'ngDocfactory',
]).controller('ExampleCtrl', [
    '$scope',
    function ($scope) {
        
        // This is the data that is displayed as your PDF417
        $scope.pdf417code = { 
            codeType: 'PDF417', 
            size: 5, 
            content: 'https://larcity.com/?codetype=PDF417',
            rgb: '0,0,0'
        };
        
        $scope.fancyqrcode = {
            codeType: 'FANCYQR', 
            size: 5, 
            content: 'https://larcity.com/?codetype=FANCYQR',
            rgb: '255,20,147'
        };
        
        console.log("Running [module.controller.ExampleCtrl]");
    }
]);
