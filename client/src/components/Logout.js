import {AppContext} from '../context'
import {useContext} from 'react'
import {Redirect} from 'react-router-dom'
const Logout=()=>{
    const {logout}=useContext(AppContext)
    logout();
    return <Redirect to="/" />
}

export default Logout;