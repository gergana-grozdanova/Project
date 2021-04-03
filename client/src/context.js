import {useContext,createContext,Component} from 'react';

export const AppContext=createContext();

 class AppContextProvider extends Component{
    state={
        username:null,
        isAuth:false
    }

    login=(username)=>{
        this.setState({username,isAuth:true})
    }
    logout=()=>{
        this.setState({username:null,isAuth:false})
    }
    render(){
        return(
            <AppContext.Provider value={{...this.state,login:this.login,logout:this.logout}}>
        {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;

// export const AppContext=createContext({
//     username:null,
//     login:()=>{},
//     logout:()=>{}
// })

// export function useAppContext() {
//     const {username,login,logout}=useContext(AppContext);
//     return {username,login,logout};
// }


