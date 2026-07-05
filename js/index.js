var recipes = [
  {
    title: "Honey Garlic Salmon",
    description:
      "Pan-seared salmon with a sweet and savory honey garlic glaze.",
    image: "images/salmon.jpg",
    difficulty: "Easy",
    category: "Seafood",
    rating: 4.9,
    reviews: 187,
    prepTime: "10",
    cookTime: "15 min",
    servings: "2 people",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon grated fresh ginger",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Season salmon with salt and pepper.",
      "Mix honey, soy sauce, garlic, and ginger.",
      "Heat olive oil in a skillet.",
      "Cook salmon for 4 minutes per side.",
      "Pour sauce over salmon and simmer for 2 minutes.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "18g",
      fat: "20g",
      fiber: "0g",
      sodium: "720mg",
    },
    tips: [
      "Don't overcook the salmon.",
      "Use fresh garlic for the best flavor.",
      "Serve with steamed vegetables.",
    ],
  },

  {
    title: "Creamy Chicken Alfredo",
    description: "Rich and creamy pasta with grilled chicken.",
    image: "images/alfredo.jpg",
    difficulty: "Medium",
    category: "Pasta",
    rating: 4.8,
    reviews: 245,
    prepTime: "30",
    cookTime: "20 min",
    servings: "4 people",
    ingredients: [
      "2 chicken breasts",
      "300g fettuccine",
      "2 cups heavy cream",
      "1 cup Parmesan cheese",
      "3 cloves garlic",
      "2 tablespoons butter",
      "Salt and pepper",
    ],
    instructions: [
      "Cook pasta until al dente.",
      "Grill chicken and slice.",
      "Cook garlic in butter.",
      "Add cream and Parmesan.",
      "Mix pasta with sauce and top with chicken.",
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "42g",
      carbs: "45g",
      fat: "34g",
      fiber: "3g",
      sodium: "810mg",
    },
    tips: [
      "Reserve pasta water for a silkier sauce.",
      "Use freshly grated Parmesan.",
      "Serve immediately.",
    ],
  },

  {
    title: "Classic Beef Tacos",
    description: "Mexican-style beef tacos with fresh toppings.",
    image: "images/tacos.jpg",
    difficulty: "Easy",
    category: "Mexican",
    rating: 4.7,
    reviews: 198,
    prepTime: "15",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tomatoes, diced",
      "Shredded lettuce",
      "Cheddar cheese",
      "Taco seasoning",
    ],
    instructions: [
      "Cook beef with onion.",
      "Add taco seasoning.",
      "Warm taco shells.",
      "Fill shells with beef.",
      "Top with lettuce, tomatoes, and cheese.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "30g",
      fat: "31g",
      fiber: "5g",
      sodium: "890mg",
    },
    tips: [
      "Warm taco shells before serving.",
      "Add avocado for extra creaminess.",
      "Serve with salsa.",
    ],
  },

  {
    title: "Margherita Pizza",
    description: "Homemade pizza with fresh mozzarella and basil.",
    image: "images/pizza.jpg",
    difficulty: "Medium",
    category: "Italian",
    rating: 4.9,
    reviews: 320,
    prepTime: "20",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "1 pizza dough",
      "1 cup tomato sauce",
      "200g mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Roll out the dough.",
      "Spread tomato sauce.",
      "Add mozzarella.",
      "Bake at 220°C for 15 minutes.",
      "Top with basil and olive oil.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "20g",
      carbs: "52g",
      fat: "18g",
      fiber: "3g",
      sodium: "640mg",
    },
    tips: [
      "Use fresh mozzarella.",
      "Preheat your oven well.",
      "Add basil after baking.",
    ],
  },

  {
    title: "Chicken Caesar Salad",
    description: "Crisp romaine with grilled chicken and Caesar dressing.",
    image: "images/caesar.jpg",
    difficulty: "Easy",
    category: "Salad",
    rating: 4.6,
    reviews: 142,
    prepTime: "60",
    cookTime: "10 min",
    servings: "2 people",
    ingredients: [
      "2 chicken breasts",
      "1 romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
      "Olive oil",
      "Black pepper",
    ],
    instructions: [
      "Grill the chicken.",
      "Chop lettuce.",
      "Mix lettuce with dressing.",
      "Add chicken and croutons.",
      "Top with Parmesan.",
    ],
    nutrition: {
      calories: "390 kcal",
      protein: "34g",
      carbs: "12g",
      fat: "22g",
      fiber: "4g",
      sodium: "610mg",
    },
    tips: [
      "Use chilled lettuce.",
      "Add dressing just before serving.",
      "Fresh Parmesan tastes best.",
    ],
  },

  {
    title: "Vegetable Stir Fry",
    description: "Colorful vegetables tossed in a savory soy sauce.",
    image: "images/stirfry.jpg",
    difficulty: "Easy",
    category: "Vegetarian",
    rating: 4.8,
    reviews: 173,
    prepTime: "10",
    cookTime: "12 min",
    servings: "3 people",
    ingredients: [
      "Broccoli florets",
      "Carrots",
      "Bell peppers",
      "Snap peas",
      "Soy sauce",
      "Sesame oil",
      "Garlic",
    ],
    instructions: [
      "Heat sesame oil.",
      "Cook garlic.",
      "Add vegetables.",
      "Stir in soy sauce.",
      "Serve over rice.",
    ],
    nutrition: {
      calories: "240 kcal",
      protein: "8g",
      carbs: "28g",
      fat: "9g",
      fiber: "7g",
      sodium: "560mg",
    },
    tips: [
      "Cook over high heat.",
      "Keep vegetables slightly crunchy.",
      "Add sesame seeds.",
    ],
  },

  {
    title: "BBQ Cheeseburger",
    description: "Juicy beef burger with cheddar and BBQ sauce.",
    image: "images/burger.jpg",
    difficulty: "Medium",
    category: "American",
    rating: 4.9,
    reviews: 410,
    prepTime: "15",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "4 cheddar slices",
      "BBQ sauce",
      "Lettuce",
      "Tomato",
      "Onion",
    ],
    instructions: [
      "Shape burger patties.",
      "Grill until cooked.",
      "Toast buns.",
      "Assemble burger.",
      "Serve with fries.",
    ],
    nutrition: {
      calories: "710 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "43g",
      fiber: "3g",
      sodium: "980mg",
    },
    tips: [
      "Don't press burgers while grilling.",
      "Toast the buns.",
      "Rest burgers for 2 minutes.",
    ],
  },

  {
    title: "Mushroom Risotto",
    description: "Creamy Italian rice with mushrooms and Parmesan.",
    image: "images/alfredo.jpg",
    difficulty: "Hard",
    category: "Italian",
    rating: 4.8,
    reviews: 121,
    prepTime: "55 ",
    cookTime: "35 min",
    servings: "4 people",
    ingredients: [
      "1 cup Arborio rice",
      "200g mushrooms",
      "1 onion",
      "4 cups vegetable broth",
      "Parmesan cheese",
      "Butter",
      "White wine",
    ],
    instructions: [
      "Cook onions.",
      "Add mushrooms.",
      "Toast rice.",
      "Add broth gradually.",
      "Finish with butter and Parmesan.",
    ],
    nutrition: {
      calories: "470 kcal",
      protein: "14g",
      carbs: "58g",
      fat: "18g",
      fiber: "4g",
      sodium: "540mg",
    },
    tips: ["Add broth gradually.", "Stir frequently.", "Serve immediately."],
  },

  {
    title: "Chocolate Brownies",
    description: "Fudgy homemade chocolate brownies.",
    image: "images/brownies.jpg",
    difficulty: "Easy",
    category: "Dessert",
    rating: 5.0,
    reviews: 515,
    prepTime: "90 ",
    cookTime: "30 min",
    servings: "9 pieces",
    ingredients: [
      "200g dark chocolate",
      "150g butter",
      "2 eggs",
      "1 cup sugar",
      "1 cup flour",
      "Cocoa powder",
      "Vanilla extract",
    ],
    instructions: [
      "Melt chocolate and butter.",
      "Mix eggs and sugar.",
      "Combine ingredients.",
      "Bake for 30 minutes.",
      "Cool before slicing.",
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "4g",
      carbs: "36g",
      fat: "17g",
      fiber: "2g",
      sodium: "120mg",
    },
    tips: [
      "Don't overbake.",
      "Cool completely before cutting.",
      "Add walnuts if desired.",
    ],
  },

  {
    title: "Blueberry Pancakes",
    description: "Fluffy pancakes packed with fresh blueberries.",
    image: "images/pancakes.jpg",
    difficulty: "Easy",
    category: "Breakfast",
    rating: 4.9,
    reviews: 286,
    prepTime: "50 ",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "2 cups flour",
      "2 teaspoons baking powder",
      "1 egg",
      "1½ cups milk",
      "2 tablespoons sugar",
      "1 cup blueberries",
      "Butter",
    ],
    instructions: [
      "Mix dry ingredients.",
      "Whisk wet ingredients.",
      "Combine batter gently.",
      "Fold in blueberries.",
      "Cook on a greased skillet until golden.",
    ],
    nutrition: {
      calories: "340 kcal",
      protein: "8g",
      carbs: "50g",
      fat: "11g",
      fiber: "3g",
      sodium: "390mg",
    },
    tips: [
      "Don't overmix the batter.",
      "Use fresh blueberries.",
      "Serve with maple syrup.",
    ],
  },
];

function displayRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);

  var recipe = recipes[randomIndex];

  document.getElementById("recipeTitle").innerHTML = recipe.title;
  document.getElementById("description").innerHTML = recipe.description;
  document.getElementById("difficulty").innerHTML = recipe.difficulty;
  document.getElementById("category").innerHTML = recipe.category;
  document.getElementById("rating").innerHTML = recipe.rating;
  document.getElementById("reviews").innerHTML =
    "(" + recipe.reviews + " reviews)";
  document.getElementById("prepTime").innerHTML = recipe.prepTime + " min";
  document.getElementById("cookTime").innerHTML = recipe.cookTime;
  document.getElementById("servings").innerHTML = recipe.servings;

  document.getElementById("recipeImg").src = recipe.image;

  // Ingredients
  var ingredientsHTML = "";

  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsHTML += `
        <div class="ingredient-item">
            <span class="ingredient-num">${i + 1}</span>
            <span>${recipe.ingredients[i]}</span>
        </div>
        `;
  }

  document.getElementById("recipeIngredients").innerHTML = ingredientsHTML;

  var instructionsHTML = "";

  for (var i = 0; i < recipe.instructions.length; i++) {
    instructionsHTML += `<div class="instruction-step"> <span class="step-num">${i + 1}</span><span class="step-text">${recipe.instructions[i]}</span></div>`;
  }

  document.getElementById("instructions").innerHTML = instructionsHTML;

  document.getElementById("calories").innerHTML = recipe.nutrition.calories;
  document.getElementById("protein").innerHTML = recipe.nutrition.protein;
  document.getElementById("carbs").innerHTML = recipe.nutrition.carbs;
  document.getElementById("fat").innerHTML = recipe.nutrition.fat;
  document.getElementById("fiber").innerHTML = recipe.nutrition.fiber;
  document.getElementById("sodium").innerHTML = recipe.nutrition.sodium;

  var tipsHTML = "";

  for (var i = 0; i < recipe.tips.length; i++) {
    tipsHTML += `
        <div class="tip-card">
            <i class="fa-solid fa-lightbulb text-warning"></i>
            <p class="m-0">${recipe.tips[i]}</p>
        </div>
        `;
  }

  document.getElementById("tips").innerHTML = tipsHTML;

  var warningCardInput = `<div class="tip-card tip-card-spec mb-3">
                   <div>
                    <i class="fa-solid fa-warning text-danger"></i>
                  </div>
                  <div class="d-flex flex-column">
                    <h5 class="tip-text fw-bold text-danger">
                      Extended Preparation Time
                    </h5>
                    <p class="tip-text m-0">
                      This recipe requires more than 45 minutes to prepare. Plan
                      accordingly!
                    </p>
                  </div>
                </div>`;

  var prepTimeCon = Number(recipe.prepTime);
  if (prepTimeCon > 45) {
    document.getElementById("warningCard").innerHTML = warningCardInput;
  } else {
    return;
  }
}
displayRecipe();
