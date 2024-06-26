import React, { useState } from "react";
import { Button, Card, CardBody } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { blogsData } from "../data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  // console.log(blogs);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Blogs Page</h1>

      {blogs.map((blog) => {
        const { id, title, body } = blog;

        return (
          <article key={id} style={{display:"inline-grid", margin:"10px", justifyContent:"center", }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Programming
                </Card.Subtitle>
                <Card.Text>{body.substring(0, 150) + ".........."}</Card.Text>
                {/* <Card.Link href={"blogs/"+title}>Learn More</Card.Link> */}
                {/* <link to={title}>go</link> */}
                <Link to={`/blogs/${title}`} state={{id, title, body}} className="btn btn-primary">Learn More</Link>
              </Card.Body>
            </Card>
          </article>
        );
      })}

      <Button variant="success"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default Blogs;
