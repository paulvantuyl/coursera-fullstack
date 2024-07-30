let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise one resolved after 3 seconds");
    }, 3000);
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise two resolved after 6 seconds");
    }, 6000);
});

console.log("Before calling promise");

// Nesting promiseTwo inside promiseOne because it happens sequentially due to time
promiseOne.then((successMessage) => {
    console.log("From callback: " + successMessage);
    promiseTwo.then((successMessage) => {
      console.log("From callback: " + successMessage);
    });
});

console.log("After calling promise");