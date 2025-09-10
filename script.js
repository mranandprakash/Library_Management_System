let books=[];
let users=[];
let currentuser=null;
function addbooks(){
    const title=document.getElementById("title").value;
    const author=document.getElementById("Author").value;
    const category=document.getElementById("Category").value;
    const avail=document.getElementById("avail").value;
   const newbook={
    title:title,
    author:author,
    category:category,
    avail:avail
   }
   books.push(newbook);
  console.log(newbook)
  renderbooks();


}
function renderbooks(){
    const tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    const row=document.createElement("tr");
    books.forEach(book=>{
        row.innerHTML=`<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
        <td>${book.avail}</td>
        `
        tbody.appendChild(row);
    })
    
}



