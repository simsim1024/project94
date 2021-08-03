function add_user(){
    username=document.getElementById("user_name").nodeValue;
    localStorage.setItem("user_name", username);
    window.location="Kwitter_room.html";
}