import { toast } from "react-toastify";
import { Navbar } from "../../component/Navbar";
import BarGraph from "../../component/Graph/BarGraph";
import LineGraph from "../../component/Graph/LineGraph";
import DoughGraph from "../../component/Graph/DoughGraph";
import Footer from "../../component/Footer";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BisectionMethod,
  EliminationMethod,
  fixediterationMethod,
} from "../../utils/api";
import { TextField } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "60%",
    overflowX: "hidde",
    overflowY: "auto",
  },
}));
export default function Home(props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [showTable, setShowTable] = useState(false);
  const [equation, setEquation] = useState("");
  const [table, setTable] = useState([]);
  const [root, setRoot] = useState("");
  const [showGraph, setShowGraph] = useState(undefined);
  const [response, setResponse] = useState(false);
  const [n, setN] = useState(0);
  const [n2, setN2] = useState(0);
  const [matrix, setMatrix] = useState(Array(n).fill(Array(n).fill(null)));
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (row, column, event) => {
    let mainMat = [...matrix];
    let copy = [];
    copy = [...matrix[row]];
    copy[column] = parseInt(event.target.value);
    // setMatrix(copy);
    mainMat[row] = copy;
    console.log(mainMat);
    setMatrix(mainMat);
  };
  const createMatrix = () => {
    let ele = [];
    let copy = [];
    // setMatrix(ele)
    for (let index = 0; index < n; index++) {
      for (let i = 0; i < parseInt(n) + parseInt(1); i++) {
        copy[i] = 0;
      }
      ele.push(copy);
    }
    console.log(ele);
    setMatrix(ele);
    return ele;
  };

  function validation() {
    if (!a) {
      //  console.log("no email");
      toast.error("Please enter the a");
      return false;
    } else if (!b) {
      toast.error("Please enter the b");
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
        let data = {
          a: parseFloat(a),
          b: parseFloat(b),
          equation: equation.toLowerCase(),
        };

        let res = await fixediterationMethod(data);
        if(res.error){     toast.error(res?.data?.response?.data)}
        else{
        setTable(res.data.table);
        setRoot(res.data.root);
      setShowTable(true);
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
              <strong>Fixed Point Iteration</strong>
            </h1>
          </div>

          <div className="row ">
            <div className="col-md-7  ">
              <div className="row">
                <h5>
                  <strong>Equation</strong>
                </h5>
                <div className="form-group  col-6 ">
                  <TextField
                    id="standard-basic"
                    label="Initial Guess Value"
                    variant="filled"
                    onChange={(e) => setA(e.target.value)}
                    value={a}
                    name="example-text-input"
                    
                  />
                </div>
                <div className="form-group  col-6 ">
                  <TextField
                    id="standard-basic"
                    label="f(x)"
                    variant="filled"
                    onChange={(e) => setB(e.target.value)}
                    value={b}
                    placeholder=" x^2+sin(x)+1"

                   // placeholder="Value of B"
                  />
                </div>
                <div className="form-group mt-2 col-12 ">
                  <TextField
                    id="standard-basic"
                    label="g(x)"
                    variant="filled"
                    onChange={(e) => setEquation(e.target.value)}
                    className="form-control"
                    name="example-text-input"
                    placeholder=" x^2+sin(x)+1"
                    value={equation}
                  />
                </div>

                <div className="form-group mt-2 col-8 ">
                  <button className="cta-btn" onClick={submitHandler}>
                    Create
                  </button>
                </div>
                <div className="col-md-12 table-div">
                  <div className="card">
                    {showTable && (
                      <>
                        <div className="card-body">
                          <div>
                            <h6 className="main-content-label mb-1">Answer</h6>
                          </div>
                          <div className=" bg-light  border ">
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
                        <div className="text-center">
                          <button
                            onClick={() => setShowGraph("Line")}
                            className="btn btn-primary m-3"
                          >
                            Line
                          </button>
                          <button
                            onClick={() => setShowGraph("Bar")}
                            className="btn btn-primary m-3"
                          >
                            Bar
                          </button>
                          <button
                            onClick={() => setShowGraph("Dough")}
                            className="btn btn-primary m-3"
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
                src="../assets/Fixed.gif"
                alt="Fluxo Social Media Marketing Template"
                className="mw-100"
              />

<div className="col-lg-6 col-sm-12  col-12">
                      Fixed Point Iteration Method: Fixed point iteration method
                      is open and simple method for finding real root of
                      non-linear equation by successive approximation. It
                      requires only one initial guess to start. Since it is open
                      method its convergence is not guaranteed. This method is
                      also known as Successive Approximation Method. To find the
                      root of nonlinear equation f(x)=0 by fixed point iteration
                      method, we write given equation f(x)=0 in the form of x =
                      g(x). If x0 is initial guess then next approximated root
                      in this method is obtaine by: x1 = g(x1) And similarly,
                      next to next approximated root is obtained by using value
                      of x1 i.e. x2 = g(x2) And the process is repeated until we
                      get root within desired accuracy e.
                      <strong>
                        {" "}
                        <br /> Algorithm  :<br />
                      </strong>{" "}
                       For any continuous function f(x),
                      <ul>
                        <li>
                        Guess a initial value, sa
                        y b and initialize error
                         e (depends upto what accuracy you want the result)
                        </li>
                        <li>
                        write f(x)=0 in the form x=g(x)
                         
                        </li>
                        m = g(b)
                        <li>
                        m is the root of the given function if f(m) = 0 then stop else follow the next step
                        </li>
                        <li>b = m</li>
                        <li>Repeat step 3, 4 until |f(m)| {"<"} e.</li>{" "}
                      </ul>
                    </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
