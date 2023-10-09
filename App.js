import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View,SafeAreaView,Image,Button, TouchableWithoutFeedback,ScrollView } from 'react-native';

export default function App() {
  const Content1 = () => {
    return(
      <View style={styles.cont}>
        <Text>Contents</Text>
      </View>    )
  }
  return (
    <SafeAreaView style={styles.container }>
    <View style={styles.header}>
      <Text style={styles.logo}>HEY!</Text>
     
        <Image source={require('./assets/menu.png')} style={styles.menu}/>

    </View>
  
    <View style={styles.content}>
    <TouchableWithoutFeedback 
    // onPress={this._onPressButton}
    onPress={() => console.log('test')}
    onPressIn={() => console.log('onPress In')}
    onPressOut={() => console.log('onPressOut')}
    onLongPress={() => console.log('uzun bastin!')}
    hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
    
    >
          <View style={styles.button}>
            <Text style={styles.buttonText}>button</Text>
          </View>
        </TouchableWithoutFeedback>
        <ScrollView>
     <SafeAreaView>
    
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
      <Content1/>
     
     </SafeAreaView>
     </ScrollView>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  header:{
     top:60,
    height:80,
    backgroundColor:'#EF5350',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  logo:{
    color:'#fff',
    fontSize:30,
    left:10,
  },
  menu:{
    color:'#EF5350',
    height:40,
   right:10,
    
  },
  content:{
    flex:1,
    color:'#444',
    top:60,
  },
  button:{
    width:150,
    height:100,
    backgroundColor:'#AB47BC',
    
  },
  buttonText:{
    fontSize:20,
    textAlign: 'center', // Buton metnini yatayda ortala
    textAlignVertical: 'center', // Buton metnini dikeyde ortala
    top:30,  
  },
    cont: {
      backgroundColor:'#B39DDB',
      padding:20,
      marginVertical:1,
    
    }
});
