import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    // alert(searchText);
  };

  useEffect(()=>{
    props.onSearch(searchText)
    // alert(searchText)

  },[searchText])

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" onChange={handleChange} placeholder="Search..." />
    </div>
  );
};

export default Search;
