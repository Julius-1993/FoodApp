import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Categories from '../screens/Constant';
import { colors } from '../screens/Constant';

function CategoriesFilter() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        Categories.map((category, index)=>{
          return (<View style={{
            backgroundColor: index===0? colors.COLOR_PRIMARY: colors.COLOR_LIGHT,
            marginRight: 36,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 12,
            marginVertical: 16,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 8},
            shadowOpacity: 0.1,
            shadowRadius: 7,
            }}
            >
            <Text style={{color: index=== 0 && colors.COLOR_LIGHT, fontSize: 18, fontWeight: "bold"}}>{category.category}</Text>
          </View>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;
