import { Link, Slot } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout(){
    return <SafeAreaView>
      <View style={{height:"90%"}}>
      <Slot/>
      </View>
      <View style={{backgroundColor:"green"}}>
        <Text>Hi lAYOUT</Text>
        <Link href={"/"}>
        <Text>Take me to the foryou page</Text>
      </Link>
      <Link href={"/explore"}>
        <Text>Take me to the explore page</Text>
      </Link>
      <Link href={'/account'}>
        <Text>Take me to the accounts page</Text>
      </Link>
      </View>
    </SafeAreaView>
}