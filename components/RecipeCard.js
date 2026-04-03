import { View, Text, StyleSheet, Pressable } from "react-native"
import { colors } from "../theme/colors"
import { formatDate } from "../utils";

const RecipeCard = ({ recipe, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.titleRow}>
                    <Text>
                        {recipe.title}
                    </Text>
                    <Text>{formatDate(recipe.date)}</Text>
                </View>
                <View style={styles.divider} />
                <Text>
                    {recipe.description}
                </Text>
            </View>
        </Pressable>
    )
}
export default RecipeCard;


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
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 10
    }

})