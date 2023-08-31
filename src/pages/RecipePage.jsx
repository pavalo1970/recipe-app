import React from 'react';
import { Box, Button, Center, Heading, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import PreviousSearches from './components/PreviousSearches';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Settings from './components/pages/Settings';

// RecipePage component definition
export const RecipePage = ({ selectedRecipe, onBackClick }) => {
// Check if a recipe is selected, if not display a message
  if (!selectedRecipe) {
    return <p>Please select a recipe to view its details.</p>;
  }

  return (
    <Box maxW="800px" mx="auto" p={4}>
    <Navbar />
    {/* Button to go back to recipe list */}
    <Button onClick={onBackClick} mt={4} colorScheme="blue">
      Back to Recipes
    </Button>
    <Center mt={4}>
    {/* Display selected recipe image */}
      <Image
        src={selectedRecipe.image}
        alt={selectedRecipe.label}
        maxWidth="300px"
        maxHeight="200px"
      />
       </Center>
      {/* Display selected recipe label */}
       <Heading mt={4} as="h2">
        {selectedRecipe.label}
      </Heading>
      {/* Display meal type, dish type, and other recipe details */}
      <Text>Meal Type: {selectedRecipe.mealType.join(', ')}</Text>
      <Text>Dish Type: {selectedRecipe.dishType.join(', ')}</Text>
      <Text>Total Cooking Time: {selectedRecipe.totalTime} minutes</Text>
      <Text>Diet Labels: {selectedRecipe.dietLabels.join(', ')}</Text>
      <Text>Health Labels: {selectedRecipe.healthLabels.join(', ')}</Text>
      <Text>Cautions: {selectedRecipe.cautions.join(', ')}</Text>
      {/* Display ingredient list */}
      <Heading mt={4} as="h3">
      <h3>Ingredients:</h3>
      </Heading>
      <UnorderedList>
        {selectedRecipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>
    {ingredient.quantity} {ingredient.measure} - {ingredient.text}
    </ListItem>
        ))}
      </UnorderedList>
      {/* Display servings and total nutrients */}
      <p>Servings: {selectedRecipe.yield}</p>
      <h3>Total Nutrients:</h3>
      <p>Energy: {selectedRecipe.totalNutrients.ENERC_KCAL.quantity} kcal</p>
      <p>Protein: {selectedRecipe.totalNutrients.PROCNT.quantity} g</p>
      <p>Fat: {selectedRecipe.totalNutrients.FAT.quantity} g</p>
      <p>Carbs: {selectedRecipe.totalNutrients.CHOCDF.quantity} g</p>
      <p>Cholesterol: {selectedRecipe.totalNutrients.CHOLE.quantity} mg</p>
      <p>Sodium: {selectedRecipe.totalNutrients.NA.quantity} mg</p>
    <PreviousSearches />
    <Settings />
    <Footer />
    </Box>
  );
};

