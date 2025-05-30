import {useState, useEffect} from "react";

import Header from "./components/Header.jsx";
import Guitarra from "./components/Guitarra.jsx";
import Footer from "./components/Footer.jsx";
import {db} from "./data/db.js";

function App() {
    const [data, setData] = useState([]);
    const [carrito, setCarrito] = useState([]);

    function addToCarrito(item){
        const itemExiste = carrito.findIndex(guitarra => guitarra.id === item.id);

        //Si ya existe el elemento solo aumenta cantidad
        if (itemExiste >= 0){
            const updatedCarrito = [...carrito];
            updatedCarrito[itemExiste].cantidad++;
            setCarrito(updatedCarrito);
        }else{
            //Si no existia el elemento le agregamos una cantidad
            item.cantidad = 1;
            setCarrito([...carrito, item]);
        }
    }

    useEffect(() => {
        setData(db);
    }, []);

    return (
        <>
            <Header carrito={carrito}/>
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {data.map((guitarra) => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra}
                            setCarrito={setCarrito}
                            carrito={carrito}
                            addToCarrito={addToCarrito}
                        />
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App
