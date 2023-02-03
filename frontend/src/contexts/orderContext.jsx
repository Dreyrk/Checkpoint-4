import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CurrentOrderContext = createContext();

export default CurrentOrderContext;

export function CurrentOrderContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [currentOrder, setCurrentOrder] = useState({
    address: {},
    total: 0,
    user_id: "",
    items: [],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentOrderContext.Provider value={{ currentOrder, setCurrentOrder }}>
      {children}
    </CurrentOrderContext.Provider>
  );
}

CurrentOrderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentOrderContext = () => useContext(CurrentOrderContext);
