import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error deleting book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-800">
      <BackButton />
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white my-6">
        Delete Book
      </h1>
      {loading && (
        <div className="flex justify-center items-center mb-6">
          <Spinner />
        </div>
      )}
      <div className="bg-white shadow-xl rounded-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full max-w-lg p-6 mx-auto text-center">
        <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          Are you sure you want to delete this book?
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDeleteBook}
            className="w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800"
          >
            Yes, Delete it
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
