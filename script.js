function getCharacters(done) {

        //search and fetch data from the api
    const results = fetch ('https://rickandmortyapi.com/api/character');
    //print the results
    results
    .then(response => response.json())
    .then(data => { done(data)});
}

getCharacters(data => {
    data.results.forEach(character => {
        //draw the result on the html /i can write html with this contextualfragment
        const article = document.createRange().createContextualFragment( /*html*/
            `<article>

            <div class="image-container">
                <img src="${character.image}" alt="character-image">
            </div>

            <h2>${character.name}</h2>
            <span>${character.status}</span>

        </article>
        `) 
        const main = document.querySelector("main"); //only main i've

        main.append(article); //main put all the characters in the article

    });
});