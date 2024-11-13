import { CardContent, CardImage, CardTitle, CardYear, DescriptionText, CloseButton, PopupContainer } from './Card.styles';

const Popup = ({ item, onClose }) => (
  <PopupContainer>
    <CardContent>
    <CardTitle>{item.title}</CardTitle>
    <DescriptionText>{item.description}</DescriptionText>
    <CardYear>{item.releaseYear}</CardYear>
    <CardImage src={item.images['Poster Art'].url} alt={item.title} />
    <CloseButton onClick={onClose}>Cerrar</CloseButton>
    </CardContent>
  </PopupContainer>
);

export default Popup;
