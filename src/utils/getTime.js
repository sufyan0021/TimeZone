import axios from 'axios';

function getTime(timeZone){
  return axios.get(`http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=${timeZone}`);
}

export default getTime;