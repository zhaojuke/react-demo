import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
    render() {
        return (
            <div>
                <p>这是about页面</p>
                <Link to="/">go to Home</Link>
            </div>
        )
    }
}

export default About;