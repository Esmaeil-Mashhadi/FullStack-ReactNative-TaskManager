import { Formik } from 'formik'
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import formSchema from '../../utils/FormValidation'
import { Dispatch, SetStateAction } from 'react'
import Animated, {  ZoomInLeft , ZoomOutLeft } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'


type AuthPropType ={
    setShowLogin: Dispatch<SetStateAction<boolean>>
}

const SignUp = ({setShowLogin}:AuthPropType) => {

  const submitHandler = ()=>{

  }

  const switchHandler = ()=>{
    setShowLogin(true)
  }

  return (
    <View   style={styles.container}>
        <Image style ={styles.image} source={require("../../public/images/autBG.jpg")} />
        <Animated.View entering={ZoomInLeft.delay(20).duration(500)} exiting={ZoomOutLeft} style ={styles.formContainer}>
             <Text style={styles.header}>Registeration Form</Text>  

            <Formik
              initialValues={{email:"" , password:"" , confirm:""}}
              onSubmit={submitHandler}
              validationSchema={formSchema}
            >
               {({ values, handleChange, errors }) => (
                <View style ={styles.inputContainer}>
                      <View>
                         <TextInput 
                          placeholder='Email '
                          placeholderTextColor="white"
                          style={styles.input} value={values.email} 
                          onChangeText={handleChange('email')} />
                          <Text style={styles.errorStyle}>{errors.email}</Text>
                      </View>
                      <View>
                         <TextInput
                           placeholder='Enter password '
                           placeholderTextColor="white"
                           secureTextEntry
                           style={styles.input} value={values.password}  
                           onChangeText={handleChange('password')} 
                          />
                          <Text style={styles.errorStyle}>{errors.password}</Text>

                      </View>
                      <View>
                         <TextInput
                           placeholder='confirm your password'
                           placeholderTextColor="white"
                           secureTextEntry
                           style={styles.input} value={values.confirm}  
                           onChangeText={handleChange('confirm')} 
                          />
                        <Text style={styles.errorStyle}>{errors.confirm}</Text>
                      </View>
                      <View style ={styles.buttonContainer}>
                          <Pressable style={styles.submitButton} onPress={submitHandler}>
                               <Text style={{color:"black", fontWeight:'bold'}}>Register</Text>
                          </Pressable>
                          <TouchableOpacity onPress={switchHandler}>
                               <Text
                                style={{color:"white", fontWeight:'bold' ,textDecorationLine:"underline"}}>
                                i already have an account
                                </Text>
                          </TouchableOpacity>
                      </View>
                  
               </View>
                  )}

            </Formik>


        </Animated.View>
    </View>
  )
}



export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
  },

  formContainer:{
    borderRadius:5,
    width:"85%",
    minHeight:400,
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:"rgba(0, 0, 0, 0.673)",
  },

  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center'
  },

  header:{
    fontWeight:'bold',
    fontSize:20,
    color:"white",
  },
  inputContainer:{
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"center",
    gap:30
  },
  input:{
    backgroundColor:"rgba(49, 76, 76, 0.63)",
    borderRadius:5,
    minWidth:'80%',
    color:"white",
    fontWeight:'bold'
  },

  image:{
    position:'absolute',
    width:"100%",
    height:"100%",
  },
  text:{
    position:'absolute',

  },
  submitButton:{
    backgroundColor:'lightgray',
    padding:10,
    borderRadius:5,
    fontWeight:'bold',
  },
  errorStyle:{
    color:'pink'
  }
})