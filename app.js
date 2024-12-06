function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function updateDateTime() {
    const now = new Date();
    document.getElementById('date-time').innerText = formatDateTime(now);
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call



const apiKey = 'dc8e28241abfdbb6ba0881ce9814c07f';
const city = 'Toronto';

function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerText = 
                `Weather in ${city}: ${data.main.temp}°C, ${data.weather[0].description}`;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

fetchWeather();


