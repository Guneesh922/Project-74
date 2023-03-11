
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      const firebaseConfig = {
            apiKey: "AIzaSyDXV1CeI3TyImIBumvAnXjYIlLSqZ1zcY8",
            authDomain: "kwitter-1af8e.firebaseapp.com",
            databaseURL: "https://kwitter-1af8e-default-rtdb.firebaseio.com",
            projectId: "kwitter-1af8e",
            storageBucket: "kwitter-1af8e.appspot.com",
            messagingSenderId: "556808571142",
            appId: "1:556808571142:web:d9f86f18636f374e5cb687",
            measurementId: "G-MCXLYR744J"
          };
      //End code
      });});}
getData();
