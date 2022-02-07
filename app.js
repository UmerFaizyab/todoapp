 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBwZZ9r5o6F2qSSpCL5sfj1TPjcpOJATkg",
   authDomain: "fir-prac-920ab.firebaseapp.com",
   databaseURL: "https://fir-prac-920ab-default-rtdb.firebaseio.com",
   projectId: "fir-prac-920ab",
   storageBucket: "fir-prac-920ab.appspot.com",
   messagingSenderId: "913400640075",
   appId: "1:913400640075:web:24a63c9186b618fa4213ce",
   measurementId: "G-3KYVYBDYLP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();







var email = document.getElementById("email2");
var password = document.getElementById("password2");
var loginbut = document.getElementById("loginbut")
function login(){
    var obj2 = {
    email: email.value,
    password: password.value,
    
}
signInWithEmailAndPassword(auth, obj2.email, obj2.password)
.then(function (success) {
    console.log("User Sign in Successfully");
    console.log(success);
    document.getElementById("status").style.display = "block"
    document.getElementById("status").innerHTML = "login Successfully"
    window.location.replace("pages/todo.html")


  })
  .catch(function (rej) {
    console.log("User Sign in Rejected");
    document.getElementById("status").style.display = "block"
    document.getElementById("status").innerHTML = rej.message
  });
}




var gotosign = document.getElementById("gotosign")
gotosign.addEventListener("click", function (){
  window.location.assign("pages/signup.html")
})
loginbut.addEventListener("click", function (){
    login()
})
