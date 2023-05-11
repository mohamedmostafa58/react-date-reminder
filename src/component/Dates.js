import React from 'react'
import {Row, Col} from 'react-bootstrap'
const Dates = ({length}) => {
  return (
    <div>
      <Row>
              <Col className='m-2'>لديك {length} مواعيد اليوم</Col>
            </Row>
    </div>
  )
}

export default Dates
