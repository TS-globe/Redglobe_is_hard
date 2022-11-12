function login()
{
    pass = document.getElementById("password").value;
    localStorage.setItem("password", pass);
    user = document.getElementById("username").value;
    localStorage.setItem("username", user);
    window.location="kwitter_room.html";
}
function Showpass()
{
    check1 = document.getElementById("visible").checked;
console.log(check1);
if (check1 == true)
{
    document.getElementById("password").type="text"
}
else{
    document.getElementById("password").type="password"
}
}