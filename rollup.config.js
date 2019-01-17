export default {
    input: 'index.js',
    experimentalCodeSplitting: true,
    output: {
      dir: './dist',
      format: 'cjs',
    },
    plugins: [
        {
            name: 'baar-to-bar-plugin',
            transform(code, id) {
                return {
                    code: code.replace("'baar'", `import('${__dirname}/bar').then(mod => mod.bar())`),
                }
            }
        }
    ],
  };