import { Outlet } from "react-router-dom";
import Header from "../components/layoutComponents/Header";
import Footer from "../components/layoutComponents/Footer";


export default function LayoutDefault(){


    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}