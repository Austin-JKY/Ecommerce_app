import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../core/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNBounceable from '@freakycoder/react-native-bounceable';

const CommonComponent = ({category, style, handlePress}) => {
  return (
    <RNBounceable onPress={() => handlePress(category.id)}>
      <View
        style={{
          // backgroundColor: colors.mainColor,
          width: 180,
          // height: 400,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 10,
          ...style,
          margin:10,
        }}>
        <View style={{ height: 200}}>
          <Image
            source={{uri: category.thumbnail}}
            style={{height: 200, resizeMode: 'stretch'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, marginTop: 5, marginLeft: 20}}>
            <Text
              style={{
                color: colors.mainColor,
                fontSize: 25,
                fontWeight: '900',
              }}>
              {category.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: colors.black, fontWeight: '700'}}>
                Price -
              </Text>
              <Text style={{color: colors.black, fontWeight: '700'}}>
                {' '}
                {category.price}$
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: colors.black, fontWeight: '700'}}>
                Discount -
              </Text>
              <Text style={{color: colors.black, fontWeight: '700'}}>
                {' '}
                {category.discountPercentage}%
              </Text>
            </View>
          </View>
          <AntDesign
            name="rightcircleo"
            color={colors.mainColor}
            size={30}
            style={{

            }}
          />
        </View>
      </View>
    </RNBounceable>
  );
};

export default CommonComponent;

const styles = StyleSheet.create({});
