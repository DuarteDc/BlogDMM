import React, {Component, Fragment} from 'react';

import {Text, StyleSheet, View, Image, ActivityIndicator, FlatList} from 'react-native';
import ComponentSlider from '../../../component/slider/sliderCard';
export default class HomeScreen extends Component { 
        constructor(props){
        super(props);
        this.state={    
            data:[],
            isLoading: true
        };
    }
    componentDidMount(){ 
        fetch('https://udylglsk.lucusvirtual.es/api/categoriesProductos')
        .then((response)=> response.json())
        .then((json) =>{
            this.setState({data: json.categoryProductos});
        })  
        .catch((error)=>console.error(error))   
        .finally(()=>{
            this.setState({isLoading:false})
        });
    }
    render(){ 
        const{data, isLoading, productos}= this.state;
         console.log(data);
         this.state.data
        return(
            <View style={{flex:1}}>
                <ComponentSlider style={styles.slider}></ComponentSlider>

                
                {isLoading ? <ActivityIndicator/>:(

                    <FlatList
                        data={data}
                        horizontal
                        keyExtractor={({id}, index)=>id}
                        renderItem={({item})=>(
                            <Fragment>
                            <View style={styles.contenerdo}> 
                                <Text style={styles.categoria}>{item.nombre}</Text>
                                <View style={styles.box2}>
                                    <Text>  
                                        {item.productos.map((i, index)=>{
                                        return(<View style={styles.card}key={index} style={styles.box21}>
                                            <Image style={styles.img}source={{uri:i.image}}/>
                                            <Text style={styles.text}>{i.nombre} </Text>
                                            <Text style={styles.text}>${i.precio}</Text>
                                            <Text style={styles.text}>{i.descripcion}</Text>
                                            </View>
                                            )
                                        })}
                                    </Text>
                                </View>
                            </View>
                            </Fragment>
                        )} 
                    />
                )}
            </View>
        );
    } 
}
const styles = StyleSheet.create({
    container: {
        flex: 1, fontWeight: '300', fontSize: 40,
      },
      box2: {
        flex:.8,
        flexDirection:'row',
        margin: 5,
        height:30,
        justifyContent:'center',
        backgroundColor:'#000',
        borderRadius:8,
        overflow:'hidden'
    },
    box21: {
        flex: 1,
        width:250,
        height:250,
        margin:1,
        padding:0,
    },
    img:{
      width:'100%',
      height:'88%',
      marginBottom:8,
      padding:0,
      alignItems:'center'
    },
    text:{
        marginLeft:20,
        color:'#fff'
    },
    text1:{
        marginBottom:0,
        marginLeft:25
    },
    categoria:{
        height:25,
        marginLeft:5,
        fontSize:20,
        fontFamily:'arial'
    }
});


