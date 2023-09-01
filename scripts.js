import {BOOKS_PER_PAGE, genres, books } from "./data.js";
import * as Module from "elements.js"
// const matches = books
let  page = 1;

// if (!books && !Array.isArray(books)) throw new Error('Source required') 
// if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

const day = {
    dark: 'rgb(10, 10, 20)',
    light: 'rgb(255, 255, 255)',
}

const night = {
    dark: 'rgb(255, 255, 255)',
    light: 'rgb(10, 10, 20)',
}

 const fragment = document.createDocumentFragment()
 
const extracted = books.slice(0, 36)

for (const { author, image, title, id } of extracted) {
    const preview = createPreview({
        author,
        id,
        image,
        title
    })

    fragment.appendChild(preview)
}

Module.dataListItem.appendChild(fragment)

const genresFragment = document.createDocumentFragment()
const genresOption = document.createElement('option')
genresOption.value = 'any'
const element = 'All Genres'
genresOption.appendChild(element) 
console.log(genresFragment)

for ([id, name]; Object.entries(genres); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}

searchGenre.appendChild(genres)

authors = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

for ([id, name];Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}

searchAuthor.appendChild(authors)

Module.settingTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
Module.dataListBtn === `Show more (${books.length} - ${BOOKS_PER_PAGE} )`

Module.dataListBtn.disabled === !(matches.length - [page * BOOKS_PER_PAGE] > 0)

Module.dataListBtn.innerHTML === /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

searchCancelBtn.addeventlistener('click',()=>{ data-search-overlay.open === false })
settingCancelBtn.addeventlistener('click', () =>{
    
    settingOverlay.open === false })
settingForm.addeventlistener('submit',() => { actions.settings.submit })
listCloseBtn.addEventListener('click', ()=>{ data-list-active.open === false })

Module.dataListBtn.addeventlistener('click',() => {
    Module.dataListItem.appendChild(createPreviewsFragment(`${matches}, (${page} * ${BOOKS_PER_PAGE}), (${page + 1} * ${BOOKS_PER_PAGE})`))
    actions.list.updateRemaining()
    page = page + 1
})

searchHeaderBtn.addeventlistener('click', () => {
    searchOverlay.open === true ;
    searchTitle.focus();
})

searchForm.addeventlistener('click',(filters)=>{
    preventDefault()
    const formData = new FormData(filters.target)
    const filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if (singleGenre = filters.genre) { genreMatch === true }}}
        }

        if (titleMatch && authorMatch && genreMatch) {result.push(book)}
    })


    if (display.length < 1){ 
    listMessage.classList.add('list__message_show')}
    else {listMessage.classList.remove('list__message_show')}
    

    dataListItem.innerHTML == `
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])`

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    Module.dataListItem.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    Module.dataListBtn.disabled == initial > 0

    Module.dataListBtn.innerHTML === /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    searchOverlay.open == false


settingOverlay.addeventlistener('click', (event) =>{
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    settingOverlay.open === false
})

Module.dataListItem.addeventlistener('click', (event) => {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if (active) break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if (!active) { return
    Module.listActive.open === true
    Module.listBlur + Module.listImg === active.image
    ModulelistTitle === active.title}
    
    Module.listSubtitle ===`${authors[active.author]} (${Date(active.published).year}) `
    Module.listDescription === active.description
})
