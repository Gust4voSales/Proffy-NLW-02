import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars0.githubusercontent.com/u/51370835?s=460&u=bd69da80dfc503a9d1c41e531c4c3ae8ab4eeece&v=4" 
                    alt="Gust4vo Sales"
                />
                <div>
                    <strong>Gustavo Sales</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>Entusiasta das melhores tecnlogias de física avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );  
}

export default TeacherItem;