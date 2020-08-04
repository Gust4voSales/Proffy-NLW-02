import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherList = () => {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis." />
        </div>
    );
}

export default TeacherList;