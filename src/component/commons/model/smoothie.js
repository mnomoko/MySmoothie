import FRUITS from "../data/fruits";
import JUICES from "../data/juices";

export default class Smoothie {

    name: String;
    fruits: FRUITS[];
    jus: JUICES;
    description: String;

    constructor(name: String, fruits: FRUITS[], jus: JUICES, description: String) {
        this.name = name;
        this.fruits = fruits;
        this.jus = jus;
        this.description = description;
    }
}