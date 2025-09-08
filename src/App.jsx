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
        ingredient_list={"vodka, bacardi, rasna mix, orange slice, fresh mint leaves and fresh lime"}
      />
      <MenuItem 
        title="classic margarita" 
        description={loremText} 
        ingredient_list={"vodka, bacardi, rasna mix, orange slice, fresh mint leaves and fresh lime"}
      />
      <MenuItem 
        title="whiskey sour" 
        description={loremText} 
        ingredient_list={"vodka, bacardi, rasna mix, orange slice, fresh mint leaves and fresh lime"}
      />
      <MenuItem 
        title="old fashioned" 
        description={loremText} 
        ingredient_list={"vodka, bacardi, rasna mix, orange slice, fresh mint leaves and fresh lime"}
      />
      <Footer />
    </main>
  )
}

export default App
