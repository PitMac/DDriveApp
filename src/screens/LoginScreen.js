import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';

export default function LoginScreen() {
  const [formfields, setFormfields] = useState({
    username: '',
    password: '',
  });
  const theme = useTheme();

  const [seePassword, setSeePassword] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        paddingHorizontal: 20,
      }}>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white'}}>
        D-Drive
      </Text>
      <View
        style={{
          width: '100%',
          maxWidth: 400,
          padding: 20,
        }}>
        <TextInput
          label="Username"
          value={formfields.username}
          onChangeText={text => setFormfields({...formfields, username: text})}
          mode="outlined"
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Password"
          value={formfields.password}
          onChangeText={text => setFormfields({...formfields, password: text})}
          mode="outlined"
          secureTextEntry={!seePassword}
          style={{marginBottom: 20}}
          right={
            <TextInput.Icon
              icon={!seePassword ? 'eye' : 'eye-off'}
              onPress={() => setSeePassword(!seePassword)}
            />
          }
        />
        <Button
          style={{borderRadius: 5, paddingVertical: 2}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Iniciar sesión
        </Button>
      </View>
    </View>
  );
}
