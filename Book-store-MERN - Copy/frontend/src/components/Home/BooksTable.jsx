import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-800">
        <thead className="bg-sky-600 text-white dark:bg-sky-900">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">#</th>
            <th className="py-3 px-4 text-left font-semibold">Title</th>
            <th className="py-3 px-4 text-left font-semibold hidden md:table-cell">Author</th>
            <th className="py-3 px-4 text-left font-semibold hidden md:table-cell">Year</th>
            <th className="py-3 px-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={`border-t border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 transition`}
            >
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{book.title}</td>
              <td className="py-3 px-4 hidden md:table-cell">{book.author}</td>
              <td className="py-3 px-4 hidden md:table-cell">{book.publishYear}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex justify-center items-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-green-600 text-xl hover:text-green-800 dark:text-green-400 dark:hover:text-green-500 transition" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-yellow-600 text-xl hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-500 transition" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-red-600 text-xl hover:text-red-800 dark:text-red-400 dark:hover:text-red-500 transition" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
