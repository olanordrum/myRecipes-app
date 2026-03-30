import { View, Text, StyleSheet } from 'react-native';


export default function CreateRecipe() {
    return (
        <View style={styles.container}>
            <Text>
                CreateRecipes
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})