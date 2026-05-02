import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../theme/colors"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile({ username, setUsername }) {

    const saveUsername = async (newUsername) => {
        try {
            await AsyncStorage.setItem('username', newUsername);
        } catch (e) {
            console.log("error saving username: ", e)
        }
    }

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text
                    style={styles.header}
                    accessibilityRole="header">
                    Profile
                </Text>
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={50} />
                    </View>
                </View>

                <Text style={styles.label} accessibilityRole="header">Your name</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Recipe name"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize='sentences'
                        style={styles.input}
                        returnKeyType="done"
                        onSubmitEditing={Keyboard.dismiss}
                        onBlur={() => saveUsername(username)}
                        accessibilityRole="text"
                        accessibilityLabel="Your name"
                        accessibilityHint="Set your name"
                    />
                </View>
            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: colors.background
    },

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background
    },

    header: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 30,
    },

    profileSection: {
        alignItems: 'center',
        marginBottom: 40,
    },

    avatar: {
        height: 100,
        padding: 10,
        borderRadius: 40,
        backgroundColor: colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    label: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 6,
    },

    inputContainer: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },

    input: {
        fontSize: 16,
        color: colors.text,
    },
})