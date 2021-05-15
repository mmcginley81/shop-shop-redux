// import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// // The redux store has a method called dispatch, the only way to update the state 
// // is to call store.dispatch

// // const StoreProvider = ({ value = [], ...props }) => {
// //   const [state, dispatch] = useProductReducer({
// //     products: [],
// //     cart: [],
// //     cartOpen: false,
// //     categories: [],
// //     currentCategory: '',
// //   });

// //   console.log(state)
// //   return <Provider value={[state, dispatch]} {...props} />;
// // };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };