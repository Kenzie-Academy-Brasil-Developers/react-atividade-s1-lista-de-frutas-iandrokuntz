import "./style.css"

function CardFruit({fruit}){

    return(

        <div className="CardFruit">
            <h1>{fruit.name}</h1>
            <h2>{fruit.color}</h2>
            <h2>{fruit.price}</h2>
        </div>

    )

}
export default CardFruit;