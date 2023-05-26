// function setScores() {
//     localStorage.setItem("scores", [])
// }

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    setScores()
    window.location.href = "play.html";
  }
  