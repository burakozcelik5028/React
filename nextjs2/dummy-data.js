const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "MOON",
    description: "you are the moon that not aware of the dawn.",
    location: "izmir, Turkey",
    date: " 2022-06-15",
    image: "images/moon.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "LAKE",
    description: "Ducklings swim in this cute lake.",
    location: "antalya, Turkey",
    date: " 2022-06-15",
    image: "images/lake.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "MOUNTAIN",
    description: "This mountain is a home for a lot of goats.",
    location: "lviv, Ukraine",
    date: " 2022-06-15",
    image: "images/mountain.jpg",
    isFeatured: false,
  },
  {
    id: "e4",
    title: "SUN",
    description: "Sun is a postman of dawn. Konichiwa for Sun God Nika!",
    location: "tokyo, Japan",
    date: " 2022-06-15",
    image: "images/sun.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Duck",
    description:
      "Ducklings love the lakes and puddles. My favorite duck is Duffy Duck.",
    location: "san jose, USA",
    date: " 2022-06-15",
    image: "images/duck.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
