import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './src/styles/main'
import Header from './src/components/Header/header';
import uuid from 'react-uuid';
import React, { useState } from 'react';

import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  const initTasks = [
    {
      id: uuid(),
      description: "Walk the dog",
      done: true
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false
    },
    {
      id: uuid(),
      description: "Caring my dog",
      done: false

    },
  ]

  const [tasks, setTasks] = useState(initTasks);

  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(updatedTasks);
  }

  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push(
      {
        id: uuid(),
        description: taskDescription,
        done: taskDone
      });

    setTasks(updatedTasks);
  }
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
              tabBarActiveTintColor: 'orange',
              tabBarInActiveTintColor: 'black',
          }}>

          <Tab.Screen name='HomeScreen'
            options={{
              title: 'Tasks',
              headerShown: false,
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <MaterialIcons name="event-note" size={size} color={color} />
                )
              }
            }}>
            {() => (
              <HomeScreen tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemoval={handleTaskRemoval} />
            )}
          </Tab.Screen>

          <Tab.Screen name='Form'
            options={{
              title: 'Tasks',
              headerShown: false,
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <MaterialIcons name="playlist-add" size={size} color={color} />
                )
              }
            }}>
            {() => (
              <PostScreen onAddTask={handleAddTask} />
            )}
          </Tab.Screen>

        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}