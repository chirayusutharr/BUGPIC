import { Text, View ,Pressable , StyleSheet} from "react-native";
import { Link, router, Stack } from "expo-router";
import { Route } from "expo-router/build/Route";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome screen</Text>
       <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => router.push('../home/home')}>
        <Text style={styles.buttonLabel}>Open the App</Text>
      </Pressable>
    </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#4e0c0cff',
    fontSize: 16,
  },
});