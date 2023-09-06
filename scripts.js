import {BOOKS_PER_PAGE, genres, books, authors } from "./data.js";
import * as Module from "./elements.js"
const matches = books

let  page = 1;



function createPreview({author, id, image, title}) {
    let element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id) 
    element.innerHTML = /* html */ `
    <img
     class='preview__image'
    src="${image}"
     />
     
     <div class="preview__info">
     <h3 class="preview__title">${title}</h3>
     <div class="preview__author">${authors[author]}</div>
     </div>
     `;

     return element

}

 const fragment1 = document.createDocumentFragment() 
 const extracted = books.slice(0, 36) 
 for (const { author, title, image, id } of extracted) {
    
   const preview = createPreview({author, id, image, title})
    
  
   fragment1.appendChild(preview) 
   
 }

Module.dataListItem.appendChild(fragment1)

let showMore = page * BOOKS_PER_PAGE

//Show more books button
Module.dataListBtn.addEventListener('click', () =>{
    const remaining = matches.slice(showMore, matches.length) 
    
    const fragment = document.createDocumentFragment()
    for(const {author, title, image, id} of remaining){
        const  preview = createPreview({author, id, image, title});
        fragment.appendChild(preview)
    }
    Module.dataListItem.appendChild(fragment) 
    showMore += remaining.length;
    Module.dataListBtn.disabled = !(matches.length - showMore > 0)
});

// Responsible for show more title

Module.dataListBtn.innerHTML  = /* html */ `
 <span>show More(
<span class='list__remaining'>${matches.length - showMore > 0 ? matches.length - showMore : 0}</span>)
`

//Handle preview click

Module.dataListItem.addEventListener('click', (event)=>{
    const pathArray = Array.from(event.path || event.composedPath());
    
    let active;
    for (const node of pathArray){ 
        
        if(active)break;
        const previewId = node.dataset?.preview;
        
       for (const singleBook of books) { 
           
            if(singleBook.id === previewId){
                active = singleBook;
                
                break
            }
        }
    }
 
    if(!active) {return}
      
        Module.listActive.open = true;
        Module.listImg.setAttribute('src', active.image);
        Module.listBlur.style.backgroundImage = `url('${active.image}')`
        Module.listTitle.textContent = active.title;
        Module.listSubtitle.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        Module.listDescription.textContent = active.description
    
 })


// List Close 
Module.listCloseBtn.addEventListener('click', () =>{
    Module.listActive.open = false
})

// Search modal show 

Module.searchHeaderBtn.addEventListener('click', () =>{
    Module.searchOverlay.open = true;
    //data-search-title.focus()
}) 

// SEARCH BUTTON

// Search specific book

Module.searchForm.addEventListener('submit', (event) =>{
    event.preventDefault();


    // hide book list
    Module.dataListItem.style.display = 'none';

     // clear message area
    Module.listMessage.innerHTML = '';
      
    //get form data
    
    const formData = new FormData(event.target);
    const title1 = formData.get('title');
    const genre1 = formData.get('genre');
    const author1 = formData.get('author'); 
    

    // Array to store filtered books
    const filteredBooks = []

    // ooping through  all books
   for(let i = 0; i < books.length; i++) {
    const book = books[i] 

    // if genre and author are not selected, filter by title only
    if (genre1 === 'any' && author1 ==='any') {
        if(book.title.toLowerCase().includes(title1.toLowerCase())) {
            filteredBooks.push(book) 
        }
    } 

      // if genre is not selected, filter by author and title

   if(genre1 ==='any'){
    if(book.title.toLowerCase().includes(title1.toLowerCase()) && book.author === author1){
        filteredBooks.push(book);
    }
   }

    // If title is not enterd, filter by author and genre

    if(title1 === '') {
        if (book.author === author1 && book.genres.includes(genre1)){
            filteredBooks.push(book);
        }
    }

    // If neither title nor author are selected, filter by genre only 
  if (title1 ==='' && author1 ==='any') {
    if(book.genres.includes(genre1)) {
        filteredBooks.push(book)
    }
  } 
     // Displaying message if no books matchs filters

     if(filteredBooks.length > 0) {
        Module.listMessage.textContent = '';
        Module.dataListBtn.disabled = true;
    
       }else{
        Module.listMessage.textContent = 'No results found. Your filters might be to narrow.';
        Module.dataListBtn.disabled = true;
       }


   }
  
       
       //display filtered books
       Module.listMessage.style.display = 'block'  
    

       //create  fragment to hold filtered books

    const fragment2 = document.createDocumentFragment();
    for (const {author, image, title, id, description, published} of filteredBooks) {
        const preview = document.createElement('button');

        preview.className = 'preview';
        preview.dataset.id = id;
        preview.dataset.title = title;
        preview.dataset.image = image;
        preview.dataset.subtitle = `${authors[author]} (${new Date(published).getFullYear()})`
        preview.dataset.description = description;
        preview.dataset.genre = genres;

        //create preview button with book information

        preview.innerHTML = /*html */
        `
        <div>
            <img
            class='preview__image'
         src="${image}"
            />
        </div>
        <div class="preview__info">
        <dt class="preview__title">${title}</dt>
        <div class="preview__author">${authors[author]}</div>
        </div>
        `;

        //append preview button to fragment
        fragment2.appendChild(preview);
    }
    // add filtered books to message area;

    const booklist2 = Module.listMessage;
    booklist2.appendChild(fragment2);
    Module.searchForm.reset();
    Module.searchOverlay.close();
   
})
// Drop down for genres
const allGenresOption = document.createElement('option');
allGenresOption.value ='any';
allGenresOption.innerText = 'All Genres';
Module.searchGenre.appendChild(allGenresOption);


for (const [id, names] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = names;
    Module.searchGenre.appendChild(element);
}

// Drop Down for Authors

const allAuthorsOption = document.createElement('option');
allAuthorsOption.value = 'any';
allAuthorsOption.innerText = 'All Authors';

Module.searchAuthor.appendChild(allAuthorsOption);
for (const [id, names] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = names;
    Module.searchAuthor.appendChild(element)
}
Module.settingForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    action.settings.submit();
})

//closes the preview overlay

Module.listCloseBtn.addEventListener('click', () =>{
    Module.listActive.open = false
});


// const day = {
//     dark: 'rgb(10, 10, 20)',
//     light: 'rgb(255, 255, 255)',
// }

// const night = {
//     dark: 'rgb(255, 255, 255)',
//     light: 'rgb(10, 10, 20)',
// }

