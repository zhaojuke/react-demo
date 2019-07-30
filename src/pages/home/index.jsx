import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '@/components/clock/index'
import Toggle from '@/components/Toggle/index'

function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}
  
const element = <Welcome name="Sara" />;

class Home extends React.Component {
    render() {
        return (
            <div>
                
                <p>这是首页</p>
                {element}
                <Clock />
                <Toggle />
                {/* <img src={user.avatarUrl}></img> */}
                <Link to="/about">go to About</Link>
            </div>
        );
    }
}

export default Home;