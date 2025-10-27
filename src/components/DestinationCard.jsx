import './DestinationCard.css';
function DestinationCard({ name, country, image, description }) {
    return (
        <div className="destination-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h4>{country}</h4>
            <p>{description}</p>
        </div>
    );
}
export default DestinationCard;  