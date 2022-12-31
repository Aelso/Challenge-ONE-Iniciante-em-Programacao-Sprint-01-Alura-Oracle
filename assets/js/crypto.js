const textarea = document.querySelector('.digite_texto');
const select = document.querySelector('#escolha');

function onTextareaChange() {
  // Do something when the text in the textarea changes
}

function onSelectChange() {
  // Do something when the selected option in the select element changes
}

textarea.addEventListener('change', onTextareaChange);
select.addEventListener('change', onSelectChange);


function caesarCipher(text, shift) {
    // Make sure the shift is within the range 0-25
    shift %= 26;
    
    // Convert the text to an array of characters
    const chars = text.split('');
    
    // Use map() to apply the cipher to each character
    const ciphered = chars.map(char => {
      // If the character is not a letter, return it as is
      if (!char.match(/[a-z]/i)) return char;
      
      // Get the ASCII code of the character
      const code = char.charCodeAt(0);
      
      // Shift the character code by the specified amount
      const shifted = code + shift;
      
      // If the shifted character code is outside the range of lowercase or uppercase letters, wrap it around
      if ((code >= 65 && shifted > 90) || (code >= 97 && shifted > 122)) {
        return String.fromCharCode(shifted - 26);
      }
      
      // Return the shifted character
      return String.fromCharCode(shifted);
    });
    
    // Join the ciphered characters and return the result
    return ciphered.join('');
  }
  
  // Example usage:
  console.log(caesarCipher('Hello, world!', 3));  // Output: Khoor, zruog!


  function base64Cipher(text) {
    return btoa(text);
  }
  
  // Example usage:
  console.log(base64Cipher('Hello, world!'));  // Output: SGVsbG8sIHdvcmxkIQ==
  
  
  const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..'
  };
  
  function morseCodeCipher(text) {
    // Convert the text to an array of characters
    const chars = text.split('');
    
    // Use map() to apply the cipher to each character
    const ciphered = chars.map(char => {
      // If the character is not a letter, return a space
      if (!char.match(/[a-z]/i)) return ' ';
      
      // Convert the character to lowercase
      char = char.toLowerCase();
      
      // Return the Morse code representation of the character
      return morseCode[char];
    });
    
    // Join the ciphered characters with spaces and return the result
    return ciphered.join(' ');
  }
  
  // Example usage:
  console.log(morseCodeCipher('Hello, world!'));  // Output: .... . .-.. .-.. ---  .-- --- .-. .-.. -..
  