import { createContext, useReducer } from "react";

export const ViewContext = createContext();

const reducer = (state, action) => {
  let animationClass = "animate-slide-left";
  switch (action.type) {
    case "home":
      if (state.view > 0) animationClass = "animate-slide-right";
      console.log(state.view);
      return { ...state, view: 0, animationClass };
    case "about me":
      if (state.view > 1) animationClass = "animate-slide-right";
      return { ...state, view: 1, animationClass };
    case "projects":
      if (state.view > 2) animationClass = "animate-slide-right";
      return { ...state, view: 2, animationClass };
    case "contact me":
      if (state.view > 3) animationClass = "animate-slide-right";
      return { ...state, view: 3, animationClass };
    default:
      return state;
  }
};

export default function ViewContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    view: 0,
    animationClass: "animate-slide-left",
  });

  function switchView(view) {
    dispatch({
      type: view.toLowerCase(),
    });
  }

  const value = {
    ...state,
    switchView,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}
