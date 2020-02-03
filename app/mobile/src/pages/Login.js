import React, { useState, useEffect } from 'react';
import {View, Image, Text, KeyboardAvoidingView ,  AsyncStorage ,Platform ,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../../assets/icon.png';
import service from '../services/api';

export default function Login({navigation}){

    const [email,setEmail] = useState('');
    const [password,setPasword] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user =>{
            if(user){
                navigation.navigate('Acamps');
            }
        });
    },[]);


    async function handleSubmit() {
        console.log(email);
        console.log(password);

        

        var response = await service.post('/sessions',{
            email
        });

        console.log("O valor retornado é " + response.data._id);

        await AsyncStorage.setItem('user',response.data._id);

        navigation.navigate('Acamps');

    }

    return (
        <KeyboardAvoidingView enabled={ Platform.OS == 'ios'} style={styles.container}>
        
            <Image source={logo} />
            <View style={styles.form}>
            <Text style={styles.label}>Seu E-mail *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={text => setEmail(text)}
            ></TextInput>

            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry={true} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={text => setPasword(text)}
            ></TextInput>

            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    form:{
        alignSelf:'stretch',
        paddingHorizontal:30,
        marginTop:30,
    },
    label:{
        fontWeight:'bold',
        color:'#444',
        marginBottom:8,
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color:'#444',
        height:44,
        marginBottom:20,
        borderRadius:2
    },
    button:{
        height:42,
        backgroundColor:'#f05a5b',
        borderRadius:6,
        textAlign: 'center',
        marginTop:5

    },
    buttonText:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16,
        width:200,
        height:100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 10,
    }
});