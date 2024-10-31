import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function explore() {
  const wallpapers = useWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
          />
        }
        headerBackgroundColor={{
          dark: "black",
          light: "white",
        }}
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.InnerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContiner}>
                  <ImageCard wallpaper={item} onPress={()=>{
                    setSelectedWallpaper(item)
                  }} />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.InnerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContiner}>
                  <ImageCard wallpaper={item} onPress={
                    ()=>{
                        setSelectedWallpaper(item)  

                    }
                  } />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  InnerContainer: {
    flex: 0.5,
    padding: 6,
  },
  imageContiner: {
    padding: 6,
  },
});
