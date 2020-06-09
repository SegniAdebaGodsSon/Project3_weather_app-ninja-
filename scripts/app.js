// DOM MANIPULATION

const cityForm = document.querySelector('form');    // We have only one form
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // or this way
    // ========= DESTRUCTURING PROPERTIES =========
    // the variable names and city names has to be the same
    const {cityDets, weather} = data
    


    // updata details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;c</span>
        </div>
    `;

    // updte the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }else{
    //     timeSrc = 'img/night.svg';
    // }

    // ======== USING TERNARY OPERATOR ========
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);



    // remove the d-none class if present, make the card visible
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none'); 
    }


};



const updateCity = async (city) => {
    // _____________________________________________________________________
    // we can call these functions because we have imported the forecast.js file ...
    // ... before the app.js file in index.html
    // _____________________________________________________________________
 
    // we call these functions asncronously because they take some time to finish
    // ... because they return a promise
    const cityDets = await getCity(city);           
    const weather = await getWeather(cityDets.Key);


    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };

    // ========= OBJECT SHORTHAND NOTATION =========
    // same as above, when the property name === property value
    return { cityDets, weather }
};





cityForm.addEventListener('submit', e => {
    // prevent the default page refreshing when on submit
    e.preventDefault();

    // get input
    const city = cityForm.city.value.trim();         // Either use name or class ... we use name here
    cityForm.reset();

    // update the ui with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});