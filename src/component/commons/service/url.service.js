const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;

class UrlService {
    getApiUrl() {
        function getApiPort() {
            return API_PORT ? `:${API_PORT}` : '';
        }

        return `${API_URL}${getApiPort()}`;
    }
}
export default new UrlService();