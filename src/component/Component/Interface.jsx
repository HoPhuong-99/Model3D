import { Affix, Button, Stack } from "@mantine/core";
import React from "react";
import { UseCharacterAnimation } from "../../context/CharacterAnimation";

const InterFace = () => {
  const { animations, animationsIndex, setAnimationIndex } =
    UseCharacterAnimation();
  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Stack>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              variant={index === animationsIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </Button>
          ))}
        </Stack>
      </Affix>
    </>
  );
};

export default InterFace;
