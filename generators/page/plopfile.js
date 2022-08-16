module.exports = function (plop) {
  plop.setGenerator('page with props', {
    description: 'application page logic',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../../src/templates/{{name}}/{{name}}.tsx',
        templateFile: 'templates/Page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/templates/{{name}}/use{{name}}.ts',
        templateFile: 'templates/usePage.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/templates/{{name}}/{{name}}.types.ts',
        templateFile: 'templates/Page.types.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/templates/{{name}}/{{name}}.test.tsx',
        templateFile: 'templates/Page.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/templates/{{name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
