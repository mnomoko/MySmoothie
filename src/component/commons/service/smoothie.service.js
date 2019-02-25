
class SmoothieService {
    static getSmoothies = async () => {
        return await fetch(`http://localhost:4000/api/v1/smoothies`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };

    static getSmoothieById = async (id) => {
        return await fetch(`http://localhost:4000/api/v1/smoothies/${id}`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };
}

export default SmoothieService;