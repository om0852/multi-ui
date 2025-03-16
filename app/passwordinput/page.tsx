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
      
    </div>
  )
}

export default page
