import React from 'react';
import { FlatList, View, Text, Image, Pressable, SafeAreaView} from 'react-native';
import { recipeList } from '../screens/Constant';
import { colors } from '../screens/Constant';
import {FontAwesome} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

function RecipeCard() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={{flexDirection: "row", marginTop: 40, paddingHorizontal: 8, }}>
        <Pressable style={{flex: 1}} onPress={()=> navigation.goBack()}>
        <FontAwesome name={"arrow-circle-left"} size={28} color="black" />
        </Pressable>
      </SafeAreaView>
      <FlatList numColumns={2} columnWrapperStyle={{
        justifyContent: 'space-between'

      }} showsVerticalScrollIndicator={false}
      data={recipeList} 
      renderItem={({item}) =>
<Pressable 
onPress={()=> navigation.navigate("RecipeDetails", {item: item})}
style={{
      backgroundColor: colors.COLOR_LIGHT, 
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.1,
      shadowRadius: 7,
      borderRadius: 16,
      marginVertical: 16,
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 8,
      paddingVertical: 26,
      }}
      >
      <Image source={item.image} style={{width: 150, height:150, resizeMode:'center'}}/>
      <Text style={{marginTop: 12, fontSize: 13,}}>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text>{item.time}</Text>
      <Text style={{marginLeft: 4, fontWeight: 'bold',}}>|</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={{marginLeft: 4,}}>{item.rating}</Text>
      <FontAwesome name= "star" size={16} color="#f96163"/>
      </View>
      </View>
      </Pressable>}/>
    </View>
  );
}

export default RecipeCard;