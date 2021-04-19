import React, {Component, Fragment} from 'react';

import {Text, StyleSheet, View, Image, ActivityIndicator, FlatList} from 'react-native';

export default class PostScreen extends Component{
    constructor(props){
        super(props);
        this.state={    
            data:[],
            isLoading: true
        };
    }

    componentDidMount(){ 
        fetch('https://udylglsk.lucusvirtual.es/api/productos')
        .then((response)=> response.json())
        .then((json) =>{
            this.setState({data: json.productos});
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
                            <Fragment>
                                <View style={styles.box2}>
                                    <View style={styles.box21}><Image style={styles.img}source={{uri:item.image}}/>
                                        <Text style={styles.text}>{item.nombre}</Text>
                                        <Text style={styles.text}>${item.precio}</Text>
                                        <Text style={styles.text}>{item.descripcion}</Text>
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
    flex:.1,
    flexDirection:'row',
    margin: 20,
    justifyContent:'center',
    backgroundColor:'#000',
    borderRadius:8,
},
box21: {
    flex: 1,
    width:'100%',
    height:340,
    margin:1,
    padding:0,
},
img:{
  width:'100%',
  height:'75%',
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
}
});



