import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useAppDispatch } from "@/redux/hooks";
import { setUserName } from "@/redux/features/authReducer";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      dispatch(setUserName(name));
      router.push("/");
    } else {
      Alert.alert("Error", "Please enter your name to start the quiz.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-purple-100 to-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-between">
          <View className="items-center pt-10">
            
          </View>

          <View className="px-8 pb-12">
            <Text className="text-3xl font-bold text-purple-800 mb-2">
              Welcome to QuizMaster
            </Text>
            <Text className="text-lg text-gray-600 mb-8">
              Test your knowledge and challenge yourself!
            </Text>

            <View className="space-y-4">
              <Text className="text-lg font-semibold text-gray-700">
                Enter Your Name to Begin
              </Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Your Name"
                className="border-2 border-purple-300 p-4 rounded-xl bg-white text-lg"
              />
              <TouchableOpacity
                className="bg-purple-500 py-4 rounded-xl items-center mt-4"
                onPress={handleSubmit}
              >
                <Text className="text-white text-lg font-semibold">
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
