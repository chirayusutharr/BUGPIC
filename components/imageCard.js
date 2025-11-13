import { View , Text , StyleSheet, Pressable} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { getImageSize, wp } from "@/helpers/common";


const ImageCard = ({item, index, columns}) => {

    const isLastRow = ()=>{
        return (index+1) % columns ===0;

    }

    const getImageHeight = () =>{
        let {imageHeight: height, imageWidth: width} = item;
        return{height: getImageSize(height, width)};
    }

    return(
        <Pressable style={[styles.imageWrapper, !isLastRow() && styles.spacing]}>
            <Image style={[styles.image, getImageHeight()]} 
            source={item?.webformatURL}
            transition={100}/>
        </Pressable>
        
    )

}
const styles = StyleSheet.create({
    image:{
        height: 300,
        width: '100%',

    },
    imageWrapper:{
        backgroundColor: 'gray',
        borderRadius: 20,
        borderCurve: 'continuous',
        overflow: 'hidden',
        marginBottom: wp(2),
        marginLeft: wp(2)
    },
    spacing:{
        marginRight: wp(2),
    }
})

export default ImageCard