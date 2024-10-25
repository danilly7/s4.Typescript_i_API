const button = document.querySelector('#nextJokeBtn') as HTMLButtonElement | null;
const jokeContainer = document.querySelector('.card-joke') as HTMLElement | null;

const options = {
    headers: {
        'Accept': 'application/json'
    }
}

if (button) {
    button.addEventListener('click', newJoke);
}

const reportAcudits: {
    joke: string;
    score: number;
    date: string;
}[] = [];

function newJoke() {
    fetch("https://icanhazdadjoke.com/", options)
        .then((res) => res.json())
        .then((data) => {
            console.log("data:", data);
            if (jokeContainer) {
                jokeContainer.innerText = data.joke;

                const selectedEmoji = document.querySelector('input[name="emoji"]:checked') as HTMLInputElement;
                const score = selectedEmoji ? parseInt(selectedEmoji.value) : 0;
               
                const newReport = {
                    joke: data.joke,
                    score: score,
                    date: new Date().toISOString()
                };

                reportAcudits.push(newReport);
                console.log("Report acudit:", reportAcudits);
            }
        })
        .catch((error) => {
            console.error('Error: sorry no more jokes', error);
        });
}


