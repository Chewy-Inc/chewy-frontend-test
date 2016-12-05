/* globals window, $*/
(function(window, $) {
  'use strict';

  var API_VERSION = '5.4';
  var PASS_KEY = 'kuy3zj9pr3n7i0wxajrzj04xo';
  var LIMIT = 10;

  var ApiClient = {
    getProductReviews: function(id) {
      var deferred = new $.Deferred();

      window.setTimeout(function() {
        $.get('http://stg.api.bazaarvoice.com/data/reviews.json', {
          apiversion: API_VERSION,
          passkey: PASS_KEY,
          Filter: 'ProductId:' + id,
          Limit: LIMIT
        }).then(deferred.resolve, deferred.reject);
      }, 2000);
      return deferred.promise();
    }
  };

  window.chewy = window.chewy || {};
  window.chewy.ApiClient = ApiClient;
})(window, $);
