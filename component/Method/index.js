import Link from "next/link";
import { Accordion } from "react-bootstrap";

export const MethodAcc = ({content,index}) => {
  
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-5">
 
        <Accordion >
       <Accordion.Item eventKey={index}>
       <Accordion.Header>{content.title}</Accordion.Header>
       <Accordion.Body>
      {content.content.map((item,index)=>{
        return(
            <div key={index} className="mt-4">

          <Link href={item.link} key={index}>
            <a className="cta-btn-a  ">{item.title}</a>
            </Link>
            </div>
        )
        })}
       </Accordion.Body>
       </Accordion.Item>
       </Accordion>
       
       
       
            </div>
    );
    }