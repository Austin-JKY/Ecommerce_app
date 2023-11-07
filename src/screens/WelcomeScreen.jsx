import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'


const WelcomeScreen = ({navigation}) => {
const onSkip = ()=>{
  navigation.navigate('Login');
}
  return (
    <>
      
      <Onboarding onDone={onSkip} onSkip={onSkip} pages={[{
        
        image: <Image source={require('../../assets/images/shopping1.png')}/>,
        title: 'Choose Product',
        subtitle: 'We have a 100k Products.Choose your product from our E-commerce shop.',
        
        backgroundColor: '#fff',
      },
      {
        
        image: <Image source={require('../../assets/images/shopping2.png')}/>,
        title: 'Easy & Safe Payment',
        subtitle: 'Easy checkout & safe payment method.Trusted by our Customers From Over the World',
        
        backgroundColor: '#fff',
      },
      {
        
        image: <Image source={require('../../assets/images/shopping3.png')} />,
        title: 'Online Cart',
        subtitle: 'Select and memorize your future pur-chases with smart online shopping  cart.',
      
        backgroundColor: '#fff',
      },]}/>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({

})