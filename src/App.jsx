import { ListProduct } from "./components/products/ListProduct"
import { FiltersProvider } from "./context/filters"
import { Layout } from "./layout/Layout"
import { products } from "./mocks/products.json"
function App () {
  
  return (
    <FiltersProvider>
      <Layout>
        <ListProduct products={products} />
      </Layout>
    </FiltersProvider>
  )
}

export default App
