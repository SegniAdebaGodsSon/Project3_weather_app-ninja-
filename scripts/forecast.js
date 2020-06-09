// INTERACTING WITH THE API

const key = 'ZnZNnAUhI4ram3ZTp3IqoStUKmiRsJFs';


//  GET CITY INFORMATION
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    
    return data[0];
};


// GET WEATHER INFORMATION
const getWeather = async (locID) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locID}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();


    return data[0];

};


