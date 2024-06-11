import React from 'react';
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImage from '../../assets/logo.png';

import './style.css';

export default function User(){
    return (
        <div className="user-container">
            <header>
                <img src={logoImage} alt="Logo Unichristus"/>
                <span>Bem vindo, <strong>Alguem?</strong>!</span>
                <Link className="button" to="/user/new">Adicionar Usuário</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Usuários</h1>
            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>João</p>
                    <strong>E-mail:</strong>
                    <p>jonao@gmail.com</p>
                    <strong>Usuário</strong>
                    <p>jao</p>

                    <button>
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>João</p>
                    <strong>E-mail:</strong>
                    <p>jonao@gmail.com</p>
                    <strong>Usuário</strong>
                    <p>jao</p>

                    <button>
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>João</p>
                    <strong>E-mail:</strong>
                    <p>jonao@gmail.com</p>
                    <strong>Usuário</strong>
                    <p>jao</p>

                    <button>
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>
            </ul>
        </div>
    );
}