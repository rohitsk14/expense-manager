import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Keyboard} from 'react-native';
import Colors from '../components/colors';
import Header from '../components/Header';

const Balance = (props) => {
    const [amount, setAmount] = useState(0);
    const [updateFlag, setUpdateFlag] = useState(false);

    const updateAmountHandler = () => {
        setUpdateFlag(true);
    }

    const changeHandler = (value) => {
        setAmount(parseInt(value));
    }

    const addAmountHandler = () => {
        props.changeBalance(amount);
        setUpdateFlag(false);
        Keyboard.dismiss();
    }

    let inputBar = <View style={styles.container}>
                            <Text style={styles.title} >Balance</Text>
                            <TextInput style={styles.input} autoFocus={true} keyboardType='number-pad' onChangeText={changeHandler} />
                            <Button title='Add Amount' color={Colors.primary} onPress={addAmountHandler} />
                        </View>;

    let content = <View style={styles.container}>
                        <Text style={styles.title} >Balance</Text>
                        <View style={styles.balanceContainer} >
                            <Text style={styles.balanceText} >{props.balance}</Text>
                        </View>
                        <Button title='Update Amount' color={Colors.primary} onPress={updateAmountHandler} />
                    </View> ;

    return (
        <View>
            <Header />
            {updateFlag ? inputBar : content}
        </View>
    );
    }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 25,

  },
  container: {
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
  },
  input: {
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      width: '60%',
      margin: 8,
      textAlign: 'center',
      fontSize: 20,
  },
  balanceContainer: {

  },
  balanceText: {
      fontSize: 60,

  }
})

export default Balance;