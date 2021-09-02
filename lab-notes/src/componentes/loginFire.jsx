import React, { useState, useEffect } from 'react';
import { a } from "../firebase/firebaseconfi";
import IniciarSesion from './iniciarSesion';
import Hero from './home';
//import {useHistory} from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccout] = useState(false);

    const clearInputs = () => {
        setEmailError('');
        setPasswordError('');
    }

    //para Iniciar sesion 
    const handleLogin = () => {
            a
            .signInWithEmailAndPassword(email, password)
            .then((result) => console.log(result.user))
            .catch((err) => {
                console.log(err + "error de codigo")
                
                })
            
    };

    //Para crear y resgitrar usuarios 
    const handleSignup = () => {
            a
            .createUserWithEmailAndPassword(email, password)
            .then(() => (console.log('create user')))
            .catch(err => {
                console.log(err + "error de mensaje")
            });

    }
    //para cerrar sesion 
    const handleLogout = () => {
        a.signOut();
    }
    //para verificar si un usuario esta en sesion 
    const authListener = () => {
        a.onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };
    useEffect(() => {
        authListener();
    }, []);

    return (
        <div>
            { user ? (
        <Hero handleLogout={handleLogout} />
            ):(
        <IniciarSesion
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount = {hasAccount}
            setHasAccout={setHasAccout}
            emailError={emailError}
            passwordError={passwordError}
        />
            )}
        </div>
    )
}
export default Login;