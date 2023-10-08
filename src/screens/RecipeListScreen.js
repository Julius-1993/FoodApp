import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

function RecipeListScreen() {
  return(
    <SafeAreaView style={{ flex: 1, marginTop: 50, marginHorizontal: 16,}}>
      <Header headerText={"Hi, Loveth"} headerIcon={"bell-o"}/>
      <SearchFilter icon="search" placeholder={"Enter your Favourite Recipe"}/>
      {/*categories filter*/}
      <View style={{marginTop: 22,}}>
        <Text 
        style={{
          fontSize: 22, 
          fontWeight: 'bold'
          }}
          >Categories </Text>
          {/*Categories List */}
          <CategoriesFilter/>
      </View>
      {/*RecipeList*/}
      <View style={{marginTop: 22, flex: 1, marginBottom: 22}}>
        <Text 
        style={{
          fontSize: 22, 
          fontWeight: 'bold'
          }}
          >Recipe </Text>
          <RecipeCard/>
      </View>
    </SafeAreaView>
  )
    
}

export default RecipeListScreen;