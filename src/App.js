import React, { useState } from 'react';
import data from './data';
//import List from './List';

function App() {
  
  const [people, setpeople] =useState(data);
  return (<main>
    <section className='container'>
    <h2>{people.length} birthday today</h2>
    <>
      {people.map((person)=>{
      const {id,name,age,image}= person;
      return <article key={id} className="person">
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>{age} year</p>
        </div>
      </article>
    })}
    </>
    <button onClick={()=>setpeople([])}>clear all</button>
  </section>
  </main>
);
}

export default App;
