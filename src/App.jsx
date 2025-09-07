import Header from './components/Header'
import MenuItem from './components/MenuItem'
import Footer from './components/Footer'
import './styles/main.css'

function App() {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <main className="app">
      <Header />
      <MenuItem 
        title="rasna cocktail" 
        description={loremText} 
      />
      <MenuItem 
        title="classic margarita" 
        description={loremText} 
      />
      <MenuItem 
        title="whiskey sour" 
        description={loremText} 
      />
      <MenuItem 
        title="old fashioned" 
        description={loremText} 
      />
      <Footer />
    </main>
  )
}

export default App
