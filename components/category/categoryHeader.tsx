import { View, Text } from "react-native";
import React from "react";

const CategoryHeader = ({
  currentIndex,
  total,
}: {
  currentIndex: number;
  total: number;
}) => (
  <View className="flex flex-row items-center justify-between mb-4">
    <Text>Back</Text>
    <Text>
      Question {currentIndex + 1}/{total}
    </Text>
    <Text>Bookmark</Text>
  </View>
);
export default CategoryHeader;
