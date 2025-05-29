import {useState, useEffect} from "react";

import Header from "./components/Header.jsx";
import Guitarra from "./components/Guitarra.jsx";
import Footer from "./components/Footer.jsx";
import {db} from "./data/db.js";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(db);
    }, []);

    return (
        <>
            <Header/>
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {data.map((guitarra) => (
                        <Guitarra key={guitarra.id} guitarra={guitarra} />
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App
