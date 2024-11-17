import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/Home/BooksTable';
import BooksCard from '../components/Home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTypes, setShowTypes] = useState('table');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedMode === 'true');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBooks(res.data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} p-6`}>
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition duration-200"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center items-center gap-x-6 mb-6">
        <button
          className={`px-6 py-3 rounded-xl transition-all duration-200 ease-in-out ${
            showTypes === 'table'
              ? 'bg-sky-600 text-white shadow-lg'
              : 'bg-sky-300 hover:bg-sky-600 hover:text-white'
          }`}
          onClick={() => setShowTypes('table')}
        >
          Table View
        </button>
        <button
          className={`px-6 py-3 rounded-xl transition-all duration-200 ease-in-out ${
            showTypes === 'card'
              ? 'bg-sky-600 text-white shadow-lg'
              : 'bg-sky-300 hover:bg-sky-600 hover:text-white'
          }`}
          onClick={() => setShowTypes('card')}
        >
          Card View
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold">Books List</h1>
        <Link to="/books/create" className="hover:scale-110 transition-transform">
          <MdOutlineAddBox className="text-sky-800 text-5xl hover:text-sky-600" />
        </Link>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : books.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No books available.</p>
      ) : showTypes === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
