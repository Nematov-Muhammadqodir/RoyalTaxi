import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressValue = useSharedValue(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Carousel
        loop={false}
        width={400}
        height={500}
        data={onboarding}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
          setActiveIndex(Math.round(absoluteProgress));
        }}
        renderItem={({ item }) => (
          <View className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[gray] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View className="flex-row justify-center mb-5">
        {onboarding.map((_, index) => (
          <View
            key={index}
            className={`w-[32px] h-[4px] mx-1 rounded-full ${
              index === activeIndex ? "bg-[#0286FF]" : "bg-[#E2E8F0]"
            }`}
          />
        ))}
      </View>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : setActiveIndex(activeIndex + 1)
        }
      />
    </SafeAreaView>
  );
};

export default Welcome;
