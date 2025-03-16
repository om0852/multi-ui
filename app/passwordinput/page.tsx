<<<<<<< HEAD
// "use client"
// import React, { useState } from 'react'
// import { ModernPasswordInput } from './_components/PasswordInput_19'

// const App: React.FC = () => {
//   const [password, setPassword] = useState('')
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handlePasswordChange = (value: string) => {
//     setPassword(value)
//   }

//   const handlePasswordSubmit = (isValid: boolean) => {
//     if (isValid) {
//       setIsSubmitted(true)
//     } else {
//       setIsSubmitted(false)
//       alert('Password is too weak!')
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-sm w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
//           Create an Account
//         </h1>

//         <ModernPasswordInput
//           value={password}
//           onChange={handlePasswordChange}
//           onSubmit={handlePasswordSubmit}
//           label="Create Password"
//           className="mb-6"
//         />

//         {isSubmitted && (
//           <div className="text-center text-green-600 dark:text-green-400 mt-4">
//             <p>Password is strong! Account created successfully.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default App


import React from 'react'

const page = () => {
  return (
    <div>
      
=======
'use client';
import React from 'react';
import PasswordInputExample1 from './_examples/Passwordinput1Example';
import PasswordInputExample2 from './_examples/Passwordinput2Example';
import PasswordInputExample3 from './_examples/Passwordinput3Example';
import PasswordInputExample4 from './_examples/Passwordinput4Example';
import PasswordInputExample5 from './_examples/Passwordinput5Example';
import PasswordInputExample6 from './_examples/Passwordinput6Example';
import PasswordInputExample7 from './_examples/Passwordinput7Example';
import PasswordInputExample8 from './_examples/Passwordinput8Example';
import PasswordInputExample9 from './_examples/Passwordinput9Example';
import PasswordInputExample10 from './_examples/Passwordinput10Example';
import PasswordInputExample11 from './_examples/Passwordinput11Example';
import PasswordInputExample12 from './_examples/Passwordinput12Example';

export default function PasswordInputDemo() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Password Input Examples</h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Password Input</h2>
            <PasswordInputExample1 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Password with Strength Meter</h2>
            <PasswordInputExample2 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Password with Requirements</h2>
            <PasswordInputExample3 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Password with Animation</h2>
            <PasswordInputExample4 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Copy-Protected Password</h2>
            <PasswordInputExample5 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Custom Validation Rules</h2>
            <PasswordInputExample6 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Fancy Toggle Password</h2>
            <PasswordInputExample7 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Gradient Border Password</h2>
            <PasswordInputExample8 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Floating Label Password</h2>
            <PasswordInputExample9 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Typing Effect Password</h2>
            <PasswordInputExample10 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Neumorphic Password</h2>
            <PasswordInputExample11 />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Glassmorphism Password</h2>
            <PasswordInputExample12 />
          </section>
        </div>
      </div>
>>>>>>> 9bd1f42452590f9fca255b92f54a8c93ef9d55e0
    </div>
  );
}
<<<<<<< HEAD

export default page
=======
>>>>>>> 9bd1f42452590f9fca255b92f54a8c93ef9d55e0
