import styled from "styled-components";

export const Span = styled.span<{ err?: boolean; labelColor?: string }>`
  width: 100%;
  border: none;
  margin: 1px 0px;
  padding: 5.2px 0px;
  font-size: 12px;
  text-align: start;
  display: block;
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ err, labelColor }) => (err ? "rgb(220, 53, 69)" : labelColor)};
`;
