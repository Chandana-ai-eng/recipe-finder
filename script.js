document.getElementById('search-button').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredient-input').value;
    const recipesDiv = document.getElementById('recipes');

    // Clear previous results
    recipesDiv.innerHTML = '';

    if (ingredients.trim() === '') {
        recipesDiv.innerHTML = '<p>Please enter some ingredients.</p>';
        return;
    }

    // Sample recipes (in a real project, you might fetch these from an API)
    const sampleRecipes = [
        { name: 'Pasta Primavera', ingredients: 'pasta, tomato, bell pepper, onion', instructions: 'Cook pasta and vegetables.' },
        { name: 'Chicken Salad', ingredients: 'chicken, lettuce, tomato, cucumber', instructions: 'Mix all ingredients.' },
        { name: 'Vegetable Stir Fry', ingredients: 'carrot, bell pepper, broccoli, soy sauce', instructions: 'Stir fry vegetables with soy sauce.' }
    ];

    // Filter recipes based on entered ingredients
    const filteredRecipes = sampleRecipes.filter(recipe => 
        ingredients.split(',').every(ingredient => recipe.ingredients.includes(ingredient.trim()))
    );

    if (filteredRecipes.length === 0) {
        recipesDiv.innerHTML = '<p>No recipes found for the given ingredients.</p>';
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            `;
            recipesDiv.appendChild(recipeElement);
        });
    }
});
