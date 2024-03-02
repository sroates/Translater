

async function fetchPhrase() {
    try {
        const response = await fetch('/getPhrase');
        if(!response.ok){
            throw new Error('Error fetching phrase')
        }
        const phrase = await response.json(); 
        return phrase
    } catch (error) {
        console.error('Error fetching phrases:', error);
        return [];
    }
}

function displayPhrase(phrase){

    const phrasesList = document.getElementById('displayPhrase');
    phrasesList.innerHTML = ''; // Clear any existing content
    phrase.forEach(p => {
        const listItem = document.createElement('li');
        listItem.textContent = `${p.phrase} - ${p.language}`;
        phrasesList.appendChild(listItem);
    });
}


// fetchPhrase()
//     .then(phrases => {
//         console.log('Fetched phrases:', phrases);
//         displayPhrase(phrases);
//     });

const form = document.getElementById('inputedPhrase');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const phraseInput = document.getElementById('phrase').value;
  const labguageInput = document.getElementById('language').value;

  try {
    const response = await fetch('/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phrase: phraseInput, language: labguageInput})
    });

    if (!response.ok) {
      throw new Error('Error storing phrase');
    }

    const responseData = await response.text();
    console.log(responseData);

    const phrases = await fetchPhrase();
    displayPhrase(phrases);
  } catch (error) {
    console.error('Error:', error);
    alert('Error storing phrase');
  }
});

