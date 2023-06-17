"use client";
import React from "react";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useTypingAnimationState } from "@app/components/molecules/TypingAnimation/hooks/useTypingAnimationState";
import {
  typingAnimationCodeDefaultThemeClasses,
  typingAnimationDefaultThemeClasses,
} from "@app/components/molecules/TypingAnimation/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const TypingAnimation: React.FC = () => {
  const { codeContainerRef } = useTypingAnimationState();

  return (
    <LayoutContainer themeClasses={typingAnimationDefaultThemeClasses}>
      <pre>
        <code
          className={convertObjectValuesToString(
            typingAnimationCodeDefaultThemeClasses,
          )}
          ref={codeContainerRef}
        />
      </pre>
    </LayoutContainer>
  );
};

export { TypingAnimation };
