import { GOUTS } from './constants';

const JUICES = {
  ORANGE: { code: "orange", name: "Jus d'orange",  gout: GOUTS.ACIDE },
  CITRON: { code: "citron", name: "Jus de citron", gout: GOUTS.ACIDE },
  ANANAS: { code: "ananas", name: "Jus d'ananas",  gout: GOUTS.ACIDE },
  POMME: { code: "pomme", name: "Jus de pomme",  gout: GOUTS.SUCRE },
  LAIT_COCO: { code: "coco", name: "Lait de coco",  gout: GOUTS.SUCRE }
};

class Juice {
    getByCode(code) {
        switch (code) {
            case 'orange': return JUICES.ORANGE;
            case 'citron': return JUICES.CITRON;
            case 'ananas': return JUICES.ANANAS;
            case 'coco': return JUICES.LAIT_COCO;
            case 'pomme':
            default:
                return JUICES.POMME;
        }
    }
}

export { JUICES, Juice };