// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "5f0ef895ead5b932a3d1d35badcae4d1";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.log(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { humidity, temp }, weather: [{ id, description }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    if (200 <= weatherId && weatherId <= 232) {
        return "⛈️";
    }
    else if (300 <= weatherId && weatherId <= 321) {
        return "🌦️";
    }
    else if (500 <= weatherId && weatherId <= 531) {
        return "🌧️";
    }
    else if (600 <= weatherId && weatherId <= 622) {
        return "❄️";
    }
    else if (700 <= weatherId && weatherId <= 741) {
        return "🌫️";
    }
    else if (weatherId == 762) {
        return "🌋";
    }
    else if (weatherId == 771) {
        return "💨";
    }
    else if (weatherId == 781) {
        return "🌪️";
    }
    else if (weatherId == 800) {
        return "☀️";
    }
    else if (801 <= weatherId && weatherId <= 804) {
        return "☁️";
    }
    else {
        return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}