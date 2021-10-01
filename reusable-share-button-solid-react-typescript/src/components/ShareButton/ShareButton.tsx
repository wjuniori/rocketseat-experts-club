import React from 'react'
import { useShareButtonActions } from './share-button-actions.hook';
import { buttonsConfig, ShareButtonsType, sharedLabel } from './share-button.config';

export interface ShareButtonProps {
  allow: ShareButtonsType[];
  className?: string;
}

export const ShareButton = ({ allow, className } : ShareButtonProps) => {
  const { handleShareButtonClick } = useShareButtonActions();

  return (
    <div>
      <span>{sharedLabel}</span>
      {allow.map((currentButton: ShareButtonsType, index: number) => {
        const ShareButtonComponent = buttonsConfig[currentButton].Component;

        return (
          <ShareButtonComponent 
            onClick={ () => handleShareButtonClick(currentButton, buttonsConfig[currentButton].action) }
            className={ className }
            key={ index }
          />
        );
      })}
    </div>
  )
};
