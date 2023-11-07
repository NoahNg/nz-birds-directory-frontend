import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// TODO: Make dynamic
function Sort() {
  const [sortCriteria, setSortCriteria] = useState('A - Z')
  const [tile, setTile] = useState('large')

  return (
    <div className='sort-right'>
      <button
        data-testid='largeTile'
        className={`tile-button ${tile === 'large' ? 'active' : ''}`}
        onClick={() => {
          setTile('large')
        }}
      >
        <FontAwesomeIcon icon={icon({ name: 'table-cells-large' })} className='icon' />
      </button>
      <button
        data-testid='smallTile'
        className={`tile-button ${tile === 'small' ? 'active' : ''}`}
        onClick={() => {
          setTile('small')
        }}
      >
        <FontAwesomeIcon icon={icon({ name: 'table-cells' })} className='icon' />
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
    </div>
  )
}

export default Sort
