const newJoke = document.getElementById("joke");
const jokebtn = document.getElementById("jokeBtn");

jokebtn.addEventListener('click', generateJoke)

function generateJoke() {
    const url = "https://icanhazdadjoke.com";
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch(url, config)
        .then(response => response.json())
        .then(data => { 
            newJoke.innerText = data.joke;
    })
}
