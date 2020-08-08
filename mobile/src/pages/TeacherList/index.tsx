import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function TeacherList() {
    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    function handleToggleFiltersVisble() {
        setIsFilterVisible(!isFiltersVisible);
    }

    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisble}>
                        <Feather name="filter" color="#fff" size={20}/>
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submit}>
                        <Text style={styles.submitText}>Filtrar</Text>
                    </RectButton>
                </View>)}
            </PageHeader>
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}