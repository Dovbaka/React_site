import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import friendsBarReducer from "./friendsBarReducer";
import dialoguesReducer from "./dialoguesReducer";
import searchUserReducer from "./searchUserReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialoguesReducer,
    friendsBar: friendsBarReducer,
    searchUserPage: searchUserReducer,
    authentication: authReducer,
    app: appReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

let storeRedux = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.storeRedux = storeRedux;

export default storeRedux;