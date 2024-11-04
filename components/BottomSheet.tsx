import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, useColorScheme } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

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
      handleIndicatorStyle={{display:"none"}}
      handleStyle={{display:"none"}}
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
        <Button title="Download"></Button>
      </BottomSheetView>
    </BottomSheet>
  );
};
//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1
    },
  image:{
     height:"60%",
     borderTopRightRadius:12,
     borderTopLeftRadius:12,
  },
  topbar:{
    position:"absolute",
    padding:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%"
  },
  multiple:{
    display: "flex",
    justifyContent:"space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  }
});
