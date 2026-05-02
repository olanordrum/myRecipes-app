import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../theme/colors"


export default function Stats() {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text>
                    "STATS"
                </Text>
            </View>
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
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: "center"
    }
})