import React from 'react';
import 
{StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity,} from 'react-native';


function WelcomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Image source={require("../../assets/images/Varieties.jpeg")}/>
    <Text 
    style={{color:'#f96160', 
    marginTop: 8, 
    fontSize: 22,
    fontWeight: 'bold'}}
    >40+ Premium Recipes</Text>
    <Text
    style={{color:'black', 
    fontSize: 42,
    fontWeight: 'bold',
    color: "#e0d",
    marginTop: 44,
    marginBottom: 40,
    }}
    >Cook Like A Chef</Text>
    <TouchableOpacity
    onPress={()=>navigation.navigate("RecipeList")}
    style={{
      backgroundColor: '#f96160',
      borderRadius: 18,
      paddingVertical: 18,
      width: '80%',
      alignItems: 'center',
    }}>
      <Text 
      style={{
      fontSize: 22,
      fontWeight: '800',
      color: '#fff'

      }}>
        Let's Go
      </Text>
    </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  
});