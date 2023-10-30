import { useState, useEffect } from 'react';
import './App.css';
import NewsList from './Components/NewsList';
import CategoryFilter from './Components/CategoryFilter';
import SearchFilter from './Components/SearchFilter';
import { Drawer} from "@mui/material";
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

function MainPage() {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openNav, setOpenNav] = useState(false);
  const articlePage = 3;

  useEffect(() => {
    fetch('https://linesnews.onrender.com/api/news-datas')
      .then((response) => response.json())
      .then((data) => setNewsData(data.data));
  }, []);



  return (
    <div className="App">
      <header>
        <h1>Elevatifier</h1>
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MenuOutlined className='menuIcon' onClick={()=>setOpenNav(!openNav)} />
        <Drawer anchor="right" className='sideBar' open={openNav} onClose={()=>setOpenNav(false)}>
          <div className='CloseNav'>
  
          <CloseOutlined className='close' onClick={()=>setOpenNav(false)} />
       
          <h2>Search</h2>
          </div>
        
          <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
          <h2>Categories</h2>
          <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onClick={()=>alert(false)}
        />
          </Drawer>
      </header>
     
        

      <main>
        <NewsList newsData={newsData} selectedCategory={selectedCategory} searchQuery={searchQuery} articlePage={articlePage} />
      </main>
    </div>
  );
}

export default MainPage;
