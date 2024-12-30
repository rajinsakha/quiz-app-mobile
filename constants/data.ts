import { Category } from "@/types/quiz";
import icons from "./icons";
import images from "./images";


export const categories:Category[] = [
  {
    id: 1,
    name: "Language Quiz",
    image: images.newYork,  // Replace with actual image path if needed
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "Which of the following is the correct way to say 'Hello' in French?",
        options: [
          { optionNo: "A", optionName: "Hola" },
          { optionNo: "B", optionName: "Bonjour" },
          { optionNo: "C", optionName: "Ciao" },
          { optionNo: "D", optionName: "Hallo" },
        ],
        correctAnswer: "B",
      },
      {
        id: 2,
        question: "Which language is the most spoken in the world?",
        options: [
          { optionNo: "A", optionName: "English" },
          { optionNo: "B", optionName: "Mandarin" },
          { optionNo: "C", optionName: "Spanish" },
          { optionNo: "D", optionName: "Hindi" },
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        question: "What is the official language of Brazil?",
        options: [
          { optionNo: "A", optionName: "Spanish" },
          { optionNo: "B", optionName: "Portuguese" },
          { optionNo: "C", optionName: "English" },
          { optionNo: "D", optionName: "French" },
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        question: "What language is primarily spoken in Japan?",
        options: [
          { optionNo: "A", optionName: "Japanese" },
          { optionNo: "B", optionName: "Chinese" },
          { optionNo: "C", optionName: "Korean" },
          { optionNo: "D", optionName: "Vietnamese" },
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        question: "Which of these languages is spoken in India?",
        options: [
          { optionNo: "A", optionName: "Hindi" },
          { optionNo: "B", optionName: "Japanese" },
          { optionNo: "C", optionName: "German" },
          { optionNo: "D", optionName: "Russian" },
        ],
        correctAnswer: "A",
      },
      {
        id: 6,
        question: "What is the official language of Canada?",
        options: [
          { optionNo: "A", optionName: "French" },
          { optionNo: "B", optionName: "English" },
          { optionNo: "C", optionName: "Spanish" },
          { optionNo: "D", optionName: "Italian" },
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        question: "What language is spoken in Egypt?",
        options: [
          { optionNo: "A", optionName: "Arabic" },
          { optionNo: "B", optionName: "Hebrew" },
          { optionNo: "C", optionName: "Swahili" },
          { optionNo: "D", optionName: "French" },
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        question: "Which of the following is an official language of the United Nations?",
        options: [
          { optionNo: "A", optionName: "Arabic" },
          { optionNo: "B", optionName: "Hindi" },
          { optionNo: "C", optionName: "Portuguese" },
          { optionNo: "D", optionName: "German" },
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        question: "Which language is spoken in Argentina?",
        options: [
          { optionNo: "A", optionName: "Spanish" },
          { optionNo: "B", optionName: "Portuguese" },
          { optionNo: "C", optionName: "English" },
          { optionNo: "D", optionName: "French" },
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        question: "What is the official language of the United States?",
        options: [
          { optionNo: "A", optionName: "Spanish" },
          { optionNo: "B", optionName: "English" },
          { optionNo: "C", optionName: "French" },
          { optionNo: "D", optionName: "None" },
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 2,
    name: "Geography Quiz",
    image: images.barChart,  // Replace with actual image path if needed
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: [
          { optionNo: "A", optionName: "Berlin" },
          { optionNo: "B", optionName: "Madrid" },
          { optionNo: "C", optionName: "Paris" },
          { optionNo: "D", optionName: "Rome" },
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        question: "Which country is known as the Land of the Rising Sun?",
        options: [
          { optionNo: "A", optionName: "China" },
          { optionNo: "B", optionName: "Japan" },
          { optionNo: "C", optionName: "India" },
          { optionNo: "D", optionName: "Thailand" },
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        question: "Which continent is the Sahara Desert located in?",
        options: [
          { optionNo: "A", optionName: "Asia" },
          { optionNo: "B", optionName: "Africa" },
          { optionNo: "C", optionName: "Australia" },
          { optionNo: "D", optionName: "North America" },
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        question: "Which ocean lies to the west of the United States?",
        options: [
          { optionNo: "A", optionName: "Atlantic Ocean" },
          { optionNo: "B", optionName: "Pacific Ocean" },
          { optionNo: "C", optionName: "Indian Ocean" },
          { optionNo: "D", optionName: "Arctic Ocean" },
        ],
        correctAnswer: "B",
      },
      {
        id: 5,
        question: "What is the capital of Canada?",
        options: [
          { optionNo: "A", optionName: "Ottawa" },
          { optionNo: "B", optionName: "Toronto" },
          { optionNo: "C", optionName: "Vancouver" },
          { optionNo: "D", optionName: "Montreal" },
        ],
        correctAnswer: "A",
      },
      {
        id: 6,
        question: "Which river is the longest in the world?",
        options: [
          { optionNo: "A", optionName: "Amazon River" },
          { optionNo: "B", optionName: "Nile River" },
          { optionNo: "C", optionName: "Yangtze River" },
          { optionNo: "D", optionName: "Mississippi River" },
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        question: "Which country is known for the Great Barrier Reef?",
        options: [
          { optionNo: "A", optionName: "Australia" },
          { optionNo: "B", optionName: "New Zealand" },
          { optionNo: "C", optionName: "South Africa" },
          { optionNo: "D", optionName: "Mexico" },
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        question: "Which of these countries is located in South America?",
        options: [
          { optionNo: "A", optionName: "Canada" },
          { optionNo: "B", optionName: "Brazil" },
          { optionNo: "C", optionName: "Russia" },
          { optionNo: "D", optionName: "India" },
        ],
        correctAnswer: "B",
      },
      {
        id: 9,
        question: "Which city is known as the Big Apple?",
        options: [
          { optionNo: "A", optionName: "Los Angeles" },
          { optionNo: "B", optionName: "New York City" },
          { optionNo: "C", optionName: "Chicago" },
          { optionNo: "D", optionName: "San Francisco" },
        ],
        correctAnswer: "B",
      },
      {
        id: 10,
        question: "What is the largest country in the world by land area?",
        options: [
          { optionNo: "A", optionName: "China" },
          { optionNo: "B", optionName: "United States" },
          { optionNo: "C", optionName: "Russia" },
          { optionNo: "D", optionName: "Canada" },
        ],
        correctAnswer: "C",
      },
    ],
  },
  {
    id: 3,
    name: "Science Quiz",
    image: images.map,  // Replace with actual image path if needed
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: [
          { optionNo: "A", optionName: "H2O" },
          { optionNo: "B", optionName: "O2" },
          { optionNo: "C", optionName: "CO2" },
          { optionNo: "D", optionName: "H2" },
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        question: "What planet is known as the Red Planet?",
        options: [
          { optionNo: "A", optionName: "Mars" },
          { optionNo: "B", optionName: "Earth" },
          { optionNo: "C", optionName: "Venus" },
          { optionNo: "D", optionName: "Jupiter" },
        ],
        correctAnswer: "A",
      },
      {
        id: 3,
        question: "What is the most common element in the Earth's crust?",
        options: [
          { optionNo: "A", optionName: "Iron" },
          { optionNo: "B", optionName: "Oxygen" },
          { optionNo: "C", optionName: "Silicon" },
          { optionNo: "D", optionName: "Aluminum" },
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        question: "What is the atomic number of carbon?",
        options: [
          { optionNo: "A", optionName: "6" },
          { optionNo: "B", optionName: "8" },
          { optionNo: "C", optionName: "12" },
          { optionNo: "D", optionName: "14" },
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        options: [
          { optionNo: "A", optionName: "Oxygen" },
          { optionNo: "B", optionName: "Carbon Dioxide" },
          { optionNo: "C", optionName: "Nitrogen" },
          { optionNo: "D", optionName: "Hydrogen" },
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        question: "What type of energy is stored in food?",
        options: [
          { optionNo: "A", optionName: "Kinetic" },
          { optionNo: "B", optionName: "Thermal" },
          { optionNo: "C", optionName: "Chemical" },
          { optionNo: "D", optionName: "Potential" },
        ],
        correctAnswer: "C",
      },
      {
        id: 7,
        question: "Which of the following is a renewable energy source?",
        options: [
          { optionNo: "A", optionName: "Coal" },
          { optionNo: "B", optionName: "Solar" },
          { optionNo: "C", optionName: "Natural Gas" },
          { optionNo: "D", optionName: "Oil" },
        ],
        correctAnswer: "B",
      },
      {
        id: 8,
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: [
          { optionNo: "A", optionName: "Oxygen" },
          { optionNo: "B", optionName: "Nitrogen" },
          { optionNo: "C", optionName: "Carbon Dioxide" },
          { optionNo: "D", optionName: "Hydrogen" },
        ],
        correctAnswer: "B",
      },
      {
        id: 9,
        question: "Which of these is a mammal?",
        options: [
          { optionNo: "A", optionName: "Shark" },
          { optionNo: "B", optionName: "Crocodile" },
          { optionNo: "C", optionName: "Bat" },
          { optionNo: "D", optionName: "Lizard" },
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        question: "Which of the following is a solid at room temperature?",
        options: [
          { optionNo: "A", optionName: "Water" },
          { optionNo: "B", optionName: "Oxygen" },
          { optionNo: "C", optionName: "Iron" },
          { optionNo: "D", optionName: "Carbon Dioxide" },
        ],
        correctAnswer: "C",
      },
    ],
  },
  {
    id: 4,
    name: "History Quiz",
    image: images.japan,  // Replace with actual image path if needed
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "Who was the first president of the United States?",
        options: [
          { optionNo: "A", optionName: "George Washington" },
          { optionNo: "B", optionName: "Thomas Jefferson" },
          { optionNo: "C", optionName: "Abraham Lincoln" },
          { optionNo: "D", optionName: "John Adams" },
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        question: "In which year did World War II end?",
        options: [
          { optionNo: "A", optionName: "1945" },
          { optionNo: "B", optionName: "1918" },
          { optionNo: "C", optionName: "1939" },
          { optionNo: "D", optionName: "1963" },
        ],
        correctAnswer: "A",
      },
      {
        id: 3,
        question: "Who was the first emperor of China?",
        options: [
          { optionNo: "A", optionName: "Qin Shi Huang" },
          { optionNo: "B", optionName: "Genghis Khan" },
          { optionNo: "C", optionName: "Kublai Khan" },
          { optionNo: "D", optionName: "Caius" },
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        question: "Who discovered America?",
        options: [
          { optionNo: "A", optionName: "Christopher Columbus" },
          { optionNo: "B", optionName: "Leif Erikson" },
          { optionNo: "C", optionName: "Marco Polo" },
          { optionNo: "D", optionName: "Ferdinand Magellan" },
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        question: "Which country was the first to land a man on the moon?",
        options: [
          { optionNo: "A", optionName: "Soviet Union" },
          { optionNo: "B", optionName: "United States" },
          { optionNo: "C", optionName: "China" },
          { optionNo: "D", optionName: "India" },
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        question: "Who was the leader of the Soviet Union during World War II?",
        options: [
          { optionNo: "A", optionName: "Joseph Stalin" },
          { optionNo: "B", optionName: "Leon Trotsky" },
          { optionNo: "C", optionName: "Mikhail Gorbachev" },
          { optionNo: "D", optionName: "Nikita Khrushchev" },
        ],
        correctAnswer: "A",
      },
      {
        id: 7,
        question: "Which country was the birthplace of Napoleon Bonaparte?",
        options: [
          { optionNo: "A", optionName: "France" },
          { optionNo: "B", optionName: "Italy" },
          { optionNo: "C", optionName: "Spain" },
          { optionNo: "D", optionName: "Russia" },
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        question: "Who was the first woman to fly solo across the Atlantic?",
        options: [
          { optionNo: "A", optionName: "Amelia Earhart" },
          { optionNo: "B", optionName: "Harriet Tubman" },
          { optionNo: "C", optionName: "Sally Ride" },
          { optionNo: "D", optionName: "Valentina Tereshkova" },
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        question: "What was the name of the ship that carried the Pilgrims to America in 1620?",
        options: [
          { optionNo: "A", optionName: "Mayflower" },
          { optionNo: "B", optionName: "Santa Maria" },
          { optionNo: "C", optionName: "Titanic" },
          { optionNo: "D", optionName: "Nina" },
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        question: "Who invented the telephone?",
        options: [
          { optionNo: "A", optionName: "Alexander Graham Bell" },
          { optionNo: "B", optionName: "Thomas Edison" },
          { optionNo: "C", optionName: "Nikola Tesla" },
          { optionNo: "D", optionName: "Guglielmo Marconi" },
        ],
        correctAnswer: "A",
      },
    ],
  },
];


export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork,
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan,
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork,
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan,
  },
];

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "house",
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "flat",
  },
];


export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];
