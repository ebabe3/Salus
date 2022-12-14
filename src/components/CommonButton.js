import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

const CommonButton = ({
  text,
  textColor = 'white',
  onPress,
  buttonBorderColor = 'white',
  buttonBorderWidth = 1,
  buttonFontSize = 16,
  buttonWidth,
  buttonMarginTop,
  buttonMarginBottom = 0,
  buttonHeight = 40,
  buttonRadius = 15,
  disabled = false,
}) => {
  const wrapperStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: buttonMarginTop,
    marginBottom: buttonMarginBottom,
    height: buttonHeight,
    width: buttonWidth,
  };

  const containerCommonStyle = {
    paddingVertical: 8,
    marginTop: 24,
    width: '100%',
    height: buttonHeight,
    borderWidth: buttonBorderWidth,
    borderColor: buttonBorderColor,
    borderRadius: buttonRadius,
    justifyContent: 'center',
  };

  const textCommonStyle = {
    color: textColor,
    fontSize: buttonFontSize,
    textAlign: 'center',
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={wrapperStyle}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={containerCommonStyle}>
        <Text style={textCommonStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommonButton;
