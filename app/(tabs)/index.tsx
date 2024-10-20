import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'; // Ensure StyleSheet is imported
import Library from '../library';
import Liked from '../liked';
import Suggested from '../suggested';

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <Tab.Navigator>
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
