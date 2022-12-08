import axios from "axios";
const baseurl='http://100.24.3.226:8000'
export const SeidalMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Gauss-Seidal-Method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const EliminationMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Gauss-Elimination-Method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const JordanMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Gauss-Jordan-Method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const JacobiMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Gauss-Jacobi-Method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const BisectionMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Bisection-method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const regulaFalsiMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/regula-falsi-method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const secantMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/secant-Method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const NewtonsMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/newton-method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const fixediterationMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/fixed-iteration-method`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const forwardDifferenceTable=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Forward_Difference_Table`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const dividedDifferenceTable=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Divided_Difference_Table`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const NFDIF=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/NFDIF`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const NDDIF=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/NDDIF`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const NBDIF=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/NBDIF`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const inverseInterpolation=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Inverse-Interpolation`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const LegrangeInterpolation=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Legrange-Interpolation`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}

export const EulerMethodSimple=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Euler-Method-Simple`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const EulerMethodModified=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Euler-Method-Modified`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const Gaussian_Quadrature=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Gaussian-Quadrature`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const TrapezoidalRule=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Trapezoidal-rule-table`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const TrapezoidalFunction=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Trapezoidal-rule-function`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const SimpsonRule=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/simpsonOneThird-rule-table`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const simpsonOneThirdRuleFunction=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/simpsonOneThird-rule-function`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const SimpsonThirdRule=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/simpson3_8-rule-table`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const simpsonThirdRuleFunction=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/simpson3_8-rule-function`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const rungaKutaMethod=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Runge-Kutta-2nd-Order`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}
export const rungaKutaMethod3=async(data)=>{
    try {
        let res=  await axios
        .post(`${baseurl}/Runge-Kutta-4rd-Order`, data) 
        return res
    } catch (error) {
        return {error:true,data:error}
    }
}