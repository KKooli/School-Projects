(function () {
    'use strict';

    angular
        .module('app')
        .controller('history', History);

    function History($scope, $ionicListDelegate, $ionicActionSheet, ExpenseSvc) {
        
        $scope.expenses = ExpenseSvc.getExpensesWithCategory();

        $scope.confirmDelete = function (expenseId) {

            var hideSheet = $ionicActionSheet.show({
                titleText: 'Etes-vous sûr de vouloir supprimer cette dépense?',
                cancelText: 'Annuler',
                destructiveText: 'Supprimer',
                cancel: function () {
                    $ionicListDelegate.closeOptionButtons();
                },
                destructiveButtonClicked: function () {
                    $scope.expenses = ExpenseSvc.deleteExpense(expenseId);
                    hideSheet();
                }
            });
        };
    }
})();
