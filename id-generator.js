// Functie om een ​​unieke ID voor de browser te genereren
function generateUniqueID() {
  // Controleren of de browser ondersteuning biedt voor lokale opslag
  if (typeof(Storage) !== "undefined") {
      // Controleren of er al een ID in de lokale opslag is opgeslagen
      if (localStorage.uniqueID) {
          return localStorage.uniqueID; // Teruggeven van de bestaande ID
      } else {
          alert("Welcome to NetherMail. We generate a random ID and store it in your browser's local storage. You can renew your ID at any time, as much times as you want. If you switch browsers and/or devices or go into icognito mode, a new ID will get generated.\nYou can share this ID with those who want to send you an encrypted message. Messages are encrypted with AES and using a custom passcode.")
          // Genereren van een nieuw uniek ID met behulp van een willekeurige waarde en de huidige timestamp
          var timestamp = Date.now();
          var uniqueID = Math.random().toString(36).substr(2, 9) + String(timestamp).substr(10, 14);
          localStorage.uniqueID = uniqueID; // Opslaan van het nieuwe ID in de lokale opslag
          return uniqueID; // Teruggeven van het nieuwe ID
      }
  } else {
      // Als de browser geen lokale opslag ondersteunt, een foutmelding weergeven
      console.error("Lokale opslag wordt niet ondersteund in deze browser.");
      // Je kunt ervoor kiezen om een ​​andere benadering te gebruiken, zoals het opslaan van de ID in een cookie
      // of het gebruik van een server-side oplossing om de ID bij te houden
      return null;
  }

}

// Voorbeeldgebruik van de functie generateUniqueID()
var uniqueID = generateUniqueID();
document.getElementById("myidentifier").innerHTML = uniqueID;

// Functie om de opgeslagen unieke ID te vervangen door een nieuwe ID
function replaceUniqueID() {
  // Controleren of de browser ondersteuning biedt voor lokale opslag
  if (typeof(Storage) !== "undefined") {
      // Genereren van een nieuwe unieke ID
      var timestamp2 = Date.now();
      var newID = Math.random().toString(36).substr(2, 9) + String(timestamp2).substr(10, 14);
      localStorage.uniqueID = newID; // Opslaan van het nieuwe ID in de lokale opslag
      return newID;
  } else {
      // Als de browser geen lokale opslag ondersteunt, een foutmelding weergeven
      console.error("Lokale opslag wordt niet ondersteund in deze browser.");
      return null;
  }

}

function replaceBtnClick() {
  var newID = replaceUniqueID();
  document.getElementById("myidentifier").innerHTML = newID;
  location.reload();
}