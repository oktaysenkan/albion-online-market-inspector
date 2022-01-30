import axios from 'axios';
var http = axios.create({
    baseURL: 'https://www.albion-online-data.com/api/v2/',
    timeout: 5000
});
export default http;
//# sourceMappingURL=http.js.map