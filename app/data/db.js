module.exports = {
  projects: [
    { id: 1, name: 'Demo App' },
    { id: 2, name: 'Markdown Docs' }
  ],

  projectData: [
    {
      projectId: 1,
      markdown: [{
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
      }]
    },

    {
      projectId: 2,
      markdown: [{
        title: 'Introduction',
        content: '# Introduction \n\nHello world',
        submenu: [
          { title: 'Release Notes', content: '' },
        ]
      }]
    },
  ]
}
