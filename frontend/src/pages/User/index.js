import React from 'react';
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImage from '../../assets/logo.png';

import './styles.css';

export default function User(){
    return (
        <div className="user-container">
            <header>
                <img src={logoImage} alt="Logo Unichristus"/>
                <span>Bem vindo, <strong>Alguem?</strong>!</span>
                <Link className="button" to="user/New">Adicionar Usuário</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>
        </div>
    );
}