var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=33d4d7da9b654ca93ed8af4b3746eb80';

//33d4d7da9b654ca93ed8af4b3746eb80

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

//     return axios.get(requestUrl).then(function(res){
//
//       if(res.response.data.cod && res.response.data.message){
//         throw new Error(res.response.data.message);
//       }else{
//         return res.data.main.temp;
//       }
//     }, function(res){
//       throw new Error(res.response.data.message);
//     });
//   }
// }
    return axios.get(requestUrl).then(function(res) {
            if (res.data.cod === 200){
                return JSON.stringify(res.data.main.temp);
            }
            throw res.data.cod;
        },function(res){
            throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
        });
    }
  }
