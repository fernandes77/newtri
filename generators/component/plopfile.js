module.exports = function (plop) {
  plop.setGenerator('component with props', {
    description: 'application component logic',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{name}}/{{name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{name}}/use{{name}}.ts',
        templateFile: 'templates/useComponent.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{name}}/{{name}}.types.ts',
        templateFile: 'templates/Component.types.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{name}}/{{name}}.test.tsx',
        templateFile: 'templates/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
