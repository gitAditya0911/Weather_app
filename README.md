# Weather Application README

## Overview

This Weather Application is a simple web-based tool that allows users to check the current weather conditions for a specified city or their current location. It utilizes the OpenWeatherMap API to fetch weather data, including temperature, weather description, and an appropriate weather icon.

## Features

- **City Weather Search**: Users can enter a city name to retrieve the current weather information.
- **Geolocation Weather**: Automatically fetches and displays the weather for the user's current location using the browser's geolocation feature.
- **Dynamic Weather Icons**: Displays weather icons based on the current weather conditions retrieved from the OpenWeatherMap API.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling the application and making it visually appealing.
- **JavaScript**: For handling API requests and dynamic content updates.
- **OpenWeatherMap API**: For fetching weather data.

## Getting Started

### Prerequisites

- A web browser to run the application.
- An active internet connection to fetch weather data from the OpenWeatherMap API.
- An API key from OpenWeatherMap (replace the placeholder in the code with your actual API key).

### Installation

1. **Clone the Repository**: Download or clone the repository to your local machine.
2. **Open the HTML File**: Open the `index.html` file in your web browser.

### Usage

1. **Search for Weather by City**:
   - Enter the name of a city in the input field and click the "Search" button.
   - The application will display the current temperature, weather description, and an icon representing the weather conditions.

2. **Get Weather for Current Location**:
   - Upon loading the page, the application will automatically request the user's location.
   - If granted permission, it will display the current weather for the user's location.

### Code Explanation

- **API Key**: The `apiKey` variable holds the OpenWeatherMap API key. Make sure to replace the placeholder with your actual API key.
  
- **getWeather(city)**: This asynchronous function fetches weather data for a specified city. It constructs the API URL, handles the response, and updates the DOM with the weather information.

- **getLocationWeather()**: This function retrieves the user's current geographical location and fetches the weather data based on latitude and longitude. It also handles errors related to geolocation.

- **Event Listener**: An event listener is added to the search button to trigger the `getWeather` function when clicked.

### Example Code Snippet

Here’s a brief example of how the weather data is fetched and displayed:

```javascript
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const response = await fetch(apiUrl);
const data = await response.json();
const temperature = data.main.temp;
const description = data.weather[0].description;
const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
```

### Error Handling

The application includes error handling for:
- Invalid city names or API errors.
- Geolocation permission issues or unsupported browsers.

### Conclusion

This Weather Application is a straightforward and effective way to check current weather conditions. It demonstrates the use of APIs, asynchronous JavaScript, and dynamic web content. Feel free to enhance the application further by adding more features or improving the UI!
