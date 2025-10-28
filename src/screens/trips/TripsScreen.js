import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { listarViagens } from '../../db/database';

export default function TripsScreen() {
    const navigation = useNavigation();
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);

    async function carregar() {
        try {
            setLoading(true);
            const data = await listarViagens();
            if (data != [])
                setViagens(Array.isArray(data) ? data : []);
        } catch (e) {
            console.error('Erro ao listar viagens', e);
            setViagens([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unsub = navigation.addListener('focus', carregar);
        carregar();
        return unsub;
    }, [navigation]);

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

                <Text style={styles.subtitleSmall}>
                    {loading ? 'Carregando...' : `${viagens.length} viagem(ns) cadastrada(s)`}
                </Text>

                {viagens.map((v) => (
                    <TouchableOpacity
                        key={v.id}
                        style={styles.containerCard}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('DetalhesViagem', { viagemId: v.id })}
                    >
                        <View style={styles.containerTitle}>
                            <Text style={styles.titleFerias}>{v.nome_viagem || 'Sem nome'}</Text>
                            <Text style={styles.cardAtividades}>0 atividades</Text>
                        </View>

                        <View style={styles.containerLocationDate}>
                            <View style={styles.containerLocation}>
                                <Ionicons name="location-outline" size={14} color="#9AA5AD" />
                                <Text style={styles.textLocation}>{v.destino || 'Sem destino'}</Text>
                            </View>

                            <View style={styles.containerLocation}>
                                <Ionicons name="calendar-outline" size={14} color="#9AA5AD" />
                                <Text style={styles.textLocation}>
                                    {formatarPeriodo(v.data_ida, v.data_volta)}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.line} />

                        <View>
                            <View style={styles.containerBudget}>
                                <Text style={styles.textLocation}>Orçamento total</Text>
                                <Text style={styles.textPrice}>R$ 0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                {!loading && viagens.length === 0 && (
                    <Text style={styles.textLocation}>Nenhuma viagem cadastrada.</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

function formatarDataISO(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr); // ou já é Date
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'short', // 'long' para nome completo
        year: 'numeric',
        timeZone: 'UTC', // ou sua TZ: 'America/Sao_Paulo'
    }).format(d);
}

function formatarPeriodo(ida, volta) {
    const i = formatarDataISO(ida);
    const v = formatarDataISO(volta);
    if (i && v) return `${i} - ${v}`;
    return i || v || 'Sem datas';
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
        paddingBottom: 6,
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