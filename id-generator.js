function generateUniqueID() {
  if (typeof(Storage) !== "undefined") {
      if (localStorage.uniqueID) {
          return localStorage.uniqueID; 
      } else {
          alert("Welcome to NetherMail. We generate a random ID and store it in your browser's local storage. You can renew your ID at any time, as much times as you want. If you switch browsers and/or devices or go into icognito mode, a new ID will get generated.\nYou can share this ID with those who want to send you an encrypted message. Messages are encrypted with AES and using a custom passcode.")
          var timestamp = Date.now();
          var uniqueID = Math.random().toString(36).substr(2, 9) + String(timestamp).substr(10, 14);
          localStorage.uniqueID = uniqueID; 
          return uniqueID;
      }
  } else {
      console.error("Lokale opslag wordt niet ondersteund in deze browser.");
      return null;
  }

}

var uniqueID = generateUniqueID();
document.getElementById("myidentifier").innerHTML = uniqueID;

function replaceUniqueID() {
  if (typeof(Storage) !== "undefined") {
      var timestamp2 = Date.now();
      var newID = Math.random().toString(36).substr(2, 9) + String(timestamp2).substr(10, 14);
      localStorage.uniqueID = newID;
      return newID;
  } else {
      console.error("Lokale opslag wordt niet ondersteund in deze browser.");
      return null;
  }

}

function replaceBtnClick() {
  var newID = replaceUniqueID();
  document.getElementById("myidentifier").innerHTML = newID;
  location.reload();
}
