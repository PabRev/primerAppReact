import Item from '../Item/Item.js'



const ItemList = ({ productos = [] }) => {


    return (
        <div>
            <h2>Productos</h2>
            <hr />
            {productos.map((prod) => {
                return <Item producto={prod} key={prod.id} />
            })}
        </div>
    )
}


export default ItemList;