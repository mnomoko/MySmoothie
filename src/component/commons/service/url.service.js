const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;

class UrlService {
    getApiUrl() {
        function getApiPort() {
            return API_PORT ? `:${API_PORT}` : '';
        }

        return `${API_URL}${getApiPort()}`;
    }

    getPostData = (data) => {
        return {
            method: 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        }
    };
}
export default new UrlService();