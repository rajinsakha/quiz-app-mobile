import CategoryHeader from "@/components/category/categoryHeader";
import QuestionCard from "@/components/category/questionCard";
import ResultsScreen from "@/components/category/resultsScreen";
import { categories } from "@/constants/data";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Category = () => {
  // Extracting 'id' from URL params
  const { id } = useLocalSearchParams();
  
  // Convert 'id' to number, as 'id' might come as string
  const categoryId = parseInt(id as string);

  // Retrieve the category based on the extracted 'id'
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <Text>Category not found</Text>; // If no category is found, display an error message
  }

  const { questions } = category; // Destructure questions from the selected category
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);

  const handleAnswerSelect = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedOption(option);
    setShowCorrectAnswer(true);
    setIsOptionsDisabled(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setIsOptionsDisabled(false);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
  };

  if (quizFinished) {
    return <ResultsScreen score={score} totalQuestions={questions.length} />;
  }

  return (
    <SafeAreaView className="bg-primary-100 h-screen w-full p-2">
      <CategoryHeader
        currentIndex={currentQuestionIndex}
        total={questions.length}
      />
      <QuestionCard
        questions={questions[currentQuestionIndex]}
        onSelectAnswer={handleAnswerSelect}
        selectedOption={selectedOption}
        showCorrectAnswer={showCorrectAnswer}
        isDisabled={isOptionsDisabled}
      />
    </SafeAreaView>
  );
};

export default Category;

