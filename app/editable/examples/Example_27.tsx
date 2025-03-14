import React from 'react'
import { Editable_27 } from '../_components/Editable_27'

export default function Example_27() {
  const handleSave = (content: string) => {
    console.log('Saved content:', content)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Recipe Collection
        </h2>
        <p className="text-gray-500">
          Store and organize your favorite recipes
        </p>
      </div>

      <div className="space-y-6">
        <Editable_27
          initialContent="1. Preheat oven to 425°F (220°C).
2. Toss cauliflower florets with olive oil, garlic, salt, and pepper.
3. Spread on a baking sheet in a single layer.
4. Roast for 25-30 minutes until golden and crispy, stirring halfway.
5. Remove from oven and sprinkle with parmesan cheese.
6. Return to oven for 3-5 minutes until cheese is melted.
7. Garnish with fresh parsley before serving."
          onSave={handleSave}
          cookTime="35 mins"
          servings={4}
          difficulty="easy"
        />

        <Editable_27
          initialContent="1. Season salmon fillets with salt, pepper, and dried herbs.
2. Heat olive oil in a large skillet over medium-high heat.
3. Place salmon skin-side down and cook for 4-5 minutes.
4. Flip carefully and cook for another 3-4 minutes until just cooked through.
5. Meanwhile, mix honey, soy sauce, and lemon juice in a small bowl.
6. Pour sauce over salmon during the last minute of cooking.
7. Serve immediately with lemon wedges and fresh herbs."
          onSave={handleSave}
          cookTime="15 mins"
          servings={2}
          difficulty="medium"
        />

        <Editable_27
          initialContent="1. Combine flour, sugar, baking powder, and salt in a large bowl.
2. In another bowl, whisk together milk, eggs, melted butter, and vanilla.
3. Pour wet ingredients into dry ingredients and stir until just combined.
4. Heat a lightly oiled griddle or frying pan over medium-high heat.
5. Pour 1/4 cup batter onto the griddle for each pancake.
6. Cook until bubbles form on the surface, then flip and cook until golden brown.
7. Serve with maple syrup, fresh berries, and a dusting of powdered sugar."
          onSave={handleSave}
          cookTime="20 mins"
          servings={4}
          difficulty="easy"
        />

        <Editable_27
          initialContent="1. Prepare the pasta dough by mixing flour, eggs, olive oil, and salt.
2. Knead for 10 minutes until smooth and elastic.
3. Rest dough for 30 minutes covered with plastic wrap.
4. Roll out dough using a pasta machine, gradually decreasing thickness.
5. Cut into desired shapes (fettuccine, tagliatelle, etc.).
6. Bring a large pot of salted water to a boil.
7. Cook fresh pasta for 2-3 minutes until al dente.
8. Toss with your favorite sauce and serve immediately."
          onSave={handleSave}
          cookTime="1 hour"
          servings={4}
          difficulty="hard"
        />
      </div>
    </div>
  )
}
