import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DataField from './DataField'
import { criarViagem } from '../../db/database';
import { Alert } from 'react-native';

export default function CreateTrip() {
    const [nome, setNome] = useState('');
    const [destino, setDestino] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [notas, setNotas] = useState('');
    const [saving, setSaving] = useState(false);

    async function handleCreate() {
        if (!nome.trim() || !destino.trim() || !startDate || !endDate) {
            Alert.alert('Campos obrigatórios', 'Preencha nome, destino, data de ida e data de volta.');
            return;
        }

        try {
            setSaving(true);
            const id = await criarViagem({
                nome_viagem: nome.trim(),
                destino: destino.trim(),
                data_ida: String(startDate),
                data_volta: String(endDate),
                notas: notas || '',
            });
            Alert.alert('Sucesso', `Viagem criada!`);
            setNome('');
            setDestino('');
            setStartDate(null);
            setEndDate(null);
            setNotas('');
        } catch (e) {
            console.error(e);
            Alert.alert('Erro', 'Não foi possível salvar a viagem.');
        } finally {
            setSaving(false);
        }
    }

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
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View>
                    <Text style={styles.textNomeViagen}>Destino *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Paris, França"
                        placeholderTextColor="#9AA5AD"
                        value={destino}
                        onChangeText={setDestino}
                    />
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <DataField label="Data de ida" required value={startDate} onChange={setStartDate} />
                    </View>
                    <View style={{ width: 16 }} />
                    <View style={{ flex: 1 }}>
                        <DataField label="Data de volta" required value={endDate} onChange={setEndDate} />
                    </View>
                </View>

                <View>
                    <Text style={styles.textNomeViagen}>Notas (opcional)</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        multiline
                        value={notas}
                        onChangeText={setNotas}
                    />
                </View>

                <TouchableOpacity
                    style={[styles.ctaButton, saving && { opacity: 0.7 }]}
                    activeOpacity={0.8}
                    onPress={handleCreate}
                    disabled={saving}
                >
                    <Text style={styles.ctaText}>{saving ? 'Salvando...' : '+   Criar Nova Viagem'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    inputTextArea: {
        backgroundColor: '#131820',
        borderWidth: 1,
        borderColor: 'rgba(219, 217, 217, 0.2)',
        borderRadius: 12,
        fontSize: 16,
        color: '#FFFF',
        paddingHorizontal: 12,
        minHeight: 120,
        textAlignVertical: 'top'
    },

    row: {
        flexDirection: 'row',
        gap: 16,
    },
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