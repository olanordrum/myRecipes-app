import { View, Text, StyleSheet, Pressable } from "react-native"
import { colors } from "../theme/colors"

const StatsCard = ({ header, data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.titleRow}>
            </View>
            <Text accessibilityRole="header">
                {header}
            </Text>
            <View style={styles.divider} />
            <Text accessibilityRole="data">
                {data}
            </Text>

        </View>
    )
}
export default StatsCard;


const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
    },

    titleRow: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textDate: {
        color: colors.textSecondary
    },

    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 10
    }

})