import {toast} from 'react-toastify'
import { Navbar } from "../../component/Navbar";
import BarGraph from '../../component/Graph/BarGraph';
import LineGraph from '../../component/Graph/LineGraph';
import DoughGraph from '../../component/Graph/DoughGraph';
import Footer from "../../component/Footer";
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { BisectionMethod, EliminationMethod } from '../../utils/api';
import { TextField } from '@material-ui/core';
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

  const [showTable,setShowTable]=useState(false)
  const [equation, setEquation] = useState("");
  const [table, setTable] = useState([]);
  const [root, setRoot] = useState("");
  const [showGraph, setShowGraph] = useState(undefined);
  const [response, setResponse] = useState(false);
  const [n, setN] = useState(0);


  function validation() {
   if (!a) {
      //  console.log("no email");
  toast.error("Please enter the a");
      return false;

    }  
    else if(!b){
      toast.error("Please enter the b");
      return false;
    }
    else if(!equation){
      toast.error("Please enter the equation");
      return false;
    }
    else {
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

  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      
   
    if (validation()) {
      let data = { a: parseFloat(a), b: parseFloat(b), equation: equation.toLowerCase() };

      let res=await BisectionMethod(data)
     //console.log(res);
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
        setShowTable(true);
        setResponse(true)
      }

    } } catch (error) {
    
         console.log(error.response);
      
        if (error.response.status === 400) {
         toast.error(error.response.data);
        } else {
          toast.error("Something went wrong");
        }
       
        //sn /a/b/f(m)/ f(m)*f(a)/ root
      }
    }
  return (
    <div>
      <Navbar />
    
      <div className="container  method-container">
        {/* Highlight SVG Background */}
        <div className="row calulator-div ">
          <div className="col-md-12 m-auto method-div">
            <h1 className="mb-3 header-text ">
              {/* <strong>Grow your Linkedin Profile with us.</strong> */}
              <strong>Bisection Method</strong>
            </h1>
          </div>
          

          <div className="row ">
            <div className="col-md-7  ">
            <div className="row">
              <h5>
                <strong>Equation</strong>
              </h5>
                  <div className="form-group  col-6 ">
                  <TextField id="standard-basic" label="Value of A" variant="filled" 

                      onChange={(e) => setA(e.target.value)}
                      value={a}
                      name="example-text-input"
                      placeholder="Value of A"
                    />
                     
                 
                 
                  </div>
                  <div className="form-group  col-6 ">
                  <TextField id="standard-basic" label="Value of B" variant="filled" 
                      onChange={(e) => setB(e.target.value)}
                      value={b}
                      name="example-text-input"
                      placeholder="Value of B"
                    />
    
                  </div>
                  <div className="form-group mt-2 col-12 ">
                  <TextField id="standard-basic" label="Equation" variant="filled" 
                    onChange={(e) => setEquation(e.target.value)}
                    className="form-control"
                    name="example-text-input"
                    placeholder=" x^2+sin(x)+1"
                    value={equation}
                  />
                  </div>
                 
                    <div className="form-group mt-2 col-8 ">
                    <button
                      className="cta-btn"
                      onClick={
                     submitHandler
                      }
                    >
                     Calculate                      </button>
                    </div>
                    <div className="col-md-12 table-div">
              <div className="card">
              {showTable && <>
         
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-1">Answer</h6>
                  </div>
    <div className="table-responsive">
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
                <div className='text-center'>

<button onClick={()=>setShowGraph("Line")} className="cta-btn cta-small m-3">
    Line
  </button><button onClick={()=>setShowGraph("Bar")}  className="cta-btn cta-small m-3">
    Bar
  </button><button onClick={()=>setShowGraph("Dough")} className="cta-btn cta-small m-3">
    Doughnut
  </button>
 

{showGraph&&response?
  <div >
    {showGraph==='Bar'?
    <BarGraph graphData={table}/>:
    showGraph==='Line'?
    <LineGraph graphData={table}/>: 
    <DoughGraph graphData={table}/>
  }
  </div>:null}
</div>
                </>
                    }
  </div>
            </div>
                </div>
              
            </div>
            <div className="col-md-5 img-div ">
              <img
                src="../assets/bisection.jpg"
                alt="Fluxo Social Media Marketing Template"
                className="mw-100"
              />

<p style={{ wordSpacing: "1px" }}>
                        Bisection Method : The bisection method is used to find
                        the roots of a polynomial equation. It separates the
                        interval and subdivides the interval in which the root
                        of the equation lies. The principle behind this method
                        is the intermediate theorem for continuous functions. It
                        works by narrowing the gap between the positive and
                        negative intervals until it closes in on the correct
                        answer. The bisection method is also known as interval
                        halving method, root-finding method, binary search
                        method or dichotomy method.<strong>
                          {" "} 
                        <br /> Algorithm  :<br />
                          </strong> {" "}
                            For any
                        continuous function f(x),
                        <ul>
                          <li>
                            Find two points, say a and b such that a {"<"} b and
                            f(a)* f(b) {"<"} 0 and initialize error
                            e (depends upto what accuracy you want the result)
                          </li>
                          <li>Find the midpoint of a and b, say “m”</li>
                          <li>
                            m is the root of the given function if f(m) = 0;
                            else follow the next step
                          </li>
                          <li>Divide the interval [a, b]</li>
                          <li>If f(a)*f(m) {">"} 0 then a = m</li>
                          else b = m
                          <li>Repeat above steps until |f(m)| {"<"} e.</li>
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
