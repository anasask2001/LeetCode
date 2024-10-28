/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const unpairedWords = new Set();
    let pairsCount = 0;
    
    for (const word of words) {
        const reversedWord = word.split('').reverse().join('');
        if (unpairedWords.has(reversedWord)) {
            pairsCount++;
            unpairedWords.delete(reversedWord);
        } else {
            unpairedWords.add(word);
        }
    }
    
    return pairsCount;
};