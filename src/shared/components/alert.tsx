import { Alert } from '@aws-amplify/ui-react';
import { AlertsMsg } from '../constants/alerts';

export const AlertVariationsExample = () => {
  return (
    <>
      <Alert variation="warning">{AlertsMsg.ALERT_BLOCK_FUNC_MSG}</Alert>
    </>
  );
};