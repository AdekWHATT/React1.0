// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>

                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.state.dialogsPage.dialogs}
                               messages={props.state.dialogsPage.messages}/>}/>


                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}


                           />}/>


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;