import { ReactComponentElement } from "react"
import Footer from "./Footer"
import Header from "./Header"
function Layout({children}: any) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
export default Layout