import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { useAuth } from '../hooks/AuthHook';
import AddPost from '../pages/AddPost';
import Dashboard from '../pages/Dashboard';
import EditPost from '../pages/EditPost';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Signin from '../pages/Signin';
import Singup from '../pages/Signup';
import ViewPost from '../pages/ViewPost';
//import Route from './route'

const Routes: React.FC = () => {

    const { user } = useAuth()
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/post/:id" exact component={ViewPost}/>
            <Route path="/edit/post/:id" exact component={EditPost}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Singup}/>
            {user && <Route path="/dashboard"  component={Dashboard}/>}
            {user && <Route path="/addPost"  component={AddPost}/>} 
        </Switch>
    );

}

export default Routes;