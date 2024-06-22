import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './style.css';

import api from '../../services/api';

import logoImage from '../../assets/logo.png';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewUser() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { userId } = useParams();

    async function loadUser() {
        try {
            const response = await api.get(`v1/user/${userId}`);

            setId(response.data.id);
            setName(response.data.name);
            setEmail(response.data.email);
            setLogin(response.data.login);
        } catch (error) {
            alert('Falha ao consultar usuário!');
            navigate('/user');
        }
    }

    useEffect(() => {
        if (userId === '0') return;
        else loadUser();
    }, [userId]);

    async function createOrUpdateUser(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            login,
            password,
        }

        try {
            if (userId === '0') {
                await api.post('v1/user', data);
            } else {
                data.id = id;
                await api.put('v1/user', data);
            }
            navigate('/user');
        } catch (error) {
            alert('Erro ao cadastrar o usuário');
        }
    }

    return (
        <div className="new-user-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Logo Unichristus" />
                    <h1>Adicionar Novo Usuário</h1>
                    <p>Preencha todos os campos de usuário e clique em salvar!</p>
                    <Link className="back-link" to="/user">
                        <FiArrowLeft size={20} color="#2511FC5" />
                        Home
                    </Link>
                </section>
                <form onSubmit={createOrUpdateUser}>
                    <input placeholder="Nome Completo"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Usuário"
                        value={login}
                        onChange={e => setLogin(e.target.value)} />
                    <input placeholder="Senha" type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}