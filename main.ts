const button = document.querySelector('button') as HTMLButtonElement | null;
const jokeContainer = document.querySelector('.card-joke') as HTMLElement | null;

const options = {
    headers: {
        'Accept': 'application/json'
    }
}

function newJoke() {
    fetch("https://icanhazdadjoke.com/", options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (jokeContainer) {
                jokeContainer.innerText = data.joke;
            }
            if (button) {
                button.addEventListener('click', newJoke);
            }
        })
        .catch((error) => {
            console.error('Error: sorry no more jokes', error);
        });
}

newJoke();

