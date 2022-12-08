import {toast} from 'react-toastify'

import { Navbar } from "../../../component/Navbar";

import Footer from "../../../component/Footer";
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { TextField } from '@material-ui/core';
import {  simpsonOneThirdRuleFunction } from '../../../utils/api';

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
    width:'60%', overflowX: 'hidde',
    overflowY: 'auto',
  
  },
}));
export default function Home(props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [open, setOpen] = useState(false);
  const classes = useStyles();
const [showTable,setShowTable]=useState(false)
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
    copy=[...matrix[row]]
    copy[column] = parseInt(event.target.value); 
    // setMatrix(copy);
    mainMat[row]=copy
    console.log(mainMat);
    setMatrix(mainMat)
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
    }  else {
      return true;
    }
  }

  const clearHandler = () => {

    setEquation("");
    setRoot("");
    setTable([]);
    setResponse(false);
  };

  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      
   
    if (validation()) {
      let data = { lower: parseFloat(a), upper: parseFloat(b),n:parseFloat(n), func: equation.toLowerCase() };
      
      let res=await simpsonOneThirdRuleFunction(data)
      console.log(res.data);
      //setTable(res.data.table);
      setRoot(res.data.root);
      setShowTable(true);

    } } catch (error) {
    
        //  console.log(err.response);
      
        if (err.response.status === 400) {
         toast.error(err.response.data);
        } else {
          toast.error("Something went wrong");
        }
       
        //sn /a/b/f(m)/ f(m)*f(a)/ root
      }
    }
  return (
    <div>
      <Navbar />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{textAlign:"center"}}>
            <label className='text-info bg-light p-2'>Note: Unfilled Values will be Treated as 0</label>
            <div style={{maxHeight:'400px'}} className="table-responsive border">
              <table  className="table  text-md-nowrap  text-center mg-b-0">
                <tbody>
                  {matrix.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th className="m-0 p-0 matrix-head">
                        X{index + 1}
                        </th>
                        {item.map((i, ind) => {
                          return (
                            <td className="m-0 p-0">
                              <input
                                placeholder={`${index}${ind}`}
                                className="table-input"
                                onChange={(e) => handleChange(index, ind, e)}
                              />
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}{" "}
                </tbody>
              </table>
              <div className="text-center mt-4"></div>
            </div>
          <button onClick={submitHandler} type="submit" className="cta-btn cta-small">
                    Done
                  </button>
          </div>
        </Fade>
      </Modal>
      <div className="container  method-container">
        {/* Highlight SVG Background */}
        <div className="row calulator-div ">
          <div className="col-md-12 m-auto method-div">
            <h1 className="mb-3 header-text ">
              {/* <strong>Grow your Linkedin Profile with us.</strong> */}
              <strong>simpson Third Rule Function</strong>

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
                    label="Lower Limit"
                    variant="filled"
                    type="number"
                      onChange={(e) => {
                        setA(e.target.value);
                      }}
                  
                      name="example-text-input"
                     // placeholder="No of Equations(n)"
                    />
                    
                     
                     
                 
                 
                  </div>
                  <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="Upper Limit"
                    variant="filled"
                    type="number"
                      onChange={(e) => {
                        setB(e.target.value);
                      
                      }}
                  
                      name="example-text-input"
                     // placeholder="No of Equations(n)"
                    />
                    
                     
                     
                 
                 
                  </div>
                  <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="No. of sub-intervals:                    "
                    variant="filled"
                    type="number"
                      onChange={(e) => {
                        setN(e.target.value);
                      }}
                  
                      name="example-text-input"
                     // placeholder="No of Equations(n)"
                    />
                    
                     
                     
                 
                 
                  </div>
                  <div className="form-group col-12 m-auto">
                  <TextField
                    id="standard-basic"
                    label="No of Equations(n)"
                    variant="filled"
                    type="number"
                      onChange={(e) => {
                        setEquation(e.target.value);
                        
                      }}
                  
                      name="example-text-input"
                     // placeholder="No of Equations(n)"
                    />
                    
                     
                     
                 
                 
                  </div>
               
                  <div className="form-group mt-2 col-12 ">
                  <button
                      className="cta-btn"
                      onClick={() =>  submitHandler()} >
                      Submit
                    </button>
                    </div>
                    <div className="col-md-12 table-div">
              <div className="card">
              {showTable &&
                <div className="card-body">
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
                </div>
                    }
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
                        Trapezoidal Difference Method : The Trapezoidal Difference Method is used to find the
                        roots of a polynomial equation. It separates the
                        interval and subdivides the interval in which the root
                        of the equation lies. The principle behind this method
                        is the intermediate theorem for continuous functions. It
                        works by narrowing the gap between the positive and
                        negative intervals until it closes in on the correct
                        answer. The Trapezoidal Difference Method is also known as interval
                        halving method, root-finding method, binary search
                        method or dichotomy method.  </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
