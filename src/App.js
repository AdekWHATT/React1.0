// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               store={props.store}
                               dialogs={props.state.dialogsPage.dialogs}
                               messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>


                </div>

            </div>

    );
}

export default App;