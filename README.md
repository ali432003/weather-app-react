## Weather App 

### Overview:
This Weather App is a dynamic web application that fetches weather data from the OpenWeatherApp API. It allows users to get real-time weather updates for their desired locations.

### Features:
- Fetches current weather data from OpenWeatherApp API.
- Displays temperature, weather conditions, humidity, wind speed, and other relevant information.
- Supports searching for weather information for different locations.
- Provides a clean and user-friendly interface.

### Technologies Used:
- Vite.js
- React.js
- OpenWeatherApp API

### Instructions to Deploy:

#### Prerequisites:
- Node.js installed on your machine
- OpenWeatherApp API key

#### Steps:
1. **Clone the Repository:**
    ```
    git clone <repository-url>
    ```

2. **Install Dependencies:**
    ```
    cd weather-app
    npm install
    ```

3. **Set up Environment Variables:**
    - Rename the `.env.example` file to `.env`.
    - Set your OpenWeatherApp API key in the `.env` file:
        ```
        REACT_APP_API_KEY=your_api_key_here
        ```

4. **Run the Application:**
    ```
    npm start
    ```

5. **Access the Application:**
    - Once the application is running, you can access it through your web browser at `http://localhost:3000` by default.

6. **Explore the Weather:**
    - Use the search functionality to look up weather information for different locations.
    - Enjoy real-time weather updates!


### Acknowledgements:
- This application is powered by the OpenWeatherApp API.
- Thanks to Vite.js and React.js for providing powerful tools for web development.

### Issues and Contributions:
- If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on GitHub.

