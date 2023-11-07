import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// TODO: Make dynamic
function Filters() {
  return (
    <div className='filters'>
      <h3>HABITAT</h3>
      <button className='filter-button'>
        <FontAwesomeIcon icon={icon({ name: 'tree' })} className='icon' />
        <p>Forest and Mountain</p>
      </button>
      <button className='filter-button'>
        <FontAwesomeIcon icon={icon({ name: 'ship' })} className='icon' />
        <p>Sea and Shore</p>
      </button>
      <button className='filter-button'>
        <FontAwesomeIcon icon={icon({ name: 'water' })} className='icon' />
        <p>Wetland and River</p>
      </button>
      <br />
      <h3>TYPE</h3>
      <button className='filter-button'>
        <FontAwesomeIcon icon={icon({ name: 'kiwi-bird' })} className='icon' />
        <p>Native</p>
      </button>
      <button className='filter-button'>
        <FontAwesomeIcon icon={icon({ name: 'crow' })} className='icon' />
        <p>Introduced</p>
      </button>
    </div>
  )
}

export default Filters
