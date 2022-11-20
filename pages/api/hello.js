// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function getRoots(req,res){
  res.status(200).json({ name: [{
    title: "Root Finding Methods",
    content:[{
      title:"Bisection Method",link:"/bisection"},{
      title:"False Position Method",link:"/falseposition"},{
      title:"One-Point Iteration Method",link:"/onepoint"},{
      title:"Newton-Raphson Method",link:"/newtonraphson"},{
      title:"Secant Method",link:"/secant"}]
  },{
    title: "System of Linear Equation",
    content:[{
      title:"Gauss Elimination Method",link:"/gausselimination"},{
      title:"Gauss-Jordan Elimination Method",link:"/gaussjordan"},{
      title:"Jacobi Iteration Method",link:"/jacobi"},{
      title:"Gauss-Seidel Iteration Method",link:"/gaussseidel"}]
  },{
    title: "Interpolation ",
    content:[{
      title:"Newton Forword Difference",link:"/linear"},{
      title:"Newton Backward Difference",link:"/polynomial"},{
      title:"Newton's Divided Difference",link:"/newton"},{
      title:"Lagrange Interpolation",link:"/lagrange"},{
      title:"onverse Interpolation",link:"/spline"}]
  },{
    title: "Difference Table",
content:[{
    title:"Forward Difference Table",link:"/lu"},{
    title:"Divided Differnece Table",link:"/cholesky"}
]
  },{
    title: "Numerical Intergration",
    content:[{
      title:" Trapezoidal Rule",link:"/composite"},{
      title:"  Trapezoidal function",link:"/simpson"},{
      title:" Simpson's (1/3)rd Rule (Tabular)",link:"/composite"},{
        title:" Simpson's (1/3)rd Rule (Funtions)",link:"/composite"},{
      title:"Composite Simpson's 3/8 Rule",link:"/composite"},
      {
        title:"Composite Simpson's 3/8 Rule Functions",link:"/composite"},
        {
          title:"Gaussian_Quadrature",link:"/composite"}
      
    
    ]
  },{
    title: "Differential Equation",
    content:[{
      title:" Euler's Method",link:"/euler"},{
      title:" Modified Euler's Method",link:"/modifiedeuler"},{
      title:" Runge-Kutta 4th Order Method",link:"/rungekutta"},{
      title:" Runge-Kutta 2nd Order Method",link:"/rungekutta"}]}] })
}