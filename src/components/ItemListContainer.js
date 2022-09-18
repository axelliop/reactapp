import AgeLabel from "./AgelLabel"

function ItemListContainer ({greeting}) { /* desestructurando en los parametros */
    return (
        <div className="stlyleBienvenida">
        <h5>{greeting}</h5>
        </div>
    )
}

export default ItemListContainer