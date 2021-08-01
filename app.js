// In node, we have to kinds of execution environments i.e, REPL(REad, evaluate, print, loop similar to python interpretor shell, and the second one e have is Node CLI, which is the application development execution environment)
import sayHello from "intro.js";
const experience = 2;
if (experience >= 2)
  console.log(`Welcome to the node tutorial, as you are experienced enough`);
else
  console.log(
    `You're not experienced enough, first go and learn coding fundamentals`
  );
//To execute the app.js, go to terminal and type the following command:
// node app.js(entry level file in node, like the index.html in web pages)

//Modules in node
/* It's difficult to bulid large complex applications and to build them in a single file, so e break them into modules or different JS Files, to improve code reusability*/
sayHello();
