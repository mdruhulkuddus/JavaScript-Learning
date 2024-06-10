import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data";
import { Card, Container } from "react-bootstrap";

const Blog = () => {
  const { title } = useParams();
  const [body, setBody] = useState("");
  useEffect(() => {
    const body = blogsData.filter((blog) => blog.title === title);
    setBody(body[0].body);
  }, []);
  return (
    <div style={{justifyContent:"center", margin:"auto", display:'flex'}}>
      <Card style={{width:"38rem"}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
