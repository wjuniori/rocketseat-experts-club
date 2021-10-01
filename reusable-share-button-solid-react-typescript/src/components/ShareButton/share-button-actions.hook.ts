import { useOpenLinkAction } from "./actions/open-link.hook";
import { usePrintAction } from "./actions/print.hook";
import { ActionsType, ShareButtonsType } from "./share-button.config";

interface UseShareButtonActions {
  handleShareButtonClick: (
    shareType: ShareButtonsType,
    actionType: ActionsType
  ) => void;
}

export const useShareButtonActions = (): UseShareButtonActions => {
  const { goToLink } = useOpenLinkAction();
  const { printIt } = usePrintAction();

  const handleShareButtonClick = (
    shareType: ShareButtonsType,
    actionType: ActionsType
  ): void => {
    const Handler = {
      link: goToLink,
      print: printIt,
    };

    Handler[actionType](shareType)
  };

  return { handleShareButtonClick };
};