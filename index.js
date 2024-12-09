

function analyzeSentence(sentence) {
    
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    
    const vowels = "aeiouAEIOU";

    
    let inWord = false;

    
    for (let char of sentence) {
        length++;

        
        if (vowels.includes(char)) {
            vowelCount++;
        }

        
        if (/[a-zA-Z]/.test(char)) {
            if (!inWord) {
                wordCount++; 
                inWord = true;
            }
        } else if (char === ' ') { 
            inWord = false;
        }
    }

    
    return { length, wordCount, vowelCount };
}


let sentence = prompt("Enter a sentence ending with a point (.):");


if (sentence[sentence.length - 1] !== '.') {
    console.log("Error: The sentence must end with a point (.)");
} else {
    
    const results = analyzeSentence(sentence.slice(0, -1));
    console.log("Length of the sentence:", results.length);
    console.log("Number of words:", results.wordCount);
    console.log("Number of vowels:", results.vowelCount);
}