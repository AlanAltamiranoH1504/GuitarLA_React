import Header from "./components/Header.jsx";
import Guitarra from "./components/Guitarra.jsx";
import Footer from "./components/Footer.jsx";
import {db} from "./data/db.js";
import useCarrito from "./hooks/useCarrito.js";

function App() {
    const {
        data,
        carrito,
        setCarrito,
        addToCarrito,
        saveLocalStorage,
        clearLocalStorage,
        totalCarrito,
        aumentarCantidadProducto,
        disminuirCantidadProducto,
        eliminarElementoCarrito,
        vaciarCarrito
    } = useCarrito();
    return (
        <>
            <Header
                carrito={carrito}
                setCarrito={setCarrito}
                clearLocalStorage={clearLocalStorage}
                totalCarrito={totalCarrito}
                aumentarCantidadProducto={aumentarCantidadProducto}
                disminuirCantidadProducto={disminuirCantidadProducto}
                eliminarElementoCarrito={eliminarElementoCarrito}
                vaciarCarrito={vaciarCarrito}
            />
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
