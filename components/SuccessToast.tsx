import { Button, showToast } from '@cred/neopop-web/lib/components';

const SuccessToast = () => {
    const showToastNotif = () => {
        console.log('show toast');
        // @ts-ignore
        // @ts-nocheck
        showToast('Sample toast message', { type: 'success', autoCloseTime: '5000' });
    };

    return <Button
        variant="primary"
        kind="elevated"
        size="big"
        colorMode="dark"
        onClick={showToastNotif}
    >
        Primary
    </Button>

        ;
} 

export default SuccessToast