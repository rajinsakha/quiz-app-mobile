import { View, Text } from "react-native";
import React from "react";

import { useAppSelector } from "@/redux/hooks";
import CategoryCard from "@/components/category/categoryCard";
import { categories } from "@/constants/data";
import ProgressCard from "@/components/home/progressCard";

const Index = () => {

  const {username} = useAppSelector((state) => state.authReducer);
 
  console.log( "Username" , username);
  return (
    <View className="p-4">
      <Text className="text-4xl font-rubik">QUIZZY</Text>
      <ProgressCard />
      <View className="flex flex-row flex-wrap gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
    </View>
    </View>
  );
};

export default Index;
