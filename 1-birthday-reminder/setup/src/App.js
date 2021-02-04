import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [numPeople, setNumPeople] = useState(people.length);
  const clearItems = () => {
    setPeople([]);
    // calling setNumPeople() below given implmentation will not update
    // the number of people when list is emptied ,as it is still async
    // so we have to use use effect instead
    // setNumPeople();
  };

  useEffect(() => {
    setNumPeople(people.length);
  }, [people]);

  return (
    <main>
      <section className="container">
        <h3> {numPeople} birthdays today</h3>
        {people.map((person) => {
          return <List key={person.id} person={person} />;
        })}
        <button onClick={clearItems}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
