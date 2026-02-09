import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

type TabIconProps = {
  icon: "home" | "chat" | "profile" | "rides";
  focused: boolean;
};

function TabIcon({ icon, focused }: TabIconProps) {
  const source =
    icon === "home"
      ? icons.home
      : icon === "chat"
      ? icons.chat
      : icon === "profile"
      ? icons.profile
      : icons.list;

  return (
    <View
      className={`flex flex-1 justify-center items-center rounded-full ${
        focused ? "bg-general-300" : ""
      }`}
    >
      <View className={`rounded-full w-12 h-12 items-center justify-center`}>
        {" "}
        <Image
          source={source}
          style={{
            width: 24,
            height: 24,
            opacity: focused ? 1 : 0.4,
          }}
        />
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="profile" />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="rides" />
          ),
        }}
      />
      {/* Add your other tab screens here */}
    </Tabs>
  );
}
