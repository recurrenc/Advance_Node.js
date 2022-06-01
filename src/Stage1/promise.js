/**
 * In this chapter i have learnt in advance way to create promise and use
 * in .then chain in asynchronous way.
 * @param {Int} seconds time in seconds you want to delay your function execution.
 * @returns  Promise<any>
 */
const delay = (seconds) =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      rejects(new Error(`${seconds} is too long!`));
    }

    setTimeout(() => {
      resolves("the long delay has ended");
    }, seconds);
  });

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error) => console.log(`error: ${error.message}`));

console.log("end first tick");
