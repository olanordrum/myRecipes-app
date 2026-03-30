import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../theme/colors"


export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>
                Profile
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