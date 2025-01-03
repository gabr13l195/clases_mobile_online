import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../Theme/Styles'

interface FormRegister{
    email:string;
    password: string;
}

export const RegisterScreen = () => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        email: '',
        password:''
    })

const handleSetValues=(key:string, value:string)=>{
    setFormRegister({... formRegister,[key]:value})
}

    return (
        <View style={styles.root}>
            <Text variant="headlineMedium">Registrarse</Text>
            <TextInput
                label="Email"
                mode='outlined'
                placeholder='Ingrese su correo'
                selectionColor='red'
                style={styles.input}
            />
            <TextInput
                label="Contraseña"
                mode='outlined'
                placeholder='Ingrese su contraseña'
                secureTextEntry={true}
                style={styles.input}
            />
            <Button style={styles.button}
                icon="account-circle-outline" 
                mode="contained" 
                buttonColor='#153E90'
                onPress={() => console.log('Pressed')}>
                Registrate
            </Button>
        </View>
    )
}
