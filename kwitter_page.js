//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAuMP8gDYE2lzkOEBU67qVb_X1QQdFkRFs",
      authDomain: "redglobe-base.firebaseapp.com",
      databaseURL:"https://redglobe-base-default-rtdb.firebaseio.com/",
      projectId: "redglobe-base",
      storageBucket: "redglobe-base.appspot.com",
      messagingSenderId: "515569703116",
      appId: "1:515569703116:web:e3b7881714fc442c4cca69"
    };

    firebase.initializeApp(firebaseConfig);
    romname = localStorage.getItem("Th");
    function send()
    {
      msg_input = document.getElementById("tp").value;
      msg_localstorage = localStorage.getItem("username");
          firebase.database().ref(romname).push(
                {
                      msg : msg_input,
                      msgsender : msg_localstorage,
                      like : 0
                }
          )
          document.getElementById("tp").value="";
    }
    
    
function getData() { firebase.database().ref("/"+romname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 sender = message_data.msgsender;
  like = message_data.like;
  msg = message_data.msg;
console.log(sender);
console.log(like);
console.log(msg);

  document.getElementById("output").innerHTML+="<div><h1>"+ sender +"</h1><br><p class='message_h4'>"+ msg +"</p><br><button onclick='like1(this.id)' value="+ like +" class='like_button ' id="+firebase_message_id+">Like: "+ like +"</i></button></div> <i class='fa-thin fa-thumbs-up'>"
//End code
      } });  }); }
getData();


document.getElementById("roomname").innerHTML=romname;

function like1(msg_id) 
{
      btn_id = msg_id;
      console.log(btn_id);
      msg_like2 = document.getElementById(btn_id).value;
      msg_like = Number(msg_like2)+1;
      console.log(msg_like)
      firebase.database().ref(romname).child(msg_id).update(
            {
                  like: msg_like
            }
      )
}
function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("password")
      window.location = "index.html";
}
