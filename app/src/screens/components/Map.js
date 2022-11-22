import React, { useEffect, useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";

import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';




const Map = () => {

   const [mapRegion, setmapRegion] = useState({
      latitude: 48.866381298248285,
      longitude: 2.373905240221334,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
   useEffect(() => {
      const startTracking = async () => {
         let { status } = await requestForegroundPermissionsAsync();
         if (status !== 'granted') {
            alert('Permissões para acessar a localização foram negadas.');
            return;
         }
         try {
            await watchPositionAsync({
               accuracy: Accuracy.Highest,
               timeInterval: 5000,
               distanceInterval: 50,
            },
            );
         } catch (err) {
            console.warn("Quelque chose s'est mal passé...")
         }
      }
      startTracking();
   }, []);

   return (
      <MapView
      style={styles.map}
     
      showsUserLocation={true}
      showsMyLocationButton={false}
      zoomControlEnabled={true}
      region={mapRegion}
      loadingEnabled={true}
      loadingBackgroundColor={'#fff'}
      toolbarEnabled={false}
   >
      
   </MapView>
   );
}
const styles = StyleSheet.create({
   map: {
      flex: 1,
      width: '100%',
   },
  
});

export default Map;