import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css';
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/nationalNews" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>NATIONAL</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/internationalNews" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>INTERNATIONAL</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sportNews" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>SPORTS</span>
                        </Link>
                    </li>
                    {isDoctor && <div>
                        <li>
                            <Link to="/postNews" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>POST NEWS</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>ADD ADMIN</span>
                            </Link>
                        </li>
                    </div>}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;