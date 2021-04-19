import React, {Component} from 'react';

import {Text, StyleSheet, View, Image, ActivityIndicator, FlatList, } from 'react-native';

export default class CategoryScreen extends Component{
    constructor(props){
        super(props);
        this.state={    
            data:[],
            isLoading: true 
        };
    }

    componentDidMount(){ 
        fetch('https://udylglsk.lucusvirtual.es/api/categorias')
        .then((response)=> response.json())
        .then((json) =>{
            this.setState({data: json.categorias});
        })  
        .catch((error)=>console.error(error))   
        .finally(()=>{
            this.setState({isLoading:false})
        });
    }
    render(){ 
        const{data, isLoading}= this.state;
         console.log(data); 
        return(
            <View style={{flex:1}}>
                {isLoading ? <ActivityIndicator/>:(
                    <FlatList
                        data={data}
                        keyExtractor={({id}, index)=>id}
                        renderItem={({item})=>( 
                            <View style={styles.box2}>
                                <View style={styles.box21}>
                                    <Text style={styles.text}>{item.nombre}</Text>
                                    <Image style={styles.img}source={{uri:item.image}}/>
                                </View>    
                            </View>
                        )}
                        /> 
                )}
            </View>
        );
    } 
};
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      box2: {
          flex:.1,
          flexDirection:'row',
          marginBottom: 20,
          marginLeft:20,
          marginRight:20,
          paddingTop:5,
          justifyContent:'center'
      },
      box21: {
          flex: 1,
          width:'100%',
          margin:1,
          padding:0,
          backgroundColor:'#000',
          borderRadius:8
      },
      img:{
        width:'100%',
        height:100,
        padding:0,
        alignItems:'center'
    },
    text:{
        padding:10,
        color:'#fff'
    }
});

    

