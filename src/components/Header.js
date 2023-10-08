import React from 'react';
import { View, Text, } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

function Header({headerText, headerIcon}) {
  return (
    <View style={{flexDirection: "row"}}>
      <Text style={{flex:1, fontSize: 22, fontWeight:'bold'}}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={23} color= "#f96163"/>
    </View>
  );
}

export default Header;