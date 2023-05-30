import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [animationsIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimation] = useState([]);
  return (
    <CharacterAnimationsContext.Provider
      value={{ animationsIndex, setAnimationIndex, animations, setAnimation }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const UseCharacterAnimation = () => {
  return useContext(CharacterAnimationsContext);
};
