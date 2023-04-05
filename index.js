const chalk = require("chalk");
const cowsay = require("cowsay");
const Memer = require("random-jokes-api");
let jokes = Memer.joke()
console.log(chalk.yellow(
    cowsay.say({
    text : jokes,
    e : "oOo",
    T : "VWV"
})))