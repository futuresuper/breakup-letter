import React, { useState } from "react"
import "../components/index.css"
import {
  Container,
  LetterContainer,
  Logo,
  Heading,
  P,
  Small,
  DownArrow,
  Input,
  Note,
  Checkbox,
  OtherInput,
} from "../components/elements"

export default function Home() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checkedOther1, setCheckedOther1] = useState(false)

  return (
    <React.Fragment>
      <Logo />
      <Container>
        <Heading>
          Switching super felt good, right? Customise the email below and we’ll
          help you send it to the CEO of your old fund.
        </Heading>
        <Heading>Let’s get started.</Heading>
        <Small>
          Type in your full name, so your old super fund knows exactly who’s
          money they are missing out on.
        </Small>
        <DownArrow />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "calc(100% + 10vw)",
            minHeight: "10vw",
          }}
        >
          <Input placeholder="Your full name"></Input>
          <Note>
            Your
            <br />
            name
            <br />
            here
          </Note>
        </div>
        <LetterContainer>
          <P style={{ textAlign: "center", fontSize: "calc(12px + 1vw)" }}>
            FROM THE DESK OF JAKE LANDA
          </P>
          <Heading style={{ textAlign: "center", color: "black" }}>
            Attention: Ian Silk, CEO AustralianSuper
          </Heading>
          <P>
            Due to your failure to consider climate change when investing for my
            future, I have moved my super out of
          </P>
          <Note>
            Select
            <br />
            Your
            <br />
            Old
            <br />
            Fund
            <br />
          </Note>
          <Input placeholder="Fund Name"></Input>
          <P>
            I chose a fund that will use my super to sustain lasting climate
            action with investments that don’t compromise my future and will
            benefit me in my retirement. I don’t believe you did that because:
          </P>
          <Note>
            Pick
            <br />
            Your
            <br />
            Reasons
            <br />
          </Note>
          <Checkbox className="container">
            <input
              className="default"
              type="checkbox"
              onClick={() => setChecked1(!checked1)}
              checked={checked1}
            />
            <span className="checkmark"></span>
            <div className="checktext">
              You did not disclose where you were investing my money, which
              leads me to believe this information reflects poorly on you.
            </div>
          </Checkbox>
          <Checkbox className="container">
            <input
              className="default"
              type="checkbox"
              onClick={() => setChecked2(!checked2)}
              checked={checked2}
            />
            <span className="checkmark"></span>
            <div className="checktext">
              You had my super invested in fossil fuels.
            </div>
          </Checkbox>
          <Checkbox className="container">
            <input
              className="default"
              type="checkbox"
              onClick={() => setCheckedOther1(!checkedOther1)}
              checked={checkedOther1}
            />
            <span className="checkmark"></span>
            <OtherInput
              placeholder="TYPE YOUR OWN HERE"
              onFocus={() => setCheckedOther1(true)}
            ></OtherInput>
          </Checkbox>
        </LetterContainer>

        <LetterContainer>
          <P>Subject: ATTENTION: Mr Super Ann</P>
          <P>
            Due to your failure to consider climate change when investing for my
            future, I have moved my super out of AustralianSuper.
          </P>
          <P>
            I chose a fund that will use my super to sustain lasting climate
            action with investments that don’t compromise my future and will
            benefit me in my retirement. I don’t believe you did that because
          </P>
          {checked1 && (
            <P>
              You did not disclose where you were investing my money, which
              leads me to believe this information reflects poorly on you.
            </P>
          )}
          {checked2 && <P>You had my super invested in fossil fuels.</P>}
        </LetterContainer>
      </Container>
    </React.Fragment>
  )
}
