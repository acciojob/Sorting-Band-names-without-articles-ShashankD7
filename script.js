let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticles(bandName) {
  const articles = ['a', 'an', 'the'];
  const nameWords = bandName.split(' ');

  // Remove articles from the band name
  const filteredWords = nameWords.filter(word => !articles.includes(word.toLowerCase()));

  // Join the remaining words back into a string
  const filteredName = filteredWords.join(' ');

  return filteredName;
}

// Sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Generate the HTML list
const ul = document.getElementById('band');

bandNames.forEach(name => {
  const li = document.createElement('li');
  li.innerText = name;
  ul.appendChild(li);
});