import React from 'react';
import './style.css';

import logoImage from '../../assets/logo.png';
import padLock from '../../assets/padlock.png';

export default function Login(){
    
    return (
       <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Imagem logo unichristus" />
                <form>
                    <h1>Acesse sua conta</h1>
                    <input type="text" placeholder="Usuário"/>
                    <input type="password" placeholder="Senha"/>

                    <button type="submit">Entrar</button>
                </form>
            </section>
            <img src={padLock} alt="Imagem de um Cadeado" />
       </div>
    )
}