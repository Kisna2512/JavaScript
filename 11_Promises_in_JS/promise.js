const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is completed!!");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Promise is consumed"));

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task1");
    resolve();
  }, 1000);
}).then((result) => {
  console.log("Async 2 completed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Krishna", email: "krishnakotgire2512@gmail.com" });
  }, 1000);
}).then((user) => {
  console.log(user);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "krishna", password: "1234" });
    } else {
      reject("Error:Something went wrong!!");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => console.log("The Promise is either resolved or rejected"));

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "root", password: "1234" });
    } else {
      reject("Error:Something went wrong!!");
    }
  }, 1000);
});

async function consumepromisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromisefive();

async function apifetch() {
  try {
    const response = await fetch("https://api.github.com/users/kisna2512");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: " + error);
  }
}

apifetch();

fetch("https://api.github.com/users/kisna2512")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  fetch("https://api.github.com/users/kisna2512")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const card1 = document.querySelector("#card1");
      card1.innerHTML = `
<div class="card">
  <img src="${data.avatar_url}" alt="User Image">
  <div class="card-content">
    <h2>${data.name}</h2>
    <p class="follower-count">Followers: ${data.followers}</p>
  </div>
</div>`;
    })
    .catch((err) => {
      const card1 = document.querySelector("#card1");
      card1.innerHTML = `${err}`;
    });
});
