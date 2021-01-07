import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Keyboard} from 'react-native';
import Colors from '../components/colors';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {deposite} from '../features/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Balance = (props) => {
    const [amt, setAmount] = useState(0);
    const [updateFlag, setUpdateFlag] = useState(false);
    const amount = useSelector(selector);
    const dispatch = useDispatch();

    const updateAmountHandler = () => {
        setUpdateFlag(true);
    }

    const changeHandler = (value) => {
        setAmount(parseInt(value));
    }

    const addAmountHandler = () => {
        let newAmt = amount+Number(amt);
        dispatch(deposite(newAmt));
        setAsyncBalance(newAmt);
        setUpdateFlag(false);
        Keyboard.dismiss();
        setAmount(0);
    }

    const setAsyncBalance = async(bal) => {
        var n = bal.toString();
        try{
            await AsyncStorage.setItem('balance', n);
        }catch(e){
            console.log(e);
        }
    }

    let inputBar = <View style={styles.container}>
                            <Text style={styles.title} >Balance</Text>
                            <TextInput style={styles.input} autoFocus={true} keyboardType='number-pad' onChangeText={changeHandler} />
                            <Button title='Update Amount' color={Colors.primary} onPress={addAmountHandler} />
                        </View>;

    let content = <View style={styles.container}>
                        <Text style={styles.title} >Current Balance</Text>
                        <View style={styles.balanceContainer} >
                            <Text style={styles.balanceText} >{amount}</Text>
                        </View>
                        <Button title='Add Amount' color={Colors.primary} onPress={updateAmountHandler} />
                    </View> ;

    return (
        <View>
            <Header />
            {updateFlag ? inputBar : content}
        </View>
    );
}

const selector = state => state.amount.value;

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