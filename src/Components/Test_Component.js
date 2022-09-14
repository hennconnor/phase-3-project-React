import React, { useState, useEffect } from "react"

function Test_Component() {
    const [testData, setTestData] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (
        <div>
            <h1>hi from Component</h1>
        </div>
    )
}


export default Test_Component