import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { categories } from "@/constants/data";

export default function ProgressCard() {
  const progress = 9;
  const total = categories.reduce((total, category)=> total + category.totalQuestions, 0);
  const progressPercentage = (progress / total) * 100;

  return (
    <View className="bg-purple-100 p-4 rounded-2xl w-full max-w-[350px] shadow-sm">
      <View className="flex-row items-center">
        {/* Icon Container */}
        <View className="mr-4 bg-white/50 p-2 rounded-xl">
          <Feather name="anchor" size={24} color="#000" />
        </View>

        {/* Content Container */}
        <View className="flex-1">
          {/* Title and Questions */}
          <View className="mb-2">
            <Text className="text-lg font-semibold text-gray-800">
              Daily Task
            </Text>
            <Text className="text-sm text-gray-600">{total} Questions</Text>
          </View>

          {/* Progress Bar */}
          <View className="h-1.5 bg-gray-200 rounded-full mb-1 overflow-hidden">
            <View
              className="h-full bg-amber-400 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </View>

          {/* Progress Text */}
          <Text className="text-xs text-gray-600 self-end">
            Progress {progress}/{total}
          </Text>
        </View>
      </View>
    </View>
  );
}
