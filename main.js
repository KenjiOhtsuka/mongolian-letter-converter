var cyrillicTextarea = document.getElementById('mongolian_cyrillic');
var alphabetTextarea = document.getElementById('english_alphabet');

var map = {
    'ф': 'f',
    'ц': 'ts',
    'у': 'u',
    'ж': 'j',
    'э': 'e',
    'н': 'n',
    'г': 'g',
    'ш': 'sh',
    'ү': 'ü',
    'з': 'z',
    'к': 'k',
    'ъ': 'i',
    'п': 'p',
    'д': 'd',
    'л': 'l',
    'о': 'o',
    'р': 'r',
    'х': 'kh',
    'а': 'a',
    'ө': 'ö',
    'б': 'b',
    'ы': 'y',
    'й': 'i',
    'я': 'ya',
    'ч': 'ch',
    'ё': 'yo',
    'с': 's',
    'м': 'm',
    'и': 'i',
    'т': 't',
    'ь': 'i',
    'в': 'v',
    'ю': 'yu',
    'щ': 'sh',
    'е': 'ye'
};

var cyrillicArray = [
    'ю', 'щ', 'е', 'я', 'ч', 'ё', 'х', 'ц', 'ш', 'ф',
    'у', 'ж', 'э', 'н', 'г', 'ү', 'з', 'к', 'ъ', 'п', 'д',
    'л', 'о', 'р', 'а', 'ө', 'б', 'ы', 'и', 'с', 'м',
    'й', 'т', 'ь', 'в',
];

var alphabetArray = [
    'yu',
    'sh',
    'ye'
    'ya',
    'ch',
    'yo',
    'kh',
    'ts',
    'sh',
    'f', // only one
    'u', 
    'j', // only one byt sometimes "zh"
    'e',
    'n',
    'g',
    'ü',
    'z',
    'k',
    'i',
    'p',
    'd',
    'l', // only one
    'o', // only one
    'r', // only one
    'a', // only one
    'ö',
    'b',
    'y', 'i',
    's',
    'm',
    'i', 't',
    'i', 'v',
];


function cyrillicToAlphabet() {
    var cyrillicText = cyrillicTextarea.value;
    var length = cyrillicText.length;
    var alphabetText = '';
    alert(length);
    for (var i = 0; i < length; ++i) {
        var c = cyrillicText[i];
        var lowerC = c.toLowerCase();
        if (lowerC in map) {
            if (lowerC == c) {
                alphabetText += map[lowerC];
            } else {
                alphabetText += map[lowerC][0] + map[lowerC].substring(1);                
            }
        } else {
            alphabetText += c;
        }
    }
    alphabetTextarea.value = alphabetText;
}

function alphabetToCyrillic() {
    var alphabetText = alphabetTextarea.value;
    var length = alphaetText.length;
    
}

document.getElementById('cyrillicToAlphabet').onclick = function () { cyrillicToAlphabet(); };

