const defaultContact = {
  firstName: "Kvothe",
  lastName: "Son of Arliden",
  location: "Waystone Inn, Newarre",
  phone: "777-777-7777",
  email: "cuz3@gatech.edu",
  linkedin: "linkedin.com/in/cagin-uz",
  github: "github.com/seancagin",
};

const defaultEducation = [
  {
    name: "The University",
    field: "god at everything",
    location: "Commonwealth",
    startDate: "Thaw 2023",
    endDate: "",
    description: "4.0 GPA",
    onGoing: true,
    id: 0,
  },
  {
    name: "The Streets of Tarbean",
    field: "Trying to Survive",
    location: "Tarbean",
    startDate: "Thaw 2016",
    endDate: "Dearth 2022",
    description: "3.2 GPA",
    onGoing: false,
    id: 1,
  },
  {
    name: "Ademre",
    field: "Student of the Sword Arts",
    location: "Haert",
    startDate: "Equis 2025",
    endDate: "Solace 2025",
    description: `GPA: 2.7
I venture off into the land of the Adem — a place where diverse experiences gain a whole new meaning. 
I leave an accomplished swordsman, although my abilities pale in comparison to the best among the Adem.`,
    onGoing: false,
    id: 2,
  },
];

const defaultExperience = [
  {
    name: "The Draccus Incident",
    field: "Warrior, Romantic interest",
    location: "Treborn and its surroundings",
    startDate: "Lannis 2024",
    endDate: "Lannis 2024",
    description: `Denna and I find a Draccus. 
Denna accidentally eats drugs in a cave. 
That night, waiting out the Dracus with her on a huge boulder, I fall in love with Denna.
Just kidding, it was love at first sight!`,
    onGoing: false,
    id: 0,
  },
  {
    name: "Adventures in Vintas",
    field: "Maer Alveron's Rizzler",
    location: "Vintas",
    startDate: "I got tired of making up dates",
    endDate: "yesterday",
    description: `Maer Alveron needed my help with a 'secret' task.
I have a whole arc with Denna and her abusive master.
I also have a love-hate relationship with Alveron. Though mostly love.
I win over Alveron's girl.
Alveron, intimated by my insane rizz sends me off to a deadly mission.
I don't die because Technoblade never dies.
I come back and meet the woman I won over for Alveron.
She is the most racist person in Vintas.
Alveron exiles me full of shame and I return home.
I wonder how long it will take for them to divorce...`,
    onGoing: true,
  },
  {
    name: "Felurian",
    field: "Rothfuss's deepest desires",
    location: "The Faen Realm",
    startDate: "an eternity",
    endDate: "sometime in the future",
    description: `Felurian appeared and I chased her into her realm.
She is a magical create and time does not pass normally there.
Felurian and I do stuff there. A lot.
I can't quite seem to remember what! Funny how memory works... You're more than welcome to find out yourself though.
I learn many valuable skills like .
I also meet a weird tree thing that gives me Major Depressive Disorder.`,
    onGoing: false,
  },
];

export { defaultContact, defaultEducation, defaultExperience };
