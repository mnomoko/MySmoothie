import UrlService from './url.service';

class SmoothieService {
    static getSmoothies = async () => {
        return await fetch(`${UrlService.getApiUrl()}/api/v1/smoothies`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };

    static getSmoothieById = async (id) => {
        return await fetch(`${UrlService.getApiUrl()}/api/v1/smoothies/${id}`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };

    static createSmoothie = async (data) => {
        const post = UrlService.getPostData(data);
        return await fetch(`${UrlService.getApiUrl()}/api/v1/smoothies`, post).then(res => {
            return res.json()
        }).catch(err => {
            return err;
        });
    }
}

export default SmoothieService;