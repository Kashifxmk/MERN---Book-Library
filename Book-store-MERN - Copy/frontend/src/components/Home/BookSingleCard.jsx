import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 dark:bg-gray-800">
      {/* Header Section */}
      <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 flex justify-between items-center">
        <h4 className="text-sm text-gray-500 dark:text-gray-400 truncate">{book._id}</h4>
        <h2 className="px-3 py-1 bg-red-300 text-white text-xs font-semibold rounded-lg">
          {book.publishYear || 'N/A'}
        </h2>
      </div>

      {/* Body Section */}
      <div className="p-4">
        <div className="flex items-center gap-x-2 mb-2">
          <PiBookOpenTextLight className="text-red-500 text-lg" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{book.title}</h2>
        </div>
        <div className="flex items-center gap-x-2">
          <BiUserCircle className="text-blue-500 text-lg" />
          <h2 className="text-sm text-gray-700 dark:text-gray-300">{book.author || 'Unknown Author'}</h2>
        </div>
      </div>

      {/* Action Section */}
      <div className="flex justify-between items-center p-3 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
        <BiShow
          className="text-xl text-blue-600 hover:text-blue-800 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-xl text-green-600 hover:text-green-800" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-xl text-yellow-600 hover:text-yellow-800" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-xl text-red-600 hover:text-red-800" />
        </Link>
      </div>

      {/* Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
