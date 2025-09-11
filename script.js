let books=[
 { id: "b1", title: "Introduction to Algorithms",author:"s morley",category:"computer science", available: true,borrowedby:"deepak" },
{ id: "b2", title: "Clean Code",author:"rd barman",category:"computer science", available: true,borrowedby:"deepak" },
{ id: "b3", title: "The Great Gatsby",author:"davind finch",category:"fiction", available: true ,borrowedby:"john123"}
];
let users=[{userid:"john123",password:"pass1234",usertype:"student"},
    {userid:"deepak",password:"pass123",usertype:"admin"}
];
let currentuser={userid:"john123",password:"pass1234",usertype:"student"};
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
    avail:avail,
    borrowedby:currentuser.userid
   }
   books.push(newbook);
  console.log(newbook)
  renderbooks();


}
function renderbooks(){
    const tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    books.forEach(book=>{
        const row=document.createElement("tr");
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
        currentuser=user;
        login.style.display="none";
        admindashboard.classList.remove("hidden");
        tablediv.classList.remove("hidden");

    }

}
function borrowBook(bookid){
  const book=books.find(t=>t.id===bookid);
  const borrowed=books.filter(b=>b.borrowedby===currentuser.id);
  if(borrowed.length>=3){
    alert("you have reached limits");
    return;
  }
  if(!book.available){
      alert("not available");
      return;
  }
  book.available=false;
  book.borrowedby=currentuser.userid;
  const now=new Date();
  const due=new Date(now.getTime()+7*24*60*60*1000);
 book.duedate=due.toDateString();
 render();
}
function returnbook(bookid){
    const book=books.find(b=>b.id===bookid);
    book.available=true;
    delete book.borrowedby;
    delete book.duedate;
    render();
}
function render(){
    console.log("render called")
    const tbody = document.querySelector("#bookstable tbody");
    tbody.innerHTML = "";
    books.forEach(book=>{
        const row = document.createElement("tr");
        row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.available ? "Available" : "Borrowed by " + book.borrowedby}</td>
           <td>
             ${book.available
               ? `<button onclick="borrowBook('${book.id}')">Borrow</button>`
               : book.borrowedby === currentuser?.userid
                   ? `<button onclick="returnbook('${book.id}')">Return</button>`
                   : ""}
           </td>
        `;
        tbody.appendChild(row);
    });
}
render();


    
    



