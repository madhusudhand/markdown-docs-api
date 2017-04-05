'use strict';

/*  ------   ROUTES   -----
**
**  One place for all routes.
**
*/

module.exports = [
  { path: '/', method: 'GET', handler: 'HomeController@get' },

  {
    path: '/api',
    children: [{
      path: '/markdown/project/{id}',
      method: 'GET',
      handler: 'MarkdownController@get',
      headers: ['allow-cors', 'json-content']
    }]
  },

  // add more
];
