import { buttonsConfig, ShareButtonsType } from "../share-button.config";

interface UseOpenLinkAction {
  goToLink: (buttonType: ShareButtonsType) => void
}

export const useOpenLinkAction = (): UseOpenLinkAction => {
  const goToLink = (buttonType: ShareButtonsType): void => {
    const currentUrl = window.location.href;
    const link: string = buttonsConfig[buttonType].url + currentUrl;
    window.open(link);
  };

  return { goToLink };
};