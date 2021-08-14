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
// const _ = require("lodash");
// const items = [1, [2], [[3], 4], [[5], 6]];
// const flattenedItems = _.flattenDeep(items);
// console.log(flattenedItems);

//.gitignore is generally used to ignore the files that are needed to be pushed into git repo, which are too large. The user can install the dependencies accordingly by simply running npm install, by checking the dependecies attribute present in the package.json folder. gitignore is very helpful to save space. Uderstand the importance of the package.json file in this case

//Nodemon -> a tool used to automatically restart the node.js server whenever changes in the directory are detected. Very helpful package. Command to install nodemon is stated below:
//npm i nodemon
//To install nodemon as a development dependecy(as not required for production in general), use the following command:
//npm i nodemon --save-dev or npm i nodemon -D

//In scripts attribute of package.json, we can give commands in form of keys, when executed in the npm key format, corresponding value of the key gets executed.
//Now, package-lock.json is locked i.e, node dependencies that can't be edited, read only json file.
//One can setup their own commands in scripts section of the package.json
// In this current project, nodemon is being used(Purpose of using nodemon is mentioned above), same is reflected in the scripts attribute of package.json, please consider this and remember in your mind.

//To run dev script in package.json, use npm run dev. Very important

//If not wanted to type npm run dev, replace the coommand with the start's value inn the scripts section.

//const server = require("./server"); To start an instance of a server
// console.log(server); Prints nothing onto the console, just an empty json object, as nothing is printed out onto the console in the server module that is user defined.

// const server = require("./server");

//Why it sometimes is required to have some node modules globally?
//It is because sometimes you need to work on many projects sometimes, which requires that many copies of node dependencies in each of your projects. To resolve this issue, the dependencies which are being looked for can be indtalled globally and all the projects look out for that single dependancy directly without installing numerous copies of the same dependency on each and every project that we're looking for.

//So, to install package globally, type the following command:
// sudo npm i -g nodemon(On linux machines or Macintosh machines)
//Generally, it is not recommended to install packages globally, as it may lead to lot of bugs which can't be traced easily, so it is generally recommended to install the depedencies locally or use the npx.

//What is npx? npx is a package that is used to run node modules that are present locaaly somewhere but gives the feel as if they're global, so that even loacl node modules can be accessed globally for executing other packages.

//to do this, mention the path of the node module tryring to be used. For example,
//node ./node/node_modules/.bin/nodemon
//npx nodemon
//above two lines makes the job done

//Why package-lock.json is present in projects having node dependencies?

//What is an event loop?

//Despite the fact that JS is single threaded, an event loop is what Node.js allows to perform non-blocking I/O operations, thus offloading operations to the system kernel whenver possible.

//const event_loop = require("./event-loop"); //Here, observe how the execution is done on the output side, delay in printing the output, similar to sleep in c.

//const eventloop_async = require("./eventloop-async");

const blocking_code = require("./blockingcode");
