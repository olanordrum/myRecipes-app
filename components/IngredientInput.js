import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { colors } from "../theme/colors";

export default function IngredientInput({ onAdd }) {
    const [name, setName] = useState("");
    const [measure, setMeasure] = useState("");
    let isValid = name.trim() !== "" && measure.trim() !== "";


    const handleAdd = () => {
        if (name.trim() == "") return;

        onAdd({
            name: name.toLowerCase().trim(),
            measure: measure.toLowerCase().trim(),
        });
        console.log(name)

        setName("");
        setMeasure("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Ingredient"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TextInput
                placeholder="Measure"
                value={measure}
                onChangeText={setMeasure}
                style={styles.input}
            />

            <Pressable
                onPress={handleAdd}
                style={isValid ? styles.button : [styles.button, styles.disabled]}
                disabled={!isValid}>
                <Text style={styles.text}>Add</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10
    },

    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 5,
        backgroundColor: colors.surface,
    },

    button: {
        paddingHorizontal: 15,
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderRadius: 5,
    },

    disabled: {
        backgroundColor: colors.disabled
    },

    text: {
        color: colors.primaryText,
        fontWeight: "bold"
    }
})