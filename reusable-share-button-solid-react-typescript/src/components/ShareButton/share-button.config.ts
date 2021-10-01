import { FacebookButton } from './buttons/FacebookButton';
import { PinterestButton } from './buttons/PinterestButton';
import { PrintButton } from './buttons/PrintButton';
import { TwitterButton } from './buttons/TwitterButton';
import { WhatsAppButton } from './buttons/WhatsAppButton';
import { ButtonsConfig } from './share-button.model';

export type ShareButtonsType = 'twitter' | 'facebook' | 'whatsapp' | 'print' | 'pinterest';
export type ActionsType = 'print' | 'link';

export const sharedLabel = 'Share with your friends: ';

export const buttonsConfig: ButtonsConfig = {
  twitter: {
    action: 'link',
    url: 'https://twitter.com/share?url=',
    Component: TwitterButton,
  },
  facebook: {
    action: 'link',
    url: 'http://www.facebook.com/share.php?u=',
    Component: FacebookButton,
  },
  pinterest: {
    action: 'link',
    url: 'http://pinterest.com/pin/create/link/?url=',
    Component: PinterestButton,
  },
  whatsapp: {
    action: 'link',
    url: 'https://api.whatsapp.com/send?text=',
    Component: WhatsAppButton,
  },
  print: {
    action: 'print',
    url: null,
    Component: PrintButton,
  },
};