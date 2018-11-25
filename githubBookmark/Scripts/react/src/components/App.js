import React from 'react';
import ReposList from './ReposList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bookmarks from './Bookmarks';
import NavBar from './Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar/>
                <Switch>
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route path="/" component={ReposList} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;