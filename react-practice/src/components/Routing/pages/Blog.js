import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { blogsData } from "../data";
import { Card, Container } from "react-bootstrap";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  // console.log(location);
  // const [body, setBody] = useState("");

  // useEffect(() => {
  //   const body = blogsData.filter((blog) => blog.title === title);
  //   setBody(body[0].body);
  // }, []);

  return (
    <div style={{justifyContent:"center", margin:"auto", display:'flex'}}>
      <Card style={{width:"38rem"}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{location.state.body.slice(0, 400)}</Card.Text>
          <Card.Text>{location.state.body.slice(350, 5000)}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
