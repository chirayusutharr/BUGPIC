
import React, { useEffect, useState } from 'react';
import { Text, View ,Pressable , StyleSheet} from "react-native";
import {useSafeAreaInsets } from "react-native-safe-area-context";
import {FontAwesome6} from '@expo/vector-icons'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Categories from '@/components/categories';
import {wp , hp} from '@/helpers/common'
import { apiCall } from '@/api';
import ImageGrid from '@/components/imageGrid';



const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const paddingTop = top>0? top+10: 30;
  const [search ,setSearch] = useState('');
  const [images , setImages] = useState([]);
  const [activeCategory , setActiveCategory] = useState(null);

  useEffect(()=>{
    fetchImages();
  },[]);
  
  const fetchImages = async (params ={page:1}, append=false)=>{
    let res = await apiCall(params);
    // console.log(res.data.hits[0])
    if(res.success && res?.data?.hits){
      if(append)
        setImages([...images, ...res.data.hits]) 
        
      else
        setImages([...res.data.hits])
    }
  }
  

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  }
  return (
   <GestureHandlerRootView>
    <View style={[styles.container, {paddingTop}]}>
      <View style={styles.header}>
          <Pressable>
             <Text style={styles.title}>
                 BUGPIC
             </Text>
          </Pressable>
          <Pressable>
                <FontAwesome6 name="bars" size={28} color="black" />
          </Pressable>
      </View>
      <ScrollView contentContainerStyle={{gap: 15}}> 
        {/* search bar */}
        <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
                <Ionicons name="search-outline" size={24} color="black" />
            </View>
             <TextInput 
                placeholder='Search for photo...'
                value={search}
                onChangeText={value=> setSearch(value)}
                style={styles.searchInput}
             /> 
        </View>
        {/* Categories */}
        <View>
        <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory}/> 
        </View> 


        {/* images grid */}
        <View>
          {
            images.length>0 && <ImageGrid images={images} />
            
          }
        </View>
        
      </ScrollView>
    </View>
   </GestureHandlerRootView>

  )
  
}
const styles = StyleSheet.create({
  container:{
    flex :1,
    gap:15,
    // padding:10,
  },
  title:{
    fontSize: hp(4),
    color: 'black',
    fontWeight: '600',
    
  },
  header:{
    marginHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:15,

  },
  searchBar:{
    marginHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:'white',
    padding: 6,
    // paddingLeft:10,
    borderRadius: 20,
    
  },
  searchIcon:{
    padding:8

  },
  searchInput:{
    flex:1,
    borderRadius: 15,
    paddingVertical:10,
    fontSize: hp(1.8)
  }
})

export default HomeScreen

