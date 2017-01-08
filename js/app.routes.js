(function() {
    'use strict';
	angular
		.module('app')
		.config(function ($stateProvider, $urlRouterProvider) {
            //** sidemenu
            $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/sidemenu.tpl.htm',
                controller: 'sidemenu'
            });

            //** Overview
            $stateProvider.state('app.overview', {
                url: '/overview',
                views: {
                    'main': {
                        templateUrl: 'templates/overview.tpl.htm',
                        controller: 'overview'
                    }
                }
            });

            //** Creation du l'Expense
            $stateProvider.state('app.create', {
                url: '/create',
                views: {
                    'main': {
                        templateUrl: 'templates/createExpense.tpl.htm',
                        controller: 'createExpense'
                    }
                }
            });


            //** Edition du Budget
            $stateProvider.state('app.edit-budget', {
                url: '/edit-budget',
                views: {
                    'main': {
                        templateUrl: 'templates/editBudget.tpl.htm',
                        controller: 'editBudget'
                    }
                }
            });

            //** Categories
            $stateProvider.state('app.categories', {
                url: '/categories',
                views: {
                    'main': {
                        templateUrl: 'templates/categories.tpl.htm',
                        controller: 'categories'
                    }
                }
            });

            //** Historique
            $stateProvider.state('app.history', {
                url: '/history',
                views: {
                    'main': {
                        templateUrl: 'templates/history.tpl.htm',
                        controller: 'history'
                    }
                }
            });

            //** Historique par catégorie
            $stateProvider.state('app.category-history', {
                url: '/history/:category',
                views: {
                    'main': {
                        templateUrl: 'templates/categoryHistory.tpl.htm',
                        controller: 'categoryHistory'
                    }
                }
            });

            //** Grille
            $stateProvider.state('app.details-grid', {
                url: '/details-grid',
                views: {
                    'main': {
                        templateUrl: 'templates/detailsGrid.tpl.htm',
                        controller: 'detailsGrid'
                    }
                }
            });

			//** About
            $stateProvider.state('app.about', {
                url: '/about',
                views: {
                    'main': {
                        templateUrl: 'templates/about.tpl.htm'
                        // no controller needed in this case
                    }
                }
            });

            //** Default
            $urlRouterProvider.otherwise('/app/overview');
        });
})();