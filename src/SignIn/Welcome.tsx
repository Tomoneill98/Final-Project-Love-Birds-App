import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Image } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import LoveBirdsLogo from '../../assets/Lovebirds-Logo.gif';


export default function Welcome() {
  const nav = useNavigation()

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#F0CCB0' }}>
          {/* <Text>Welcome Page Goes Here</Text> */}
        <View style={styles.imageContainer}>
          <Image
            source={LoveBirdsLogo}
            style={{ resizeMode: 'contain', height: 175, width: 300, borderRadius: 40 }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            onPress={() => nav.navigate('LogIn' as never)}
            buttonStyle={{ backgroundColor: '#FAE8E0' }}
            titleStyle={{ color: '#EF7C8E' }}
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Register"
            onPress={() => nav.navigate('Register' as never)}
            buttonStyle={{ backgroundColor: '#FAE8E0' }}
            titleStyle={{ color: '#EF7C8E' }}
            />
        </View>
        <View style={styles.welcomePageTxt}>
          <Text>
            Presented by The Dev Wears Java
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>©The Dev Wears Java</Text>
        </View>
  </View>

)
}

const styles = StyleSheet.create({
  buttonContainer: {
		alignSelf: 'center', 
		width: '70%',
		backgroundColor: '#f2daa4',
		borderRadius: 50,
		marginBottom: 10,
		borderWidth: 2,
		borderColor: 'brown',
		overflow: 'hidden', 
	},
  imageContainer: {
    marginBottom: 80,
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor:'#F0CCB0',
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    backgroundColor:'#F0CCB0'
  },
  welcomePageTxt: {
    marginBottom: 20,
    marginTop: 60,
  },
})



{/* <View style={styles.imageContainer}>
  <Image
    source={Lovebirds}
    style={{ resizeMode: 'contain', height: 175, width: 300, borderRadius: 40 }}
  />
</View> */}