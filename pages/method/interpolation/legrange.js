import { toast } from "react-toastify";

import { Navbar } from "../../../component/Navbar";

import Footer from "../../../component/Footer";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { TextField } from "@material-ui/core";
import { LegrangeInterpolation } from "../../../utils/api";

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
        let data = {
          n: parseFloat(n),
          equations: matrix,
        };
        let res = await LegrangeInterpolation(data);
        if(res.error){     toast.error(res?.data?.response?.data)}
        else{
  
        setTable(res.data.table);
        setRoot(res.data.root);
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
              <strong>Legrange Interpolation</strong>
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
                    label="No of Equations(n)"
                    variant="filled"
                    type="number"
                    onChange={(e) => {
                      setN(e.target.value);
                      setN2(e.target.value + 1);
                    }}
                    name="example-text-input"
                    // placeholder="No of Equations(n)"
                  />
                </div>
                <div className="form-group col-6 m-auto">
                  <TextField
                    id="standard-basic"
                    label="Value of B"
                    variant="filled"
                    type="number"
                    onChange={(e) => {
                      setB(e.target.value);
                    }}
                    name="example-text-input"
                    // placeholder="No of Equations(n)"
                  />
                </div>
                <div className="form-group mt-2 col-12 ">
                  <button className="cta-btn" onClick={() => submitHandler()}>
                    Create
                  </button>
                </div>
                <div className="col-md-12 table-div">
                  <div className="card">
                    {showTable && (
                      <div className="card-body">
                        <div className=" bg-light  border ">
                          <strong>Integral : {root}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 img-div ">
              <p style={{ wordSpacing: "1px" }}>
                {" "}
                The Lagrange interpolation formula states,
                <br />
                <img
                  src="../../assets/Legrange Interpolation.png"
                  alt="First slide"
                  className="mw-100 m-3"
                />
                <br />
                This method is preferred over its counterparts like Newton’s
                method because it is applicable even for unequally spaced values
                of x.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
