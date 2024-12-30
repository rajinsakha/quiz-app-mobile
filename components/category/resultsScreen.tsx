import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  userName?: string;
  rank?: number;
  userImage?: string;
}

const ResultsScreen = ({
  score,
  totalQuestions,
  userName = "Roxane",
  rank = 432,
  userImage = "/placeholder.svg?height=100&width=100",
}: ResultsScreenProps) => (
  <SafeAreaView className="h-screen w-full bg-slate-100">
    {/* Gradient Background */}
    <View className="h-full w-full bg-gradient-to-b from-blue-400 to-blue-500 px-6">
      {/* Score Display */}
      <View className="absolute top-10 left-6">
        <Text className="text-black text-base font-medium">
          Correct Answer {score}/{totalQuestions}
        </Text>
      </View>

      {/* Main Content Card */}
      <View className="h-full items-center justify-center">
        <View className="bg-white/90 w-full rounded-3xl p-8 items-center shadow-lg">
          {/* Profile Section */}
          <View className="relative w-24 h-32 mb-6">
            <View className="absolute -top-12 w-full">
              <View className="bg-purple-100 rounded-2xl p-1">
                <Image
                  source={{ uri: userImage }}
                  className="w-20 h-20 rounded-xl self-center"
                />
              </View>
              <View className="bg-primary-300 rounded-xl py-1 px-4 mt-2">
                <Text className="text-white text-center font-semibold">
                  {userName}
                </Text>
                <Text className="text-white/80 text-center text-sm">
                  Rank {rank}
                </Text>
              </View>
            </View>
          </View>

          {/* Congratulations Text */}
          <Text className="text-2xl font-bold text-gray-800 text-center mb-2">
            Congratulations, you've completed this quiz!
          </Text>
          <Text className="text-gray-500 text-center mb-8">
            Let's keep testing your knowledge by playing more quizzes!
          </Text>

          {/* Action Button */}
          <Link href="/" asChild>
            <Pressable
              className="w-full bg-primary-300
                rounded-xl py-4 px-6 shadow-md active:opacity-90"
            >
              <Text className="text-white text-center font-semibold text-lg">
                Explore More
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

export default ResultsScreen;
