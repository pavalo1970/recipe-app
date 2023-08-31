import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Input } from '@chakra-ui/react';
import RecipeListPage from './components/pages/RecipeListPage';
import RecipePage from './components/pages/RecipePage';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {  data  } from './utils/data';

// App component definition
export const App = () => {
// State for selected recipe and search query
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle selecting a recipe
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle going back from recipe details
  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      <Router>
        {/* Main app container */}  
        <Box p={4} bg="gray.100" minH="100vh">
          <Navbar />
          {/* Container for content */}
          <Box maxW="800px" mx="auto">
            {/* Search input */}
            <Input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              mb={4}
            />
            <Routes>
            {/* Route for displaying recipe details or list */}
              <Route
                path="/"
                element={
                  selectedRecipe ? (
                    <RecipePage selectedRecipe={selectedRecipe} onBackClick={handleBackClick} />
                  ) : (
                    <RecipeListPage
                      onRecipeSelect={handleRecipeSelect}
                      searchQuery={searchQuery}
                      data={data.hits}
                    />
                  )
                }
              />
            </Routes>
          </Box>
          <Settings />
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
};


