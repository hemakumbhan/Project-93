function add(){
    user=document.getElementById('name').value;
    localStorage.setItem("myname",user);
    window.location="kwitter.html";
}