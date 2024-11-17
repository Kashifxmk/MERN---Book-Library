import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div>
      {/* Show only the SignInButton when the user is not signed in */}
      <SignedOut>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="p-8 bg-white rounded-lg shadow-xl text-center transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Welcome to Book Library</h1>
          <p className="mb-4 text-gray-600">Sign in to access your personalized library and manage your books.</p>
          <SignInButton>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:shadow-lg">
              Sign In
            </button>
          </SignInButton>
        </div>
      </div>

      </SignedOut>

      {/* Show header and routes when the user is signed in */}
      <SignedIn>
        <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Book Library</h1>
          <UserButton />
        </header>

        {/* Routes for the application */}
        <Routes>
          {/* Protected routes */}
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
          
          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SignedIn>
    </div>
  );
};

export default App;
