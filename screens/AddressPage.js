import React, {useState} from "react";
import { ScrollView } from "react-native";
import {Snackbar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import usernav from '../defaults/usernav.json'
import CustomButton from '../components/CustomButton'
import LightScreen from "../components/LightScreen";
import DisplayError from "../components/DisplayError";
import CustomSpinner from "../components/CustomSpinner";
import useFetchAddress from "../hooks/useFetchAddress";
import DisplayAddress from "../sections/DisplayAddress";


export default function AddressPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const { loading, err, result = [], reloadResources } = useFetchAddress();
  const success = ()=> {
    setShowSuccess(true)
    reloadResources()
  }
  const failed = ()=> setShowFailed(true)
  const navigation = useNavigation()

  return (
    <LightScreen>
      <ScrollView style={{width: "100%", flex: 1, minHeight:"100%"}}>
        <CustomButton
          mode="text"
          onPress={()=>navigation.navigate(usernav.addaddress)}
        >
          Add Address
        </CustomButton>

        {loading && <CustomSpinner />}

        {err?<DisplayError errorText={err}/>:null}

        { result.length>0 && result.map((address) => (
          <DisplayAddress key={address.address_id} address={address}
            onSuccess={success}
            onFail={failed}
          />
        ))}

        <CustomButton
          mode="text"
          onPress={reloadResources}
        >
          Refresh
        </CustomButton>
        
      </ScrollView>
      <Snackbar
        visible={showSuccess}
        onDismiss={() => {
          setShowSuccess(false);
        }}
        duration={3000}
      >
        Successfully Deleted
      </Snackbar>
      <Snackbar
        visible={showFailed}
        onDismiss={() => {
          setShowFailed(false);
        }}
        duration={3000}
      >
        Failed To Delete
      </Snackbar>
    </LightScreen>
  );
}
