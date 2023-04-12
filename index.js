class CountFilesByExtensionsPlugin {
    apply(compiler) {
      compiler.hooks.done.tap('CountFilesByExtensionsPlugin', (stats) => {
        const extensionMap = {};
  
        for (const module of stats.compilation.modules) {
          if (module.resource) {
            const extension = module.resource.split('.').pop();
            extensionMap[extension] = (extensionMap[extension] || 0) + 1;
          }
        }
  
        console.log('Собрано файлов по расширениям:');
        for (const [extension, count] of Object.entries(extensionMap)) {
          console.log(`${count} ${extension}`);
        }
      });
    }
  }
  
  module.exports = CountFilesByExtensionsPlugin;