// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function getRoots(req,res){
  res.status(200).json({ name: [{
    title: "Root Finding Methods",
    content:[{
      title:"Bisection Method",link:"/method/bisection"},{
      title:"False Position Method",link:"/method/falseposition"},{
      title:"One-Point Iteration Method",link:"/method/onepoint"},{
      title:"Newton-Raphson Method",link:"/method/newtonraphson"},{
      title:"Secant Method",link:"/method/secant"}]
  },{
    title: "System of Linear Equation",
    content:[{
      title:"Gauss Elimination Method",link:"/method/gausselimination"},{
      title:"Gauss-Jordan Elimination Method",link:"/method/gaussjordan"},{
      title:"Jacobi Iteration Method",link:"/method/jacobi"},{
      title:"Gauss-Seidel Iteration Method",link:"/method/gaussseidel"}]
  },{
    title: "Interpolation ",
    content:[{
      title:"Newton Forword Difference",link:"/method/linear"},{
      title:"Newton Backward Difference",link:"/method/polynomial"},{
      title:"Newton's Divided Difference",link:"/method/newton"},{
      title:"Lagrange Interpolation",link:"/method/lagrange"},{
      title:"onverse Interpolation",link:"/method/spline"}]
  },{
    title: "Difference Table",
content:[{
    title:"Forward Difference Table",link:"/method/lu"},{
    title:"Divided Differnece Table",link:"/method/cholesky"}
]
  },{
    title: "Numerical Intergration",
    content:[{
      title:" Trapezoidal Rule",link:"/method/composite"},{
      title:"  Trapezoidal function",link:"/method/simpson"},{
      title:" Simpson's (1/3)rd Rule (Tabular)",link:"/method/composite"},{
        title:" Simpson's (1/3)rd Rule (Funtions)",link:"/method/composite"},{
      title:"Composite Simpson's 3/8 Rule",link:"/method/composite"},
      {
        title:"Composite Simpson's 3/8 Rule Functions",link:"/method/composite"},
        {
          title:"Gaussian_Quadrature",link:"/method/composite"}
      
    
    ]
  },{
    title: "Differential Equation",
    content:[{
      title:" Euler's Method",link:"/method/euler"},{
      title:" Modified Euler's Method",link:"/method/modifiedeuler"},{
      title:" Runge-Kutta 4th Order Method",link:"/method/rungekutta"},{
      title:" Runge-Kutta 2nd Order Method",link:"/method/rungekutta"}]}] })
}