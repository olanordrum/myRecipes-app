import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../theme/colors"


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>
                HOME
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background
    }
})