import React, { useState } from "react"




const TotalExperience = () => {
    const [details, getdetails] = useState(
        [
            { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
            { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
            { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

        ]
    )

    const detail = details.filter(ele => ele.user_type === 'Designer').map(ele => ele.years).reduce((output, option) => output + option)


    console.log(detail);
    return detail;
}

export default TotalExperience