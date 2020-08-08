import React, { useState } from 'react';
import { View, Image, Text, Linking, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import styles from './styles';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string; 
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);
    
    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?&phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {
        let favoritesArray = [];
        const favorites = await AsyncStorage.getItem("favorites");

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }


        if (isFavorited) {
            // remove from favorites
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {
            // add to favorites
            
            favoritesArray.push(teacher);

            setIsFavorited(true);
        }
        await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    source={{ uri: teacher.avatar  }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        style={[
                            styles.favoriteButton, 
                            isFavorited ? styles.favorited : {}
                    ]}
                        onPress={handleToggleFavorite}    
                    >
                        {
                            isFavorited 
                            ? <Image source={unfavoriteIcon}/>
                            : <Image source={heartOutlineIcon}/>
                        }
                    </RectButton>
                    
                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;