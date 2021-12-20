import React, { useState } from "react"




const HOF = () => {
    const [details, getdetails] = useState(
        [
            { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
            { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
            { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

        ]
    )
    const mapRows = details.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ));
    return mapRows;
}

export default HOF