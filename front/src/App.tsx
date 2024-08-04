import Header from "./auth0/components/header/header.component";
import Layout from "./global/components/layout/layout.component";
import { useGetAllProducts } from "./products/hooks/useGetAllProducts.hook";

function App() {
  const { data, loading, error } = useGetAllProducts();
  console.log({ data, loading, error });
  return (
    <Layout
      header={
        <Header />
      }
    />
  )
}

export default App
