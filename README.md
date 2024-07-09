# Weather App

This project consists of a simple, quite minimalistic weather forecast website. It features current weather depending on the localization, 24h forecast and some indicators like probability of rain, humidity or air quality. It has been designed using React with Typescript. All weather data is fetched from WeatherAPI and for the flags, FlagsAPI has been used. The app is integrated with Redux so that the user preferences are saved and due to connection with local storage, they do not disappear on website reload. Some other packages used in the project and worth mentioning are:
* i18next - providing translations for the application, currently available languages are English and Polish.
* Recharts - The forecast temperature chart was created using this simple chart building library.
* Styled components - Allows to easily style React components and manage application theme.
* React modern drawer - Used to design the drawer containing application settings,

## Features

Setting any city available in WeatherAPI database as the current location:

![Nagraniezekranu2024-07-9o12 57 03-ezgif com-video-to-gif-converter](https://github.com/gredajustyna/WeatherApp/assets/83274413/4ca7bfed-9671-4830-b75a-9ff73c138ce4)


Toggle between light and dark mode:

![Nagraniezekranu2024-07-9o13 07 45-ezgif com-video-to-gif-converter](https://github.com/gredajustyna/WeatherApp/assets/83274413/eac1d38e-ce8b-40f2-8d3f-387b17615d3f)


Switching from Celsius to Fahrenheit scale:

![Nagraniezekranu2024-07-9o13 13 03-ezgif com-video-to-gif-converter](https://github.com/gredajustyna/WeatherApp/assets/83274413/524c6f29-34c2-4411-8c9a-c72946b108be)


Fetching current localization and the forecast for it:

![Nagraniezekranu2024-07-9o13 15 32-ezgif com-video-to-gif-converter](https://github.com/gredajustyna/WeatherApp/assets/83274413/3b397221-4680-4fc5-be3f-f0eb6a16c7bf)


## How to run
* Clone the repository
* `cd weather-app`
* `yarn` and `yarn start`
