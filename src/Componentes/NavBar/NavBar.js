import CarTwidget from "../CartWidget/cartwidjet"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Facial</button>
                <button>Corporal</button>
                <button>Bienestar</button>
            </div>
            <CarTwidget />
        </nav>
    )
}

export default NavBar