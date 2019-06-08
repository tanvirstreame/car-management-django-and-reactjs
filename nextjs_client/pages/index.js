import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Layout=()=> {
	return(
    <div>
        <Header />
        <Navbar />
    </div>);
}

const Home=()=> {
	return (
	  <div>
	  	<Layout/>
	  </div>
	);
}
export default Home;
