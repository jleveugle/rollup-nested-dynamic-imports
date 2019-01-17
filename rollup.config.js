export default {
    input: 'index.js',
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