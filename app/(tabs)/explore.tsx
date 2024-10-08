import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

export default function explore(){
    return <SafeAreaView>
        <Text>Explore Page</Text>
        <Link href={"/accountinfo"}>
        <Text>Account Information</Text>
        </Link>
    </SafeAreaView>
}