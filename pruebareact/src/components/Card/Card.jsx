import { useState } from 'react';
import Popup from './Popup';
import { CardContainer, CardImage, CardTitle } from './Card.styles';

const Card = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <CardContainer onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
      <CardImage src={item.images['Poster Art'].url} alt={item.title} />
      <CardTitle>{item.title}</CardTitle>
      {showPopup && <Popup item={item} onClose={() => setShowPopup(false)} />}
    </CardContainer>
  );
};

export default Card;
