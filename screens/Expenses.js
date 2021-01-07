import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, Keyboard} from 'react-native';
import Colors from '../components/colors';
import Header from '../components/Header';
import Card from '../components/Card';
import Input from '../components/Input';
import {useSelector, useDispatch} from 'react-redux';
import {withdraw} from '../features/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Expenses = (props) => {
    const [isModelOn, setIsModelOn] = useState(false);
    const [list, setList] = useState([]);

    const amount = useSelector(selector);
    const dispatch = useDispatch();

    const modalHandler = () => {
        setIsModelOn(true);
    }

    const cancelHandler = () => {
        setIsModelOn(false);
    }

    const setAsyncBalance = async(bal) => {
        var n = bal.toString();
        try{
            await AsyncStorage.setItem('balance', n);
        }catch(e){
            console.log(e);
        }
    }

    const addHandler = (desc, amt) => {
        let avail = amount - parseInt(amt);
        if(avail>0){
            dispatch(withdraw(avail));
            setAsyncBalance(avail);
            setList([...list,{description: desc, amount: parseInt(amt)}]);
        }else{
            alert('Not enough balance');
        }
        setIsModelOn(false);
        Keyboard.dismiss();

    }

    return (
    <View style={styles.screen} >
        <Header />
        <View style={styles.body}>
            <View>
                <Text style={styles.title} >{list.length ? 'Expenses' : 'No current expenses'}</Text>
                <View style={styles.container} >
                <FlatList
                    data={list}
                    renderItem={
                        ({ item }) => (
                            <Card descr={item.description} amt={item.amount} />
                        )
                    }
                    keyExtractor={item => item.description}
                />
                    {/* {list.map((item)=><Card key={item.description} descr={item.description} amt={item.amount} />)} */}
                    {/* <Card descr='coffee' amt='200' />
                    <Card descr='tea' amt='500' /> */}

                </View>
            </View>
            <View style={styles.button} >
                <Button title='Add' color={Colors.primary} onPress={modalHandler} />
            </View>
            <Input isModalON={isModelOn} addHandler={addHandler} cancelHandler={cancelHandler} />
        </View>
    </View>
);
}

const selector = state => state.amount.value;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
      margin: 8,
  },
  title: {
    fontSize: 25,
    marginLeft: 8,
  },
  button: {
    margin: 8,
  },    
  body: {
    flex: 1,
    
    justifyContent: 'space-between'
  },
})

export default Expenses;