function myfunction(){
    var books=["Harry Potter","Just Add Magic","The Magic Treehouse","Mystery House"];
    let inputBook=document.getElementById('search').value;
    let bookResult=[];
    let searchBook=(b)=>{
if(inputBook.toUpperCase()===b.toUpperCase()){
    bookResult.push(b);
}
else{
    let splitstr=b.split(" ");
    let findMatch=splitstr.find((s)=>{return inputBook.toUpperCase()===s.toUpperCase()})
if(findMatch!==undefined){
    bookResult.push(b);
}}}
books.find(searchBook);
if(bookResult.length>0){
    document.getElementById('results').innerHTML=`Search results matching the given keyword: ${bookResult}`;
}
else{
    document.getElementById('results').innerHTML=`There is no book with ${inputBook} available in the repository`;
}
}