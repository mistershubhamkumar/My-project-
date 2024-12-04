// API URL
const apiUrl = 'https://shayari.p.rapidapi.com/all';  // Make sure to replace with correct API endpoint

// API Headers with your key
const headers = {
  'X-RapidAPI-Host': 'shayari.p.rapidapi.com',
  'X-RapidAPI-Key': 'your-api-key-here' // Replace with your API Key
};

// Function to fetch random Shayari
async function fetchShayari() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: headers
        });
        const data = await response.json();
        displayShayari(data);
    } catch (error) {
        console.error('Error fetching Shayari:', error);
    }
}

// Function to display Shayari
function displayShayari(data) {
    // Randomly pick one shayari from the API data
    const randomShayari = data[Math.floor(Math.random() * data.length)].shayari;
    document.getElementById('shayari-display').innerText = randomShayari;
}
