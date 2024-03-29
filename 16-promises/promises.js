// Nested callbacks
setTimeout(() => {
  console.log("First timeout");
  setTimeout(() => {
    console.log("Second timeout");
    setTimeout(() => {
      console.log("Third timeout");
    }, 500);
  }, 500);
}, 1000);

// Promise
const myPromise = new Promise((resolve, reject) => {
  if (/* Operation completed */ true) {
    resolve();
  } else {
    // Operation faield
    reject();
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log("Runs on both cases"));

// Previous example using promises
const wait = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

wait(1000)
  .then(() => {
    console.log("First timeout");
    return wait(500);
  })
  .then(() => {
    console.log("Second timeout");
    return wait(500);
  })
  .then(() => {
    console.log("Third timeout");
  });

// Promise resolve

wait(1000)
  .then(() => {
    console.log("First timeout");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Second timeout");
    return Promise.resolve("Hello world");
  })
  .then((value) => {
    console.log(value);
  });

// Promise reject
wait(1000)
  .then(() => {
    console.log("First timeout");
    return Promise.reject("Something went wrong");
  })
  .then(() => {
    console.log("Second timeout");
    return Promise.resolve("Hello world");
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// async/await
async function main() {
  await wait(1000);
  console.log("Hello after 1 second");
  await wait(1000);
  console.log("Hello after 2 second");
}
main();

// catch errors
const waitWithError = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, delay, "Error");
  });
};
async function error() {
  try {
    await waitWithError(1000);
    console.log("Hello after 1 second");
    await waitWithError(1000);
    console.log("Hello after 2 second");
  } catch (error) {
    console.error(error);
  }
}
error();

// fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// References
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// - https://exploringjs.com/impatient-js/ch_promises.html#the-basics-of-using-promises
