module.exports = {
  'api-gateway': {
    input: './openapi/openapi.yml',
    output: {
      mode: 'split',
      target: './src/shared/api/cats/Api.ts',
      hooks: {
        afterAllFilesWrite: 'prettier --write',
      },
      override: {
        mutator: {
          path: './src/shared/api/cats/index.ts',
          name: 'customInstance',
        },
      },
    },
  },
}
