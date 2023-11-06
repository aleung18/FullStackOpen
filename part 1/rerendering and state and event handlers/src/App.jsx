import { useState } from 'react'

const Header = () => {
  return (
    <h1>Rerendering</h1>
  )
}

const App = () => {

  // const [ counter, setCounter ] = useState(0)


  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // console.log('rendering...', counter)

  // event handlers

  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
    console.log('clicked')
  }

  const resetClick = () => {
    setCounter(0)
    console.log('counter reset')
  }

  return (
    <div>
      <Header />
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>

      {/* button for resetting clicker */}
      <button onClick={resetClick}>
        reset
      </button>

    </div>
  )
}

export default App