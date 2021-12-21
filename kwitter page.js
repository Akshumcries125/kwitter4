var firebaseConfig = {
    apiKey: "AIzaSyCsAxYkJ5MTnryBa4MQfZYXY5mv-TGiUIE",
    authDomain: "kwitter-project-f7b49.firebaseapp.com",
    databaseURL: "https://kwitter-project-f7b49-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f7b49",
    storageBucket: "kwitter-project-f7b49.appspot.com",
    messagingSenderId: "371961483723",
    appId: "1:371961483723:web:b5bb12d7efa01f2c03e64e"
  };
  

  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

  function send(){
     msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
