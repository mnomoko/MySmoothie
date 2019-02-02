import {GOUTS, TYPES} from './constants';

let FRUITS = {
    ABRICOT: {
        "id": 1,
        "name": "Abricot",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Dénoyautez et coupez l'abricot en morceaux"
    },
    ANANAS: {
        "id": 2,
        "name": "Ananas",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE, GOUTS.ACIDE],
        "preparation": "Epeluchez et coupez l'ananas en morceaux"
    },
    AVOCAT: {
        "id": 3,
        "name": "Avocat",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SALE, GOUTS.AMER],
        "preparation": "Epeluchez, dénoyautez et coupez les avocats en morceaux"
    },
    BANANE: {
        "id": 4,
        "name": "Banane",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Epelez et coupez le banane en morceaux"
    },
    BETTERAVE: {
        "id": 5,
        "name": "Betterave",
        "type": TYPES.LEGUME,
        "gout": [GOUTS.SALE],
        "preparation": "Epeluchez et coupez les bétteraves rouges en morceaux"
    },
    CAROTTE: {
        "id": 6,
        "name": "Carotte",
        "type": TYPES.LEGUME,
        "gout": [GOUTS.SALE],
        "preparation": "Epeluchez et coupez la carotte en morceaux"
    },
    CITRON_JAUNE: {
        "id": 7,
        "name": "Citron jaune",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SALE],
        "preparation": "Epeluchez et coupez le citron en morceaux"
    },
    CITRON_VERT: {
        "id": 8,
        "name": "Citron vert",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SALE],
        "preparation": "Epeluchez et coupez le citron en morceaux"
    },
    CONCOMBRE: {
        "id": 9,
        "name": "Concombre",
        "type": TYPES.LEGUME,
        "gout": [GOUTS.SALE],
        "preparation": "Epeluchez et coupez le concombre en morceaux"
    },
    CONCOURS: {
        "id": 10,
        "name": "Concours",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SALE],
        "preparation": ""
    },
    CORIANDRE: {
        "id": 11,
        "name": "Coriandre", 
        "type": TYPES.LEGUME,
        "gout": [GOUTS.SALE],
        "preparation": "Ajoutez 3 à 4 feuilles"
    },
    FIGUE: {
        "id": 12,
        "name": "Figue",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "coupez la figue en morceaux"
    },
    FRUIT_DE_LA_PASSION: {
        "id": 13,
        "name": "Fruit de la passion",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Coupez le fruit en deux puis récupérez sa pulpe à l'aide d'une cuillère"
    },
    CANNEBERGE: {
        "id": 14,
        "name": "Canneberge",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Coupez les canneberges en deux pour en enlever les pépins"
    },
    CASSIS: {
        "id": 15,
        "name": "Cassis",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Coupez les cassis en deux pour en enlever les pépins"
    },
    CERISE: {
        "id": 16,
        "name": "Cerise",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Coupez les cassis en deux pour en enlever les pépins"
    },
    FRAISE: {
        "id": 17,
        "name": "Fraise",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Coupez la partie haute de la fraise"
    },
    FRAMBOISE: {
        "id": 18,
        "name": "Framboise",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE, GOUTS.ACIDE],
        "preparation": "(optionnel) Coupez la partie haute de la framboise"
    },
    GROSEILLE: {
        "id": 19,
        "name": "Groseille",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Coupez les groseilles en deux pour en enlever les pépins"
    },
    MURE: {
        "id": 20,
        "name": "Mûre",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Mixez les mures et passez les au chinois pour retirer les pépins"
    },
    MYRTILLE: {
        "id": 21,
        "name": "myrtille",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Mixez les myrtilles et passez les au chinois pour retirer les pépins"
    },
    GINGEMBRE: {
        "id": 22,
        "name": "Gingembre",
        "type": "tubercule",
        "gout": [GOUTS.ACIDE, GOUTS.AMER],
        "preparation": "Epelez le gingembre et coupez le gingembre en morceau"
    },
    GRENADE: {
        "id": 23,
        "name": "Grenade",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Épluchez, coupez et mixez les grenades en utilisant un tamis (pour enlever les grains de grenade)"
    },
    KAKI: {
        "id": 24,
        "name": "Kaki",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez les kakis en morceaux"
    },
    KIWI: {
        "id": 25,
        "name": "Kiwi",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez les kiwis en morceaux"
    },
    LITCHI: {
        "id": 26,
        "name": "Litchi",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et dénoyautez les litchis"
    },
    MANGUE: {
        "id": 27,
        "name": "Mangue",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez la mangue en morceaux"
    },
    MELON: {
        "id": 28,
        "name": "Melon",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez le melon en morceaux"
    },
    MENTHE: {
        "id": 29,
        "name": "Menthe",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Ajoutez 3 à 4 feuilles de menthes"
    },
    MIRABELLE: {
        "id": 30,
        "name": "Mirabelle",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Epeluchez et coupez la pomme en morceaux"
    },
    NOIX_DE_COCO: {
        "id": 31,
        "name": "Noix de coco",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Ajoutez 15cl de lait de coco"
    },
    ORANGE: {
        "id": 32,
        "name": "Orange",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE, GOUTS.ACIDE],
        "preparation": "Pelez et coupez l'orange en morceaux"
    },
    ORANGE_SANGUINE: {
        "id": 33,
        "name": "Orange sanguine",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE, GOUTS.ACIDE],
        "preparation": "Pelez et coupez l'orange en morceaux"
    },
    PAMPLEMOUSSE: {
        "id": 34,
        "name": "Pamplemousse",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE, GOUTS.ACIDE],
        "preparation": "Pelez et coupez la pamplemousse en morceaux"
    },
    PAPAYE: {
        "id": 35,
        "name": "Papaye",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez, enlever les pépins et coupez la papaye en morceaux"
    },
    PASTEQUE: {
        "id": 36,
        "name": "Pastèque",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Coupez la pastèque en deux, coupez y des petits morceaux en prenant soin d'enlever les pépins "
    },
    NECTARINE: {
        "id": 37,
        "name": "Nectarine",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez la nectarine en morceaux"
    },
    PECHE_BLANCHE: {
        "id": 38,
        "name": "Pêche blanche",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez la pêche en morceaux"
    },
    PECHE_JAUNE: {
        "id": 39,
        "name": "Pêche jaune",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez la pêche en morceaux"},
    POIRE: {
        "id": 40,
        "name": "Poire",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez la poire en morceaux"
    },
    POMME: {
        "id": 41,
        "name": "Pomme",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Pelez et coupez la pomme en morceaux"
    },
    RAISIN: {
        "id": 42,
        "name": "Raisin",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "(optionnel) Coupez les raisins en deux pour en enlever les pépins"
    },
    RHUBARBE: {
        "id": 43,
        "name": "Rhubarbe",
        "type": TYPES.LEGUME,
        "gout": [GOUTS.SALE],
        "preparation": "Pelez et coupez la rhubarbe en morceaux"
    },
    ROSE: {
        "id": 44,
        "name": "Rose",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE],
        "preparation": "Ajoutez 3 à 4 feuilles de rose"
    },
    TOMATE: {
        "id": 45,
        "name": "Tomate",
        "type": TYPES.FRUIT,
        "gout": [GOUTS.SUCRE, GOUTS.ACIDE],
        "preparation": "Pelez et coupez la tomate en morceaux"
    }
};

export default FRUITS;