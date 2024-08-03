import Header from "./auth0/components/header/header.component";
import Layout from "./auth0/components/layout/layout.component";

function App() {
  return (
    <Layout
      header={
        <Header />
      }
    />
  )
}

export default App
