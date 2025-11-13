import   {Text , View , StyleSheet} from 'react-native';
import React from 'react';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import { data } from '@/constants/data'
import { wp, hp } from '@/helpers/common';

interface CategoryItemProps {
  title: string;
  index: string;
  isActive: boolean;
  handleChangeCategory: (categories: string | null) => void;
}

interface CategoriesProps {
  activeCategory: string | null;
  handleChangeCategory: (categories: string | null) => void;
}


const Categories = ({activeCategory , handleChangeCategory}: CategoriesProps) => {
    return(
        <FlatList 
            horizontal
            contentContainerStyle={styles.flatListContainer} 
            showsHorizontalScrollIndicator={false}
            data={data.categories}
            keyExtractor={item=> item} 
            renderItem={({item, index})=>(
                <CategoryItem
                    isActive = {activeCategory===item}
                    handleChangeCategory = {handleChangeCategory}
                    title={item}
                     index={item}
                    />
            )}
        />
    )
}

const CategoryItem = ({title, index, isActive, handleChangeCategory}: CategoryItemProps)=>{
    return(
        <View>
            <Pressable 
            onPress={()=> handleChangeCategory(isActive? null: title)}
            style={styles.category}
            >
                <Text style={styles.title}>{title}</Text>
            </Pressable>
          
        </View>
    )
}

const styles  = StyleSheet.create({
    flatListContainer:{
        paddingHorizontal: wp(4),
        gap: 8,
    },
    category:{
        padding:12,
        paddingHorizontal:15,
        borderWidth: 1,
        borderColor: '#cfcccc',
        // backgroundColor:'white',
        borderRadius: 14,
        borderCurve: 'continuous',
    },
    title:{
        fontSize: hp(1.8),
        fontWeight: 600,

    }

})
export default Categories