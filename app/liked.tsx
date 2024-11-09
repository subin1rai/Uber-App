import { useEffect, useState } from "react";
import { Text, View, Image, Pressable, TextInput, Button, ActivityIndicator, FlatList } from "react-native";
import { getBio, User } from "@/components/github";

export default function Liked() {
  const [username, setUsername] = useState('subin1rai');
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<any[]>([]); // State for storing repository details
  const [large, setIsLarge] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data from GitHub API
  const fetchData = () => {
    if (username) {
      setLoading(true);
      setError(null);
      getBio(username).then(data => {setUser(data);})
        .catch(error => {
          console.error("Error fetching user data:", error);
          setUser(null);
          setError("User not found. Please try again.");
        })
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Username Input */}
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 16,
          borderColor: "grey",
          borderWidth: 0.5,
          marginBottom: 10,
          borderRadius: 5,
          fontSize: 16,
        }}
        placeholder="Enter GitHub username"
        onChangeText={setUsername}
        value={username}
      />
      <Button title="Fetch" onPress={fetchData} />

      {/* Show loading indicator when fetching */}
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />}

      {/* Show error message */}
      {error && <Text style={{ color: "red", fontSize: 16, marginTop: 10 }}>{error}</Text>}

      {user && !loading && (
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Name</Text>
            <Text style={{ fontSize: 14, color: '#666' }}>{user.name}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Bio:</Text>
            <Text style={{ fontSize: 14, color: '#666' }}>{user.bio}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Avatar:</Text>
            <Pressable onPress={() => setIsLarge(!large)}>
              {large && (
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
                  {user.name}
                </Text>
              )}
              <Image
                source={{ uri: user.avatar_url }}
                style={{
                  width: large ? 350 : 100,
                  height: large ? 350 : 100,
                  borderRadius: 50,
                  marginTop: 10,
                }}
              />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
