import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '~/store/reducers'; // Đường dẫn tới reducer tổng
import rootSaga from '~/store/sagas'; // Đường dẫn tới saga tổng

// Cấu hình persist cho rootReducer
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);
// Tạo middleware saga
const sagaMiddleware = createSagaMiddleware();

// Cấu hình Redux DevTools Extension
const composeEnhancers =
    typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
// Tạo store
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Chạy rootSaga
sagaMiddleware.run(rootSaga);

// Tạo persistor để lưu trữ
const persistor = persistStore(store);

// Xuất store và persistor
export { store, persistor };