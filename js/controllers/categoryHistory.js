(function () {
    'use strict';

    angular
        .module('app')
        .controller('categoryHistory', CategoryHistory);

    function CategoryHistory($scope, $stateParams, $ionicListDelegate, $ionicActionSheet, CategorySvc, ExpenseSvc) {
        var category = CategorySvc.getCategoryBySlug($stateParams.category);

        $scope.title = category.name;

        $scope.expenses = ExpenseSvc.getExpensesByCategorySlug(category.slug);

        $scope.confirmDelete = function (expense) {
            var hideSheet = $ionicActionSheet.show({
                titleText: 'Etes-vous sûr de vouloir supprimer cette dépense?',
                cancelText: 'Annuler',
                destructiveText: 'Supprimer',
                cancel: function () {
                    $ionicListDelegate.closeOptionButtons();
                },
                destructiveButtonClicked: function () {
                    $scope.expenses = ExpenseSvc.deleteExpense(expense.id, category.id);

                    hideSheet();
                }
            });
        };
    }
})();
