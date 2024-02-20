import React from 'react';
import { ButtonActionsProps } from './ButtonInterface';

const CreateButton:React.FC<ButtonActionsProps> = ({ onClick, row }) => {
    const handleClick = () => {
        onClick(row);
    };

    return (
        <div onClick={handleClick}>CreateButton</div>
    );
};

export default CreateButton;
