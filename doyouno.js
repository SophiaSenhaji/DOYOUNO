const reverseString = text => {
    let result = ''
    for (let i = text.length - 1; i > -1; i--) {
      result += text[i];
    }
    return result;
  }
  
const unhash = number => {
let text = '';
let value = number;
const letters = "acdegilmnoprstuw";
for (let i = 0; i < 8 && value > 7; i++) {
    text += letters[value%37];
    value = Math.floor(value/37);
}

return reverseString(text);
}
  
unhash(24682779393128);