let books=[
 { id: "b1", title: "Introduction to Algorithms",author:"s morley",category:"computer science", available: true },
{ id: "b2", title: "Clean Code",author:"rd barman",category:"computer science", available: true },
{ id: "b3", title: "The Great Gatsby",author:"davind finch",category:"fiction", available: true }
];
let users=[{userid:"john123",password:"pass1234",usertype:"student"},
    {userid:"deepak",password:"pass123",usertype:"admin"}
];
let currentuser=null;
function addbooks(){
    const title=document.getElementById("title").value;
    const author=document.getElementById("Author").value;
    const category=document.getElementById("Category").value;
    const avail=document.getElementById("avail").value;
   const newbook={
    id:"b"+(books.length+1),
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
function handlelogin(){
    const userid=document.getElementById("userid").value;
    const password=document.getElementById("password").value;
    const user=users.find(t=>userid==t.userid && password==t.password);
    const login=document.getElementById("login");
    const admindashboard=document.getElementById("admindashboard");
    const tablediv=document.getElementById("tablediv");
    if(user){
        login.style.display="none";
        admindashboard.classList.remove("hidden");
        tablediv.classList.remove("hidden");

    }

}



