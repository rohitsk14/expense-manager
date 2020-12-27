import React, { useState } from 'react';
import {Modal, View, TextInput, Button, StyleSheet} from 'react-native';

const Input = (props) => {
    const [enteredDesc, setEnteredDesc] = useState('');
    const [enteredAmt, setEnteredAmt] = useState();

    const descHandler = (value) => {
        setEnteredDesc(value);
    }

    const amtHandler = (value) => {
        setEnteredAmt(value);
    }

    const addHandler = () => {
        props.addHandler(enteredDesc, enteredAmt)
        setEnteredAmt('');
        setEnteredDesc('');
    }

    return (
    <Modal visible={props.isModalON}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter Description'
          style={styles.textInoutStyle}
          value={enteredDesc}
          autoFocus={true}
          onChangeText={descHandler}
        />
        <TextInput
          placeholder='Enter Amount'
          style={styles.textInoutStyle}
          value={enteredAmt}
          keyboardType='number-pad'
          onChangeText={amtHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color='red' onPress={props.cancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
    );
}

const styles = StyleSheet.create({   
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',

  }, 
  inputContainer: {
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign: 'center',
  },
  textInoutStyle: {
    borderColor: 'black', 
    padding: 10,
    borderWidth: 1, 
    width: '80%',
    margin: 10,
  },
  button: {
    width: "40%",
    margin:10
  }
})

export default Input;