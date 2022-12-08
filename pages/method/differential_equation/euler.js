import { toast } from "react-toastify";

import { Navbar } from "../../../component/Navbar";

import Footer from "../../../component/Footer";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { TextField } from "@material-ui/core";
import { EulerMethodSimple, LegrangeInterpolation } from "../../../utils/api";

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
  const [x0, setx0] = useState("");
  const [y0, sety0] = useState("");
  const [xn, setxn] = useState("");
  const [equation, setEquation] = useState("");
  const [showTable,setShowTable]=useState(false)

  const [table, setTable] = useState([]);
  const [table2, setTable2] = useState([]);
  const [root, setRoot] = useState("");
  const [showGraph, setShowGraph] = useState(undefined);
  const [num, setnum] = useState(0);
  const [n, setN] = useState(0);
  const [h, seth] = useState(0);
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
    if (!n) {
      //  console.log("no email");
      toast.error("Please enter the number of equation");
      return false;
    } else {
      return true;
    }
  }

  const clearHandler = () => {
    setEquation("");
    setRoot("");
    setTable([]);
    setResponse(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (validation()) {
        let data = { x0: parseFloat(x0), y0: parseFloat(y0),n:parseFloat(n), func: equation.toLowerCase(),h:parseFloat(h),
          num:parseFloat(num),xn:parseFloat(xn) };
        let res = await EulerMethodSimple(data);
        console.log(res.data);
        if(res.error){    
          if(res?.data?.response?.status===500){
            toast.error("Something went wrong")}
             else{
               toast.error(res?.data?.response?.data)
             }
        
        }
        else{
  
        let array=[],array2=[]
          for (const [key, value] of Object.entries(res.data)) {
          //  console.log(`${key}: ${value}`);
           array.push(key)
           array2.push(value)
          }
          setTable(array)
          setTable2(array2)
        setShowTable(true);setResponse(true)}
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
              <strong>Eular Metthod</strong>
            </h1>
          </div>

          <div className="row ">
            <div className="col-md-7  ">
              <div className="row">
                <h5>
                  <strong>Equation</strong>
                </h5>
                <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="Value of N"
                    variant="filled"
                    type="number"
                    onChange={(e) => {
                      setN(e.target.value);
                    }}
                    name="example-text-input"
                    // placeholder="No of Equations(n)"
                  />
                </div>
                <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="Value of h"
                    variant="filled"
                    type="number"
                    onChange={(e) => {
                      seth(e.target.value);
                    }}
                    name="example-text-input"
                    // placeholder="No of Equations(n)"
                  />
                </div>
                <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="Initial X0"
                    variant="filled"
                    type="number"
                    onChange={(e) => {
                      setx0(e.target.value);
                    }}
                    name="example-text-input"
                    // placeholder="No of Equations(n)"
                  />
                </div>
                <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="Initial Y0"
                    variant="filled"
                    type="number"
                    onChange={(e) => {
                        sety0(e.target.value);

                    }}
                    name="example-text-input"
                    // placeholder="No of Equations(n)"
                  />
                </div>
                <div className="form-group col-6 m-auto">
                    <TextField
                        id="standard-basic"
                        label="Value of Num"
                        variant="filled"
                        type="number"
                        onChange={(e) => {
                            setnum(e.target.value);
                        }}
                        name="example-text-input"
                        // placeholder="No of Equations(n)"
                    />
                </div>

                <div className="form-group col-6 m-auto">
                    <TextField
                        id="standard-basic"
                        label="Value of Xn"
                        variant="filled"
                        type="number"
                        onChange={(e) => {
                            setxn(e.target.value);
                        }}
                        name="example-text-input"
                        // placeholder="No of Equations(n)"
                    />
                </div>
                <div className="form-group col-12 m-auto">
                    <TextField
                        id="standard-basic"
                        label="Equation"
                        variant="filled"
                        type="number"
                        onChange={(e) => {
                            setxn(e.target.value);
                        }}
                        name="example-text-input"
                         placeholder="2x^2+3y"
                    />
                </div>
                <div className="form-group mt-2 col-12 ">
                  <button className="cta-btn" onClick={submitHandler}>
                   Calculate                    </button>
                </div>
                <div className="col-md-12 table-div">
                  <div className="card">
                    {showTable && (
                      <div className="card-body">
                        <div className="table-responsive bg-light  border ">  <table className="table  text-md-nowrap table-hover mg-b-0">
                      <thead>
                        <tr>
                          <th>X</th>
                          <th>Y</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table && table.map((ele,index)=>{
                         return(<tr key={index}>   <th>{ele}</th>
                            <th>{table2[index]}</th></tr>)
                        })}{" "}
                      </tbody>
                    </table>  </div>
                      </div>
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

              <p style={{ wordSpacing: "1px" }}>
                In mathematics, the Gaussian elimination method is known as the
                row reduction algorithm for solving linear equations systems. It
                consists of a sequence of operations performed on the
                corresponding matrix of coefficients. We can also use this
                method to estimate either of the following:
                <br />
                - The rank of the given matrix
                <br />
                - The determinant of a square matrix
                <br />- The inverse of an invertible matrix To perform row
                reduction on a matrix, we have to complete a sequence of
                elementary row operations to transform the matrix till we get 0s
                (i.e., zeros) on the lower left-hand corner of the matrix as
                much as possible. That means the obtained matrix should be an
                upper triangular matrix.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
