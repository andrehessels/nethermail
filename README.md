# Welcome
Nethermail is accessible at https://andrehessels.nl/nethermail, and it's a simple concept of a messaging service which encrypts your messages with AES.

## Usage of Nethermail
- Make a note of your unique ID, and communicate it to whoever you want.
- When sending a message, you will be asked for the following information:
    - Recipient ID
    - Subject - This is optional & sent without encryption
    - Message - This field will get encrypted with AES and your custom passcode
    - Passcode - For encrypting and decrypting the message
- The recipient can click on "View message", enter in the passcode the sender assigned to the message, and view your message.

## Modifying code
If you want to develop using the source code of Nethermail, use below steps:
1. Clone this repository
2. In firebase.js, enter in your own Firebase configuration details

You're advised to follow the license included in this repository when developing. Thanks!

## Note
This project utilizes Google's Firebase realtime database. This isn't a privacy risk as your message is being encrypted with AES and your passcode, and then sent to the database. The passcode is deleted right after generating the AES-hash and before sending data to Firebase, which results in no one (not even Google) knowing the passcode and message contents except for you and anyone you share the passcode with.
