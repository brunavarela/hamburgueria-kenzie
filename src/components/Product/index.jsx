import './styles.css'

const Product = ({ item, handleClick }) => {

    return (
        <div className='liContainer'>
            <div className='liContainer imgDiv'>
                <img src={item.img} alt={item.img}/>
            </div>

            <div className='liContainer textDiv'>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <span>{(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <button onClick={() => handleClick(item)}> Adicionar </button> 
            </div>    
        </div>   
        
    )
}

export default Product