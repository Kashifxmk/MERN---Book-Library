import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error creating book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-4 min-h-screen bg-gray-50 dark:bg-gray-800">
      <BackButton />
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white my-6">
        Create New Book
      </h1>
      {loading && (
        <div className="flex justify-center items-center mb-4">
          <Spinner />
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full max-w-lg p-6 mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Enter the book title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Enter the author's name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Enter the publish year"
          />
        </div>
        <button
          onClick={handleSaveBook}
          className="w-full bg-sky-500 text-white font-medium text-lg py-2 rounded-lg hover:bg-sky-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700"
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
