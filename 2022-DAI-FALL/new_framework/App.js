import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text, Layout, Button, Spinner, Icon, Input } from '@ui-kitten/components';
import LoginForm from './screens/main';
import { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';



function HomeScreen({ navigation }) {

  const [value, setValue] = useState('');

  const [loginState, setLoginState] = useState("before")
  var c = "blue";
  var btn_text = "click me";

  if (loginState === "before") {
    c = "blue";
    btn_text = "click me";
  }

  if (loginState === "during") {
    c = "green"
    btn_text = "LOADING..."
  }

  if (loginState === "after") {
    c = "grey"
    btn_text = "Success"
  }

  
  const HandleButton = () => {
    if (loginState === 'before') {
      setLoginState('during');
    } if (loginState === 'during') {
      setLoginState('after')
    }

    // if (loginState === 'after') {
    //   r.push('/dashboard');
    // }

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20 }}>
      <Text>Login Form</Text>
      {/* <LoginForm loginState={loginState} onLoginClick={()=>Login()}/> */}
      <Input
        size='large'
        placeholder='Email'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Input
        size='large'
        placeholder='Phone'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button style={c} 
        title="Go to Details"
        // onPress={() => HandleButton() }>Click me</Button>
        onPress={() => navigation.navigate('Dashboard')}>{HandleButton()}Click me</Button>
    </View>
  );
}

function DashboardScreen({ navigation }) {
  return (
    <View>
      <Card>
    <Card.Title title="Welcome" subtitle="HELPPPPPPpp"  />
    <Card.Content>
      <Title>WASSUP</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://placekitten.com/600/600' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}>Go Home</Button>
      <Button status='info' title="Go back" onPress={() => navigation.goBack()}>Go back</Button>
      <Button
      status='success'
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}> First Screen</Button>
    </View>
  );
}


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

  // const Login = async () => {
  //   setLoginState('during');
  //   // takes time
  //   // mock of time passing => useless code
  //   // its going to take time to talk to an "endpoint" to see if your user credentials are legit
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   setLoginState('after');
  //   // going to stall for 1-2s
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //  navigation.push('Dashboard')
  // }