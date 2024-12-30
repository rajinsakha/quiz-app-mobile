import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface ICategoryItem {
  img: ImageSourcePropType;
  name: string;
}
const CategoryItem = ({img, name}: ICategoryItem) => {
  return (
    <View className="flex flex-col gap-2">
      <View className="flex items-center justify-center bg-slate-400">
        <Image source={img} className="h-10 w-full rounded-xl" />
      </View>
      <Text className="">{name}</Text>
    </View>
  );
};

export default CategoryItem;
