import './App.css';
import React, {useState} from 'react';
import Repos from './repos.js';


export default function App() {
    const [showE, setShowE] = useState(false);
    const [repos, setRepos] = useState([]);

    function getUserRepos(e) {
        e.preventDefault();
        const url = e.target.action + e.target.elements[0].value +"/repos";
        e.target.elements[0].value = "";

        fetch(url, 
            {
                method: 'GET'
            }
        ).then(res => res.json()).then(obj => {
            if (obj.length === 0) {
                setShowE(true);
            } else {
                setRepos(obj);
                setShowE(false);
            }
        });
    }

    return (
        <div className="App">
           <div className="main-section">
                <form method="GET" action="https://api.github.com/users/" onSubmit={(e) => getUserRepos(e)}>
                    <input placeholder="username" required name="username" />
                    <button className="sub-btn" type="submit">submit</button>
                </form>
            </div>
            <p className={showE?"error":"hidden"}>
                not found username!
            </p>
            <div className={(repos.length && !showE)?"repos":"hidden"}>
                <Repos obj={repos} />
            </div>
        </div>
      );
}
