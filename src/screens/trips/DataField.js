// DateField.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function DateField({ label, value, onChange, required }) {
    const [open, setOpen] = useState(false);

    const text = value ? format(value, "dd/MM/yyyy", { locale: ptBR }) : "dd/mm/aaaa";

    return (
        <View>
            <Text style={styles.label}>
                {label} {required ? '*' : ''}
            </Text>

            <TouchableOpacity style={styles.input} onPress={() => setOpen(true)} activeOpacity={0.8}>
                <Text style={[styles.inputText, !value && { color: '#9AA5AD' }]}>{text}</Text>
                <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/9AA5AD/calendar--v1.png' }} style={styles.icon} />
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={open}
                mode="date"
                display="spinner"          // ou "inline" (iOS), "calendar" (Android 12+)
                onConfirm={(d) => { setOpen(false); onChange(d); }}
                onCancel={() => setOpen(false)}
                locale="pt-BR"
                maximumDate={new Date(2100, 11, 31)}
                minimumDate={new Date(2000, 0, 1)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(219, 217, 217, 0.2)',
        backgroundColor: '#131820',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    icon: {
        width: 18,
        height: 18,
        tintColor: '#9AA5AD',
        marginLeft: 12,
    },
});