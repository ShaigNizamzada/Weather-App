# Weather App

[English](#english) | [Azərbaycan dili](#azərbaycan-dili)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)

## English

### Description

A single-page weather application built with React and Vite. The user types a location and the app shows a four-day forecast fetched from the WeatherAPI.com forecast endpoint.

### Features

- Location search through a text input
- Four-day forecast (today and the next three days)
- Each day card shows the date, the weather icon, the average temperature in °C and a short condition text
- Responsive card grid based on Bootstrap
- Animated Lottie header

### Installation and run

Requirements: Node.js and a WeatherAPI.com API key.

```bash
git clone https://github.com/ShaigNizamzada/Weather-App.git
cd Weather-App
yarn install        # or: npm install
```

Create a `.env` file in the project root and add your key:

```
VITE_WEATHER_API=your_weatherapi_key
```

Start the development server:

```bash
yarn dev            # or: npm run dev
```

Other scripts:

```bash
yarn build          # production build
yarn preview        # preview the production build
yarn lint           # run ESLint
```

### Usage examples

1. Open the app in the browser (Vite prints the local address, by default http://localhost:5173).
2. Type a city name, for example `Baku`, into the `Location...` field.
3. Four cards appear, one per day, each with the date, icon, temperature and condition.

### Project structure

```
Weather-App/
├── index.html                  HTML entry point
├── package.json                Dependencies and scripts
├── vite.config.js              Vite configuration with the React plugin
├── .eslintrc.cjs               ESLint configuration
├── yarn.lock                   Dependency lockfile
└── src/
    ├── main.jsx                Application bootstrap, global styles
    ├── App.jsx                 Main component: input, API request, forecast cards
    └── assets/sass/style.scss  Application styles
```

## Azərbaycan dili

### Təsvir

React və Vite ilə hazırlanmış tək səhifəli hava proqnozu tətbiqi. İstifadəçi məkan adını yazır, tətbiq isə WeatherAPI.com-un proqnoz endpoint-indən dörd günlük proqnozu gətirib göstərir.

### Xüsusiyyətlər

- Mətn sahəsi vasitəsilə məkan axtarışı
- Dörd günlük proqnoz (bu gün və növbəti üç gün)
- Hər gün kartında tarix, hava ikonu, orta temperatur (°C) və qısa hava təsviri göstərilir
- Bootstrap əsasında uyğunlaşan (responsive) kart şəbəkəsi
- Lottie animasiyalı başlıq

### Quraşdırma və işə salma

Tələblər: Node.js və WeatherAPI.com API açarı.

```bash
git clone https://github.com/ShaigNizamzada/Weather-App.git
cd Weather-App
yarn install        # və ya: npm install
```

Layihənin kök qovluğunda `.env` faylı yaradıb açarı əlavə et:

```
VITE_WEATHER_API=sizin_weatherapi_acariniz
```

Development serverini başlat:

```bash
yarn dev            # və ya: npm run dev
```

Digər skriptlər:

```bash
yarn build          # production build
yarn preview        # production build-in önizləməsi
yarn lint           # ESLint yoxlaması
```

### İstifadə nümunələri

1. Tətbiqi brauzerdə aç (Vite lokal ünvanı çap edir, defolt olaraq http://localhost:5173).
2. `Location...` sahəsinə şəhər adını yaz, məsələn `Baku`.
3. Hər gün üçün bir kart görünür: tarix, ikon, temperatur və hava təsviri.

### Qovluq strukturu

```
Weather-App/
├── index.html                  HTML giriş nöqtəsi
├── package.json                Asılılıqlar və skriptlər
├── vite.config.js              React plagini ilə Vite konfiqurasiyası
├── .eslintrc.cjs               ESLint konfiqurasiyası
├── yarn.lock                   Asılılıq kilid faylı
└── src/
    ├── main.jsx                Tətbiqin başladılması, qlobal stillər
    ├── App.jsx                 Əsas komponent: input, API sorğusu, proqnoz kartları
    └── assets/sass/style.scss  Tətbiq stilləri
```
