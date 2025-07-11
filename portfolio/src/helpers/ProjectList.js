import bowshop from "../Assets/bow.PNG"
import leaflet from "../Assets/leaflet.PNG"
import reactWeather from "../Assets/React-weather.PNG"
import movienative from "../Assets/movie-native.PNG"
import crypto from "../Assets/crypto.PNG"
import youtube from "../Assets/youtube.PNG"
import ReviewApp from '../Assets/ReviewApp.jpg'
export const projectList = [
    {
        name: "Bowshop app",
        image: bowshop,
        skills: "Javascript, HTML, CSS, NodeJS, ExpressJS, MongoDB",
        about: "Uses CRUD operations and displays items to the screen",
        link: "https://github.com/Eero556/Bowshop/blob/main/OMA-projekti/Dokumentaatio/Dokumentaatio.md",
        video: "https://www.veed.io/embed/99867d54-432d-4750-a20b-8ac7b0dd3c87",
        videoLink:"https://www.veed.io/view/99867d54-432d-4750-a20b-8ac7b0dd3c87?panel=share",
        date:"11.12.2021"
    },
    {
        name: "Golfcourses app",
        skills: "React, Leaflet, Json server, Axios",
        about:"Using leaflet library and getting data using axios. Displaying markers with gotten data",
        image: leaflet,
        link: "https://github.com/Eero556/React-apps/tree/main/Homework/golfcourses",
        video: "https://www.veed.io/embed/b29af46d-6943-4898-a473-148f258143bc",
        videoLink:"https://www.veed.io/view/b29af46d-6943-4898-a473-148f258143bc?panel=share",
        date:"20.8.2022"
    },
    {
        name:"Weather app",
        skills:"React, Axios, OpenWeather api",
        about: "Using Openweather to get data and displaying it to the user",
        image: reactWeather,
        link: "https://github.com/Eero556/React-apps/tree/main/Homework/weather-app",
        video: "https://www.veed.io/embed/357b0037-17a0-45fa-9831-66e2c533eab9",
        videoLink:"https://www.veed.io/view/357b0037-17a0-45fa-9831-66e2c533eab9?panel=share",
        date:"25.8.2022"
    },
    {
        name:"MovieDB app",
        skills:"React native, Axios, MovieDB api",
        about: "Using MovieDB api and getting data using axios. Display data to the user. You can search movies using the search bar",
        image: movienative,
        link: "https://github.com/Eero556/React-native-apps/tree/main/Homework/Movies",
        video: "https://www.veed.io/embed/3cb363b2-fb3c-4d09-b818-01825b012465",
        videoLink:"https://www.veed.io/view/3cb363b2-fb3c-4d09-b818-01825b012465?panel=share",
        date:"10.9.2020"

    },
    {
        name:"Crypto tracker",
        image: crypto,
        skills: "React, CSS, PostgreSQL, NodeJs,ExpressJs, ChartJs",
        about: "Tracking crypto coins prices",
        link: "https://github.com/Eero556/Crypto-Tracker/blob/main/Doku/dokumentation.md",
        video: "https://veed.io/embed/3d1b237d-01e4-4ac5-b949-4e17d2f88c18",
        videoLink:"https://www.veed.io/view/3d1b237d-01e4-4ac5-b949-4e17d2f88c18?panel=share",
        date:"8.12.2022"
    },
    {
        name:"Youtube2mp3",
        skills:"React, Typescript, AWS, CSS",
        image: youtube,
        about: "Simple app to make mp3 files from youtube videos + aws hosting",
        link: "https://github.com/Eero556/Youtube2mp3/tree/main",
        video:"https://www.veed.io/embed/600a8e62-eb94-4267-bc3f-f9a140a10bbf",
        date: "14.1.2023"

    },
    {
        name:"ReviewApp",
        skills:"React Native, Typescript, NestJS, PostgreSQL",
        image: ReviewApp,
        about: "Make ReviewApp where users can comment and make reviews",
        link: "https://github.com/Eero28/ReviewApp",
        video:"",
        date: "5.1.2025"

    },
    {
        name: "Coming soon!"
    }
]