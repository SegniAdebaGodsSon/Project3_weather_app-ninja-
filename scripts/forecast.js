const key = 'dA3F3dxI9UzaYFAe8WMbdIkBkGwPiiSu';


//  GET CITY INFORMATION
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    
    return data[0];
};


// GET WEATHER INFORMATION
const getWeather = async (locID) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locID}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();


    return data[0];

};



getCity('tokyo')                           
    .then(data => {        
        return getWeather(data.Key);                    // RETURNS A PROMISE
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err));


