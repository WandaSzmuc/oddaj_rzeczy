import React, { useEffect, useState } from "react";
import Fundation from "./Fundation";
import Pagination from "./Pagination";

export default function Fundations({ fundations }) {
  const [units, setUnit] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    fetch(`http://localhost:3000/${fundations}`).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setUnit(resp);
      });
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = units.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Fundation units={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={units.length}
        paginate={paginate}
      />
    </div>
  );
}
