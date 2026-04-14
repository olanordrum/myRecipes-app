import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import { colors } from "../../theme/colors"
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function OnboardingThree({ username, setUsername }) {
    const navigation = useNavigation();

    const handleFinish = async () => {
        try {
            await AsyncStorage.setItem('hasOnboarded', 'true');
            navigation.replace('MainTabs');
        } catch (e) {
            console.log("error saving onboarding status:", e);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.skipButton}
                onPress={handleFinish}
                accessibilityRole="button"
                accessibilityHint="Skip onboarding, go straight to app"
            >
                <Text style={styles.skipButtonText}>
                    Skip
                </Text>
                <Ionicons name="chevron-forward-outline" size={20} color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title} accessibilityRole="header">
                    Enter your name
                </Text>
                <Text style={styles.description}>
                    Finish onboarding, and start using My Recipes
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Name"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize='sentences'
                        style={styles.input}
                        returnKeyType="done"
                        onSubmitEditing={Keyboard.dismiss}
                        accessibilityRole="text"
                        accessibilityLabel="Your name"
                        accessibilityHint="Set your name"
                    />
                </View>

            </View>
            <Pressable
                style={styles.button}
                onPress={handleFinish}
                accessibilityRole="button"
                accessibilityHint="Continue to app"
            >
                <Text style={styles.buttonText}>Finish onboarding</Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        padding: 30,
        justifyContent: "space-between",
        alignItems: 'stretch',
        backgroundColor: colors.background,
    },

    skipButton: {
        paddingTop: 30,
        alignSelf: 'flex-end',
        alignItems: "center",
        flexDirection: "row"
    },

    skipButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        gap: 20
    },

    title: {
        fontWeight: "bold",
        fontSize: 20
    },

    description: {
        color: colors.textSecondary,
        alignItems: 'center',
        textAlign: 'center'
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

    button: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignSelf: 'stretch',
        alignItems: 'center'
    },

    buttonText: {
        fontWeight: 'bold',
        color: colors.primaryText
    }
})