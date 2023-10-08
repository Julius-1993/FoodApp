import React from 'react';
import { View, Text, Image, SafeAreaView, Pressable, ScrollView} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
function RecipeDetails({navigation, route}) {
  const {item}= route.params;

  console.log(item);
  return (
    <View style={{flex: 1, backgroundColor: item.color}}>
      <SafeAreaView style={{flexDirection: "row", marginTop: 40, paddingHorizontal: 8, }}>
        <Pressable style={{flex: 1}} onPress={()=> navigation.goBack()}>
        <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color="white"/>
      </SafeAreaView>
      <View style={{
        flex: 1, 
        backgroundColor: "#fffafa", 
        marginTop: 240, 
        borderTopLeftRadius: 56,
        borderTopRightRadius: 56,
        alignItems: "center",
        paddingHorizontal: 16,
        }}
        >
          <View style={{
            //backgroundColor: "red", 
            height: 300, 
            width: 300, 
            position: "absolute",
            top: -150,
            }}
            >
              <Image source={item.image} style={{width:"100%", height:"100%", resizeMode:"contain"}}/>
            </View>
            {/*Recipe name*/}
            <Text style={{marginTop: 160, fontSize: 28, fontWeight: 'bold'}}>{item.name}</Text>
            <View style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/*Description */}
            <Text style={{fontSize: 20, marginVertical: 8,}}>{item.description}</Text>
            {/*Recipe Extra Details */}
            <View 
            style={{
              flexDirection: "row", 
              justifyContent: 'space-between', 
              width: '100%'
              }}>
              <View 
              style={{
                backgroundColor: '#00ff7f', 
                paddingHorizontal: 16, 
                paddingVertical: 26,
                borderRadius: 8,
                alignItems: 'center',
                }}>
                <Text style={{fontSize: 40,}}>⏱</Text>
                <Text style={{fontSize: 20, fontWeight: 700}}>{item.time}</Text>
              </View>
              <View 
              style={{
                backgroundColor: '#40e0d0', 
                paddingHorizontal: 16, 
                paddingVertical: 26,
                borderRadius: 8,
                alignItems: 'center',
                }}>
                <Text style={{fontSize: 40,}}>🥣</Text>
                <Text style={{fontSize: 20, fontWeight: 700}}>{item.difficulty}</Text>
              </View>
              <View 
              style={{
                backgroundColor: '#ff4500', 
                paddingHorizontal: 16, 
                paddingVertical: 26,
                borderRadius: 8,
                alignItems: 'center',
                }}>
                <Text style={{fontSize: 40,}}>🔥</Text>
                <Text style={{fontSize: 20, fontWeight: 700}}>{item.calories}</Text>
              </View>
            </View>

            {/*Recipe Ingredients */}
            <View style={{alignSelf: "flex-start", marginVertical: 22}}>
              <Text style={{fontWeight: '400', fontSize: 22, marginBottom: 6}}>Ingredients:</Text>
                {item.ingredients.map((ingredient)=>{
                  return(
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 4}}>
                    <View 
                    style={{
                      backgroundColor: '#da70d6', 
                      height:10,
                      width: 10,
                      borderRadius: 5,
                      }}
                      ></View>
                      <Text style={{fontSize: 18, marginLeft: 6,}}>{ingredient}</Text>
                  </View>
                  );  
                })}
            </View>

            {/*Recipe Steps */}
            <View style={{alignSelf: "flex-start", marginVertical: 22}}>
              <Text style={{fontWeight: '400', fontSize: 22, marginBottom: 6}}>Steps:</Text>
                {item.steps.map((step)=>{
                  return(
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 4}}>
                    <View 
                    style={{
                      backgroundColor: '#da70d6', 
                      height:10,
                      width: 10,
                      borderRadius: 5,
                      }}
                      ></View>
                      <Text style={{fontSize: 18, marginLeft: 6, paddingLeft: 10, paddingRight:10}}>{step}</Text>
                  </View>
                  );  
                })}
            </View>
            </ScrollView>
            </View>
      </View>
    </View>
  );
}

export default RecipeDetails;