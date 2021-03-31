import * as React from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

export default function PostScreen(){
    return(
        <>
        <View style={styles.container}>
        <Text style={styles.text}>DB</Text>
            <View style={styles.box2}>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/mongo.png')}/><Text>MongoDB</Text></View>    
                <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/couchdb.png')}/><Text>CouchDB</Text></View>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/mysql.jpg')}/><Text>Mysql</Text></View>
            </View>
            <Text style={styles.text1}>Web</Text>
            <View style={styles.box2}>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/html.png')}/><Text>Html</Text></View>    
                <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/css.png')}/><Text>Css</Text></View>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/js.png')}/><Text>Js</Text></View>
            </View>
            <Text style={styles.text1}>Js</Text>
            <View style={styles.box2}>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/react.png')}/><Text>React Native</Text></View>    
                <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/node.jpg')}/><Text>Node</Text></View>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/vue.jpeg')}/><Text>Vue js</Text></View>
            </View>
            <Text style={styles.text1}>Redes</Text>
            <View style={styles.box2}>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/redes.jpg')}/><Text>Redes</Text></View>    
                <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/cisco.png')}/><Text>Cisco</Text></View>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/udp.jpg')}/><Text>UDP</Text></View>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
container: {
    flex: 1, fontWeight: '300', fontSize: 40,
  },
  box1: {
    flex: 1,
    justifyContent:'center',
    maxHeight:50,
    marginBottom: 30,
    paddingLeft:10
  },
  box2: {
      flex:.5,
      flexDirection:'row',
      margin: 20,
      justifyContent:'center'
  },
  box21: {
      flex: 2,
      width:100,
      margin:5,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      padding:0
  },
  img:{
    width:100,
    height:100,
    padding:0,
    alignItems:'center'
},
text:{
    marginBottom:0,
    marginTop:40,
    marginLeft:25
},
text1:{
    marginBottom:0,
    marginLeft:25
}
});



