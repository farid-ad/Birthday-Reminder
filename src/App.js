import React, { useState } from 'react'
import data from './Data'
import List from './List'

function App() {
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthday today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>Clear ALl</button>
            </section>
        </main>
    )
}
export default App
