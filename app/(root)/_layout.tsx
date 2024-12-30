import { useAppSelector } from "@/redux/hooks";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {

  const {username} = useAppSelector((state) => state.authReducer);
 
  console.log(username);

  // if (loading)
  //   return (
  //     <SafeAreaView className="bg-white h-full flex justify-center items-center">
  //       <ActivityIndicator className="text-primary-300" size={"large"} />
  //     </SafeAreaView>
  //   );

  if (username === undefined) return <Redirect href="/sign-in" />;

  return <Slot />;
}
