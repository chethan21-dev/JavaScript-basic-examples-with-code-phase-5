1. Convert Decimal to Binary - 
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}
let number = prompt('Enter a decimal number: ');
convertToBinary(number);

2. Check Whether a String is Palindrome or Not - 
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);

3. Sort Words in Alphabetical Order - 
const string = prompt('Enter a sentence: ');
const words = string.split(' ');
words.sort();
console.log('The sorted words are:');
for (const element of words) {
  console.log(element);
}

4. Reverse a String - 
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

5. Create Objects in Different Ways - 
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};
console.log(typeof person); 
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

6. Convert the First Letter of a String into UpperCase - 
function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
const string = prompt('Enter a string: ');
const result = capitalizeFirstLetter(string);
console.log(result);