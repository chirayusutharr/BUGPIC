import { View , Text , StyleSheet } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
// import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from './imageCard';
import { getColumnCount, wp } from "@/helpers/common";

const ImageGrid = ({images}) => {

    const columns = getColumnCount();
    return(
        <View style={styles.container}>
              <FlashList
                 data={images}
                 masonry 
                 numColumns={columns}
                 initialNumToRender = {1000}
                 contentContainerStyle={styles.listcontentstyle}
                 renderItem={({ item ,index}) => <ImageCard item={item} columns={columns} index={index} />}
                 estimatedItemSize={200}
              />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        minHeight:3,
        width: wp(100),
    },
    listcontentstyle:{
        paddingHorizontal:wp(4)

    }

})

export default ImageGrid