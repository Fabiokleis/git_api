import React from 'react';

export default function Repos({obj}) {
   return (<>
            <ul className="repo-list">
            {obj.map((o, k) => (
                     <li key={k}>{o.name} - stars ({o.stargazers_count})</li>
            ))}
            </ul>

         </>
        );
}


