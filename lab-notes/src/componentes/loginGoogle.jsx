import React from "react";
import { a, google } from "../firebase/firebaseconfi";



function UsuarioGoogle() {
    // const [userG, setUser] = useState(null)
    //const [nameG, setNameG] = useState(null)
    const LoginGoogle = () => {
        a.signInWithPopup(google)
            .then(res => {
                console.log(res)
                /* setUser(res.userG)      setNameG(res.userG.nameG)*/
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={LoginGoogle}> google</button> <br />

            <p>{/*nameG*/}</p>
        </div>
    )
}


export default UsuarioGoogle;

