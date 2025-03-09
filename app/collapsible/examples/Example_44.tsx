"use client"

import React, { useState } from 'react';
import Collapsible_44 from '../_components/Collapsible_44';
import { FaUtensils, FaClock, FaFire, FaLeaf, FaBowlFood } from 'react-icons/fa6';

const Example_44: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const recipes = [
    {
      title: "Mediterranean Quinoa Bowl",
      icon: <FaBowlFood className="text-orange-500" />,
      difficulty: "Easy",
      time: "25 mins",
      servings: 4,
      isVegetarian: true,
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaClock className="text-orange-500" />
                <span className="text-orange-700 dark:text-orange-300">25 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLeaf className="text-green-500" />
                <span className="text-green-700 dark:text-green-300">Vegetarian</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-orange-900/30 p-2 rounded">
                <div className="font-medium text-orange-800 dark:text-orange-200">Calories</div>
                <div className="text-orange-600 dark:text-orange-300">380</div>
              </div>
              <div className="bg-white dark:bg-orange-900/30 p-2 rounded">
                <div className="font-medium text-orange-800 dark:text-orange-200">Protein</div>
                <div className="text-orange-600 dark:text-orange-300">12g</div>
              </div>
              <div className="bg-white dark:bg-orange-900/30 p-2 rounded">
                <div className="font-medium text-orange-800 dark:text-orange-200">Carbs</div>
                <div className="text-orange-600 dark:text-orange-300">45g</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Ingredients</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>1 cup quinoa, rinsed</li>
              <li>2 cups vegetable broth</li>
              <li>1 cucumber, diced</li>
              <li>2 tomatoes, diced</li>
              <li>1 red onion, finely chopped</li>
              <li>1 cup kalamata olives</li>
              <li>200g feta cheese, crumbled</li>
              <li>Extra virgin olive oil</li>
              <li>Fresh lemon juice</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Instructions</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Cook quinoa in vegetable broth according to package instructions.</li>
              <li>While quinoa cooks, prepare all vegetables.</li>
              <li>Once quinoa is cooked, let it cool for 10 minutes.</li>
              <li>In a large bowl, combine quinoa with all vegetables.</li>
              <li>Add crumbled feta cheese and olives.</li>
              <li>Drizzle with olive oil and lemon juice.</li>
              <li>Season with salt and pepper to taste.</li>
              <li>Toss well and serve at room temperature.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Spicy Thai Curry",
      icon: <FaFire className="text-red-500" />,
      difficulty: "Medium",
      time: "40 mins",
      servings: 6,
      isVegetarian: false,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaClock className="text-red-500" />
                <span className="text-red-700 dark:text-red-300">40 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFire className="text-red-500" />
                <span className="text-red-700 dark:text-red-300">Spicy</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Calories</div>
                <div className="text-red-600 dark:text-red-300">450</div>
              </div>
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Protein</div>
                <div className="text-red-600 dark:text-red-300">28g</div>
              </div>
              <div className="bg-white dark:bg-red-900/30 p-2 rounded">
                <div className="font-medium text-red-800 dark:text-red-200">Carbs</div>
                <div className="text-red-600 dark:text-red-300">35g</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Ingredients</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>400ml coconut milk</li>
              <li>3 tbsp Thai red curry paste</li>
              <li>500g chicken breast, sliced</li>
              <li>2 red bell peppers, sliced</li>
              <li>1 onion, sliced</li>
              <li>2 tbsp fish sauce</li>
              <li>1 tbsp palm sugar</li>
              <li>Fresh Thai basil</li>
              <li>2 kaffir lime leaves</li>
              <li>Jasmine rice for serving</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Instructions</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Heat coconut milk in a large pan until it starts to bubble.</li>
              <li>Add curry paste and stir until well combined.</li>
              <li>Add chicken and cook until no longer pink.</li>
              <li>Add vegetables and continue cooking for 5 minutes.</li>
              <li>Season with fish sauce and palm sugar.</li>
              <li>Add kaffir lime leaves and simmer for 10 minutes.</li>
              <li>Garnish with Thai basil before serving.</li>
              <li>Serve hot with jasmine rice.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Classic Tiramisu",
      icon: <FaUtensils className="text-amber-500" />,
      difficulty: "Medium",
      time: "4 hours",
      servings: 8,
      isVegetarian: true,
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <FaClock className="text-amber-500" />
                <span className="text-amber-700 dark:text-amber-300">4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUtensils className="text-amber-500" />
                <span className="text-amber-700 dark:text-amber-300">Dessert</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white dark:bg-amber-900/30 p-2 rounded">
                <div className="font-medium text-amber-800 dark:text-amber-200">Calories</div>
                <div className="text-amber-600 dark:text-amber-300">350</div>
              </div>
              <div className="bg-white dark:bg-amber-900/30 p-2 rounded">
                <div className="font-medium text-amber-800 dark:text-amber-200">Fat</div>
                <div className="text-amber-600 dark:text-amber-300">18g</div>
              </div>
              <div className="bg-white dark:bg-amber-900/30 p-2 rounded">
                <div className="font-medium text-amber-800 dark:text-amber-200">Sugar</div>
                <div className="text-amber-600 dark:text-amber-300">25g</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Ingredients</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>6 egg yolks</li>
              <li>1 cup sugar</li>
              <li>1¼ cups mascarpone cheese</li>
              <li>1¾ cups heavy whipping cream</li>
              <li>2 packages ladyfingers</li>
              <li>1 cup cold espresso</li>
              <li>½ cup coffee flavored liqueur</li>
              <li>1 tablespoon cocoa powder</li>
              <li>Dark chocolate for garnish</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Instructions</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Whisk egg yolks and sugar until pale and creamy.</li>
              <li>Add mascarpone and mix until smooth.</li>
              <li>In a separate bowl, whip cream until stiff peaks form.</li>
              <li>Fold whipped cream into mascarpone mixture.</li>
              <li>Mix espresso and liqueur in a shallow dish.</li>
              <li>Quickly dip ladyfingers and layer in serving dish.</li>
              <li>Spread half the mascarpone mixture over ladyfingers.</li>
              <li>Repeat layers and dust with cocoa powder.</li>
              <li>Refrigerate for at least 4 hours.</li>
            </ol>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-orange-50 text-gray-800'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
            <FaUtensils className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            <span>Gourmet Recipe Collection</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-sm ${
              darkMode 
                ? 'bg-gray-800 text-orange-400 border border-gray-700' 
                : 'bg-white text-orange-700 border border-orange-200 shadow-sm'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="space-y-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {recipe.icon}
              </div>
              <div className="flex-1">
                <Collapsible_44
                  title={recipe.title}
                  defaultOpen={index === 0}
                >
                  {recipe.content}
                </Collapsible_44>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_44; 