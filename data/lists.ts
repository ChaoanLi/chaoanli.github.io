import { Lists } from '../types';

export const lists: Lists = {
  books: [
    { title: "Machine Learning", author: "Zhi-Hua Zhou", completed: false },
    { title: "Dream of the Red Chamber", author: "Xueqing Cao", completed: false }
    // Add more books here
  ],
  movies: [
    { title: "Our Little Sister", year: "2015", completed: false },
    { title: "Her", year: "2013", completed: false },
    { title: "One battle after another", year: "2025", completed: false }
    // Add more movies here
  ],
  series: [
    { title: "Breaking Bad", year: "2008", completed: false },
    { title: "Seinfeld", year: "1989", completed: false }
    // Add more series here
  ],
  skills: [
    { name: "C++", progress: 10, completed: false },
    { name: "SQL", progress: 50, completed: false },
    { name: "Ethereum", progress: 10, completed: false }
    // Add more skills here
  ],
  goals: [
    { title: "find an internship before 2027", deadline: "2027-06-30", completed: false },
    { title: "Accomplish 2 papers in 2025", deadline: "2025-12-31", completed: false },
    { title: "Try build my own X project", deadline: "2026-12-31", completed: false }
    // Add more goals here
  ]
};

