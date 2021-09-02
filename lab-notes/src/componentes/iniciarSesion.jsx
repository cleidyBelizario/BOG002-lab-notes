import React from 'react';

const IniciarSesion = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError, } = props;

    return (
        <div>
            <h1>EASY NOTES </h1>

            <p> Recuerdalo todo con tus notas y organiza tu vida </p>
            
            <form> <br />
                <input 
                type="email"
                name="email" 
                required 
                value={email}
                onChange={(e) => { setEmail(e.target.value) }} 
                placeholder="Email" />
                <p>{emailError}</p>
                <br />
                <input 
                type="Password" 
                name="Password" 
                id="Password" 
                required 
                value={password}
                onChange={(e) => { setPassword(e.target.value) }} 
                placeholder="Password" />

                <p> {passwordError} </p>
                <div >
                    {hasAccount ? (
                        <>
                    <button type='button' className='loginIn' onClick={handleLogin}>Iniciar</button>
                    <p> NO TIENES UNA CUENTA  ? <span onClick={()=> setHasAccount(!hasAccount)}>Registrarse</span> </p>
                    </>
                    ) : (
                    <>
                        <button type='button' className='link' onClick={handleSignup}>Registrarse</button>
                        <p> Tienes cuenta ?  <span onClick={()=> setHasAccount(!hasAccount)}>Iniciar Sesion</span> </p>
                    </>
                    )}
                </div>
            </form>
        </div>
    )
}
export default IniciarSesion;