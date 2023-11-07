import { StyleSheet, Text, TouchableOpacity, View ,Image, TextInput} from 'react-native'
import React , {useState}from 'react'
import { colors } from '../core/Styles'
import RNBounceable from '@freakycoder/react-native-bounceable'



const RegisterScreen = ({navigation}) => {
    const onClick = ()=>{
        navigation.navigate('Login')
    }
  
  return (
    <View style = {styles.container}>
        <View style={styles.backMain}/>
        <View style={{position:'absolute',marginLeft:50,width:'100%'}}>
        <View height={180}/>
        <Text style={{color:colors.white,fontSize:25,fontWeight:'bold'}}>Register</Text>
        <View height={10}/>
        <View style={{width:70,borderWidth:0.4,borderColor:colors.white}}/>
        <View height={50}/>
        <View style={{width:'70%'}}>
        <Text style={{color:colors.white,fontSize:12}}>Email</Text>
        <TextInput color={colors.white} placeholderTextColor={colors.white} placeholder='Enter Email' style={{width:'100%',borderBottomWidth:0.2,borderBottomColor:colors.white}} keyboardType='email-address'/>
        </View>
        <View height={30}/>
        <View style={{width:'70%'}}>
        <Text style={{color:colors.white,fontSize:12}}>Password</Text>
        <TextInput color={colors.white} placeholderTextColor={colors.white} placeholder='Enter Password' style={{width:'100%',borderBottomWidth:0.2,borderBottomColor:colors.white}} keyboardType='email-address'/>
        
        </View>
        <View height={30}/>
        <View style={{width:'70%'}}>
        <Text style={{color:colors.white,fontSize:12}}>Password</Text>
        <TextInput color={colors.white} placeholderTextColor={colors.white} placeholder='Enter Password' style={{width:'100%',borderBottomWidth:0.2,borderBottomColor:colors.white}} keyboardType='email-address'/>
        </View>
        <View height={60}/>
        <View style={{width:'70%'}}>

            <RNBounceable style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:colors.black,width:'100%',borderRadius:30}}>
                <Text style={{color:colors.white,fontSize:16,textAlign:'center'}}>Register</Text>
            </RNBounceable>
        </View>
        <View height={50}/>
        <View style={{width:'70%',alignItems:'center'}}>
        
        <View height={50}/>
        
        <View height={50}/>
        <View style={{flexDirection:'row'}}><Text style={{color:colors.white2}}>Have an account?</Text>
        <RNBounceable onPress={onClick}>
        <Text style={{color:colors.black,marginLeft:5}}>
            SIGN IN
            </Text>
        </RNBounceable>
        </View>
        </View>
        </View>

        
    </View>
  )
}


export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    backMain:{width:'100%',height:600,backgroundColor:colors.mainColor,borderBottomLeftRadius:20,borderBottomRightRadius:20},
})