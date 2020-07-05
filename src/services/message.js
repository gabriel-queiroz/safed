import { showMessage as messageFlash } from 'react-native-flash-message';

export const Types = {
  SUCCESS: 'success',
  INFO: 'info',
  DANGER: 'danger',
  WARNING: 'warning',
};

export const Duration = {
  short: 1850,
  medium: 3000,
  large: 5000,
};

export const showMessage = ({ type = Types.SUCCESS, ...props }) =>
  messageFlash({
    type,
    ...props,
  });
