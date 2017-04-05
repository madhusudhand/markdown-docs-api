'use strict';

const Controller = require('donode').Controller;

class MarkdownController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    return response.send([
      { title: 'Introduction', content: '# Introduction \n\nHello world' },
      { title: 'Setup', content: '# Introduction \n\nHello world' }
    ]);
  }

}

module.exports = MarkdownController;
