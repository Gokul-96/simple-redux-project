import { createStore} from "redux";
import reducers from "./reducers";
//create store
//reducer pass as argument 
const store = createStore(
    reducers,
    //this is for redux tool
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.getState();
export default store;