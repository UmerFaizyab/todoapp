 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

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












var nameInp = document.getElementById("name1");
var email = document.getElementById("email1");
var password = document.getElementById("password1");
var signbut = document.getElementById("signbut")
function signUp(){
    var obj1 = {
    name: nameInp.value,
    email: email.value,
    password: password.value,
}
createUserWithEmailAndPassword(auth, obj1.email, obj1.password)
.then(function (success) {
  console.log(success.user.uid);
  obj1.uid = success.user.uid;
  document.getElementById("status").style.display = "block"
  document.getElementById("status").innerHTML = "User Created Successfully"
  window.location.replace("../index.html")
})
.catch(function (rej) {
  console.log("User Creation Rejected");
//   console.log(rej.code);
  console.log(rej.message);
  document.getElementById("status").style.display = "block"
  document.getElementById("status").innerHTML = rej.message
});
console.log(obj1)
}



var gotolog = document.getElementById("gotologin")
gotolog.addEventListener("click", function (){
    window.location.assign("../index.html")
})
signbut.addEventListener("click", function (){
    signUp()
})
