let button = document.querySelector("#button")

const list = document.createDocumentFragment();
const ul = document.getElementById("characters")

function getCharacters() {
    fetch("https://swapi.dev/api/people")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.results.map(function(character) {
            let li = document.createElement("li");
            let name = document.createElement("h2");

            name.innerHTML = `${character.name}`;

            li.appendChild(name);
            list.appendChild(li);
        });
        ul.appendChild(list);
    })
    .catch(err => console.log(err));
}






button.addEventListener("click", getCharacters);