/* eslint-disable prettier/prettier */
export const animals = [
  "albatros",
  "aligator",
  "alpaka",
  "mrówka",
  "mrówkojad",
  "antylopa",
  "pancernik",
  "borsuk",
  "barrakuda",
  "nietoperz",
  "niedźwiedź",
  "pszczoła",
  "bizon",
  "bawół",
  "motyl",
  "wielbłąd",
  "kapibara",
  "karibu",
  "kot",
  "gąsienica",
  "gepard",
  "szynszyl",
  "kobra",
  "kormoran",
  "kojot",
  "krab",
  "żuraw",
  "krokodyl",
  "jeleń",
  "dinozaur",
  "delfin",
  "gołąb",
  "ważka",
  "kaczka",
  "orzeł",
  "dziobak",
  "słoń",
  "łoś",
  "emu",
  "sokół",
  "fretka",
  "ryba",
  "flaming",
  "lis",
  "gazela",
  "żyrafa",
  "dzięcioł",
  "złoty bażant",
  "złota rybka",
  "goryl",
  "konik",
  "sójka",
  "chomik",
  "zając",
  "jastrząb",
  "jeż",
  "śledź",
  "hipopotam",
  "szerszeń",
  "koń",
  "koliber",
  "koza",
  "jaguar",
  "sójka",
  "meduza",
  "kangur",
  "królik",
  "koza",
  "krab",
  "kuna",
  "kameleon",
  "kos",
  "łabędź",
  "tygrys",
  "wieloryb",
  "wilk",
  "rosomak",
  "wombat",
  "bekas",
  "zebra",
];

export const adjectives = [
  "absolutny",
  "uroczy",
  "śmiały",
  "uznany",
  "doświadczony",
  "dokładny",
  "akrobatyczny",
  "aktywny",
  "rzeczywisty",
  "biegły",
  "godny podziwu",
  "podziwiany",
  "nastoletni",
  "uroczy",
  "ukochany",
  "zaawansowany",
  "czuły",
  "zwinny",
  "czujny",
  "żywy",
  "altruistyczny",
  "niesamowity",
  "ambitny",
  "rozbawiony",
  "rozrywkowy",
  "starożytny",
  "animowany",
  "antyczny",
  "nieśmiały",
  "zdolny",
  "arktyczny",
  "artystyczny",
  "pewny siebie",
  "zdumiewający",
  "sprawny",
  "uważny",
  "atrakcyjny",
  "autentyczny",
  "upoważniony",
  "automatyczny",
  "fantastyczny",
  "piękny",
  "ukochany",
  "korzystny",
  "duży",
  "błogi",
  "niebieski",
  "śmiały",
  "skoczny",
  "odważny",
  "jasny",
  "błyszczący",
  "genialny",
  "złoty",
  "wdzięczny",
  "łaskawy",
  "wielki",
  "zielony",
  "ręcznie robiony",
  "przystojny",
  "przydatny",
  "szczęśliwy",
  "harmonijny",
  "zdrowy",
  "serdeczny",
  "szlachetny",
  "obdarzony wyobraźnią",
  "porywający",
  "imponujący",
  "niezrównany",
  "niewiarygodny",
  "niechciany",
  "niewinny",
  "radosny",
  "pełen radości",
  "uradowany",
  "lśniący",
  "wspaniały",
  "majestatyczny",
  "ważny",
  "miętowy",
  "nowoczesny",
  "tajemniczy",
  "optymistyczny",
  "pomarańczowy",
  "uporządkowany",
  "ozdobny",
  "oryginalny",
  "wybitny",
  "namiętny",
  "spokojny",
  "zadowolony",
  "pozytywny",
  "potężny",
  "produktywny",
  "dumny",
  "fioletowy",
  "zdezorientowany",
  "rzeczywisty",
  "rozsądny",
  "godny zaufania",
  "niezwykły",
  "niepowtarzalny",
  "pełen wigoru",
  "atłasowy",
  "czebura",
  "sprawiedliwy",
  "godny zaufania",
  "prawdziwy",
  "prawdziwy",
  "najlepszy",
  "niezwykły",
  "unikalny",
  "pełen wigoru",
  "atłasowy",
  "czczony",
  "sprawdzalny",
  "promienny",
  "zwycięski",
  "czujny",
  "energiczny",
  "fioletowy",
  "cnotliwy",
  "istotny",
  "ciepły",
  "serdeczny",
  "czujny",
  "cały",
  "mądry",
  "taktowny",
  "wspaniały",
  "żarliwy",
];

const sample = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const upperFirst = (str: string) => str[0].toUpperCase() + str.slice(1);

export const getRandomUsername = () => {
  const randomAnimal = sample(animals);
  const randomAdjective = sample(adjectives);

  // Sprawdź, czy ostatnia litera zwierzęcia to "a"
  const lastLetterIsA =
    randomAnimal.charAt(randomAnimal.length - 1).toLowerCase() === "a";

  // Jeśli ostatnia litera zwierzęcia to "a", zamień ostatnią literę przymiotnika na "a" za pomocą template literals
  const modifiedAdjective = lastLetterIsA
    ? `${randomAdjective.slice(0, -1)}a`
    : randomAdjective;

  return `${upperFirst(modifiedAdjective)} ${upperFirst(randomAnimal)}`;
};
