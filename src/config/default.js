export default {
  consts: {
    grades: {
      four: [
        { name: 'První', value: '1-4' },
        { name: 'Druhý', value: '2-4' },
        { name: 'Třetí', value: '3-4' },
        { name: 'Čtvrtý', value: '4-4' }
      ],
      six: [
        { name: 'První', value: '1-6' },
        { name: 'Druhý', value: '2-6' },
        { name: 'Třetí', value: '3-6' },
        { name: 'Čtvrtý', value: '4-6' },
        { name: 'Pátý', value: '5-6' },
        { name: 'Šestý', value: '6-6' }
      ],
      eight: [
        { name: 'První', value: '1-8' },
        { name: 'Druhý', value: '2-8' },
        { name: 'Třetí', value: '3-8' },
        { name: 'Čtvrtý', value: '4-8' },
        { name: 'Pátý', value: '5-8' },
        { name: 'Šestý', value: '6-8' },
        { name: 'Sedmý', value: '7-8' },
        { name: 'Osmý', value: '8-8' }
      ]
    },
    jobs: ['student', 'učitel', 'organizátor mimoškolních aktivit', 'prostě návštěvník'],
    regions: [ 'Praha', 'Středočeský', 'Jihočeský', 'Plzeňský', 'Karlovarský', 'Ústecký', 'Liberecký', 'Královéhradecký', 'Pardubický', 'Vysočina', 'Jihomoravský', 'Olomoucký', 'Moravskoslezský', 'Zlínský' ],
    knowledge: ['ze školy', 'od kamaráda', 'z plakátu', 'z Instagramu', 'z Facebooku', 'z médií', 'jinak'],
    // database
    interestsMapping: {
      nature: [
        { name: 'Matematika', short: 'MAT' },
        { name: 'Fyzika', short: 'FYZ' },
        { name: 'Biologie', short: 'BIO' },
        { name: 'Chemie', short: 'CHE' },
        { name: 'Geologie', short: 'GEO' },
        { name: 'Zeměpis', short: 'ZEM' },
        { name: 'Astronomie', short: 'AST' }
      ],
      sport: [
        { name: 'Týmový', short: 'TYS' },
        { name: 'Individuální', short: 'INS' }
      ],
      business: [
        { name: 'Ekonomie', short: 'EKO' },
        { name: 'Marketing', short: 'POD' },
        { name: 'Byznys', short: 'BYZ' }
      ],
      art: [
        { name: 'Hudba', short: 'HUD' },
        { name: 'Výtvarné umění', short: 'VYT' },
        { name: 'Literatura, poezie', short: 'LIT' },
        { name: 'Herectví', short: 'HER' },
        { name: 'Tanec', short: 'TAN' }
      ],
      humanity: [
        { name: 'Psychologie', short: 'PSY' },
        { name: 'Sociologie', short: 'SOC' },
        { name: 'Právo', short: 'PRA' },
        { name: 'Historie', short: 'HIS' },
        { name: 'Politologie a mezinárodní vztahy', short: 'POL' }
      ],
      language: [
        { name: 'Cizí jazyky', short: 'JAZ' },
        { name: 'Řečnictví', short: 'REC' },
        { name: 'Prezentační dovednosti', short: 'PRE' },
        { name: 'Žurnalistika', short: 'ZUR' }
      ],
      it: [
        { name: 'IT a robotika', short: 'ITS' }
      ],
      other: [
        { name: 'Ostatní', short: 'OST' }
      ]
    },
    // form registration (Change?!)
    interests: [
      { name: 'Hudba', short: 'HUD' },
      { name: 'Výtvarné umění', short: 'VYT' },
      { name: 'Literatura, poezie', short: 'LIT' },
      { name: 'Herectví', short: 'HER' },
      { name: 'Tanec', short: 'TAN' },
      { name: 'Psychologie', short: 'PSY' },
      { name: 'Sociologie', short: 'SOC' },
      { name: 'Matematika', short: 'MAT' },
      { name: 'IT a robotika', short: 'ITS' },
      { name: 'Fyzika', short: 'FYZ' },
      { name: 'Biologie', short: 'BIO' },
      { name: 'Chemie', short: 'CHE' },
      { name: 'Geologie', short: 'GEO' },
      { name: 'Zeměpis', short: 'ZEM' },
      { name: 'Astronomie', short: 'AST' },
      { name: 'Ekonomie', short: 'EKO' },
      { name: 'Marketing', short: 'MAR' },
      { name: 'Byznys', short: 'BYZ' },
      { name: 'Cizí jazyky', short: 'JAZ' },
      { name: 'Právo', short: 'PRA' },
      { name: 'Historie', short: 'HIS' },
      { name: 'Podnikání', short: 'POD' },
      { name: 'Politologie a mezinárodní vztahy', short: 'POL' },
      { name: 'Řečnictví', short: 'REC' },
      { name: 'Prezentační dovednosti', short: 'PRE' },
      { name: 'Žurnalistika', short: 'ZUR' },
      { name: 'Týmový sport', short: 'TYS' },
      { name: 'Individuální sport', short: 'INS' },
      { name: 'Dobrovolnictví', short: 'DOB' },
      { name: 'Ostatní', short: 'OST' }
    ],
    types: [
      { name: 'contest', full: 'Soutěž', short: 'SO' },
      { name: 'course', full: 'Vzdělávací kurz', short: 'VK' },
      { name: 'program', full: 'Dlouhodobý program', short: 'PR' },
      { name: 'conference', full: 'Konference/Event', short: 'EV' },
      { name: 'other', full: 'Ostatní', short: 'OS' }
    ],
    ageGroups: [
      { full: 'Základní škola', short: 'ZŠ' },
      { full: 'Střední škola', short: 'SŠ' },
      { full: 'Vysoká škola', short: 'VŠ' }
    ],
    logos: [
      { name: 'Jazyky', full: 'languages.jpg' },
      { name: 'IT', full: 'it.jpg' },
      { name: 'Přírodní vědy', full: 'science.jpg' },
      { name: 'Společenské vědy', full: 'social.jpg' },
      { name: 'Uměni', full: 'art.jpg' },
      { name: 'Byznys', full: 'business.jpg' },
      { name: 'Sport', full: 'sport.jpg' },
      { name: 'Ostatní', full: 'other.jpg' }
    ],
    logoUrl: 'https://s3.amazonaws.com/prostredoskolaky-devel/activities-images',
    statuses: ['active', 'inactive'],
    weights: [1, 2, 3],
    prices: ['zdarma', 'placené'],
    nationalities: ['domácí', 'zahraniční'],
    groups: ['individuální', 'týmové'],
    periods: [
      { full: 'leden', short: 1 },
      { full: 'únor', short: 2 },
      { full: 'březen', short: 3 },
      { full: 'duben', short: 4 },
      { full: 'květen', short: 5 },
      { full: 'červen', short: 6 },
      { full: 'červenec', short: 7 },
      { full: 'srpen', short: 8 },
      { full: 'září', short: 9 },
      { full: 'říjen', short: 10 },
      { full: 'listopad', short: 11 },
      { full: 'prosinec', short: 12 },
      { full: 'během celého roku', short: 0 }
    ],
    descriptionMaxLength: 500,
    reportMaxLength: 500
  },
  errors: {
    type: 'is-danger',
    required: 'Pole je povinné',
    requiredActivity: 'Vyplň alespoň jednu aktivitu',
    requiredTerms: 'Před odesláním přihlášky musíš souhlasit s pravidly soutěže.',
    passwordsNotMatch: 'Hesla se neshodují',
    email: 'Email musí být zadán ve správném formátu.'
  },
  errorMessages: {
    email: {
      required: 'Email je povinný.',
      format: 'Email musí být zadán ve správném formátu.'
    },
    linkedin: {
      url: 'Neni url'
    }
  },
  database: {
    activitiesPerPage: 12
  },
  errorMapping: {
    500: 'Aktivitu se nepodařilo uložit. Zkuste to prosím znovu.'
  },
  loginErrorMapping: {
    'auth/wrong-password': 'Zadané heslo je nesprávné',
    'auth/invalid-password': 'Zadaný email nebo heslo jsou nesprávné',
    'auth/too-many-requests': 'Příliš mnoho špatných pokusů. Zkuste to prosím později.',
    'auth/email-already-exists': 'Email je již zaregistrován',
    'auth/email-already-in-use': 'Email je  již používán jiným účtem',
    'auth/internal-error': 'Interní problém. Zkuste to prosím později.',
    'auth/invalid-email': 'Zadaný email nebo heslo jsou nesprávné',
    'auth/user-not-found': 'Zadaný email není registrovaný',
    'auth/weak-password': 'Heslo musí obsahovat alespoň 6 znaků',
    'default': 'Něco se nepovedlo. Zkuste to prosím později.'
  },
  defaultErrorMessage: 'Aktivitu se nepodařilo uložit. Zkuste to prosím znovu.'
}
