console.log('// 1');

count = 1;
while (count <= 10) {
    const result = 2 ** count;
    console.log(result);
    count ++;
}; 


console.log('// 1');

count = 1;
while (count <= 10) {
    const result = Math.pow(2, count);
    console.log(result);
    count ++
};


console.log('// 1*');

function showDegree(count) {
    num = 1;
    while (num <= count ) {
    const total = Math.pow(2, num);
    console.log(total);
    num ++;
}
};
showDegree(10);


console.log('// 2');

console.log(':)\n:):)\n:):):)\n:):):):)\n:):):):):)')



console.log('// 2*');

function printSmile(stroka, numberOfRows) {
    let i = 0;
    while (i <= numberOfRows) {    
        console.log(`${stroka}`.repeat(i));
        i ++;
    }
    };
    
printSmile(':)', 5);



console.log('// 3**');

const getWordStructure = (word) => {
    word = word.replace(/[^a-zа-яё]/gi, '');
    let vowels = 0;
    let consonants = 0;
    let wordLower = word.toLowerCase();
    let char = ['a','e', 'i', 'o', 'u', 'y'] ;
    for (let i = 0; i < wordLower.length; i ++) {
        if (char.includes(wordLower[i], 0)) {
            vowels += 1;
        }
        else {consonants += 1;}
  
    }
    console.log(`Слово ${word} состоит из ${vowels} гласных и ${consonants} согласных букв`);  
 };
 
getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');



console.log('// 4**');

function isPalindrom(word) {
    let i = 0;
    let reverse = '';
    while (i < word.length) {
        reverse = `${word[i]}${reverse}`;
        i ++;
    }

    if (word.toLowerCase() === reverse.toLowerCase()) {
        console.log(true);
    } else {
        console.log(false);
    }  
};
isPalindrom('abba');
isPalindrom('Abba');
