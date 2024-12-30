import { ReactNode } from "react";
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
    image: ImageSourcePropType; 
    totalQuestions: number;
    questions: Question[];
  }
  
