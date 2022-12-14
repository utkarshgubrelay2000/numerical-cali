import { toast } from "react-toastify";
import { Navbar } from "../../component/Navbar";
import BarGraph from "../../component/Graph/BarGraph";
import LineGraph from "../../component/Graph/LineGraph";
import DoughGraph from "../../component/Graph/DoughGraph";
import Footer from "../../component/Footer";
import { useState } from "react";

import {
 
  NewtonsMethod,
} from "../../utils/api";
import { TextField } from "@material-ui/core";

export default function Home(props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const [showTable, setShowTable] = useState(false);
  const [equation, setEquation] = useState("");
  const [table, setTable] = useState([]);
  const [root, setRoot] = useState("");
  const [showGraph, setShowGraph] = useState(undefined);
  const [response, setResponse] = useState(false);
  

  function validation() {
     if (!b) {
      toast.error("Please enter the Initial guess value");
      return false;
    } else if (!equation) {
      toast.error("Please enter the equation");
      return false;
    } else {
      return true;
    }
  }

  const clearHandler = () => {
    setRoot("");
    setTable([]);
    setResponse(false);
    setEquation("");
    toast.success("Clear Success");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (validation()) {
        let data = { b: parseFloat(b), equation: equation.toLowerCase() };

        let res = await NewtonsMethod(data);
        if(res.error){   
         
          if(res?.data?.response?.status===500){
           toast.error("Something went wrong")}
            else{
              toast.error(res?.data?.response?.data)
            }
          }
        else{
  
          setTable(res.data?.arr);
                 setRoot(res.data?.Root);
        setShowTable(true);setResponse(true)
        }
      }
    } catch (error) {
      //  console.log(error.response);

      if (error.response.status === 400) {
        toast.error(error.response.data);
      } else {
        toast.error("Something went wrong");
      }

      //sn /a/b/f(m)/ f(m)*f(a)/ root
    }
  };
  return (
    <div>
      <Navbar />

      <div className="container  method-container">
        {/* Highlight SVG Background */}
        <div className="row calulator-div ">
          <div className="col-md-12 m-auto method-div">
            <h1 className="mb-3 header-text ">
              {/* <strong>Grow your Linkedin Profile with us.</strong> */}
              <strong>Newton Method</strong>
            </h1>
          </div>

          <div className="row ">
            <div className="col-md-7  ">
              <div className="row">
                <h5>
                  <strong>Equation</strong>
                </h5>

                <div className="form-group  col-4 ">
                  <TextField
                    id="standard-basic"
                    variant="filled"
                    type="text"
                    //  className="form-control"
                    onChange={(e) => setB(e.target.value)}
                    value={b}
                    name="example-text-input"
                    label="Initial Guess Value"
                  />
                </div>
                <div className="form-group  col-8 ">
                  <TextField
                    id="standard-basic"
                    label="Equation"
                    variant="filled"
                    placeholder="x^2+sin(x)+1"
                    value={equation}
                    type="text"
                    onChange={(e) => setEquation(e.target.value)}
                  />
                  {/* <input
                    className="form-control"
                    name="example-text-input"
                    placeholder="enter your equation - x^2+sin(x)+1"
                  /> */}
                </div>

                <div className="form-group mt-2 col-8 ">
                  <button className="cta-btn" onClick={submitHandler}>
                   Calculate                    </button>
                </div>
                <div className="col-md-12 table-div">
                  <div className="card">
                    {showTable && (
                      <>
                        <div className="card-body">
                          <div>
                            <h6 className="main-content-label mb-1">Answer</h6>
                          </div>
                          <div className="table-responsive bg-light  border ">
                          <table className="table  text-md-nowrap table-hover mg-b-0">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>A</th>
                          <th>B</th>
                          <th>m</th>
                          <th>f(m)</th>
                          <th>f(m)*f(a)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table && table.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.a}</td>
                              <td>{item.b}</td>
                              <td>{item.m}</td>
                              <td>{item.fm}</td>
                              <td>{item.fma}</td>
                            </tr>
                          );
                        })}{" "}
                      </tbody>
                    </table>
                          </div>
                        </div>
                        <div>
                    <h6 className="main-content-label mb-1">Answer</h6>
                  </div>
                  <h6 className='root-h6'
                        style={{
                          border: "1px black solid",
                          padding: "10px",
                          margin: "auto",
                        }}
                      >
                  Integral
                           {"  "}: {root}
                      </h6>
                        <div className="text-center">
                          <button
                            onClick={() => setShowGraph("Line")}
                            className="cta-btn cta-small m-3"
                          >
                            Line
                          </button>
                          <button
                            onClick={() => setShowGraph("Bar")}
                            className="cta-btn cta-small m-3"
                          >
                            Bar
                          </button>
                          <button
                            onClick={() => setShowGraph("Dough")}
                            className="cta-btn cta-small m-3"
                          >
                            Doughnut
                          </button>

                          {showGraph ? (
                            response ? (
                              <div>
                                {showGraph === "Bar" ? (
                                  <BarGraph graphData={table} />
                                ) : showGraph === "Line" ? (
                                  <LineGraph graphData={table} />
                                ) : (
                                  <DoughGraph graphData={table} />
                                )}
                              </div>
                            ) : null
                          ) : null}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 img-div ">
              <img
                src="../assets/Newton_3.gif"
                alt="Fluxo Social Media Marketing Template"
                className="mw-100"
              />
              <p style={{ wordSpacing: "1px" }}>
                Newton{"'"}s Method : - Newton{"'"}s Method is also called the
                <strong> Newton-Raphson method</strong> is a recursive algorithm
                for approximating the root of a differentiable function f(x)=0.
                It is based on the geometry of a curve, using the tangent lines
                to a curve. As such, it requires calculus, in particular
                differentiation.
                <strong>
                  {" "}
                  <br />
                  Algorithm :
                  <br />
                </strong>{" "}
                For any continuous function f(x),
                <ul>
                  <li>
                    Guess a initial value, say b and initialize error e (depends
                    upto what accuracy you want the result)
                  </li>
                  <li>find m = b-(f(b)/f{"'"}(b))</li>
                  <li>
                    m is the root of the given function if f(m) = 0 then stop
                    else follow the next step
                  </li>
                  <li> b = m</li>
                  <li>m = b-(f(b)/f{"'"}(b))</li>
                  <li>Repeat 3, 4, 5 step untill |f(m)|{"<"}e.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
