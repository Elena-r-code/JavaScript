// =================================>>>>>>>>>      WITHOUT PROMPT         <<<<<<<<<<==========================================


// let book = {
//     title : ["The Vanishing Half", "The Scorpion's Tail", "Neighbors"],
//     author : ["Brit Bennett", "Douglas Preston", "Danielle Steel"],
//     readingStatus : [true, false, true],
//     returnInfo : function(bookTitle,bookAuthor){
//         for(let i = 0; i < bookTitle.length; i++ ){
//                  if(this.readingStatus[i]===true){
//                     console.log(`You already read ${this.title[i]} by ${this.author[i]}`);
//                 }
//                 else{
//                     console.log(`You still need to read ${this.title[i]} by ${this.author[i]}`);
//                 } 
//             }      
//         }
//     }
        
// book.returnInfo(book.title, book.author)



// ===============================>>>>>>>>>>>>>     WITH PROMPT      <<<<<<<<<<<<<<<============================


let bookTitle = ["The Vanishing Half", "The Scorpion's Tail", "Neighbors"];
let bookAuthor = ["Brit Bennett", "Douglas Preston", "Danielle Steel"];

let book = {
    title : prompt("enter book title"),
    author : prompt("enter book author"),
    readingStatus : [true, false, true],
    returnInfo : function(titleOfBook, authorOfBook){
        for(let i=0; i<bookTitle.length; i=i){
            if(titleOfBook == bookTitle[i] && authorOfBook == bookAuthor[i] && this.readingStatus[i] === true){
                console.log(`You already read ${titleOfBook} by ${authorOfBook}`)      
            }
            else {
                console.log(`You still need to read ${titleOfBook} by ${authorOfBook}`);
            }
            return titleOfBook;
        }
    }
}

book.returnInfo(book.title, book.author)
