import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Kent Joash A. Zamudio <br />
                Based on: <br />
                &emsp; "React JS Crash Course 2021" by Traversy Media <br />
                For: <br />
                &emsp; CMSC 129 Lecture - Software Engineering 2
            </p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
