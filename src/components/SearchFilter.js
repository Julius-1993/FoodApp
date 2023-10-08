import React from 'react';
import { View, Text, TextInput} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

function SearchFilter ({icon, placeholder}){
  return (
    <View 
    style={{
      backgroundColor: '#fff', 
      flexDirection: 'row', 
      paddingVertical: 16,
      borderRadius: 8,
      paddingHorizontal: 16,
      marginVertical: 16,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.1,
      shadowRadius: 7,
      }}>
    <FontAwesome name={icon} size={20} color="#f96163"/>
    <TextInput style={{paddingLeft:10, fontSize:16, color: "#808080"}}>
    {placeholder}
    </TextInput>
    </View>
  );
}

export default SearchFilter;