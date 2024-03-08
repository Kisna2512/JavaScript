const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const requestUrl = "https://api.github.com/users/Kisna2512";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data.avatar_url);
      const card1 = document.querySelector("#card1");
      card1.innerHTML = `
<div class="card">
  <img src="${data.avatar_url}" alt="User Image">
  <div class="card-content">
    <h2>${data.name}</h2>
    <p class="follower-count">Followers: ${data.followers}</p>
  </div>
</div>`;
    }
  };
  xhr.send();
});
