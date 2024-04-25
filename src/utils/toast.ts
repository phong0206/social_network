import { createStandaloneToast } from '@chakra-ui/react';

// Get the standalone toast function
const { toast } = createStandaloneToast();

export const toastSuccess = (title: string) => {
    return toast({
        title: title,
        status: 'success',
        position: 'top-right',
        isClosable: true,
        duration: 2500
    });
}
export const toastError = (title: string) => {
    return toast({
        title: title,
        status: 'error',
        position: 'top-right',
        isClosable: true,
        duration: 2500
    });
}
export const toastWarning = (title: string) => {
    return toast({
        title: title,
        status: 'warning',
        position: 'top-right',
        isClosable: true,
        duration: 2500
    });
}
export const toastInfo = (title: string) => {
    return toast({
        title: title,
        status: 'info',
        position: 'top-right',
        isClosable: true,
        duration: 2500
    });
}