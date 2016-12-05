/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* globals $, Handlebars */
/* eslint-env browser */
(function($, Handlebars) {
  'use strict';

  var apiClient = window.chewy.ApiClient;
  var productId = 1000001;
  var productReviews = [];
  var $reviewsContainer = $('.js-reviews-list');
  var $reviewsSort = $('.js-reviews-sort');

  $(function() {
    apiClient.getProductReviews(productId).then(function(data) {
      var markup = $('#review-list-tpl').html();
      var reviewTpl = Handlebars.compile(markup);

      productReviews = data.Results;
      $reviewsContainer.html(reviewTpl({reviews: productReviews}));
    });

    $reviewsSort.on('change', function() {
      window.console.log('your code here');
    });
  });
})($, Handlebars);
