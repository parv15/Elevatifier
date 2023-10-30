
import '../Styles/SearchFilter.css';
import { SearchOutlined } from '@ant-design/icons';

function SearchFilter({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by keyword"
      />
      <div className='search'>
      <SearchOutlined />
      </div>
    </div>
  );
}

export default SearchFilter;
