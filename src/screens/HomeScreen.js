import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerCenter}>
                <View style={styles.avatar}>
                    <Ionicons name="airplane" size={28} color="#00C2FF" />
                </View>
                <Text style={styles.appTitle}>Tripmate</Text>
                <Text style={styles.subtitle}>Seu assistente pessoal de viagens</Text>

                <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                    <Text style={styles.ctaText}>+   Criar Nova Viagem</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Viagens Recentes</Text>
                    <Text style={styles.sectionLink}>Ver todas</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardLeft}>
                        <Text style={styles.cardTitle}>Férias em Paris</Text>
                        <Text style={styles.cardSubtitle}>Paris, França</Text>
                        <Text style={styles.cardDate}>14 jul - 21 jul 2025</Text>
                    </View>
                    <View style={styles.cardRight}>
                        <View style={styles.activitiesBadge}>
                            <Text style={styles.activitiesBadgeText}>1 atividades</Text>
                        </View>
                        <Text style={styles.cardBudgetLabel}>Orçamento total</Text>
                        <Text style={styles.cardBudget}>R$ 3.500</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    headerCenter: {
        alignItems: 'center',
        marginTop: 10,
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
    appTitle: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 6,
    },
    subtitle: {
        color: '#9AA5AD',
        fontSize: 18,
        marginBottom: 14,
    },
    ctaButton: {
        backgroundColor: '#00C2FF',
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderRadius: 10,
        width: '100%',
        marginTop: 8,
        marginBottom: 18,
    },
    ctaText: {
        color: '#00202A',
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
    },
    section: {
        flex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    sectionLink: {
        color: '#00C2FF',
        fontSize: 13,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#0F1820',
        borderRadius: 10,
        padding: 14,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.03)',
    },
    cardLeft: {
        flex: 1,
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
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
        marginBottom: 6,
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
});