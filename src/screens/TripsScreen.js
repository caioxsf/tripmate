import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TripsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <Text style={styles.title}>Minhas Viagens</Text>
                <Text style={styles.subtitleSmall}>1 viagens cadastradas</Text>

                <View style={styles.card}>
                    <View style={styles.cardLeft}>
                        <Text style={styles.cardTitle}>Férias em Paris</Text>
                        <Text style={styles.cardSubtitle}>Paris, França</Text>
                        <Text style={styles.cardDate}>14 jul - 21 jul 2025</Text>

                        {/* Orçamento agora fica embaixo do card-left */}
                        <View style={styles.budgetContainer}>
                            <Text style={styles.cardBudgetLabel}>Orçamento total</Text>
                            <Text style={styles.cardBudget}>R$ 8.146</Text>
                        </View>
                    </View>
                    <View style={styles.cardRightColumn}>
                        <View style={styles.activitiesBadge}>
                            <Text style={styles.activitiesBadgeText}>1 atividades</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 6,
    },
    subtitleSmall: {
        color: '#9AA5AD',
        marginBottom: 12,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#0F1820',
        borderRadius: 10,
        padding: 14,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.03)',
        marginBottom: 12,
    },
    cardLeft: {
        flex: 1,
    },
    cardRightColumn: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    cardTitle: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 6,
    },
    cardSubtitle: {
        color: '#9AA5AD',
        marginBottom: 8,
    },
    cardDate: {
        color: '#7C8890',
        marginBottom: 12,
    },
    activitiesBadge: {
        backgroundColor: '#0F2B36',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
    },
    activitiesBadgeText: {
        color: '#9EE8FF',
        fontSize: 12,
    },
    cardBudgetLabel: {
        color: '#9AA5AD',
        fontSize: 12,
    },
    cardBudget: {
        color: '#00C2FF',
        fontWeight: '700',
        marginTop: 6,
    },
    budgetContainer: {
        marginTop: 12,
    },
    cardBudgetRow: {
        alignItems: 'flex-end',
    },
});

