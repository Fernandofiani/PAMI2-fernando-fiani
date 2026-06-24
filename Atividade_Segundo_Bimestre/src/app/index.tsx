import { Text, View, StyleSheet,Image} from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { AlertCircleIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button, ButtonText, ButtonSpinner } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';

const [isInvalid,setIsInvalid] = React.useState(false);
const [inputValue,setInputValue] = React.useState("12345");

const handleSubmit = () =>{
  if(inputValue.length < 6){
    setIsInvalid(true);
  }
  else{
    setIsInvalid(false);
  }
};

export default function Index() {
  return (
    <View style={styles.container}>

    </View>
  );
}


const styles = StyleSheet.create({
    container:{
      alignItems:"center",
      backgroundColor:"#9c1a1a"

    } 
});
