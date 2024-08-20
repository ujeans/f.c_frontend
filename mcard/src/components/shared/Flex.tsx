import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { css, SerializedStyles } from "@emotion/react"; // css도 추가

interface FlexProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  css?: SerializedStyles; // 이 부분을 추가
}

const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, css: cssProp }) => [
    {
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
    },
    cssProp, // 추가된 css prop을 적용
  ]
);

export default Flex;
