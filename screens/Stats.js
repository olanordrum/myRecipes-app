import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../theme/colors"


export default function Stats() {
    return (
        <View style={styles.container}>
            <Text>
                STATS SCREEN
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center"
    }
})