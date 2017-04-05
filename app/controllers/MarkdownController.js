'use strict';

const Controller = require('donode').Controller;

class MarkdownController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    return response.send([
      {
        title: 'Prologue',
        content: '# Introduction \n\nHello world',
        submenu: [
          { title: 'Release Notes', content: '' },
          { title: 'Upgrade Guide', content: '' },
          { title: 'Contribution Guide', content: '' },
          { title: 'API Documentation', content: '' },
        ]
      },
      {
        title: 'Getting Started',
        content: '# Introduction \n\nHello world',
        submenu: [
          { title: 'Installation', content: '' },
          { title: 'Configuration', content: '' },
          { title: 'Directory Structure', content: '' },
          { title: 'Request Lifecycle', content: '' },
        ]
      },
    ]);
  }

}

module.exports = MarkdownController;
