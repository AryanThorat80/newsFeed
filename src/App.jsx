import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import News from './components/news.jsx'

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    api(search);
  };

  const api = async(searchTerm='')=>{
    let responce = await fetch(`https://newsapi.org/v2/everything?apiKey=2c2f94f6da604e8795a2c90e3a0e6765&q=${searchTerm}`);
    let result = await responce.json();
    console.log(result)
    setNews(result.articles);
  }

  useEffect(()=>{
    api('india');
  },[])

  return (
    <>
    <div className="flex items-center justify-center">
            <div className="flex space-x-1">
                <>
                <h2 className></h2>
                </>
                
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button className="px-4 text-white bg-purple-600 rounded-full " onClick={handleSearch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    <div className="grid gap-2 lg:grid-cols-4">
                {news.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" onClick={()=>{<News/>}}>
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default App
