import Features from "components/careers/Features"
import Header from "components/careers/Header"
import PositionsList from "components/careers/PositionsList"
import Testimonial from "components/careers/Testimonial"
import LogoCloud from "components/home/LogoCloud"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>FG | Carrers</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.garcia.com/" />
            <meta name="author" content='Garcia' />
            <meta name="publisher" content='Garcia' />

            {/* Social Media Tags */}
            <meta property="og:title" content='FG | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.garcia.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='FG | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Testimonial/>
                <div className="bg-white-50">
                <LogoCloud/>
                </div>
                <Features/>
                <PositionsList/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Careers