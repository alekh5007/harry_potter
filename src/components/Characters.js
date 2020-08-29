import React from 'react'
import Section from './Section'
function Characters({items}) {
    return (
      <section className="cards">
{
    items.map(item =>(
       
        <Section item={item}></Section>
    ))
}
      </section>
    )
}

export default Characters
