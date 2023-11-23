const booksParent = document.querySelector('.flexed-list');

fetch('../../jsons/first-phase-books.json')
.then((res) => res.json())
.then((data) => {

    for (let i = 0; i < data.length; i++) {
        booksParent.innerHTML += `
        <li><a href="${data[i].link}">${data[i].book}</a></li>
        `
    }

})