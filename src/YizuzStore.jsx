import { Layout } from "antd"
import { Footer } from "antd/lib/layout/layout"
import { AppRouter } from "./router"
import { NavBar } from "./ui/components"
import { HomePage, ProductsPage, ProductPage, UserPage } from "./yizuz/pages"


function YizuzStore() {
  

  return (
    <Layout className="site-layout" style={{background: 'rgba(0,0,0,0.0)'}}>
      <NavBar />
        <AppRouter />
      <Footer style={{ textAlign: 'center' }}>Yizuz ©2022 Created by Ant UED</Footer>
    </Layout>
  )
}

export default YizuzStore
