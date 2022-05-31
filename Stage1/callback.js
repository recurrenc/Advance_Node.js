/**
 * In this chapter i have learnt in advance way
 * about how callbacks work.
 */

/**
 * @param {int} seconds - time in seconds you want to delay execution.
 * @param {function} callback - function you want to execute after delay.
 */
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("starting delays");
delay(2, () => {
  console.log("two seconds");
  delay(1, () => {
    console.log("three seconds");
    delay(1, () => {
      console.log("four seconds");
    });
  });
});
