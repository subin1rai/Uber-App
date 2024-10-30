import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper } from "@/hooks/useWallpaper";
import { Link } from "expo-router";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function explore() {
  const wallpapers = useWallpaper();
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
                  <ImageCard wallpaper={item} />
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
                  <ImageCard wallpaper={item} />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
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
