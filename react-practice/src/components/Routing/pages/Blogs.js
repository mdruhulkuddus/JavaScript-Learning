import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Blogs Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos delectus illum corrupti perferendis sunt, placeat rem architecto assumenda atque ratione qui fugit libero deserunt! Ullam ad deleniti, tempora laboriosam debitis perspiciatis pariatur eligendi aspernatur ipsum quo! Earum quaerat reiciendis nam ex soluta iste reprehenderit. Tempore cupiditate suscipit, voluptate debitis aliquid, eos aspernatur, rerum consequuntur quia laborum maxime nemo voluptatum. Dolores, voluptatem accusamus. Dolore ratione vero nam architecto, iusto voluptates quo id. Distinctio et enim maxime doloribus velit incidunt, assumenda sequi! Incidunt blanditiis eius, ipsam recusandae ea illum odit laborum aliquam voluptates soluta eligendi explicabo exercitationem numquam earum harum repellendus libero?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos delectus illum corrupti perferendis sunt, placeat rem architecto assumenda atque ratione qui fugit libero deserunt! Ullam ad deleniti, tempora laboriosam debitis perspiciatis pariatur eligendi aspernatur ipsum quo! Earum quaerat reiciendis nam ex soluta iste reprehenderit. Tempore cupiditate suscipit, voluptate debitis aliquid, eos aspernatur, rerum consequuntur quia laborum maxime nemo voluptatum. Dolores, voluptatem accusamus. Dolore ratione vero nam architecto, iusto voluptates quo id. Distinctio et enim maxime doloribus velit incidunt, assumenda sequi! Incidunt blanditiis eius, ipsam recusandae ea illum odit laborum aliquam voluptates soluta eligendi explicabo exercitationem numquam earum harum repellendus libero?</p>
      <Button onClick={()=>{
        navigate("/")
      }}>Go to Home</Button>
    </div>
  )
}

export default Blogs
