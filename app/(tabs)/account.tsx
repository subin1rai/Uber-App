import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function account(){
    const [pictureOpen,setPictureOpen] = useState(false);
    return <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            <Text>Accounts Page</Text>
        <Button title={"Open bottomSheet"} onPress={()=>{
            setPictureOpen(true);
        }}></Button>
        {pictureOpen && <DownloadPicture onClose={()=>setPictureOpen(false)}/>}
        </View>
    </SafeAreaView>
}