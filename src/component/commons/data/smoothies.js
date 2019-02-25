import JUICES from './juices';
import FRUITS from './fruits';

const SMOOTHIES = [
  {"name": "Banane Mangue et jus d'Ananas", "fruits": [FRUITS.BANANE, FRUITS.BANANE, FRUITS.MANGUE], "jus": JUICES.ANANAS, "description": "Ce smoothie à la fois sucré et acide est parfait pour les amoureux de la mangue et des bananes"},
  {"name": "smoothie Concombre Kiwi et jus d'Ananas", "fruits": [FRUITS.CONCOMBRE, FRUITS.KIWI, FRUITS.POMME], "jus": JUICES.LAIT_COCO, "description": "Servez le smoothie bien frais donc laissez-le au frais le temps de le servir et ajoutez une rondelle de concombre sur le rebord du verre"}
];

export default SMOOTHIES;