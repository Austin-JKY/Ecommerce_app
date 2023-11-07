import { StyleSheet, Text, TouchableOpacity, View ,Image, TextInput} from 'react-native'
import React , {useState}from 'react'
import { colors } from '../core/Styles'
import RNBounceable from '@freakycoder/react-native-bounceable'
import axios from 'axios'
import { login } from '../api/ProductApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice'

const LoginScreen = ({navigation}) => {

    // const [userToken,setUserToken] = useState('')
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    const [password,setPassword] = useState('');
    
    const LoginAPIPost = async ()=>{
        if(!email || !password) return 
        try{
            const reqData = {
                username: email,
                password: password,
            }
            const {data} = await login(reqData);
            // console.log(response.data);
            dispatch(setUser(data));
            navigation.navigate('Main');
            // console.log(data);
        }catch(error){
            console.log(error);
        }
    }
    
const onClick = ()=>{
    navigation.navigate('Register');
}
const onHome = ()=>{
    navigation.navigate('Register')
}
  return (
    <View style = {styles.container}>
        <View style={styles.backMain}/>
        <View style={{position  :'absolute',marginLeft:50,width:'100%'}}>
        <View height={180}/>
        <Text style={{color:colors.white,fontSize:25,fontWeight:'bold'}}>Login</Text>
        <View height={10}/>
        <View style={{width:50,borderWidth:0.4,borderColor:colors.white}}/>
        <View height={50}/>
        <View style={{width:'70%'}}>
        <Text style={{color:colors.white,fontSize:12}}>Email</Text>
        <TextInput color={colors.white} placeholderTextColor={colors.white} placeholder='Enter Email' style={{width:'100%',borderBottomWidth:0.2,borderBottomColor:colors.white}} keyboardType='email-address' onChangeText={email=>setEmail(email)}/>
        </View>
        <View height={30}/>
        <View style={{width:'70%'}}>
        <Text style={{color:colors.white,fontSize:12}}>Password</Text>
        <TextInput color={colors.white} placeholderTextColor={colors.white} placeholder='Enter Password' style={{width:'100%',borderBottomWidth:0.2,borderBottomColor:colors.white}} keyboardType='visible-password' onChangeText={password=>setPassword(password)}/>
        <RNBounceable><Text style={{color:colors.white2,textAlign:'right',marginTop:10}}>forget password?</Text></RNBounceable>
        </View>
        <View height={25}/>
        <View style={{width:'70%',flexDirection:'row'}}>
            <RNBounceable onPress={onHome} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:colors.white,width:'45%',borderRadius:30}}>
                <Text style={{color:colors.black,fontSize:16,textAlign:'center'}}>Register</Text>
            </RNBounceable>
            <RNBounceable onPress={()=>LoginAPIPost()} style={{marginLeft:25,paddingHorizontal:30,paddingVertical:15,backgroundColor:colors.black,width:'45%',borderRadius:30}}>
                <Text style={{color:colors.white,fontSize:16,textAlign:'center'}}>Login</Text>
            </RNBounceable>
        </View>
        <View height={50}/>
        <View style={{width:'70%',alignItems:'center'}}>
        <Text style={{color:colors.black,fontSize:13}}>Or Login With</Text>
        <View height={50}/>
        {/* for other login */}
        <View style={{flexDirection:'row'}}> 
            <RNBounceable>
            <View style={{borderWidth:0.2,padding:15,borderRadius:5,}}>
                <Image source={require('../../assets/images/google.png')} style={{width:30,height:30}}/>
            </View>
            </RNBounceable>
            <RNBounceable>
            <View style={{borderWidth:0.2,padding:15,borderRadius:5,marginLeft:20}}>
                <Image source={require('../../assets/images/facebook.png')} style={{width:30,height:30}}/>
            </View>
            </RNBounceable>
        </View>
        <View height={50}/>
        <View style={{flexDirection:'row'}}><Text style={{color:colors.white2}}>Don't have an account?</Text>
        <RNBounceable onPress={onClick}>
        <Text style={{color:colors.black,marginLeft:5}}>
            SIGN UP
            </Text>
        </RNBounceable>
        </View>
        </View>
        </View>

        
    </View>
  )
}


export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    backMain:{width:'100%',height:500,backgroundColor:colors.mainColor,borderBottomLeftRadius:20,borderBottomRightRadius:20},
})