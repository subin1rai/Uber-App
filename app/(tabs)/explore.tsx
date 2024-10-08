import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function explore(){
    return <View>
        <Text>Explore Page</Text>
        <Link href={"/accountinfo"}>
        <Text>Account Information</Text>
        </Link>
    </View>
}