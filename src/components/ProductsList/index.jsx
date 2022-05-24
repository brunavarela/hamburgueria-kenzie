import Product from "../Product"
import './styles.css'

const ProductList = ({ handleClick, newArrayFilter }) => {

    return (
        <div className="container__productsList">
            <ul>
                {newArrayFilter.map((item, index) => (
                    <li key={index}> {<Product item={item} handleClick={handleClick} />}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList