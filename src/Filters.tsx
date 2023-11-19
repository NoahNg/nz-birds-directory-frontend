import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Stack, Row } from 'react-bootstrap'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Filters() {
  const habitats = [
    { icon: icon({ name: 'tree' }), label: 'Forest and Mountain', count: 10 },
    { icon: icon({ name: 'ship' }), label: 'Sea and Shore', count: 10 },
    { icon: icon({ name: 'water' }), label: 'Wetland and River', count: 10 },
  ]

  const types = [
    { icon: icon({ name: 'kiwi-bird' }), label: 'Native', count: 10 },
    { icon: icon({ name: 'crow' }), label: 'Introduced', count: 10 },
  ]

  return (
    <Col className='p-4 align-items-center' xs={3}>
      <Row className='mt-2 mb-2 text-start'>
        <p style={{ fontSize: 14, fontWeight: 500 }} className='m-0'>
          HABITAT
        </p>
      </Row>
      <Row>
        <Stack direction='vertical' gap={3} className='mt-4 mb-4'>
          {habitats.map((category, index) => {
            return (
              <button
                key={index}
                type='button'
                className='btn btn-outline-success d-flex justify-content-start align-items-center w-75 border-0'
              >
                <Col className='col-2 text-start'>
                  <FontAwesomeIcon icon={category.icon} className='me-2' />
                </Col>
                <span className='flex-grow-1 text-start'>{category.label}</span>
                {category.count}
              </button>
            )
          })}
        </Stack>
      </Row>

      <Row className='mt-2 mb-2 text-start'>
        <p style={{ fontSize: 14, fontWeight: 500 }} className='m-0'>
          TYPE
        </p>
      </Row>
      <Row>
        <Stack direction='vertical' gap={3} className='mt-4 mb-4'>
          {types.map((category, index) => {
            return (
              <button
                key={index}
                type='button'
                className='btn btn-outline-success d-flex justify-content-start align-items-center w-75 border-0'
              >
                <Col className='col-2 text-start'>
                  <FontAwesomeIcon icon={category.icon} className='me-2' />
                </Col>
                <span className='flex-grow-1 text-start'>{category.label}</span>
                {category.count}
              </button>
            )
          })}
        </Stack>
      </Row>
    </Col>
  )
}

export default Filters
