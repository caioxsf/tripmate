import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function BudgetScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerHeader}>
                <Text style={styles.title}>Orçamento</Text>
                <TouchableOpacity
                    style={styles.buttonMais}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('CreateTrip')}
                >
                    <Text style={styles.textMais}>+</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.subtitleSmall}>
                Controle seus gastos
            </Text>

            <View style={styles.containerTotalGastos}>
                <View>
                    <Text style={{color: '#9AA5AD'}}>Total de gastos</Text>
                    <Text style={{fontSize: 34, fontWeight: '700', color: '#00C2FF'}}>R$ 3.500,00</Text>
                </View>
                <View>
                    <Ionicons name="airplane" size={28} color="#00C2FF" />
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTotalGastos: {
        marginTop: 14,
        borderWidth: 1,
        borderColor: 'rgba(219, 217, 217, 0.1)',
        padding: 14,
        borderRadius: 10,
        backgroundColor: '#10141b',
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#0F1A21',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    subtitleSmall: {
        color: '#9AA5AD',
    },
    buttonMais: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#00C2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMais: {
        paddingBottom: 6,
        color: '#00202A',
        fontSize: 32,
        fontWeight: '600',
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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