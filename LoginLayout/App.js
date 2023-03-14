import { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  PermissionsAndroid,
  ScrollView,
  TextInput
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import SvgQRCode from 'react-native-svg'
import Checkbox from 'expo-checkbox'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

Blue = '#31A9ED'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const screens = [
  {
    id: 1,
    title: 'TV Smart 3.0',
    isChecked: false,
    content: 'Regional SP',
    imagePath: require('./assets/screen2.png'),
  },
  {
    id: 2,
    title: 'Monitor Vendas',
    isChecked: false,
    content: 'Performance',
    imagePath: require('./assets/screen.png'),
  },
  {
    id: 3,
    title: 'Computador Pessoal',
    isChecked: true,
    content: 'Análise',
    imagePath: require('./assets/screen.png'),
  },
  {
    id: 4,
    title: 'Computador Pessoal',
    isChecked: false,
    content: 'Análise',
    imagePath: require('./assets/screen2.png'),
  },
  {
    id: 5,
    title: 'Teste',
    isChecked: true,
    content: 'Análise',
    imagePath: require('./assets/screen2.png'),
  },
  {
    id: 6,
    title: 'Teste',
    isChecked: false,
    content: 'Análise',
    imagePath: require('./assets/screen.png'),
  },
]

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dispositivos"
        component={Dispositivos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="desktop-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <Text>
              <Ionicons name="settings-outline" size={32} color="black" />;
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Conteúdo"
        component={Conteudo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <Text>
              <Ionicons name="settings-outline" size={32} color="black" />;
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <Text>
              <Ionicons name="settings-outline" size={32} color="black" />;
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none' }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }} /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="QRScreen"
          component={QRScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // Universal
  //#323232
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // HomeScreen
  TextInput: {
    width: '100%',
    height: '100%',
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  signUpButton: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderRadius: 30,
    width: '70%',
    height: 55,
    marginBottom: 20,
    alignItems: 'center',
    borderColor: Blue,
    borderWidth: 2,
    marginTop: '20%',
  },
  loginButton: {
    backgroundColor: Blue,
    borderRadius: 30,
    width: '70%',
    height: 55,
    alignItems: 'center',
    borderColor: Blue,
    borderWidth: 2,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4',
  },
  container4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  // LoginScreen
  fog: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(252, 251, 249, 0.4)',
  },

  // DevicesTab
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    marginLeft: 30,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  // AgendaTab
  dayCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginRight: "3%",
    backgroundColor: 'white',
    height: 130,
  },
  dayCardTitle: {
    fontSize: 24,
    color: '#7c7c82',
    marginRight: '8%',
  },
  dayCardSubTitle: {
    fontSize: 16,
    color: '#7c7c82',
    marginRight: '8%'
  }

  //teste new
})

// # ----------------- Telas Iniciais -----------------

{// const HomeScreen = ({ navigation }) => {
  //   return (

  //     <View style={styles.container}>
  //       <ImageBackground source={require('./assets/bg.png')} style={styles.backgroundImage} >

  //         {/* Aqui entra a logo */}
  //         <View style={styles.container}><Image source={require('./assets/logo.png')} style={{ width: "85%", height: "20%", marginTop: 30 }} /></View>

  //         {/* Aqui entram os inputs */}
  //         <View style={styles.container}>

  //           <Pressable style={styles.signUpButton} backgroundColor="#FCFBF9" onPress={() => navigation.navigate('Home3')}>
  //             <View pointerEvents="none">
  //               <TextInput
  //                 style={styles.TextInput}
  //                 placeholder="Cadastrar"
  //                 placeholderTextColor="#000000"
  //                 editable={false}
  //                 onPress={() => navigation.navigate('Login')}
  //               />
  //             </View>
  //           </Pressable>
  //           <Pressable style={styles.loginButton} backgroundColor="#FCFBF9" onPress={() => navigation.navigate('Login')}>
  //             <View pointerEvents="none">
  //               <TextInput
  //                 style={styles.TextInput}
  //                 placeholder="Login"
  //                 placeholderTextColor="#000000"
  //                 editable={false}
  //                 onPress={() => navigation.navigate('Login')}
  //               />
  //             </View>
  //           </Pressable>

  //           <Pressable style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('QRScreen')}>
  //             <Text style={{ margin: 10, margin: 20 }}>............... OU ...............</Text>
  //             <Text style={{ fontSize: 16, marginBottom: 10 }}>Conectar Dispositivo</Text>
  //             <Image source={require('./assets/QR.png')} style={{ height: 40, width: 40 }}></Image>
  //           </Pressable>

  //         </View>
  //       </ImageBackground >
  //     </View >
  //   );
  // };
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container3}>
      <ImageBackground
        style={styles.container4}
        source={require('./assets/bg3.png')}
      >
        {/* Aqui entra a logo */}
        <View style={styles.container}>
          <Image
            source={require('./assets/logo3.png')}
            style={{ width: '85%', height: '20%', marginTop: 30 }}
          />
        </View>

        {/* Aqui entram os inputs */}
        <View style={styles.container}>
          <Pressable
            style={styles.signUpButton}
            backgroundColor="#FCFBF9"
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <View pointerEvents="none">
              <TextInput
                style={styles.TextInput}
                placeholder="Cadastrar"
                placeholderTextColor="#000000"
                editable={false}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.loginButton}
            backgroundColor="#724A33"
            onPress={() => navigation.navigate('Login')}
          >
            <View pointerEvents="none">
              <TextInput
                style={styles.TextInput}
                placeholder="Login"
                placeholderTextColor="#000000"
                editable={false}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </Pressable>

          <Pressable
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('QRScreen')}
          >
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                color: '#000000',
                marginTop: 20,
              }}
            >
              Conectar Dispositivo
            </Text>
            <Image
              source={require('./assets/QR.png')}
              style={{ height: 40, width: 40 }}
            ></Image>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const LoginScreen = ({ navigation, route }) => {
  var correctEmail = 'teste@gmail.com'
  var correctSenha = '12345678'
  return (
    <View style={styles.container}>
      <View style={{ width: '65%', marginTop: 200, marginBottom: 50 }}>
        <Text style={{ marginBottom: 6, fontSize: 16 }}>E-mail</Text>
        <TextInput
          style={{
            marginBottom: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            textAlign: 'left',
          }}
          autoComplete="email"
          enterKeyHint="next"
        />
        <Text style={{ marginBottom: 6, fontSize: 16 }}>Senha</Text>
        <TextInput
          style={{
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}
          autoComplete="password"
          enterKeyHint="send"
          secureTextEntry={true}
        />
        <TextInput editable={false}>Esqueceu a senha?</TextInput>
      </View>

      <Pressable
        style={styles.loginButton}
        backgroundColor="#FCFBF9"
        onPress={() => navigation.navigate('TabNav')}
      >
        <View pointerEvents="none">
          <TextInput
            style={styles.TextInput}
            placeholder="Entrar"
            placeholderTextColor="#000000"
            editable={false}
          />
        </View>
      </Pressable>
    </View>
  )
}

const QRScreen = ({ navigation, route }) => {
  BarCodeScanner.requestPermissionsAsync()
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Código de barras do tipo ${type} e data ${data} foi scanneado!`)
  }
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Aponte seu celular para o QR</Text>
      <Image
        source={require('./assets/qrPet.png')}
        style={{ width: '100%', height: '50%', marginTop: 30 }}
      />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 115, width: 120, marginTop: -210 }}
      />
      {scanned && (
        <Button
          title={'Scannear novamente'}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  )
}

const SignupScreen = ({ navigation, route }) => {
  const [myText, setMyText] = useState("My Original Text");
  return <View style={styles.container}>
    <Image
      source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + { myText } }}
      style={{ height: 100, width: 100 }}
    />
    <Pressable
      style={styles.loginButton}
      backgroundColor="#724A33"
      onPress={() => setMyText(generateString(4))}
    >
      <View pointerEvents="none">
        <TextInput
          style={styles.TextInput}
          placeholder="Login"
          placeholderTextColor="#000000"
          editable={false}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </Pressable>
    <Text>https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={myText}</Text>
  </View>
}

// # ----------------- Telas TabNav -----------------

const Dispositivos = ({ }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {screens.map((id) => {
            const [isChecked, setChecked] = useState(false)
            return (
              <View style={styles.card}>
                <Image
                  source={id.imagePath}
                  style={{ height: 112, width: 150 }}
                ></Image>
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.cardTitle}>{id.title}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 10, fontSize: 22 }}>Ativa</Text>
                    <Checkbox
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? Blue : undefined}
                      style={{ height: 22, width: 22 }}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 4, fontSize: 20 }}>
                      Conteúdo:
                    </Text>
                    <Text style={{ fontSize: 18 }}>{id.content}</Text>
                  </View>
                </View>

              </View>
            )
          })}
        </View>
      </ScrollView>
    </View >
  )
}

const Conteudo = ({ }) => {
  return (
    <View style={styles.container}>
      <Text>Conteúdo</Text>
    </View>
  )
}

const AgendaTab = ({ }) => {
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };
  return (
    <View style={{ height: "100%", width: '100%' }}>
      <Calendar
        style={{ height: '50%', width: "100%" }}
        markingType="multi-period"
        markedDates={{
          '2023-03-14': {
            periods: [
              { startingDay: true, endingDay: false, color: '#f0e68c' },
              { startingDay: true, endingDay: false, color: '#ffa500' },
              { color: 'transparent' },
            ]
          },
          '2023-03-15': {
            periods: [
              { startingDay: false, endingDay: false, color: '#f0e68c' },
              { startingDay: false, endingDay: true, color: '#ffa500' },
              { startingDay: true, endingDay: true, color: '#5f9ea0' },

            ]
          },
          '2023-03-16': {
            periods: [
              { startingDay: false, endingDay: true, color: '#f0e68c' },
              { startingDay: false, endingDay: true, color: '#00000000' },
              { startingDay: false, endingDay: true, color: '#00000000' },
            ]
          }
        }}
      >
      </Calendar>

      {/* <View style={styles.dayCardContainer}>
        <View style={styles.dayCard}>
          <View style={{ alignItems: 'center' }}>
            <Text>9</Text>
            <Text>Monday</Text>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <Text>10:00 - 12:00</Text>
            <Text>Teste de nome</Text>
            <Text>Teste de descrição</Text>
          </View>
          <Image source={require('./assets/mediaIcon.png')} style={{ height: 60, width: 83 }}></Image>
        </View>
      </View> */}

      <ScrollView>
        {/* Vermelho */}
        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>8</Text><Text style={styles.dayCardSubTitle}>Seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>

        {/* <View style={styles.dayCard}>
          <View style={{ alignItems: 'center', backgroundColor: '#f3f3f3' }}><Text style={styles.dayCardTitle}>9</Text><Text style={styles.dayCardSubTitle}>Seg</Text></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ justifyContent: 'space-evenly', marginTop: '5%' }}><Text>10:00 - 12:00</Text><Text>Corolla 0km</Text><Text>Video 15seg</Text></View>
            <View style={{ marginTop: '5%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
          </View>

        </View> */}

        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>9</Text><Text style={styles.dayCardSubTitle}>Seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>
        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>10</Text><Text style={styles.dayCardSubTitle}>Ter</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>
        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>11</Text><Text style={styles.dayCardSubTitle}>Qua</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>
        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>12</Text><Text style={styles.dayCardSubTitle}>Qui</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>
        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>13</Text><Text style={styles.dayCardSubTitle}>Sex</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>
        <View style={styles.dayCard}>
          <View style={{ backgroundColor: '#f3f3f3', alignItems: 'center', width: '15%' }}><View style={{ height: '12%', width: '5%', backgroundColor: '#f3f3f3' }}></View><Text style={styles.dayCardTitle}>14</Text><Text style={styles.dayCardSubTitle}>Sab</Text></View>

          <View style={{ marginTop: 20, marginLeft: '5%', width: '50%' }}><Text style={{ marginBottom: 10, color: '#303036' }}>10:00 - 12:00</Text><Text style={{ marginBottom: 5, color: '#303036' }}>Corolla 0km</Text><Text style={{ marginBottom: 5, color: '#A6A09D' }}>Video 15seg</Text></View>

          <View style={{ marginTop: 20, marginLeft: '10%' }}><Image source={require('./assets/mediaIcon.png')} style={{ height: 50, width: 70 }}></Image></View>
        </View>

      </ScrollView>



    </View>
  )
}

// #-----------------

// program to generate random strings

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function Simple(lel) {
  fetch('https://943f-187-95-34-164.sa.ngrok.io/get')
    .then((response) => response.json())
    .then((json) => console.log(json))
}

{
  // fetch('http://192.168.0.176:5000/get', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: 'teste',
  //     senha: '0123456789',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
}

/* <Text>Testes</Text>
<Text style={styles.textStyle}>
  {Platform.OS === 'ios' ? 'Device is IOS' : 'Device is Android'}
</Text>
<SvgQRCode
  style={{ height: 100, width: 100 }}
/>
<Pressable style={styles.loginButton} backgroundColor="#FCFBF9" onPress={() => Simple()}>
  <View pointerEvents="none">
    <TextInput
      style={styles.TextInput}
      placeholder="Login"
      placeholderTextColor="#000000"
      editable={false}
    />
  </View>
</Pressable> */

{
  /* <View style={styles.container}>
<View style={styles.cardContainer}>
  <View style={styles.card}>
    <Image
      source={require('./assets/screen2.png')}
      style={{ height: 100, width: 150 }}
    ></Image>
    <View style={{ marginLeft: 20 }}>
      <Text style={styles.cardTitle}>TV Smart 3.0</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10, fontSize: 22 }}>Ativa</Text>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? Blue : undefined}
          style={{ height: 22, width: 22 }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 4, fontSize: 20 }}>Conteúdo:</Text>
        <Text style={{ fontSize: 18 }}>Regional SP</Text>
      </View>
    </View>
  </View>

  <Text>
    ________________________________________________________________
  </Text>

  <View style={styles.card}>
    <Image
      source={require('./assets/screen.jpg')}
      style={{ height: 100, width: 150 }}
    ></Image>
    <View style={{ marginLeft: 20 }}>
      <Text style={styles.cardTitle}>Monitor Vendas</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10, fontSize: 22 }}>Ativa</Text>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? Blue : undefined}
          style={{ height: 22, width: 22 }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 4, fontSize: 20 }}>Conteúdo:</Text>
        <Text style={{ fontSize: 18 }}>Performance</Text>
      </View>
    </View>
  </View>
</View>
</View> */
}

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Mai.', 'Jun.', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Quar.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

