import Link from 'next/link'
import React from 'react'
import ProductCard from '../components/productCard'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


const usersHome = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  const users: User[] = await res.json()
  console.log(users);

  return (
    <div>
      <>
        <h1>Users List</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              </tr>)}
          </tbody>
        </table>
      </>

      <Link href="users/new">Create user</Link>
      <ProductCard />
    </div>
  )
}

export default usersHome
