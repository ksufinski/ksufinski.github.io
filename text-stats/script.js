btnElement.addEventListener('click', () => {
  let uniqueSet = {};

  const spacedPhrases = inputElement.value.split(' ');

  countElement.innerText = spacedPhrases.length;

  spacedPhrases
    .filter(phrase => phrase.charCodeAt(0) > 65)
    .map(word =>
      Array
        .from(word.toLowerCase())
        .map(char => char.charCodeAt(0) > 65 ? char : '')
        .join(''))
    .forEach(word =>
      word in uniqueSet ?
        uniqueSet[word] = uniqueSet[word] + 1 :
        uniqueSet[word] = 1);

  resultElement.innerText = Object
    .keys(uniqueSet)
    .sort((a, b) => uniqueSet[a] < uniqueSet[b] ? 1 : -1)
    .map(word => `\n ${word}: ${uniqueSet[word]}`);
});