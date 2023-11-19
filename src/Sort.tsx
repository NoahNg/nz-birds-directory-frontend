import React, { useState } from 'react'
import { Col, Stack, Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// TODO: Make dynamic
function Sort() {
  const [sortCriteria, setSortCriteria] = useState('A - Z')
  const [tile, setTile] = useState('large')

  return (
    <Col xs={12} sm={6} lg={4} className='d-flex justify-content-end'>
      <Stack direction='horizontal' gap={3}>
        <button
          data-testid='largeTile'
          className={`tile-button ${tile === 'large' ? 'active' : ''}`}
          onClick={() => {
            setTile('large')
          }}
        >
          <i className='bi bi-grid icon'></i>
        </button>
        <button
          data-testid='smallTile'
          className={`tile-button ${tile === 'small' ? 'active' : ''}`}
          onClick={() => {
            setTile('small')
          }}
        >
          <i className='bi bi-grid-3x3-gap icon'></i>
        </button>

        {/* Sort A - Z Button */}
        <DropdownButton
          variant='light'
          id='dropdown-basic-button'
          title={'SORT ' + sortCriteria}
          data-testid='sortButton'
        >
          <Dropdown.Item
            onClick={() => {
              setSortCriteria('A - Z')
            }}
            className={sortCriteria === 'A - Z' ? 'active' : undefined}
            data-testid='sortAZ'
          >
            SORT A - Z
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSortCriteria('Z - A')
            }}
            className={sortCriteria === 'Z - A' ? 'active' : undefined}
            data-testid='sortZA'
          >
            SORT Z - A
          </Dropdown.Item>
        </DropdownButton>
      </Stack>
    </Col>
  )
}

export default Sort
