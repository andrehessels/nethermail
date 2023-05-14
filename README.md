# Welcome
Nethermail is accessible at https://andrehessels.nl/nethermail, and it's a simple concept of a messaging service which encrypts your messages with AES.

## Usage of Nethermail
1. Make a note of your unique ID, and communicate it to whom you want.
2. When sending a message, input the following information:
  - Recipient ID
  - Subject - This is optional & sent without encryption
  - Message - AES-encryption with passcode
  - Passcode - For encrypting and decrypting the message
4. The recipient can click on "View message", enter in the passcode the sender made, and view your message.

## Modifying code
If you want to develop using the source code of Nethermail, use below steps:
1. Clone this repository
2. In firebase.js, enter in your own Firebase configuration details
3. Enjoy!

You're advised to follow the license included in this repository when developing. Thanks!

## Note
This project utilizes Google's Firebase realtime database. This isn't a privacy risk as your message is being encrypted with AES and your passcode, and then sent to the database. The passcode is deleted right after generating the hash, thus no one (not even Google) except for you knows the passcode.
