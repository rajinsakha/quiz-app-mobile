import { ImageSourcePropType } from "react-native";

export interface Option {
    optionNo: string;
    optionName: string;
  }
  
export interface Question {
    id: number;
    question: string;
    options: Option[];
    correctAnswer: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    image: ImageSourcePropType; // Path to the image associated with the category
    totalQuestions: number;
    questions: Question[];
  }
  
