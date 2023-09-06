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
 
    if(!active)  return
      
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
    
    const formData = new formData(event.target);
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

   }
  

})

// if (!books && !Array.isArray(books)) throw new Error('Source required') 
// // if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')


// //objects with values that changes the document theme

// const day = {
//     dark: 'rgb(10, 10, 20)',
//     light: 'rgb(255, 255, 255)',
// }

// const night = {
//     dark: 'rgb(255, 255, 255)',
//     light: 'rgb(10, 10, 20)',
// }


// //below is the  first fragment

 




//  Module.dataListItem.appendChild(fragment1)

// const genresFragment = document.createDocumentFragment()
// const genresOption = document.createElement('option')
// genresOption.value = 'any'
// genresOption.innerText = 'All Genres'
// //genresOption.appendChild(element) 
// genresFragment.appendChild(genresOption)
 


// for (const [id, name] of Object.entries(genres)) {
//     const option = document.createElement('option')
//     option.value = id
//     option.innerText = name
    
//     genresFragment.appendChild(option)
    
// }

// Module.searchGenre.appendChild(genresFragment)

//  const authorsFragment = document.createDocumentFragment()
//  const authorOptn = document.createElement('option')
// authorOptn.value = 'any'
// authorOptn.innerText = 'All Authors'
// authorsFragment.appendChild(authorOptn)

// for (const [id, name] of Object.entries(authors)) {
//     const option =document.createElement('option')
//     option.value = id
//     option.innerText = name
//     authorsFragment.appendChild(option)
    
   
// }

//  Module.searchAuthor.appendChild(authorsFragment)
 

//  Module.settingTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day'

// // document.getElementsByTagName('body').style.setProperty('--color-dark', css[v].dark);
// // document.getElementsByTagName('body').style.setProperty('--color-light', css[v].light);
// Module.dataListBtn.textContent =`Show more (${books.length - BOOKS_PER_PAGE} )`

// Module.dataListBtn.disabled = !(matches.length - (page * BOOKS_PER_PAGE) > 0)


// Module.themeBtn.addEventListener('click', (e) =>{
//    e.preventDefault()
   
   
//     if(Module.themeOpt.value= 'night'){
        
//         Module.body.style.backgroundColor = 'Black'
//     }
// //     if(Module.themeOpt.value= 'day') { 
// //      Module.body.style.backgroundColor = 'white'
// //     }
// })
   
  
    


// Module.dataListBtn.innerHTML = /* html */ 
//     `<span>Show more</span>
//     <span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE]> 0 ? matches.length - (page * BOOKS_PER_PAGE) : 0})</span>`


// Module.searchCancelBtn.addEventListener('click',()=>{ Module.searchOverlay.style.display = 'none'})
//  Module.settingCancelBtn.addEventListener('click', () =>{
    
//     Module.settingOverlay.hide() })

// // Module.settingForm.addEventListener('submit',() => { 
// //     preventDefault()

// //     }) 

// //     //setting overlay

//     Module.settingHeaderBtn.addEventListener('click', () =>{
//         Module.searchOverlay.close()
//         Module.settingOverlay.show()
//     })
// // Module.listCloseBtn.addEventListener('click', ()=>{ data-list-active.open === false })

// // Module.dataListBtn.addEventListener('click',() => {
// //     Module.dataListItem.appendChild(createPreviewsFragment(`${matches}, (${page} * ${BOOKS_PER_PAGE}), (${page + 1} * ${BOOKS_PER_PAGE})`))
// //     actions.list.updateRemaining()
// //     page = page + 1
// // })

// // Module.searchHeaderBtn.addEventListener('click', () =>{
// //     Module.searchOverlay.show()
   
// // })

// // Module.searchForm.addEventListener('click',(filters)=>{
// //     preventDefault()
// //     const formData = new FormData(filters.target)
// //     filters = Object.fromEntries(formData)
// //     result = []

// //     for (book; booksList; i++) {
// //         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
// //         authorMatch = filters.author = 'any' || book.author === filters.author

// //         {
// //             genreMatch = filters.genre = 'any'
// //             for (genre; book.genres; i++) { if (singleGenre = filters.genre) { genreMatch === true }}}
// //         }

// //         if (titleMatch && authorMatch && genreMatch) {result.push(book)}
// //     })


// //     if (display.length < 1){ 
// //     Module.listMessage.classList.add('list__message_show')}
// //     else {Module.listMessage.classList.remove('list__message_show')}
    

// //     Module.dataListItem.innerHTML == `
//     const fragment3 = document.createDocumentFragment()
// //     const extracted = source.slice(range[0], range[1])`

//     for (const { author, image, title, id } of extracted) {
//         // const { author: authorId, id, image, title } = props

//         const element = document.createElement('button')
//         element.classList.add('preview')
//         element.setAttribute('id', 'data-preview')

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         fragment3.appendChild(element)
//     } 
    



//  Module.dataListItem.appendChild(fragment3)



//    const initial =matches.length - [page * BOOKS_PER_PAGE]
//  // const  remaining = hasRemaining ? initial : 0
//     Module.dataListBtn.disabled = initial > 0

// const booksBtns = document.querySelectorAll('#data-preview'); 
//  const prevImgages = document.querySelectorAll('.preview__image')
// for(const bookbtn of booksBtns){
    
  
   
//    const titlePrv = document.querySelector('.preview__title');
//    const authorPrv = document.querySelector('.preview__author')
//    bookbtn.addEventListener('click', () =>{
//     const pathArray = Array.from(event.path || event.composedPath());
//     console.log(pathArray)
//        for (const prevImg of prevImgages){
     
       

//         Module.listImg.src = prevImg.getAttribute('src');
//         Module.listTitle.textContent = titlePrv.textContent
//         Module.listSubtitle.textContent = authorPrv.textContent
//         Module.listDescription.textContent = ''
        
//             Module.listActive.show()
            
//         }
//     })
// }

// // Module.listCloseBtn.addEventListener('click', () =>{
// //     Module.listActive.close()
// // })
// //     Module.dataListBtn.innerHTML === /* html */ `
// //         <span>Show more</span>
// //         <span class="list__remaining"> (${remaining})</span>
// //     `

// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //     searchOverlay.open == false


// // settingOverlay.addEventListener('click', (event) =>{
// //     preventDefault()
// //     const formData = new FormData(event.target)
// //     const result = Object.fromEntries(formData)
// //     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
// //     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
// //     Module.settingOverlay.open === false
// // })

// // Module.dataListItem.addEventListener('click', (event) => {
// //     pathArray = Array.from(event.path || event.composedPath())
// //     active;

// //     for (node; pathArray; i++) {
// //         if (active) break;
// //         const previewId = node?.dataset?.preview
    
// //         for (const singleBook of books) {
// //             if (singleBook.id === id) active = singleBook
// //         } 
// //     }
    
// //     if (!active) { return
// //     Module.listActive.open === true
// //     Module.listBlur + Module.listImg === active.image
// //     ModulelistTitle === active.title}
    
// //     Module.listSubtitle ===`${authors[active.author]} (${Date(active.published).year}) `
// //     Module.listDescription === active.description
// // })


// // to be deleted soon
