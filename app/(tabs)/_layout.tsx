import { Tabs } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { BookIcon } from "@/assets/icons/BookIcon";
import { EditIcon } from "@/assets/icons/EditIcon";
import { FeatureIcon } from "@/assets/icons/FeatureIcon";
import { FlowerIcon } from "@/assets/icons/FlowerIcon";
import { LeaveIcon } from "@/assets/icons/LeaveIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { HapticTab } from "@/components/haptic-tab";
import { TabBarIcon } from "@/components/tab-bar-icon";
import { theme } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [role] = useState<"USER" | "ADMIN">("USER"); // поменяй на 'USER' для проверки

  // Для каждого таба определяем, показывать или нет его для данной роли
  const isUser = role === "USER";
  const isAdmin = role === "ADMIN";

  return (
    <Tabs
      initialRouteName={isAdmin ? "adminmoderation" : "index"}
      screenLayout={(props) => (
        <ScrollView style={styles.container} {...props} />
      )}
      screenOptions={{
        headerStatusBarHeight: 20,
        tabBarActiveTintColor: theme.color.background.default,
        tabBarInactiveTintColor: theme.color.background.default,
        headerShown: false,
        tabBarButton: HapticTab,
        title: "",
        tabBarItemStyle: {
          marginTop: 4,
          width: 64,
          height: 72,
          padding: 15,
          top: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.color.background.usual,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<EditIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isUser ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="flower"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<FlowerIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isUser ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<BookIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isUser ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<UserIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isUser ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="admintips"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<FeatureIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isAdmin ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="adminmoderation"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<FlowerIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isAdmin ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="adminflowers"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<LeaveIcon width={24} height={24} fill={color} />}
              focused={focused}
            />
          ),
          href: isAdmin ? undefined : null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 32,
  },
});
