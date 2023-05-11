import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'
const Buttons = (props) => {
  return (
    <div>
      <Row className='d-flex justify-content-between'>
              <Col >
              <Button onClick={props.delete} className='buttn mt-2'>مسح الكل</Button>
              </Col>
              <Col className='second'>
              <Button className='buttn mt-2' onClick={props.setdata}>عرض البيانات</Button>
              </Col>
            </Row>
    </div>
  )
}

export default Buttons
