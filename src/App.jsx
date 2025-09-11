import Header from './components/Header'
import MenuItem from './components/MenuItem'
import Footer from './components/Footer'
import './styles/main.css'

function App() {
  return (
    <main className="app">
      <Header />
      <MenuItem 
        title="tang dynasty" 
        description="a vibrant indian-inspired cocktail that brings back childhood memories with a boozy twist."
        ingredient_list="vodka, white rum, rasna mix, lime juice, mint leaves, orange slice, lime wheel"
      />
      <MenuItem 
        title="madras mule" 
        description="a sophisticated south indian coffee house meets cocktail lounge. rich coffee concentrate blends with premium spirits and cream."
        ingredient_list="vodka, kahlua, coffee, heavy cream, simple syrup"
      />
      <MenuItem 
        title="*mango lassi" 
        description="a creamy, traditional Indian yogurt-based drink that's naturally refreshing and cooling. can be made alcoholic on request ;)"
        ingredient_list="fresh mango lassi, yogurt, natural sweeteners, traditional indian spices"
      />
      <Footer />
    </main>
  )
}

export default App
