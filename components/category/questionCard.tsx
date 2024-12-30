import React from "react";
import { View, Text } from "react-native";
import OptionCard from "./optionCard";
import { Question } from "@/types/quiz";


interface QuestionCardProps {
  questions: Question;
  selectedOption: string | null;
  showCorrectAnswer: boolean;
  onSelectAnswer: (option: string) => void;
  isDisabled:boolean; //Fix this prop drilling later
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questions,
  selectedOption,
  showCorrectAnswer,
  onSelectAnswer,
  isDisabled
}) => {
  return (
    <View className="p-4 rounded-lg bg-white h-[90vh] flex flex-col gap-6">
      <View className="bg-primary-200 h-[30vh] flex items-center justify-center p-4">
        <Text className="text-2xl font-bold text-center">{questions?.question}</Text>
      </View>

      <View className="flex flex-col gap-4">
        {questions?.options?.map((option) => (
          <OptionCard
            key={option.optionNo}
            optionNo={option.optionNo}
            optionName={option.optionName}
            isSelected={selectedOption === option.optionNo}
            isCorrect={showCorrectAnswer && questions.correctAnswer === option.optionNo}
            isWrong={showCorrectAnswer && selectedOption === option.optionNo && selectedOption !== questions.correctAnswer}
            onSelect={() => onSelectAnswer(option.optionNo)}
            isDisabled={isDisabled} 
          />
        ))}
      </View>
    </View>
  );
};

export default QuestionCard;
