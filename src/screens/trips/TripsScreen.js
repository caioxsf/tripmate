import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TripsScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={styles.containerHeader}>
                    <Text style={styles.title}>Minhas Viagens</Text>
                    <TouchableOpacity
                        style={styles.buttonMais}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('CreateTrip')}
                    >
                        <Text style={styles.textMais}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subtitleSmall}>1 viagens cadastradas</Text>

                <TouchableOpacity
                    style={styles.containerCard}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('DetalhesViagem', { viagemId: 1 })}
                >
                    <View style={styles.containerTitle}>
                        <Text style={styles.titleFerias}>Férias em Paris</Text>
                        <Text style={styles.cardAtividades}>1 atividades</Text>
                    </View>

                    <View style={styles.containerLocationDate}>
                        <View style={styles.containerLocation}>
                            <Ionicons name="location-outline" size={14} color='#9AA5AD' />
                            <Text style={styles.textLocation}>Paris, França</Text>
                        </View>

                        <View style={styles.containerLocation}>
                            <Ionicons name="calendar-outline" size={14} color='#9AA5AD' />
                            <Text style={styles.textLocation}>14 jul - 21 jul 2025</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    <View>
                        <View style={styles.containerBudget}>
                            <Text style={styles.textLocation}>Orçamento total</Text>
                            <Text style={styles.textPrice}>R$ 3.500</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonMais: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#00C2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMais: {
        paddingBottom: 10,
        color: '#00202A',
        fontSize: 32,
        fontWeight: '600',
    },

    textButton: {
        color: '#00C2FF',
    },

    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textPrice: {
        color: '#00C2FF',
        fontSize: 16,
        fontWeight: '500',
    },

    containerBudget: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    line: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginVertical: 12,
    },

    textLocation: {
        color: '#9AA5AD',
        fontSize: 16,
    },

    cardAtividades: {
        backgroundColor: '#0f2632',
        color: '#01b5f2',
        textAlign: 'center',
        paddingHorizontal: 12,
        paddingTop: 2,
        borderRadius: 12,
        fontWeight: '500',
    },

    titleFerias: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '500',
    },

    containerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    containerCard: {
        borderWidth: 1,
        borderColor: 'rgba(219, 217, 217, 0.1)',
        padding: 14,
        borderRadius: 10,
        backgroundColor: '#10141b',
        marginBottom: 12,
    },

    containerLocationDate: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 8,
    },

    containerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 8,
    },

    container: {
        flex: 1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    subtitleSmall: {
        fontSize: 14,
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
        paddingVertical: 6,
        borderRadius: 12,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 26,
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