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
        justifyContent: "center",
        alignItems: "center"
    },

    button: {
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
})