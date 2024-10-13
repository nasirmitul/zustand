import Navigation from "./components/navigation"
import Products from "./components/Products"

function App() {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <Navigation></Navigation>
          <Products></Products>
        </div>
      </div>
    </>
  )
}

export default App
