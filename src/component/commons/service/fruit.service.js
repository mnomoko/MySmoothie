import UrlService from './url.service';

class FruitService {
    static getFruits = async () => {
        return await fetch(`${UrlService.getApiUrl()}/api/v1/fruits`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };

    static getFruitById = async (id) => {
        return await fetch(`${UrlService.getApiUrl()}/api/v1/fruits/${id}`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };
}

export default FruitService;