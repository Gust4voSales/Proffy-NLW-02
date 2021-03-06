import React, { useState, useEffect } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(() => {
        loadFavorites();
    });

    function loadFavorites() {
        AsyncStorage.getItem("favorites").then(res => {
            if (res) {
                const favoritedTeachers = JSON.parse(res);
               
                setFavorites(favoritedTeachers);
            }
        });
    }

    return(
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => (
                    <TeacherItem teacher={teacher} favorited key={teacher.id}/>
                ))}
            </ScrollView>
        </View>
    );
}