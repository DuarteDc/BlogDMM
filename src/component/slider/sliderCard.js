import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StyleSheet, FlatList} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

export default function ComponentSlider(){
    const [isLoading, setLoading]= useState(true);
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://udylglsk.lucusvirtual.es/api/sliderProductos')
        .then((response)=>response.json())
        .then((json)=>setData(json.sliderProductos))

        .catch((error)=> console.error(error))
        .finally(()=>setLoading(false));
    }, []);

    return(
        <View style={{flex:.7, paddingBottom:20}}>
            {isLoading ? <ActivityIndicator/>:(

                <FlatListSlider
                data={data}
                timer={4000}
                indicatorContainerStyle={{position:'absolute', bottom:20}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#fff'}
                indicatorActiveWidth={13}
                />
            )}
        </View>
    )
}