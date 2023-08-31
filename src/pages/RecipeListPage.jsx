import React, { useState } from 'react';
import { Center, Heading, List, ListItem, Image, Button, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import data from './utils/data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Settings from './components/pages/Settings';

// RecipeListPage component definition
export const RecipeListPage = ({ onRecipeSelect, searchQuery }) => {
// State to manage the selected recipe  
  const [selectedRecipe, setSelectedRecipe] = useState(null);
 
// Function to handle recipe click
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    onRecipeSelect(recipe);
  };
 
// Filter the data based on search query
  const filteredHits = data.filter((hit) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const labelMatch = hit.recipe.label.toLowerCase().includes(lowerCaseQuery);
    const healthLabelMatch = hit.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(lowerCaseQuery)
    );
    return labelMatch || healthLabelMatch;
  });
 
  return (
    <Center py={8}>
      <Box w="100%" maxW="800px">
      {/* Navbar component */}  
        <Navbar />
      {/* Heading for the recipe app */}
        <Heading>Your Recipe App</Heading>
      {/* Conditionally render based on whether a recipe is selected */}
        {selectedRecipe ? (
          <Button onClick={() => setSelectedRecipe(null)}>Back to Recipes</Button>
        ) : (
          <List>
        {/* Iterate through filtered recipes */}
            {filteredHits.map((hit) => (
              <ListItem
                key={hit.recipe.label}
                onClick={() => handleRecipeClick(hit.recipe)}
                cursor="pointer"
                mb={4}
                display="flex"
                alignItems="center"
              >
                {/* Display recipe image */}
               <Image src={hit.recipe.image} alt={hit.recipe.label} boxSize="50px" mr={4} />
              <Box>
                {/* Display recipe label */}
                <Heading size="sm">{hit.recipe.label}</Heading>
                {/* Display diet labels */}
                {hit.recipe.dietLabels.length > 0 && (
                  <Text>Diet: {hit.recipe.dietLabels.join(', ')}</Text>
                )}
                {/* Display cautions */}
                {hit.recipe.cautions.length > 0 && (
                  <Text>Cautions: {hit.recipe.cautions.join(', ')}</Text>
                )}
                {/* Display meal type */}
                <Text>Meal Type: {hit.recipe.mealType.join(', ')}</Text>
                {/* Display dish type */}
                <Text>Dish Type: {hit.recipe.dishType.join(', ')}</Text>
              </Box>
              </ListItem>
            ))}
          </List>
        )}
        <Box>
          <Heading>Welcome to My Recipe App</Heading>
          <Text>Explore delicious recipes and find your favorites!</Text>
          <Button as={Link} to="/recipes" colorScheme="blue" mt={4}>
            Explore Recipes
          </Button>
        </Box>
        <Settings />
        <Footer />
      </Box>
    </Center>
  );
};


