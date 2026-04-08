import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../../theme/colors"
import { useNavigation } from '@react-navigation/native';


export default function OneboardingOne() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                Onboarding One
            </Text>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('OnboardingTwo')}
            >
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,

    },

    button: {
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
})