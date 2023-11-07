import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import { colors } from '../core/Styles';

import RNBounceable from '@freakycoder/react-native-bounceable';
import { addQty, minusQty, removeItemFromCart } from '../redux/cartSlice';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import { addQuantityToItem } from '../redux/cartSlice';
const MyCarts = () => {

  
  const addCart = useSelector((state) => state.cart.item);
  
  const dispatch = useDispatch();

  const handleAddQuantity = (id) => {
    dispatch(addQty(id));
  };
  const handleRemoveQuantity = (id) => {
    dispatch(minusQty(id));
  };
  const removeItem = (id) =>{
    dispatch(removeItemFromCart(id))
  }


// if(addCart == 0 )return null;
  return (
    <View style={{flex:1}}>
       

       <View style={{backgroundColor:colors.mainColor,width:'100%',height:60,borderBottomRightRadius:100,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View></View>
          <Text style={{fontSize:18,fontWeight:'600',color:'#fff'}}>Carts</Text>
          <AntDesgin name='shoppingcart' color={colors.white} marginRight={30} size={25}/>
       </View>
       {/* <View height={20}/> */}
      <FlatList data={addCart}
      keyExtractor={(item,index)=> index.toString()} 
      renderItem={({item,index})=>{
        return (
          <View style={{flex:1}}>
           
            <View style={{marginVertical:5,marginHorizontal:10,backgroundColor:'white',elevation:10,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
            <Image source={{uri:item?.thumbnail}} style={{width:120,height:100,resizeMode:'stretch',borderRadius:10}}/>
            <View style={{margin:10,marginLeft:20,width:'60%'}}>
              <Text style={{color:colors.mainColor,fontSize:18,fontWeight:'600'}}>{item.title}</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:colors.black,fontSize:15,fontWeight:'600',marginRight:10}}>{item.price}$</Text>
              <Text style={{color:colors.black,fontSize:15,fontWeight:'600',marginRight:10}}>{item.discountPercentage}%</Text>
              <Text style={{color:colors.black,fontSize:15,fontWeight:'600'}}>{item.rating}</Text>
              </View>
              <View height={10}/>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <RNBounceable onPress={()=>handleAddQuantity(item.id)}><AntDesgin name='plussquareo' size={30} color={colors.mainColor} marginHorizontal={5}/></RNBounceable>
                  <Text style={{color:colors.black,fontSize:20}}>{item.qty}</Text>
                  <RNBounceable onPress={()=>handleRemoveQuantity(item.id)}><AntDesgin name='minussquareo' size={30} color={colors.mainColor} marginHorizontal={5}/></RNBounceable>
                  
              </View>
            <View style={{flexDirection:'row'}}>
            <RNBounceable onPress={()=>removeItem(item.id)} style={{backgroundColor:colors.mainColor,width:130,alignItems:'center',padding:8,marginTop:10}}>
                <Text style={{color:'white'}}>Remove From Cart</Text>
              </RNBounceable>
              <RNBounceable style={{backgroundColor:colors.mainColor,width:50,alignItems:'center',padding:8,marginTop:10,marginLeft:10}}>
                <Text style={{color:'white'}}>Buy</Text>
              </RNBounceable>
            </View>
            </View>
            </View>
          </View>
        )
        
      }}  
      />
      
    </View>
  );
};

export default MyCarts;

const styles = StyleSheet.create({});
