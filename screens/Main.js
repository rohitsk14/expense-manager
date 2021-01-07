import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Balance from './Balance';
import Expenses from './Expenses';
import Colors from '../components/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deposite } from '../features/slice';
import { useDispatch } from 'react-redux';


const Tab = createBottomTabNavigator();

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getBalance = async () => {
      try {
        const bal = await AsyncStorage.getItem('balance');
        dispatch(deposite(Number(bal)));
      } catch (e) {
        console.log(e);
      }
    }
    getBalance();
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Expenses' tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 20,
        }
      }} >
        <Tab.Screen name='Expenses' component={Expenses} />
        <Tab.Screen name='Balance' component={Balance} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

export default Main;