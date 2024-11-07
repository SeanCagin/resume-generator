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
];

const defaultExperience = [
  {
    name: "The Draccus Incident",
    field: "Warrior, Romantic interest",
    location: "Treborn and its surroundings",
    startDate: "Lannis 2024",
    endDate: "Lannis 2024",
    description: `Kvothe and Denna find a Draccus. 
Denna accidentally eats drugs in a cave. 
If memory serves correctly, this was one of the most romantic events in the entire series.`,
    onGoing: false,
    id: 0,
  },
  {
    name: "Ademre",
    field: "Student of the Sword Arts",
    location: "Haert",
    startDate: "Equis 2025",
    endDate: "Solace 2025",
    description: `Kvothe ventures off into the land of the Adem — a place where diverse experiences gain a whole new meaning. 
      He left an accomplished swordsman, although his abilities pale in comparison to the best among the Adem.`,
    onGoing: false,
    id: 1,
  },
];

export { defaultContact, defaultEducation, defaultExperience };
