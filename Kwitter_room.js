const firebaseConfig = {
  apiKey: "AIzaSyCtvSu6fusEt6XFQA_gvqrhHNERDaayGzE",
  authDomain: "project-94-d7715.firebaseapp.com",
  databaseURL: "https://project-94-d7715-default-rtdb.firebaseio.com",
  projectId: "project-94-d7715",
  storageBucket: "project-94-d7715.appspot.com",
  messagingSenderId: "216997187136",
  appId: "1:216997187136:web:2a7ea26a9570fb25c559a5"
};

// Initialize Firebase
firebase=initializeApp(firebaseConfig);

user_name=localStorage.getItem("User Name");
console.log(user_name);
document.getElementById("welcome").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("Room Name",room_name);
  window.location="kwitterpg.html";
}


  

  
  