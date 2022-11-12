const firebaseConfig = {
      apiKey: "AIzaSyCPMnAY0rdyuXdyyzIEbkLHT2EPkhhXgrc",
      authDomain: "redglobe-database.firebaseapp.com",
      databaseURL: "https://redglobe-database-default-rtdb.firebaseio.com",
      projectId: "redglobe-database",
      storageBucket: "redglobe-database.appspot.com",
      messagingSenderId: "1638043135",
      appId: "1:1638043135:web:a17badecf495a73c8dabca",
      measurementId: "G-DB95J562FE"
    };
    firebase.initializeApp(firebaseConfig);
storage = localStorage.getItem("username");
document.getElementById("Welcome").innerHTML += storage;




function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);
                  document.getElementById("output").innerHTML+="<div onclick='function3(this.id)' class='room_name' id=" + Room_names + ">"+"#" + Room_names + "</div>"
                  //Start code

                  //End code
            });
      });
}
getData();


function function3(t)
{
      console.log(t);
      localStorage.setItem("Th", t);
      window.location = "kwitter_page.html"
}


function function1() {
      value_1 = document.getElementById("room_text").value;
      firebase.database().ref("/").child(value_1).update(
            {
                  Group: value_1
            }
      )
      localStorage.setItem("room_name", value_1);
}

function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("password")
      window.location = "index.html";
}
