import React from 'react'

function Section({item}) {
    // console.log(item.house)
    // console.log(item.image)
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.actor}
            </li>
            <li>
              <strong>House:</strong> {item.house}
            </li>
            <li>
              <strong>Birthday:</strong> {item.dateOfBirth}
            </li>
            <li>
              <strong>Ancestry:</strong> {item.ancestry}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Section
