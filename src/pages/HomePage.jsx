import React from 'react'
import Child from '../components/Child'

const HomePage = () => {

  const userProps = {
    name: 'John Doe',
    age: 30,
    height: 178
  }
  
  return (
    <div>
      <Child {...userProps}/>
    </div>
  )
}

export default HomePage