'use strict';

const Controller = require('donode').Controller;
const db = require('../data/db');

class MarkdownController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    const d = db.projectData.filter(p => p.projectId == request.routeParams.id);
    return response.send(d[0]);
  }

  post(request, response) {
    const projectId = request.routeParams.id;
    const markdown = request.body.markdown.data;

    for (let item of db.projectData) {
      if (item.projectId == projectId) {
        item.markdown = markdown;
        break;
      }
    }

    return response.send(200);
  }

  getProjects(request, response) {
    return response.send(db.projects);
  }

}

module.exports = MarkdownController;
