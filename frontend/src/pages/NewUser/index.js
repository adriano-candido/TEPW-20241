import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import logoImage from '../../assets/logo.png';
import {FiArrowLeft} from 'react-icons/fi';

export default function NewUser(){
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
                <form>
                    <input placeholder="Nome Completo"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Usuário"/>
                    <input placeholder="Senha"/>

                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}