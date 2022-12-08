import { toast } from "react-toastify";
import { Navbar } from "../../../component/Navbar";

import Footer from "../../../component/Footer";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { TextField } from "@material-ui/core";
import { forwardDifferenceTable } from "../../../utils/api";
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
  const handleChange = ( i, event) => {
    let value = [...matrix];
    value[i] = parseFloat(event.target.value);
    setMatrix(value);
    //console.log(values);
  };
  const createMatrix = () => {
    let ele = [];
    let copy = [];
    // setMatrix(ele)
    for (let index = 0; index < n; index++) {
        copy[index] = 0;
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
        let data = {
          n: parseFloat(n),
          array: matrix,
        };
        let res = await forwardDifferenceTable(data);
        if (res.error) {
          if (res?.data?.response?.status === 500) {
            toast.error("Something went wrong");
          } else {
            toast.error(res?.data?.response?.data);
          }
        } else {
          setTable(res.data);
          setShowTable(true);
          setResponse(true);
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
          <div className={classes.paper} style={{ textAlign: "center" }}>
            <label className="text-info bg-light p-2">
              Note: Unfilled Values will be Treated as 0
            </label>
            <div
              style={{ maxHeight: "400px" }}
              className="table-responsive border"
            >
              <table className="table  text-md-nowrap  text-center mg-b-0">
                <tbody>
                  <tr>
                    {matrix.map((i, ind) => {
                      return (
                        <td key={ind} className="m-0 p-0">
                          <input
                            placeholder={`${ind}`}
                            className="table-input"
                            onChange={(e) => handleChange(ind, e)}
                          />
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
              <div className="text-center mt-4"></div>
            </div>
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-primary"
            >
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
              <strong>Forward Difference Table</strong>
            </h1>
          </div>

          <div className="row ">
            <div className="col-md-7  ">
              <div className="row">
                <h5>
                  <strong>Equation</strong>
                </h5>
                <div className="form-group col-8 m-auto">
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
                <div className="form-group col-4 m-auto">
                  <button
                    className="cta-btn"
                    onClick={() => {
                      createMatrix();
                      handleOpen();
                    }}
                  >
                    Calculate{" "}
                  </button>
                </div>
                <div className="col-md-12 table-div">
                  <div className="card">
                    {showTable && (
                      <div className="card-body">
                        <div>
                          <h6 className="main-content-label mb-1">Answer</h6>
                        </div>
                        <div className="table-responsive bg-light  border ">
                          <table className="table  text-md-nowrap table-hover mg-b-0">
                            <thead>
                              <tr>
                                <th>Value</th>
                                <th>Answer</th>
                              </tr>
                            </thead>
                            <tbody>
                              {table &&
                                table.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <th scope="row">X{index + 1}</th>
                                      <td>{item}</td>
                                    </tr>
                                  );
                                })}{" "}
                            </tbody>
                          </table>
                        </div>
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
