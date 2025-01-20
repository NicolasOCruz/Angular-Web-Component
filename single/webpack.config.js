module.exports = {
    output: {
      filename: (pathData) => {
        if (pathData.chunk.name === 'main') {
          return 'main-single.js';
        }
        return '[name].js';
      },
    },
  };
  