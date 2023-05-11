import React from 'react'
import {Row,Col} from 'react-bootstrap'
const Reactangle = ({data}) => {
  return (
    <div>
      <Row className='rec'>
            <Col>
            {data.length ?(data.map((item=>{
              return  <div className='alarm p-3 d-flex align-items-center gap-1 border-bottom'>
              <div className='img-container'>
                <img src="person.jpg" className="rounded" alt='person'/>
              </div>
              <div className='text'>
                <p>{item.name}</p>
                <p>{item.data}</p>
              </div>
            </div>
            }))):(<h1>there is no data</h1>)}
           
            </Col>
          </Row>
    </div>
  )
}

export default Reactangle
