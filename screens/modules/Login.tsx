import { Formik } from 'formik'
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import Animated, {  ZoomInRight, ZoomOutRight } from 'react-native-reanimated'

type AuthPropType ={
    setShowLogin: Dispatch<SetStateAction<boolean>>
}


const Login = ({setShowLogin}:AuthPropType) => {


  const submitHandler = ()=>{

  }




  return (
    <View   style={styles.container}>
        <Image style ={styles.image} source={require("../../public/images/autBG.jpg")} />
        <Animated.View  entering={ZoomInRight.delay(20).duration(500)} exiting={ZoomOutRight} style ={styles.formContainer}>
             <Text style={styles.header}>Registeration Form</Text>  

            <Formik
              initialValues={{email:"" , password:"" , confirm:""}}
              onSubmit={submitHandler}
            >
               {({ values, handleChange, errors }) => (
                <View style ={styles.inputContainer}>
                      <View>
                         <TextInput 
                          placeholder='Email '
                          placeholderTextColor="white"
                          style={styles.input} value={values.email} 
                          onChangeText={handleChange('email')} />
                      </View>
                      <View>
                         <TextInput
                           placeholder='Enter password '
                           placeholderTextColor="white"
                           secureTextEntry
                           style={styles.input} value={values.password}  
                           onChangeText={handleChange('password')} 
                          />

                      </View>
                      <View style ={styles.buttonContainer}>
                          <Pressable style={styles.submitButton} onPress={submitHandler}>
                               <Text style={{color:"black", fontWeight:'bold'}}>Login</Text>
                          </Pressable>
                          <Pressable onPress={()=>setShowLogin(false)} >
                               <Text style={{color:"white", fontWeight:'bold' ,textDecorationLine:"underline"}}>Don't have an account?</Text>
                          </Pressable>
                      </View>
                  
               </View>
                  )}

            </Formik>


        </Animated.View>
    </View>
  )
}



export default Login

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