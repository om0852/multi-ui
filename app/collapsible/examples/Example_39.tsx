"use client"

import React, { useState } from 'react';
import Collapsible_39 from '../_components/Collapsible_39';
import { FaHeart, FaComment, FaShare, FaEllipsis } from 'react-icons/fa6';

const Example_39: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const socialPosts = [
    {
      title: "Travel Enthusiast",
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-center p-4">
              <p className="text-xl font-bold">Bali Sunset</p>
              <p className="text-sm opacity-80">Image placeholder - imagine a beautiful sunset on a Bali beach</p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Just spent the most amazing week in Bali! The sunsets were absolutely breathtaking, the food was incredible, 
            and the people were so welcoming. If you haven't been yet, add it to your bucket list ASAP! 
            #TravelGoals #Bali #Wanderlust
          </p>
          
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-500" />
              <span>248 likes</span>
            </div>
            <div className="flex items-center gap-1">
              <FaComment />
              <span>42 comments</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShare />
              <span>12 shares</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">Sarah Johnson</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Looks amazing! Which part of Bali did you visit?</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">Mike Chen</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Great photos! I'm planning a trip there next month. Any recommendations?</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>1h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Foodie Adventures",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg flex items-center justify-center">
              <div className="text-white text-center p-2">
                <p className="text-sm font-bold">Pasta Carbonara</p>
                <p className="text-xs opacity-80">Food image placeholder</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
              <div className="text-white text-center p-2">
                <p className="text-sm font-bold">Fresh Salad</p>
                <p className="text-xs opacity-80">Food image placeholder</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center">
              <div className="text-white text-center p-2">
                <p className="text-sm font-bold">Berry Dessert</p>
                <p className="text-xs opacity-80">Food image placeholder</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center">
              <div className="text-white text-center p-2">
                <p className="text-sm font-bold">Cocktail</p>
                <p className="text-xs opacity-80">Drink image placeholder</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Had the most incredible dining experience at Bistro Nouveau last night! The chef's tasting menu was 
            absolutely phenomenal - from the perfectly al dente carbonara to the refreshing salad with house vinaigrette, 
            followed by the most decadent berry dessert. And don't even get me started on their signature cocktails! 
            #FoodieHeaven #FineDining #Yum
          </p>
          
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-500" />
              <span>187 likes</span>
            </div>
            <div className="flex items-center gap-1">
              <FaComment />
              <span>23 comments</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShare />
              <span>5 shares</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">Alex Wong</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Everything looks amazing! What was your favorite dish?</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>45m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Fitness Journey",
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-center p-4">
              <p className="text-xl font-bold">Workout Progress</p>
              <p className="text-sm opacity-80">Video placeholder - imagine a workout progress video</p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            6 months into my fitness journey and I'm finally seeing real progress! Down 20 pounds and feeling 
            stronger than ever. It hasn't been easy, but consistency is key. Huge thanks to my trainer 
            @FitnessCoach for pushing me to my limits every session. 
            #FitnessJourney #Transformation #HealthyLifestyle
          </p>
          
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-500" />
              <span>342 likes</span>
            </div>
            <div className="flex items-center gap-1">
              <FaComment />
              <span>56 comments</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShare />
              <span>28 shares</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">FitnessCoach</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">So proud of your progress! Keep up the amazing work! 💪</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>3h ago</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">Emily Rodriguez</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">You look amazing! What's your workout routine like?</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Tech Enthusiast",
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-white text-center p-4">
              <p className="text-xl font-bold">New Gadget Unboxing</p>
              <p className="text-sm opacity-80">Video placeholder - imagine a tech unboxing video</p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Just got my hands on the latest XYZ Pro smartphone and I'm blown away by the improvements! 
            The camera quality is insane, battery life is significantly better, and the new AI features 
            are actually useful. Full review coming soon on my channel, but initial impressions are very positive! 
            #TechReview #XYZPro #Gadgets
          </p>
          
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-500" />
              <span>156 likes</span>
            </div>
            <div className="flex items-center gap-1">
              <FaComment />
              <span>34 comments</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShare />
              <span>8 shares</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">TechGeek42</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">How's the camera performance in low light? That was an issue with the previous model.</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>1h ago</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">SarahTech</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Looking forward to the full review! Is it worth upgrading from last year's model?</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>30m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-blue-500 text-3xl">f</span>
            Friendzone
          </h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <span className="font-bold">U</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">
                3
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-blue-400' : 'bg-white text-blue-500'
              } shadow`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <span className="font-bold">U</span>
            </div>
            <input 
              type="text" 
              placeholder="What's on your mind?" 
              className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-full py-2 px-4 text-gray-700 dark:text-gray-200"
              readOnly
            />
          </div>
          
          {socialPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <Collapsible_39
                title={post.title}
                defaultOpen={index === 0}
              >
                {post.content}
              </Collapsible_39>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_39; 