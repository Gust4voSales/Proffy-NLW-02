import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Keyboard, AsyncStorage } from 'react-native';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

export default function TeacherList() {
    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    useFocusEffect(() => {
        loadFavorites();
    });

    function loadFavorites() {
        AsyncStorage.getItem("favorites").then(res => {
            if (res) {
                const favoritedTeachers = JSON.parse(res);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    function handleToggleFiltersVisble() {
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        
        const { data } = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setIsFilterVisible(false);
        setTeachers(data);
        Keyboard.dismiss();
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
                        value={subject}
                        onChangeText={text => setSubject(text)}
                    />
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                                value={time}
                                onChangeText={text => setTime(text)}
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submit} onPress={handleFiltersSubmit}>
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
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem teacher={teacher} favorited={favorites.includes(teacher.id)} key={teacher.id}/>
                ))}
            </ScrollView>
        </View>
    );
}