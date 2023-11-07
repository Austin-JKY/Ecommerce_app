import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import RNBounceable from '@freakycoder/react-native-bounceable'
import { colors } from '../core/Styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesgin from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-native'
import { logout } from '../redux/userSlice'
const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useSelector((state)=>state.user.user);
  const dispatch = useDispatch();


  const Logout = ()=>{
    dispatch(logout(userData));
  }
  
  return (
    <View style={styles.container}>
      <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
      
              <View style={{flex:1,backgroundColor:'#fff',marginTop:200}}>
                <View height={80}/>
                <View style={{flexDirection:'row',marginHorizontal:20,justifyContent:'center',borderWidth:1,padding:20}}>
                  <Text style={{color:'#000',fontSize:16,marginRight:20,fontWeight:'700'}}>UserName    </Text>
                  <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>
                    {userData.username}
                  </Text>
                </View>
                <View height={20}/>
                <View style={{flexDirection:'row',marginHorizontal:20,justifyContent:'center',borderWidth:1,padding:20}}>
                  <Text style={{color:'#000',fontSize:16,marginRight:20,fontWeight:'700'}}>Email</Text>
                  <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>
                    {userData.email}
                  </Text>
                </View>

                <View height={20}/>
                <View style={{flexDirection:'row',marginHorizontal:20,justifyContent:'center',borderWidth:1,padding:20}}>
                  <Text style={{color:'#000',fontSize:16,marginRight:20,fontWeight:'700'}}>Gender</Text>
                  <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>
                    {userData.gender}
                  </Text>
                </View>
              </View>
    
       </Modal>
      <View style={{backgroundColor:colors.mainColor,width:'100%',height:200,borderBottomRightRadius:100}}/>
      <View style={{position:'absolute',alignItems:'center'}}>
      <View style={styles.body}>
        <MaterialCommunityIcons name='microsoft-xbox-controller-menu' size={30} color={colors.white} marginLeft={10}/>
        <View style={{width:'80%',alignItems:'center'}}>
        <Text style={{color:colors.white,fontSize:20,fontWeight:'600'}}>Profile</Text>
        </View>
      </View>
      <View style={{width:100,height:100,borderRadius:50,borderColor:'#ffffff',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
      <Image source={{uri:userData.image}} style={{width:80,height:80,borderRadius:50,borderColor:'#ffffff',borderWidth:1,resizeMode:'cover'}}/>
      </View>
      <View height={10}/>
      <Text style={{fontSize:16,color:colors.white}}>{userData.firstName} {userData.lastName}</Text>
     
      <View style={styles.b2}>

      </View>

      </View>
      <View height={100}/>
      <RNBounceable onPress={() => setModalVisible(true)}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40}}>
          <Text style={{color:colors.black,fontSize:16,fontWeight:'600'}}>Personal Info</Text>
          <AntDesgin name='right' size={20} color={colors.black}/>
        </View>
        <View height={20}/>
        <View style={{borderWidth:0.3,marginHorizontal:30}}/>
        </RNBounceable>
        <View height={40}/>
        <RNBounceable>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40}}>
          <Text style={{color:colors.black,fontSize:16,fontWeight:'600'}}>Bank Account Info</Text>
          <AntDesgin name='right' size={20} color={colors.black}/>
        </View>
        <View height={20}/>
        <View style={{borderWidth:0.3,marginHorizontal:30}}/>
        </RNBounceable>

        <View height={40}/>
        <RNBounceable>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40}}>
          <Text style={{color:colors.black,fontSize:16,fontWeight:'600'}}>Address Info</Text>
          <AntDesgin name='right' size={20} color={colors.black}/>
        </View>
        <View height={20}/>
        <View style={{borderWidth:0.3,marginHorizontal:30}}/>
        </RNBounceable>
        <View height={40}/>
        <RNBounceable>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40}}>
          <Text style={{color:colors.black,fontSize:16,fontWeight:'600'}}>Change Password</Text>
          <AntDesgin name='right' size={20} color={colors.black}/>
        </View>
        <View height={20}/>
        <View style={{borderWidth:0.3,marginHorizontal:30}}/>
        </RNBounceable>
        <View height={40}/>
        <RNBounceable onPress={Logout}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40}}>
          <Text style={{color:colors.black,fontSize:16,fontWeight:'600'}}>Log Out</Text>
          <AntDesgin name='right' size={20} color={colors.black}/>
        </View>
        <View height={20}/>
        <View style={{borderWidth:0.3,marginHorizontal:30}}/>
        </RNBounceable>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  body:{
    width:'100%',
    margin:10,
    flexDirection:'row',
    alignItems:'center',
  }
})