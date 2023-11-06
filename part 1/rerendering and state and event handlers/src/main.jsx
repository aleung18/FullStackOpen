import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App counter={counter} />
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// setInterval( () => {
//   refresh()
//   counter += 1
//   // when it gets to 10, we go back down to 0 (10 isn't displayed)
//   if (counter == 10) {
//     counter = 0;
//   }
// }, 1000)
