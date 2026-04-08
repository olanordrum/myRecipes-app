import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../../theme/colors"
import { useNavigation } from '@react-navigation/native';


export default function OneboardingTwo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                Onboarding Two
            </Text>
            <Pressable
                style={styles.button}
                onPress={() => navigation.replace('MainTabs')}
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
        alignItems: "center"
    },

    button: {
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
})