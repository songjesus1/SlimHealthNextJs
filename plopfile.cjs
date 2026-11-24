module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create React component with Storybook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },

      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component.stories.tsx.hbs",
      },

      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/Style.css.hbs",
      },

      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        template: `export * from './{{pascalCase name}}';`,
      },
    ],
  });
};
