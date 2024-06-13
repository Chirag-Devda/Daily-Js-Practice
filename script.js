const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "083e4d8fd3msh4f04cb9550cb79ap1abe44jsn1d5c8c348a63",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
async function WeatherApi(City) {
  CityName.innerHTML = City;

  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + City;

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);

  temp.innerHTML = result.temp;
  temp2.innerHTML = result.temp;
  feels_like.innerHTML = result.feels_like;
  humidity.innerHTML = result.humidity;
  humidity2.innerHTML = result.humidity;
  min_temp.innerHTML = result.min_temp;
  max_temp.innerHTML = result.max_temp;
  wind_speed.innerHTML = result.wind_speed;
  wind_speed2.innerHTML = result.wind_speed;
  wind_degrees.innerHTML = result.wind_degrees;
  sunrise.innerHTML = result.sunrise;
  sunset.innerHTML = result.sunset;
}

var cities = [
  "New York",
  "Tokyo",
  "Paris",
  "London",
  "Los Angeles",
  "Sydney",
  "Rome",
  "Dubai",
  "Singapore",
  "Hong Kong",
];
async function PopularCities(CommonCity) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
    CommonCity;

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);

  let tbody = document.querySelector(".tbody");

  for (let index = 0; index < cities.length; index++) {
    var tr = `<tr class="rows">
      <td class="City">${CommonCity}</td>
      <td class="data">${result.cloud_pct}</td>
      <td class="data">${result.feels_like}</td>
      <td class="data">${result.humidity}</td>
      <td class="data">${result.max_temp}</td>
      <td class="data">${result.min_temp}</td>
      <td class="data">${result.sunrise}</td>
      <td class="data">${result.sunset}</td>
      <td class="data">${result.temp}</td>
      <td class="data">${result.wind_degrees}</td>
      <td class="data">${result.wind_speed}</td>
    </tr>`;
  }
  tbody.innerHTML = tbody.innerHTML + tr;
}
let submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  WeatherApi(city.value);
});
// dropdown-Country Weather
let dropdownCountry = Array.from(
  document.getElementsByClassName("dropdown-Country")
);
dropdownCountry.forEach((Country) => {
  Country.addEventListener("click", (e) => {
    WeatherApi(e.target.innerHTML);
  });
});

async function main() {
  for (let index = 0; index < cities.length; index++) {
    PopularCities(cities[index]);
  }
}
main();
