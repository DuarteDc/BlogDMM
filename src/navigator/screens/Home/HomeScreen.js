import * as React from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

export default function HomeScreen (){
        return(
            <View style={styles.container}>
                <View style={styles.box1}><Text>Inicio</Text></View>
                <Text style={styles.text}>Base de Datos</Text>
                <View style={styles.box2}>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/mysql.jpg')}/></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/mongo.png')}/></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/couchdb.png')}/></View>
                </View>
                <Text style={styles.text}>Desarrollo Web</Text>
                <View style={styles.box2}>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/html.png')}/></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/css.png')}/></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/js.png')}/></View>
                </View>
                <Text style={styles.text}>Redes y Telecomunicaciones</Text>
                <View style={styles.box2}>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/cisco.png')}/></View>    
                    <View style={styles.box21}><Image style={styles.img} source={require('../../../assets/Images/tcp.png')}/></View>
                    <View style={styles.box21}><Image style={styles.img}source={require('../../../assets/Images/udp.jpg')}/></View>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
      flex: 1, fontWeight: '300', fontSize: 40,
    },
    box1: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#2469A0',
      maxHeight:300,
      marginBottom: 30
    },
    box2: {
        flex:.5,
        flexDirection:'row',
        margin: 25,
        justifyContent:'center',
        margin:10
    },
    box21: {
        flex: 2,
        width:100,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        padding:0
    },
    text:{  
        marginLeft:15
    },
    img:{
        width:100,
        height:100,
        padding:0,
        alignItems:'center'
    }
});


