import * as React from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

export default function CategoryScreen (){
        return(
            <>
            <View style={styles.container}>
                <View style={styles.box2}>
                <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/java.jpg')}/><Text>Java</Text></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/laravel.png')}/><Text>Laravel</Text></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/react.png')}/><Text>React Native</Text></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/android.jpg')}/><Text>Android</Text></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/php.png')}/><Text>Php</Text></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/vue.jpeg')}/><Text>Vue js</Text></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/redes.jpg')}/><Text>Redes</Text></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/node.jpg')}/><Text>Node</Text></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/mysql.jpg')}/><Text>Mysql</Text></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/mongo.png')}/><Text>MongoDB</Text></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/couchdb.png')}/><Text>CouchDB</Text></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/html.png')}/><Text>Web</Text></View>
                </View>
            </View>
            </>
        )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

    

