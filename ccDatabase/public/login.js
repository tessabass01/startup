function setScores() {
    localStorage.setItem("scores", [])
}

async function login() {
    const nameEl = document.querySelector("#name");
    const response = await fetch('/api/username', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username: nameEl.value}),
    });
  
    const userName = nameEl.value;
    localStorage.setItem("userName", userName);
    
    setScores()
    window.location.href = "play.html";
  }
  


