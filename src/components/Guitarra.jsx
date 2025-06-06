import React, {Fragment} from "react";

const Guitarra = ({guitarra, setCarrito, carrito, addToCarrito}) => {

    function handleClick(guitarra) {
        setCarrito([...carrito, guitarra]);
    }

    return (
        <Fragment>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${guitarra.image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{guitarra.name}</h3>
                    <p>{guitarra.description}</p>
                    <p className="fw-black text-primary fs-3">${guitarra.price}</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => {
                            addToCarrito(guitarra)
                        }}
                    >Agregar al Carrito</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Guitarra;