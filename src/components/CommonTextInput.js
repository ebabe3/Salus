import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {COLOR} from '../style/color';

const CommonTextInput = ({
  text,
  onChangeText,
  placeholderText,
  secureEntry = false,
  inputWidth,
  inputHeight = 45,
  keyboardType = 'default',
}) => {
  const containerCommonStyle = {
    width: inputWidth,
    height: inputHeight,
    borderBottomColor: 'white',
    marginTop: '12%',
    backgroundColor: '#FF9633',
    peddingRight: '%100',
    borderBottomWidth: 1,
  };

  const textInputStyle = {
    flex: 1,
    fontSize: 16,
    height: 50,
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
