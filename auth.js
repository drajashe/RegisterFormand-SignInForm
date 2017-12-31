  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnEs9naSWKJ8Xwtg9hspcTd94t0cJwTlg",
    authDomain: "webapp-e1a17.firebaseapp.com",
    databaseURL: "https://webapp-e1a17.firebaseio.com",
    projectId: "webapp-e1a17",
    storageBucket: "webapp-e1a17.appspot.com",
    messagingSenderId: "943154104266"
  };
  firebase.initializeApp(config);
  //reference messages collection
  var messagesRef=firebase.database().ref('RegisterationDetails')


//listen for the form submit
document.getElementById('registerForm').addEventListener('create',createForm);

//sbmit form
function createForm(e)
{
    e.preventDefault();
    console.log(123);
    var name=getInputVal("name");
    var email=getInputVal("email");
    var password=getInputVal("password");
    
    
    //save message
    saveMessage(name,email,password);
}

//function to get values

function getInputVal(id)
{
    return document.getElementById(id).value;
}

//function to save messages to firebase
function saveMessage(name, password, email)
{
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        password:password,
    });
}