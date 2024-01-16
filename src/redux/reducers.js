import { combineReducers } from "redux";

const getDbProduct = () => {
    let data = localStorage.getItem("prods")
    return  data ? [data] : [];
}

const saveDbProduct = (products) => {
    localStorage.setItem("prods", JSON.stringify(products));
}

const productReducer = (state = getDbProduct(), action) => {
    switch(action.type) {
        case "add" :
            saveDbProduct(action.payload)
            return [...action.payload, ...state];
        case "remove" :
            state = getDbProduct();
            let pds = state.filter(p => p.id != payload);
            saveDbProduct(pds);
            state = getDbProduct();
            return state;
        default:
            state = getDbProduct();
            return state;
    }
}

const reducers = combineReducers({
    products: productReducer
});

export default reducers;