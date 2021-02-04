import axios from 'axios';

function getData(){
  return axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*');
}

export default getData;