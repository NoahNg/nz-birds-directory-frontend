import React from 'react'
import './App.css'
import Filters from './Filters'
import { Row, Col, Container, Button, Stack, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Sort from './Sort'

function App() {
  return (
    <Container fluid className='App' data-testid='app'>
      <div className='overlay' data-testid='overlay'>
        {/* Header Section */}
        <Container fluid>
          <Row
            className='p-4 d-flex flex-fill justify-content-center align-items-center'
            style={{ marginRight: 0 }}
          >
            <Col xs={12} sm={6} lg={4} className='mx-auto d-flex justify-content-center'>
              <Stack direction='horizontal' gap={3}>
                <img
                  src='/Assets/Icons/Kiwi Silhouette.png'
                  alt='Icon'
                  className='icon'
                  style={{
                    width: '48px',
                    height: 'auto',
                    transform: 'scaleX(-1)',
                  }}
                />
                <h4 className='mb-0 font-weight-bold text-white'>New Zealand Birds Directory</h4>
              </Stack>
            </Col>
          </Row>
          <Row
            className='pb-4 d-flex flex-fill justify-content-center align-items-center'
            style={{ marginRight: 0 }}
          >
            <Col xs={12} sm={6} lg={4} className='mx-auto'>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={icon({ name: 'magnifying-glass' })} />
                </InputGroup.Text>
                <FormControl placeholder='Search' />
              </InputGroup>
            </Col>
          </Row>
        </Container>

        {/* Body Section */}
        <Container fluid className='d-flex align-items-start body' data-testid='body'>
          <Filters />

          {/* Action Section */}
          <Row
            className='p-4 d-flex flex-fill justify-content-between align-items-center'
            style={{ marginRight: 0 }}
          >
            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-start '>
              <Stack direction='horizontal' gap={3}>
                <h5 className='p-2 mb-0'>50 Birds</h5>
                <Button variant='light' className='p-2 rounded-pill '>
                  RESET
                </Button>
              </Stack>
            </Col>
            <Sort />
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default App
