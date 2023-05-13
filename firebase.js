//Add your own Firebase configuration here

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

var app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function viewmsg(timestamp) {
    var pintest = prompt("Enter the pin code of this message:");
    database.ref().child("messages").once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            data = childSnapshot.val();
            if (data.timestamp == timestamp) {
                document.getElementById("variablediv").style.display = "none";
                document.getElementById("sendform").style.display = "none";
                document.getElementById("messageview").style.display = "block";
                decryptAES(data.messagesecurehash, pintest);
            }
        })
    });
}

database.ref().child("messages").once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        data = childSnapshot.val();
        if (data.receiver == document.getElementById("myidentifier").innerHTML) {
            $('#maillist').append(`<article class="no-padding border">
         <div class="padding">
           <h5>${data.subject}</h5>
           <p style="font-size: 16px;"><b>Sent by: ${data.sender} | Timestamp: ${data.datetime}</b></p>
           <nav>
             <button class="round" onClick="viewmsg(${data.timestamp})">View message</button>
           </nav>
         </div>
       </article>`);
        }
    })
});

function sendMessage() {
    var pincode = document.getElementById("pincode").value;
    var message = document.getElementById("message").value;
    var encrypted = CryptoJS.AES.encrypt(message, pincode).toString()
    var receiver = document.getElementById("receiver").value;
    var subject = document.getElementById("subject").value;
    var userID = document.getElementById("myidentifier").innerHTML;
    var timestamp = Date.now();
    var timestamp2 = new Date();
    var datetime = timestamp2.getDate() + "/" + (timestamp2.getMonth() + 1) + "/" + timestamp2.getFullYear() + " at " + timestamp2.getHours() + ":" + timestamp2.getMinutes()

    database.ref("messages/" + timestamp).set({
        sender: userID,
        receiver: receiver,
        subject: subject,
        messagesecurehash: encrypted,
        timestamp: timestamp,
        datetime: datetime
    });

    document.getElementById("backbutton").style.display = "block";
    document.getElementById("sendbutton").style.display = "none";
    document.getElementById("text1").innerHTML = "Message sent succesfully! Go back to your mailbox and click on the compose button to compose a new message.";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text1").style.color = "#1ea62e";
};