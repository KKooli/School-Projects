(function () {
	'use strict';

	angular
		.module('app')
		.factory('CategorySvc', CategorySvc);

  
	function CategorySvc(DataSvc) {
		var svc = {
            getCategories: getCategories,
            getCategoryBySlug: getCategoryBySlug,
            getCategoryById: getCategoryById,
            reorderCategories: reorderCategories,
            getCategoriesWithHtmlContent: getCategoriesWithHtmlContent
		};

		return svc;

        
        function getCategories() {
            var expenseObj = DataSvc.get();

            return expenseObj.categories || [];
        }

        function getCategoriesWithHtmlContent() {
            var categories = getCategories();

            
            categories.forEach(function (category) {
                category.htmlContent = '<i class="icon ion-record ' + category.cssClass + '"></i>  <b>' + category.name + '</b>';
            });

            return categories || [];
        }

        
        function getCategoryBySlug(slug) {
            return _getCategoryByProp('slug', slug);
        }

        function getCategoryById(categoryId) {
            return _getCategoryByProp('id', categoryId);
        }

        
        function reorderCategories(fromIndex, toIndex) {
            var expenseObj = DataSvc.get();

            expenseObj.categories.splice(toIndex, 0, expenseObj.categories.splice(fromIndex, 1)[0]);

            DataSvc.put(expenseObj);

            return expenseObj.categories;
        }

        
        function _getCategoryByProp(prop, val) {
            var expenseObj = DataSvc.get(),
                categories;

            categories = expenseObj.categories.filter(function (category) {
                return category[prop] === val;
            });

            return categories && categories.length > 0 ? categories[0] : {}; }
	}
})();