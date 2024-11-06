import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  Pressable,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const theme = useColorScheme() ?? "light";

  return (
    <BottomSheet
      onClose={onClose}
      ref={bottomSheetRef}
      snapPoints={["90%"]} // Add snapPoints here
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{
            uri: wallpaper.url,
          }}
        />
        <View style={styles.topbar}>
          <Ionicons
            name={"close"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <View style={styles.multiple}>
            <Ionicons
              name={"share"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name={"heart"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>
        <DownloadButton/>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton(){
  return <Pressable style={{
    backgroundColor:"black",
    padding:10,
    margin:20,
    justifyContent:"center",
    flexDirection: "row",
    borderRadius:10,
    marginHorizontal:40,
    marginVertical:20
  }}>
    <Text style={{
      fontSize:20,
      color:"white",
      fontWeight:"600",
      
      }}>

Download
    </Text>
    
  </Pressable>
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  textContainer: {
    width:"100%"
  },
  text: {
    paddingTop:20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  },
  image: {
    height: "60%",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  multiple: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
