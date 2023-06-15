const names = ['Paul', 'Matthew', 'Sarah', 'Rebecca', 'Tim', 'Maria'];
const hobbies = ['reading', 'working out', 'sleeping', 'swimming', 'video games', 'coding'];

const getWord = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

const sentenceGenerator = () => {
    const name = getWord(names);
    const hobby = getWord(hobbies);
    const age = Math.floor(Math.random() * 30);

    return `Let me guess...\nYou're name is ${name}, you're ${age} years old, and you like ${hobby}. \nAm I right?`;
}

console.log(sentenceGenerator());