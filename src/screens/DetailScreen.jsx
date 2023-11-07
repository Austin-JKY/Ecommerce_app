import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AntDesgin from 'react-native-vector-icons/AntDesign'
import useProductDetail from '../hooks/useProductDetail'
import { ImageSlider } from 'react-native-image-slider-banner'
import { colors } from '../core/Styles'
import RNBounceable from '@freakycoder/react-native-bounceable'
import { useDispatch} from 'react-redux'

import { addToCart } from '../redux/cartSlice'

const DetailScreen = () => {
    const route = useRoute()
    
  const {productID} = route.params;
  const {data:product} = useProductDetail(productID);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({...product,qty:1}));
  };
  
  // console.log(product);
  return (
    <View style={{flex:1}}>
      <View style={{width:'100%',height:250,elevation:30}}>
        <ImageSlider data={product.images?.map((img)=> ({img:img}))} autoPlay={true} caroselImageStyle={{ resizeMode: 'stretch',height:'100%'}} activeIndicatorStyle={{backgroundColor:colors.white}} inActiveIndicatorStyle={{backgroundColor:colors.mainColor}} showIndicator={false}/> 
      </View>
      <ScrollView>
      <View style={{margin:20}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{width:'50%'}}>
        <Text style={{color:colors.mainColor,fontSize:30,fontWeight:'900'}}>{product.title}</Text>
        </View>
        <Text style={{color:colors.black,fontWeight:'900',fontSize:25}}>{product.brand}</Text>
        </View>
        <View style={{marginTop:20}}>
        <Text style={{color:colors.black,fontSize:30}}>PRICE - {product.price}$</Text>
        
        <ScrollView style={{marginTop:20}} horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            
            <View style={{borderWidth:1,padding:10,marginLeft:5,borderColor:colors.mainColor,flexDirection:'row',borderRadius:10}}>
            <Text style={{color:colors.black,fontSize:18}}>Discount - </Text>
              <Text style={{color:colors.black,fontSize:18}}>{product.discountPercentage}%</Text>
            </View>
            <View style={{borderWidth:1,padding:10,marginLeft:5,borderColor:colors.mainColor,flexDirection:'row',borderRadius:10}}>
            <Text style={{color:colors.black,fontSize:18}}>Stock - </Text>
              <Text style={{color:colors.black,fontSize:18}}>{product.stock}</Text>
            </View>
            <View style={{borderWidth:1,padding:10,marginLeft:5,borderColor:colors.mainColor,flexDirection:'row',borderRadius:10}}>
            <Text style={{color:colors.black,fontSize:18}}>Rating - </Text>
              <Text style={{color:colors.black,fontSize:18}}>{product.rating}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{width:'100%',alignItems:'center',marginTop:20}}>
          <Text style={{color:colors.black,fontSize:18}}>Description</Text>
        </View>
        <Text style={{color:colors.black,marginTop:20,fontSize:16,textAlign:'justify'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<Text style={{color:colors.mainColor}}>{product.description}</Text>
        </Text>
        </View>
      </View>
      </ScrollView>
      <RNBounceable onPress={()=>handleAddToCart(product)} style={{width:'90%',height:50,backgroundColor:colors.mainColor,marginHorizontal:20,alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:10}}>
          <Text style={{fontSize:18,color:colors.white,fontWeight:'500',margin:10}}>Add to Cart</Text>
          <AntDesgin name='shoppingcart' size={18} color={colors.white}/>
      </RNBounceable>
    </View>
  )
}   





export default DetailScreen

const styles = StyleSheet.create({

})


