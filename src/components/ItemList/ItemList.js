import Item from '../Item/Item.js'



const ItemList = ({ productos = [] }) => {


    return (
        <div>
            <h2>Productos</h2>
            <hr />
            <div className="row">

            {productos.map((prod) => {
                return <Item producto={prod} key={prod.id} />
            })}</div>
        </div>
    )
}


export default ItemList;