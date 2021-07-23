import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function data(e) {
    fetch(`https://reqres.in/api/users?page=${e}`)
      .then((res) => res.json())
      .then((json) => setPosts(json.data));
  }
  useEffect(() => {
    data(1);
  }, []);
  return (
    <>
      <div className="App">
        <h1>My App</h1>
        <div className="container">
          <div className="row">
            {posts.map((e) => (
              <>
                <div className="col-lg-4 my-2">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src={e.avatar}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5>{e.first_name} </h5>
                      <h5>{e.last_name} </h5>
                      <h5>{e.email} </h5>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" onClick={() => data(1)}>
              <a class="page-link">1</a>
            </li>
            <li class="page-item" onClick={() => data(2)}>
              <a class="page-link">2</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
