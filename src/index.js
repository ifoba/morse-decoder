const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i=0; i<expr.length; i+=10) {
        if (i%10==0) {
            arr.push(expr.slice(i, i+10));
        }
    }
    let word = '';
    result = arr.map(function(item){
        item = item.replace(/10/g, '.');
        item = item.replace(/11/g, '-');
        item = item.replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
        item = item.replace(/00/g, '');
        return item;
    }).forEach(function(item){
        if (item != ' ') word += MORSE_TABLE[item];
        else word += ' ';
    });
    return word;
    


}

module.exports = {
    decode
}



