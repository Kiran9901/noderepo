//All the previous code that was used to be here is shifted to intro.js
// If wanted to execute the content moved to intro module, just execute the following command that is commented
//const intro = require("./intro.js");
//All the OS info has been migrated to user info. To know about os, execute the following command
//const aboutOS = require("./osinfo.js");
//All the path demo has been migrated to path.js. To know abpout path demo, execute the following line of code
// const pathdemo = require("./path"); //You can metion path or path.js, both are correct
// console.log(require("fs")); //Just to know about teh contents present in the fs module, which stands for filesync module
// const fs_sync = require("./fs-sync"); //readFileSync returns both the files content that is printed to the console
// const fs_async = require("./fs-async"); //here, readFile doesn't return the result, so there's no way to acces the file contents onto the cglobal scope directly, so undefined is printed on the console

//const server = require("./server");//Code to run a server instance present in the server.js file

//npm - Also abbreviated as node package manager is one of the biggest code repo that contains reusable javascript code, in the form of npm modules. If one wants, they can share their code to the npm community or one can even retrieve code from the repo, locally or globally

//npm --version ->To check the npm version being used in the machine
//npm i <package_name> -> Installs the package mentioned in the package_name argument local to the current project
//sudo npm install -g <package_name> -> Installs the package mentioned in the package_name globally. Don't forget to mention sudo, as root permissions are needed to be provided for the npm to install package

//Every file that uses npm contains a manifest file called package.json(stores important info about package/ project)

//WE have three approaches in order to maintain the manifest file:
//1.manually create package.json file
//2.run npm init, which asks you questions to be answered. If you wnat to skip it, use the following approach:
//3.npm init -y(Everything is setup as default)

//2nd approach is followed here:
//In this approach, it asks for the name of the package(in case you wanna publish it). Make sure that the name to be published is unique on the internet, so give a unique name.
//It also asks about the entry point of the package, which can be set to app.js, even can be changed later on. It also asks abou the author name, license, test and things like that; no need to worry about them at this point of time, can be dealt later on when you really wanna publish the package. Also asks about keywords. Of course, it takes a lot of time!

//If we install any dependencies for the current project, it gets reflected in the dependencies attribute of the package.json file

//It is very important to have packag.json file in npm project in general.
//When we install any npm package, we also notice node_modules folder in the project directory.
//When bigger packages use other dependencies in turn, those dependencies of dependencies are also installed in the node_modules folder

//For demonstration, a package named lodash is being installed inside our project locally, that contains many methods to manipulate different kinds of data in JS.
//To install lodash, just go to npmjs.org, and search for lodash. Installation instructions can be found there. To access their docs, navigate to their website. Not only this package, this is the general method to navigate to any kind of website.
//npm i lodash
//_ is the naming convention used for lodash, so we name the reference as _ to access lodash instance.
const _ = require("lodash");
const items = [1, [2], [[3], 4], [[5], 6]];
const flattenedItems = _.flattenDeep(items);
console.log(flattenedItems);
