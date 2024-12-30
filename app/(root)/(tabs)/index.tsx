import { View, Text } from "react-native";
import React from "react";

import { useAppSelector } from "@/redux/hooks";
import CategoryCard from "@/components/category/categoryCard";
import { categories } from "@/constants/data";

const Index = () => {
  const { accessToken } = useAppSelector((state) => state.authReducer);

  return (
    <View className="p-4">
      <Text className="text-4xl font-rubik">QUIZZY</Text>
      <View className="flex flex-row flex-wrap gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </View>
    </View>
  );
};

export default Index;
