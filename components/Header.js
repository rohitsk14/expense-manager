import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './colors';


const Header = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.title} >E-Manager</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: 55,
        justifyContent: 'flex-end',
        paddingLeft: 8,
  },
  title: {
      color: 'white',
      fontSize: 30,

  }
})

export default Header;