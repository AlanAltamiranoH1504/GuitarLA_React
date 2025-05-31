import {useEffect, useState} from "react";
import {db} from "../data/db.js";

const useCarrito = () => {

    const carritoInicial = () => {
        const carritoLocalStorage = localStorage.getItem("carrito");
        if (carritoLocalStorage) {
            return JSON.parse(carritoLocalStorage);
        } else {
            return [];
        }
    }
    const [data, setData] = useState([]);
    const [carrito, setCarrito] = useState(carritoInicial);

    function addToCarrito(item) {
        const itemExiste = carrito.findIndex(guitarra => guitarra.id === item.id);

        //Si ya existe el elemento solo aumenta cantidad
        if (itemExiste >= 0) {
            const updatedCarrito = [...carrito];
            updatedCarrito[itemExiste].cantidad++;
            setCarrito(updatedCarrito);
        } else {
            //Si no existia el elemento le agregamos una cantidad
            item.cantidad = 1;
            setCarrito([...carrito, item]);
        }
    }

    function saveLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    // Funciones del Header
    function totalCarrito() {
        const costoTotalCarrito = carrito.reduce((total, guitarra) => {
            return total + (guitarra.price * guitarra.cantidad);
        }, 0);
        return costoTotalCarrito;
    }

    function aumentarCantidadProducto(id) {
        const carritoNuevo = carrito.map((item) => {
            if (item.id === id && item.cantidad < 10) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                }
            }
            return item;
        })
        setCarrito(carritoNuevo);
    }

    function disminuirCantidadProducto(id) {
        const carritoNuevo = carrito.map((item) => {
            if (item.id === id) {
                const cantidad = item.cantidad - 1;
                if (cantidad <= 0) {
                    return null;
                }
                return {...item, cantidad: cantidad};
            }
            return item;
        }).filter(Boolean);
        setCarrito(carritoNuevo);
    }

    function eliminarElementoCarrito(id) {
        const carritoActual = [...carrito];
        const carritoNuevo = carritoActual.filter((guitarra) => {
            return guitarra.id !== id;
        });
        setCarrito(carritoNuevo);
    }

    function vaciarCarrito() {
        setCarrito([]);
        clearLocalStorage();
    }

    useEffect(() => {
        setData(db);
    }, []);
    useEffect(() => {
        saveLocalStorage();
    }, [carrito]);

    return {
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
    }
}

export default useCarrito;