import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 250px; /* Ajusta el ancho de las tarjetas según lo necesario */
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-color: #ff6347; /* Cambia el color del borde en hover */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 360px; /* Ajusta la altura según necesites */
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #333;
`;

export const CardYear = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const DescriptionText = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 1rem 0;
  line-height: 1.4;
  text-align: left;
`;

export const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533f;
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  z-index: 1000;
  text-align: center;
`;