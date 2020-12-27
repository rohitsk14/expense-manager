import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../components/colors';

const Card = (props) => {
  return (
    <View style={styles.screen} >
        <Text style={styles.title} >{props.descr}</Text>
        <Text style={styles.title} >-{props.amt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
})

export default Card;