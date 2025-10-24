import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-web';

export default function CreateTrip() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Nova Viagem</Text>


            <View style={styles.containerInput}>

                <View>
                    <Text style={styles.textNomeViagen}>Nome da viagem *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Férias em Paris"
                        placeholderTextColor="#9AA5AD"
                    />
                </View>

                <View>
                    <Text style={styles.textNomeViagen}>Destino *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Paris, França"
                        placeholderTextColor="#9AA5AD"
                    />
                </View>

                <View style={styles.containerDate}>
                    <TextInput
                        
                    />
                </View>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'rgba(219, 217, 217, 0.2)',
        backgroundColor: '#131820',
        color: '#FFFF',
        padding: 12,
        borderRadius: 12,
        fontSize: 16
    },

    textNomeViagen: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 10
    },

    containerInput: {
        display: 'flex',
        borderRadius: 10,
        marginTop: 24,
        gap: 24
    },

    container: {
        flex: 1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});