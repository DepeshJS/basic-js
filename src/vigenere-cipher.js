const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
      this.isDirect = isDirect;
  }

  encrypt(message, key) {
      message = message.toLowerCase();
      key = key.toLowerCase();
      let trueKey = ''

      let offset = 0;
      for (let i = 0; i < message.length; i++) {
          const messageCharCode = message.charCodeAt(i) - 97;
          const keyCharCode = key.charCodeAt((i - offset) % key.length) - 97;

          if (messageCharCode <= 26 && messageCharCode >= 0) {
              trueKey += String.fromCharCode(((messageCharCode + keyCharCode) % 26) + 97);
          } else {
              trueKey += message[i];
              offset++;
          }
      }


      return this.isDirect ? trueKey.toUpperCase() : trueKey.toUpperCase().split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
      let lowerCaseMessage = encryptedMessage.toLowerCase();
      key = key.toLowerCase();

      let decryptedMsg = '';

      let offset = 0;
      for (let i = 0; i < lowerCaseMessage.length; i++) {
          const encryptedMsgCharCode = lowerCaseMessage.charCodeAt(i) - 97;
          const keyCharCode = key.charCodeAt((i - offset) % key.length) - 97;
          
          if (encryptedMsgCharCode <= 26 && encryptedMsgCharCode >= 0) {
              decryptedMsg += String.fromCharCode((encryptedMsgCharCode + 26 - keyCharCode) % 26 + 97);
          } else {
              decryptedMsg += lowerCaseMessage[i];
              offset++;
          }
      }

      return this.isDirect ?  decryptedMsg.toUpperCase() : decryptedMsg.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
