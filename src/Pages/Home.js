import Header from "../components/Header";
import UserLogin from "../components/UserLogin";
import Kitchens from "../components/Kitchens";
import Cards from "../components/Cards";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";
const Home = () => {
    return(
        <div>
        <Header/>
        <UserLogin/>
        <Kitchens/>
        <div className="container mx-auto">
            <Cards/>
            <Restaurant/>
        </div>
        <Footer/>
        </div>
    )
}

export default Home