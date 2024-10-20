import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
`;

const Title = styled.h2`
  color: #e74c3c;
  margin-top: 0;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1rem;

  &:hover {
    background-color: #2980b9;
  }
`;

const ValidationModal = ({ emptyFields, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <Title>Please Complete Required Fields</Title>
                <p>The following questions need to be answered:</p>
                <List>
                    {emptyFields.map((field, index) => (
                        <li key={index}>{field}</li>
                    ))}
                </List>
                <Button onClick={onClose}>Got it</Button>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ValidationModal;
