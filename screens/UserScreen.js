import React, {useState} from "react";
import {ScrollView, StyleSheet} from 'react-native'
import { List,Snackbar } from 'react-native-paper'
import {AntDesign} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import LightScreen from "../components/LightScreen";
import DisplayLogout from "../sections/DisplayLogout";
import DisplayLogin from "../sections/DisplayLogin";
import { useIsLoggedIn } from "../contexts/LoginInfo";
import usernav from '../defaults/usernav.json'
import tabnav from '../defaults/tabnav.json'
import colors from '../defaults/colors.json'

export default function UserPage() {
  const isLoggedIn = useIsLoggedIn();
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false)
  const showVisible = ()=> setVisible(true)
  const hideVisible = ()=>setVisible(false)
  return (
    <LightScreen>
      <ScrollView style={styles.scroll}>
      <List.Item
        title = "Cart"
        description="Show Cart"
        right={()=> <AntDesign name="shoppingcart" size={30} color={colors.PRIMARY_RED} />}
        onPress={
          ()=>{
            navigation.navigate(tabnav.Cart)
          }
        }
      />
      <List.Item
        title = "Orders"
        description="Show All Orders"
        right={()=> <AntDesign name="isv" size={30} color={colors.PRIMARY_RED} />}
        onPress={
          ()=>{
            if(!isLoggedIn) return showVisible()
            navigation.navigate(usernav.orders)
          }
        }
      />
      <List.Item
        title = "Address"
        description="Show All My Address"
        right={()=> <AntDesign name="filetext1" size={30} color={colors.PRIMARY_RED} />}
        onPress={
          ()=>{
            if(!isLoggedIn) return showVisible()
            navigation.navigate(usernav.addresses)
          }
        }
      />
       <List.Item
        title = "Password"
        description="Change Password"
        right={()=> <AntDesign name="key" size={30} color={colors.PRIMARY_RED} />}
        onPress={
          ()=>{
            if(!isLoggedIn) return showVisible()
            navigation.navigate(usernav.changepassword)
          }
        }
      />
      {isLoggedIn ? <DisplayLogout /> : <DisplayLogin />}
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={hideVisible}
        duration={3000}
      >
        You Must Be Logged In For This
      </Snackbar>
    </LightScreen>
  );
}

const styles = StyleSheet.create({
  scroll:{
    width: "100%",
  }
})