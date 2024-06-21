import React, { useState, useEffect } from 'react';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImage from '../../assets/logo.png';

import './style.css';

export default function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('v1/user/all').then(response => {
            setUsers(response.data);
        });
    });

    async function deleteUser(id){
        try {
            await api.delete(`v1/user/${id}`);
        } catch (error) {
            alert('Falha ao deletar usuário! Tente novamente.');
        }
    }

    return (
        <div className="user-container">
            <header>
                <img src={logoImage} alt="Logo Unichristus" />
                <span>Bem vindo, <strong>Alguem?</strong>!</span>
                <Link className="button" to="/user/new">Adicionar Usuário</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Usuários</h1>
            <ul>
                {users.map(user =>
                    <li>
                        <strong>Nome:</strong>
                        <p>{user.name}</p>
                        <strong>E-mail:</strong>
                        <p>{user.email}</p>
                        <strong>Usuário</strong>
                        <p>{user.login}</p>

                        <button>
                            <FiEdit size={20} color="#251FC5" />
                        </button>
                        <button onClick={() => deleteUser(user.id)}>
                            <FiTrash2 size={20} color="#251FC5" />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}