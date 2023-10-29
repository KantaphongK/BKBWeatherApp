export const geoApiOptions = {
  params: {
    namePrefixDefaultLangResults: "true",
  },
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0ad9612381mshd2f4a3ec2c2540bp10ea15jsne4e6ed79c612",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "aee6164890661722cfe9382a7c475a38";

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
//   headers: {
//     "X-RapidAPI-Key": "0ad9612381mshd2f4a3ec2c2540bp10ea15jsne4e6ed79c612",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
