import styled from "@emotion/styled"

const spaceAround = "calc(3vw + 10px)"
const boxSize = "calc(2.5vw + 18px)"
const lineWidth = "calc(0.2vw + 3px)"

export const Checkbox = styled.label`
  font-size: calc(4px + 1.6vw);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: ${spaceAround};
  margin-top: ${spaceAround};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  color: #b8b4b4;
`

export const BrowserDefaultCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const Checkmark = styled.div`
  position: relative;
  height: ${boxSize};
  width: ${boxSize};
  min-width: ${boxSize};
  background-color: #f5f0f3;
  border: ${lineWidth} solid #f04b23;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5vw;
  &:after {
    content: "";
    position: absolute;
    display: none;
    margin-bottom: calc(0.2vw + 3px);
    width: calc(0.4vw + 2px);
    height: calc(1.4vw + 4px);
    border: solid #f04b23;
    border-width: 0 ${lineWidth} ${lineWidth} 0;
    transform: rotate(45deg);
  }
`

export const Checktext = styled.div`
  font-size: calc(6px + 1.5vw);
  text-transform: uppercase;
  font-weight: 700;
`

// /* Create the checkmark/indicator (hidden when not checked) */
// .checkmark:after {
// content: ""
// position: absolute
// display: none
// }

// /* Show the checkmark when checked */
// .container input:checked ~ .checkmark:after {
//   display: block;
// }

// /* Style the checkmark/indicator */
// .container .checkmark:after {
//   margin-bottom: calc(0.3vw + 3px);
//   width: 0.9vw;
//   height: 1.8vw;
//   border: solid #f04b23;
//   border-width: 0 min(5px, 0.3vw + 3px) min(5px, 0.3vw + 3px) 0;
//   transform: rotate(45deg);
// }
