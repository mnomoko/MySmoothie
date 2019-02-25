
class FruitService {
    static getFruits = async () => {
        return await fetch(`http://localhost:4000/api/v1/fruits`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };

    static getFruitById = async (id) => {
        return await fetch(`http://localhost:4000/api/v1/fruits/${id}`).then(async (res) => await res.json()).catch(async (err) => await err.json());
    };
}

export default FruitService;