import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useSelectorUser = () => {
    const { user } = useSelector((state: any) => state.userReducer);
    return user || null;
};

export const useSelectorError = () => {
    const { error } = useSelector((state: any) => state.userReducer);
    return error || null;
};

