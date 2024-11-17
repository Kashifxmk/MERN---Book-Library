import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <BackButton />
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">Book Details</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700 max-w-3xl mx-auto p-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">ID:</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">{book._id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">Title:</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">{book.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">Author:</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">{book.author}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">Publish Year:</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">{book.publishYear}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">Create Time:</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                {new Date(book.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">Last Update Time:</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                {new Date(book.updatedAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
