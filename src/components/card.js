import card from './card.css';
const Card = (props) => {
    const { image, title, description, price, button } = props;
    return (
        <div className="card">
            <img className="product-image" src={image} alt={title} />
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <button className="button">{button}</button>
        </div>
    );
}

export default Card;
