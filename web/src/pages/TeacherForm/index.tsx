import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

const TeacherForm = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [bio, setBio] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: '', from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: '', from: '', to: '' },
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            bio,
            whatsapp,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            
            history.push('/');
        }).catch(err => {
            alert('Erro ao cadastrar classe!');
        })

    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />
            
            <main>
                <form onSubmit={handleCreateClass}>              
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        name="name" 
                        label="Nome completo"
                        value={name} 
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                    <Input 
                        name="avatar" 
                        label="Avatar"
                        value={avatar} 
                        onChange={e => {
                            setAvatar(e.target.value);
                        }}    
                    />
                    <Input 
                        name="whatsapp" 
                        label="Whatsapp"
                        value={whatsapp} 
                        onChange={e => {
                            setWhatsapp(e.target.value);
                        }}
                    />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Geografria', label: 'Geografria' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                        ]}
                        value={subject} 
                        onChange={e => {
                            setSubject(e.target.value);
                        }}
                    />
                    <Input
                        name="cost"
                        label="Custo da sua hora por aula"
                        value={cost} 
                        onChange={e => {
                            setCost(e.target.value);
                        }}
                    />
                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio} 
                        onChange={e => {
                            setBio(e.target.value);
                        }}
                    />
                </fieldset>
                
                <fieldset>
                    <legend>
                        Horários disponívels
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    
                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div className="schedule-item" key={scheduleItem.week_day}>
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-Feira' },
                                        { value: '2', label: 'Terça-Feira' },
                                        { value: '3', label: 'Quarta-Feira' },
                                        { value: '4', label: 'Quinta-Feira' },
                                        { value: '5', label: 'Sexta-Feira' },
                                        { value: '6', label: 'Sábado' },
                                    ]}
                                />      
                                <Input 
                                    name="from" 
                                    label="Das" 
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input
                                    name="To"
                                    label="Até"
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        );  
                    })} 
                    
                      
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
                </form>
            </main>

        </div>
    );
}

export default TeacherForm;