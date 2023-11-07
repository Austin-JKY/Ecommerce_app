import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {colors} from '../core/Styles';
import RNBounceable from '@freakycoder/react-native-bounceable';

const TabBarItem = ({data, handleClick}) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handlePress = (item, index) => {
    setSelectedItem(index);
    handleClick(item);
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={index} style={{margin: 5}}>
            <RNBounceable onPress={() => handlePress(item, index)}>
              <View
                style={{
                  borderWidth: 0.5,
                  // height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // padding: 10,
                  borderRadius: 10,
                  backgroundColor:
                    selectedItem === index ? colors.mainColor : 'transparent',
                }}>
                <Text
                  style={{
                    color: selectedItem === index ? colors.white : 'black',
                    fontSize: 16,
                    padding: 10,
                  }}>
                  {item}
                </Text>
              </View>
            </RNBounceable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabBarItem;

const styles = StyleSheet.create({});
