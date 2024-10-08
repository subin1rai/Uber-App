import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function foryou(){
    return <View>
        <Text>For You Page</Text>
        <Link href={"/suggested"}>
            <Text>Suggested</Text>
        </Link>
        <Link href={"/liked"}>
            <Text>liked</Text>
        </Link>
        <Link href={"/library"}>
            <Text>library</Text>
        </Link>
    </View>
}