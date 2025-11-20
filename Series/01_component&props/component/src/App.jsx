import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
<div>
  <h1 className='apph1'>Components And Props</h1>
   <div className='app'>
 
 <Card name="priyanshu" description="description1" gmail="1@gmail.com" insta="insta_user_1"/>
  <Card name="gaurab" description="description2" gmail="1@gmail.com" insta="insta_user_1"/>
   <Card name="parth" description="description3" gmail="1@gmail.com" insta="insta_user_1"/>
    <Card name="himanshu" description="description4" gmail="1@gmail.com" insta="insta_user_1"/>
       <Card name="himanshu" description="description4" gmail="1@gmail.com" insta="insta_user_1"/>
          <Card name="himanshu" description="description4" gmail="1@gmail.com" insta="insta_user_1"/>
             <Card name="himanshu" description="description4" gmail="1@gmail.com" insta="insta_user_1"/>
             
 </div>
</div>
  )
}

export default App