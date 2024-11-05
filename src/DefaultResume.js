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
    GPA: "4.0",
    field: "god at everything",
    location: "Commonwealth",
    startDate: "Thaw 2023",
    onGoing: true,
  },
  {
    name: "The Streets of Tarbean",
    GPA: "3.2",
    field: "Trying to Survive",
    location: "Tarbean",
    startDate: "Thaw 2016",
    endDate: "Dearth 2022",
    onGoing: false,
  },
];

const defaultExperience = [
  {
    name: "The Draccus Incident",
    startDate: "Lannis 2024",
    endDate: "Lannis 2024",
    description:
      "Kvothe and Denna find a Draccus. Denna accidentally eats drugs in a cave. If memory serves correctly, this was one of the most romantic events in the entire series.",
    onGoing: false,
  },
  {
    name: "Ademre",
    startDate: "Equis 2025",
    endDate: "Solace 2025",
    description:
      "Kvothe ventures off into the land of the Adem — a place where diverse experiences gain a whole new meaning. He left an accomplished swordsman, although his abilities pale compared to the best among the Adem.",
    onGoing: false,
  },
];

export { defaultContact, defaultEducation, defaultExperience };
