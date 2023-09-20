const getJokeBtn = document.getElementById("getJokeBtn");
const jokeContainer = document.getElementById("joke");

getJokeBtn.addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any") 
    .then((response) => response.json())
    .then((data) => {
      let joke = "";
      if (data.type === "single") {
        joke = data.joke;
      } else if (data.type === "twopart") {
        joke = `${data.setup} ${data.delivery}`;
      }
      jokeContainer.innerHTML = joke;
    })
    .catch((error) => {
      jokeContainer.innerHTML =
        "Oops! An error occurred while fetching the joke.";
    });
}
