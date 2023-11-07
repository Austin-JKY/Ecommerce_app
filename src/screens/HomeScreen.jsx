import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../core/Styles';
import TabBarItem from '../compments/TabBarItem';
import CommonComponent from '../compments/CommonComponent';
import {Category_URL} from '../core/URL';
import axios from 'axios';
import MasonryList from '@react-native-seoul/masonry-list'
import { useSelector } from 'react-redux';

const cate = [
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting',
];

const HomeScreen = ({navigation}) => {
  const userData = useSelector((state) => state.user.user);
  const [activeCate, setActiveCate] = useState('smartphones');
  const [product, setProduct] = useState([]);

  // console.log(product[0]);
  // console.log(activeCate);
  const goToDetail = id => {
    navigation.navigate('Detail', {productID: id});
  };

  const api = Category_URL;
  const handleClick = category => {
    setActiveCate(category);
  };

  const fetchData = async () => {
    try {
      await axios.get(api + activeCate).then(res => {
        setProduct(res.data.products);
      }); 
      // console.log(api+activeCate);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [activeCate]);
  return (
    <>
    
      <View style={{flex: 1, width: '100%'}}>
        {/* Header */}
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{color: colors.mainColor, fontSize: 25, fontWeight: '900'}}>
            FATCO
          </Text>
          <Image
            source={{uri:userData.image}}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
        </View>
        {/* Header */}
        {/* <ScrollView> */}
          {/* Search */}
          <View
            style={{
              paddingLeft: 20,
              borderWidth: 0.2,
              borderColor: colors.black,
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              color={colors.black}
              placeholderTextColor={colors.black}
              placeholder="Search"
              maxLength={40}
              style={{width: '60%'}}
            />
            <Image
              source={require('../../assets/images/search.png')}
              style={{width: 20, height: 20, marginRight: 20}}
            />
          </View>
          {/* Search */}
          {/* Body */}
          <View height={20} />
          <TabBarItem data={cate} handleClick={handleClick} />
          <View height={20} />
          {/* <FlatList
            
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{marginLeft: 20}}
            data={product}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CommonComponent category={item} handlePress={goToDetail} />
            )}
          /> */}

          <MasonryList
            data={product}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            loading={true}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => (
              <CommonComponent category={item} handlePress={goToDetail} />
            )}
          />
        {/* </ScrollView> */}
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
