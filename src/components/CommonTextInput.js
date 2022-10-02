import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {COLOR} from '../style/color';

const CommonTextInput = ({
  text,
  onChangeText,
  placeholderText,
  secureEntry = false,
  inputWidth,
  inputHeight = 35,
  keyboardType = 'default',
}) => {
  const containerCommonStyle = {
    width: inputWidth,
    height: inputHeight,
    borderBottomColor: 'white',
    backgroundColor: '#F2F0F0',
    marginTop: '12%',
    backgroundColor: COLOR.salusOrange,
    peddingRight: '%100',
    borderBottomWidth: 1,
  };

  const textInputStyle = {
    flex: 1,
    fontSize: 16,
    height: 40,
    paddingLeft: 15,
    color: 'pink',
  };

  return (
    <View style={containerCommonStyle}>
      <TextInput
        style={textInputStyle}
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={secureEntry}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        placeholderTextColor={'white'}
        value={text}
      />
    </View>
  );
};

export default CommonTextInput;
