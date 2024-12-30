import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface OptionCardProps {
  optionNo: string;
  optionName: string;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  onSelect: () => void;
  isDisabled: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({
  optionNo,
  optionName,
  isSelected,
  isCorrect,
  isWrong,
  onSelect,
  isDisabled
}) => {
  const getBackgroundColor = () => {
    if (isCorrect) return "bg-green-500";
    if (isWrong) return "bg-red-500";
    if (isSelected) return "bg-gray-300";
    return "bg-white";
  };

  const getCircleBackgroundColor = () => {
    if (isCorrect) return "bg-green-600";
    if (isWrong) return "bg-red-600";
    return "bg-white";
  };

  return (
    <TouchableOpacity
      className={`flex flex-row justify-between items-center py-3 px-4 border shadow-lg rounded-lg ${getBackgroundColor()}`}
      onPress={onSelect}
      disabled={isDisabled}
    >
      <Text>{optionNo}</Text>
      <Text>{optionName}</Text>
      <View
        className={`rounded-full h-6 w-6 border border-black flex items-center justify-center ${getCircleBackgroundColor()}`}
      >
        {isCorrect && <Text className="text-white text-xs text-center">✔</Text>}
        {isWrong && <Text className="text-white text-xs text-center">✘</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default OptionCard;
