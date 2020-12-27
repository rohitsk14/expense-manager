import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Balance from './screens/Balance';
import Expenses from './screens/Expenses';
import Colors from './components/colors';

const Tab = createBottomTabNavigator();

const App = () => {
  const [balance, setBalance] = useState(0);

  const balanceHandler = (value) => {
    setBalance(value);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Expenses' tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 20,
        }
      }} >
        <Tab.Screen name='Expenses' children={() => <Expenses balance={balance} changeBalance={balanceHandler} />} />
        <Tab.Screen name='Balance' children={() => <Balance balance={balance} changeBalance={balanceHandler} />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

export default App;