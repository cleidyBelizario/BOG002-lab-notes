import {firebase} from './firebase'

React.useEffect(() => {

    const obtenerDatos = async () => {
        const db = firebase.firestore()
        try {
            const data = await db.collection('notas').get()
            const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            console.log(arrayData)      
        } catch (error) {
            console.log(error)
        }
    }
    obtenerDatos()

}, [])
