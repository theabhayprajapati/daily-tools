import { Button, showToast } from "@cred/neopop-web/lib/components";

const ErrorToast = () => {
    const showToastNotif = () => {
        console.log('show toast');
        // @ts-ignore
        // @ts-nocheck
        showToast('Sample toast message', { type: 'error', autoCloseTime: 5000 });
    };
    return (

        <Button
        variant="primary"
        kind="elevated"
        size="big"
        colorMode="dark"
        onClick={showToastNotif}
    >
        Error
    </Button>

  )
}

export default ErrorToast