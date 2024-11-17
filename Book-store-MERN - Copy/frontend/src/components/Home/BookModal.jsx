import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[90%] max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 relative overflow-hidden animate-fade-in"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600 cursor-pointer dark:text-gray-400 dark:hover:text-red-500"
          onClick={onClose}
        />

        {/* Header */}
        <div className="flex items-center gap-x-2 mb-4">
          <PiBookOpenTextLight className="text-red-500 text-3xl dark:text-red-400" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{book.title}</h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ID: {book._id}</p>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-x-2">
            <BiUserCircle className="text-blue-500 text-xl dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">Author: {book.author}</span>
          </div>
          <div className="px-3 py-1 inline-block bg-red-300 text-white text-sm rounded-lg dark:bg-red-500">
            Published Year: {book.publishYear}
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Description:
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
            voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
            necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
            nesciunt cupiditate voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
