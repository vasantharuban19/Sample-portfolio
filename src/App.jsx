import React from "react";

function App() {
  let data = [
    {
      title: "project one",
      desription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
    aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
    dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`,
    },
    {
      title: "project two",
      desription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
      aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
      dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`,
    },
    {
      title: "project three",
      desription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
        aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
        dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`,
    },
    {
      title: "project four",
      desription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
          aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
          dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`,
    },
    {
      title: "project five",
      desription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
            aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
            dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`,
    },
    {
      title: "project six",
      desription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
              aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
              dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`,
    },
    
  ];
  return (
    <>
      {/* <!-- Page Content --> */}
      <div className="container">
        {/* <!-- Page Heading --> */}
        <h1 className="my-4">
          Sample-Portfolio
        </h1>

        <div className="row">
          {data.map((e, i) => {
            return (
              <div className="col-lg-4 col-sm-6 mb-4" key={i}>
                <div className="card h-100">
                  <a href="#">
                    <img
                      className="card-img-top"
                      src="https://via.placeholder.com/700x400"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{e.title}</a>
                    </h4>
                    <p className="card-text">{e.desription}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <!-- /.row --> */}

          {/* <!-- Pagination --> */}
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
