import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../../theme/colors"
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function OneboardingTwo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.replace('MainTabs')}>
                <Text style={styles.skipButtonText}>
                    Skip
                </Text>
                <Ionicons name="chevron-forward-outline" size={20} color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Save your favourites
                </Text>
                <Text style={styles.description}>
                    Create and save your favorite recipes in the app
                </Text>
                <Image source={require('../../assets/homeScreen.png')} style={styles.image} />

            </View>
            <Pressable
                style={styles.button}
                onPress={() => navigation.replace('MainTabs')}

            >
                <Text style={styles.buttonText}>Continue</Text>
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


    image: {
        maxHeight: 400,
        resizeMode: 'contain',
        borderRadius: 16,
        marginBottom: 20,
    },

    button: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
})