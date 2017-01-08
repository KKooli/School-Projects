(function () {
    'use strict';

    angular
        .module('app')
        .controller('categories', Categories);

    function Categories($scope, CategorySvc) {
        $scope.categories = CategorySvc.getCategories();

        $scope.reorderCategories = function (fromIndex, toIndex) {
            $scope.categories = CategorySvc.reorderCategories(fromIndex, toIndex);
        };
    }
})();