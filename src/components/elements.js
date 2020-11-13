import React from "react"
import styled from "@emotion/styled"

const fontLarge = `font-size: calc(16px + 2.4vw);`
const uppercase = `text-transform: uppercase;`
const bold = `font-weight: 700;`

const red = `#F04B23`
const white = `#f5f0f3`
const black = `#140f14`

const flexCenter = `display: flex;
align-items: center;
justify-content: center;`

export const Heading = styled.h2`
  ${fontLarge}
  ${uppercase}
  ${bold}
  color: ${red}
`

export const Container = styled.div`
  padding: 2vw 15vw 6vw 3vw;
  @media (min-width: 420px) {
    padding: 2vw 14vw 6vw 14vw;
  }
`

export const LetterContainer = styled.div({
  marginTop: "10vw",
  padding: "6vw",
  boxShadow: "0px -4px 16px 8px rgba(0, 0, 0, 0.08)",
})

export const P = styled.p({
  fontSize: "calc(6px + 1.9vw)",
})

export const Small = styled.p`
  font-family: "roboto-mono";
  font-weight: 300;
  font-size: calc(10px + 0.5vw);
`

export const FullNameDetail = styled(Small)`
  @media (min-width: 420px) {
    padding-right: 40%;
  }
`

export const MyName = styled.p`
  ${fontLarge}
  ${bold}
  color: ${black};
`

export const Input = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  padding: calc(4vw - 10px) 6px 0 6px;
  border: 0;
  border-bottom: 6px solid #f04b23;
  ${fontLarge}
  ${bold}
  box-sizing: border-box,
  height: 60px,
  @media (min-width: 420px) {
    height: auto;
  }
`

export const OtherInput = styled.input({
  width: "100%",
  background: "transparent",
  outline: "none",
  padding: "0 0 3px 0",
  border: 0,
  fontSize: "calc(6px + 1.5vw)",
  fontWeight: 700,
  borderBottom: "min(5px, 0.3vw + 3px) solid #F04B23",
})

export const Note = styled.div`
  background: ${red};
  ${flexCenter}
  width: 12vw;
  min-height: 12vw;
  text-align: center;
  padding: 1.4vw 0.2vw 1.4vw 0.2vw;
  font-size: calc(2.5vw);
  lineheight: 100%;
  color: ${white};
  ${bold}
  ${uppercase}
  font-style: italic;
  position: absolute;
  right: 3vw;
  box-sizing: border-box;
  @media (min-width: 420px) {
    font-size: calc(1.2vw);
    right: 4vw;
    width: 10vw;
    min-height: 10vw;
  }
`

export const Button = styled.button`
  margin-top: calc(5vw + 12px);
  padding: calc(1.3vw + 6px) 2vw calc(1.3vw + 6px) 2vw;
  background: transparent;
  border: solid 2px ${red};
  color: ${red};
  font-size: calc(12px + 1.1vw);
  cursor: pointer;
  ${uppercase}
  ${bold}
  font-style: italic;
  width: 100%;
  max-width: 600px;
`

export const RedLine = styled.div`
  height: 4px;
  width: 100%;
  background: ${red};
`

export const Logo = () => (
  <div style={{ width: "100%" }}>
    <svg viewBox="0 0 1440 133" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M101.028 93.6066V53.3127H45.8505V40.0629H101.935V-1.68316H-0.977603V129H45.8505V93.6066H101.028ZM174.672 132.086C213.695 132.086 236.02 113.028 236.02 68.7405V-1.68316H185.744V67.6515C185.744 82.3534 182.84 86.7095 174.853 86.7095C167.412 86.7095 163.782 82.1719 163.782 67.6515V-1.68316H113.505V68.7405C113.505 112.483 131.292 132.086 174.672 132.086ZM361.28 42.2409V-1.68316H246.569V42.2409H279.603V129H328.064V42.2409H361.28ZM432.571 132.086C471.595 132.086 493.92 113.028 493.92 68.7405V-1.68316H443.643V67.6515C443.643 82.3534 440.739 86.7095 432.753 86.7095C425.311 86.7095 421.681 82.1719 421.681 67.6515V-1.68316H371.404V68.7405C371.404 112.483 389.192 132.086 432.571 132.086ZM570.363 36.6143C577.986 36.6143 581.253 40.2444 581.253 45.508C581.253 50.7716 577.986 54.5832 570.363 54.5832H554.39V36.6143H570.363ZM564.918 92.1546C574.537 92.1546 577.804 94.6957 577.804 104.678V120.469C577.804 124.281 578.893 127.548 581.798 129H631.53C628.807 127.366 626.992 124.462 626.992 120.288V103.952C626.992 87.4355 622.273 78.3603 611.201 73.6412C623.362 67.47 629.896 57.1243 629.896 41.1519C629.896 14.1077 614.468 -1.68316 570.363 -1.68316H507.199V129H554.39V92.1546H564.918ZM748.318 88.706H686.606V78.7233H745.051V46.597H686.606V36.7958H747.41V-1.68316H639.96V129H748.318V88.706ZM863.952 132.086C906.787 132.086 926.571 114.661 926.571 86.528C926.571 57.8503 904.427 49.1381 878.109 45.3265C858.507 42.6039 850.52 41.3334 850.52 36.6143C850.52 32.9842 853.061 30.2616 861.229 30.2616C869.941 30.2616 874.842 33.1657 875.75 39.5183V39.8813H924.756V39.5183C921.126 8.29958 899.708 -5.31324 862.681 -5.31324C823.658 -5.31324 801.514 11.7482 801.514 39.5183C801.514 66.9255 822.387 75.6377 848.887 79.2678C869.034 82.1719 877.746 83.6239 877.746 89.2505C877.746 93.0621 874.661 95.2402 866.856 95.2402C857.962 95.2402 851.972 91.9731 851.246 85.4389V84.7129H799.336V84.8944C801.151 115.206 816.579 132.086 863.952 132.086ZM995.873 132.086C1034.9 132.086 1057.22 113.028 1057.22 68.7405V-1.68316H1006.94V67.6515C1006.94 82.3534 1004.04 86.7095 996.054 86.7095C988.613 86.7095 984.983 82.1719 984.983 67.6515V-1.68316H934.706V68.7405C934.706 112.483 952.493 132.086 995.873 132.086ZM1131.3 37.8848C1140.38 37.8848 1144.92 41.1519 1144.92 49.1381C1144.92 56.7613 1140.38 60.0283 1131.3 60.0283H1117.33V37.8848H1131.3ZM1132.39 98.5073C1174.14 98.5073 1192.83 80.9013 1192.83 48.7751C1192.83 17.0118 1174.32 -1.68316 1132.21 -1.68316H1070.5V129H1117.33V98.5073H1132.39ZM1310.56 88.706H1248.84V78.7233H1307.29V46.597H1248.84V36.7958H1309.65V-1.68316H1202.2V129H1310.56V88.706ZM1385.54 36.6143C1393.16 36.6143 1396.43 40.2444 1396.43 45.508C1396.43 50.7716 1393.16 54.5832 1385.54 54.5832H1369.56V36.6143H1385.54ZM1380.09 92.1546C1389.71 92.1546 1392.98 94.6957 1392.98 104.678V120.469C1392.98 124.281 1394.07 127.548 1396.97 129H1446.7C1443.98 127.366 1442.17 124.462 1442.17 120.288V103.952C1442.17 87.4355 1437.45 78.3603 1426.38 73.6412C1438.54 67.47 1445.07 57.1243 1445.07 41.1519C1445.07 14.1077 1429.64 -1.68316 1385.54 -1.68316H1322.37V129H1369.56V92.1546H1380.09Z"
        fill="#140F14"
      />
    </svg>
  </div>
)

export const DownArrow = () => (
  <div style={{ marginTop: 14, marginBottom: 20 }}>
    <svg
      width="20"
      height="45"
      viewBox="0 0 20 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 27.8835L10.199 44L19 26"
        stroke="#F04B23"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linejoin="bevel"
      />
      <path
        d="M10 43L9.99999 0"
        stroke="#F04B23"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linejoin="bevel"
      />
    </svg>
  </div>
)
