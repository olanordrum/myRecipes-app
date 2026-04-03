import { View, Text, StyleSheet } from 'react-native';
import { colors } from "../../theme/colors"
import { formatDate } from "../../utils";



export default function RecipeDetailScreen({ route }) {
    const { recipe } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Text style={styles.date}>{formatDate(recipe.date)}</Text>
            </View>
            <View style={styles.divider} />
            <Text>{recipe.description}</Text>
            <View style={styles.divider} />
            <Text>{recipe.instructions}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background
    },

    titleRow: {
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row"
    },

    title: {
        fontSize: 20,
        color: colors.text
    },

    date: {
        color: colors.textSecondary
    },

    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 10
    }
})