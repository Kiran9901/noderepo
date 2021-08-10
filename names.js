const customname1 = "Charan";
const customname2 = "Kiran";
const customname3 = "Sai";

//console.log(module);
//When above stmt is run on node, it returns a JSON like object, containing the info of the module as follows:
/*
Module {
  id: '.',
  path: '/home/kiran/Desktop/node',
  exports: {},
  filename: '/home/kiran/Desktop/node/names.js',
  loaded: false,
  children: [],
  paths: [
    '/home/kiran/Desktop/node/node_modules',
    '/home/kiran/Desktop/node_modules',
    '/home/kiran/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
Now, focus on the exports key in the info, which is empty, as wew didn't export any kind of variables from the current module. The variables inside the module can be access controlled i.e, it is on our hands

To export so, use the ES6 syntax of exporting, shown as follows:
*/
console.log("Hello from names module");
module.exports = { customname1, customname2 };
//Note that all the exports are done in the form of JSON objects
//customname3 is not exported, so remains private to other modules in node
//Other way to export is doing
// module.exports.name1 = customname1;
// module.exports.name2 = customname2;
