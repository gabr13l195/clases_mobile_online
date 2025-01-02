import React from 'react'
import { View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import { styles } from '../Theme/Styles'

export const RegisterScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Registrarse</Text>
            <TextInput
                label="Email"
                mode='outlined'
                placeholder='Ingrese su correo'
                style={styles.input}
            />
            <TextInput
                label="Contraseña"
                mode='outlined'
                placeholder='Ingrese su contraseña'
                style={styles.input}
            />
        </View>
    )
}
