import './App.css';
import DestinationCard from './components/DestinationCard.jsx';

function App() {
  return (
    <div className="travel-container">
      <h1>Dream Travel Destinations</h1>
      <div className="card-grid">
        <DestinationCard
          name="Santorini"
          country="Greece"
          image= "/santorini.jpg"
          description="White houses, blue domes, and stunning sunsets over the Aegean Sea."
        />

        <DestinationCard
          name="Kyoto"
          country="Japan"
          image="/kyoto.jpg"
          description="Historic temples, cherry blossoms, and traditional tea houses."
        />

        <DestinationCard
          name="Paris"
          country="France"
          image="/paris.jpg"
          description="The city of love — home to art, fashion, and the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default App;
