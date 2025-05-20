import React, { useState, useEffect } from 'react'

// Unused variable
const unusedVar = 'This is not used'

const App = () => {
  // Empty dependency array in useEffect
  useEffect(() => {
    console.log('Component mounted')
  }, [])

  // Unused state
  const [unusedState, setUnusedState] = useState(null)

  // Function with potential security issue (hardcoded API key)
  const fetchData = () => {
    const apiKey = '12345-67890-abcdef' // Security hotspot: Hardcoded credential
    // ...
  }


  // Duplicated code
  const renderLanguage = (name, color) => (
    <li className={`text-2xl font-bold ${color}`}>
      {name}
    </li>
  )

  // Duplicated code (same as above with minor changes)
  const renderLanguageAgain = (name, color) => (
    <li className={`text-2xl font-bold ${color}`}>
      {name}
    </li>
  )

  // Potential memory leak (no cleanup in useEffect)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running...')
    }, 1000)
  }, [])

  // Unreachable code
  return (
    <>
      <div className='text-3xl font-bold underline text-center'>Hello World</div>
      
      {/* Missing alt text for accessibility */}
      <img src="/logo.png" />

      <p className='text-center text-4xl text-amber-500'>Hello There how are you all </p>

      <h1>Programming Languages</h1>
      <ul className='list-disc list-inside'>
        {renderLanguage('Python', 'text-blue-500')}
        {renderLanguage('Java', 'text-green-500')}
        {renderLanguage('JavaScript', 'text-yellow-500')}
        {renderLanguage('React', 'text-red-500')}
      </ul>
      
      {/* This will cause a key prop warning */}
      {['a', 'b', 'c'].map(item => (
        <div key={item}>{item}</div>
      ))}
    </>
  )
  
  console.log('This code is unreachable') // Unreachable code
}

export default App