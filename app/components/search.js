import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
    return (
        <div className='flex justify-between items-center gap-2'>
        <div className="flex-1 flex items-center justify-between p-2 h-[40px] bg-white rounded-lg">
          <FontAwesomeIcon icon={faSearch} className='text-blue-500 p-2 rounded-lg'/>
          <input type="search" placeholder="Search" className="border-none outline-none text-sm text-gray-600 p-2" />
        </div>
        {/* filter */}
        <div className='shrink-0 p-2 h-[40px] text-blue-500 bg-white hover:bg-blue-500 hover:text-white rounded-lg'>
          <FontAwesomeIcon icon={faFilter} />
        </div>
      </div>
    )
}