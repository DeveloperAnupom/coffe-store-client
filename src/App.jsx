import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeItem from './Component/CoffeeItem';
import { useState } from 'react';

function App() {

  const allCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffee)
  return (
    <div className='w-11/12 mx-auto my-10'>
      <div className='text-center'>
        <h1 className='text-purple-500 text-4xl font-bold py-5'>Coffee Store</h1>
        <h3 className='text-purple-500 text-3xl font-bold py-3 mb-10'>Total Coffees Items :
          {allCoffee.length}</h3>
      </div>
      <div className='grid md:grid-cols-2 gap-10'>
        {
          coffees.map((coffee) =>
            <CoffeeItem
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}>
            </CoffeeItem>)
        }
      </div>
    </div>
  )
}

export default App
