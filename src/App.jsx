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
        description="indian-inspired cocktail that brings back your childhood memories with a boozy twist."
        ingredient_list="vodka, white rum, rasna mix, lime juice, mint leaves, orange slice, lime wheel"
      />
      <MenuItem 
        title="madras mule" 
        description="south indian coffee house meets cocktail lounge. what could possibly go wrong?"
        ingredient_list="vodka, kahlua, coffee, heavy cream, simple syrup"
      />
      <MenuItem 
        title="*mango lassi" 
        description="a traditional, creamy Indian yogurt-based drink that's naturally refreshing and cooling. psst, it can be made alcoholic on request ;)"
        ingredient_list="fresh mango lassi, yogurt, natural sweeteners, traditional indian spices"
      />
      <Footer />
    </main>
  )
}

export default App
