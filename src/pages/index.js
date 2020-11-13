import React, { useState } from "react"
import "../components/index.css"
import {
  Container,
  LetterContainer,
  Logo,
  Heading,
  P,
  Small,
  FullNameDetail,
  DownArrow,
  Input,
  Note,
  OtherInput,
  MyName,
  Button,
} from "../components/elements"
import {
  Checkbox,
  Checkmark,
  Checktext,
  BrowserDefaultCheckbox,
} from "../components/checkbox"

export default function Home() {
  const [myName, setMyName] = useState("")
  const [fund, setFund] = useState("")

  const [error, setError] = useState("")

  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  const [checked7, setChecked7] = useState(false)
  const [checked8, setChecked8] = useState(false)
  const [checked9, setChecked9] = useState(false)
  const [checked10, setChecked10] = useState(false)
  const [checked11, setChecked11] = useState(false)
  const [checked12, setChecked12] = useState(false)
  const [checked13, setChecked13] = useState(false)
  const [checked14, setChecked14] = useState(false)

  const [checkedOther1, setCheckedOther1] = useState(false)
  const [textOther1, setTextOther1] = useState("")

  const [checkedOther2, setCheckedOther2] = useState(false)
  const [textOther2, setTextOther2] = useState("")

  const [checkedOther3, setCheckedOther3] = useState(false)
  const [textOther3, setTextOther3] = useState("")

  const renderCheckbox = (checked, setChecked, text) => {
    return (
      <Checkbox className="container">
        <BrowserDefaultCheckbox
          type="checkbox"
          onClick={() => setChecked(!checked)}
          checked={checked}
        />
        <Checkmark className="checkmark" />
        <Checktext className="checktext">{text}</Checktext>
      </Checkbox>
    )
  }

  const renderOtherCheckbox = (
    checked,
    setChecked,
    placeholder,
    textValue,
    setTextValue
  ) => {
    return (
      <Checkbox className="container">
        <BrowserDefaultCheckbox
          type="checkbox"
          onClick={() => setChecked(!checked)}
          checked={checked}
        />
        <Checkmark className="checkmark" />
        <OtherInput
          placeholder={placeholder}
          onFocus={() => setChecked(true)}
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
        ></OtherInput>
      </Checkbox>
    )
  }

  const showPopup = text => {
    alert(text)
  }

  const handleSubmit = () => {
    if (!myName) {
      showPopup("Please add your name")
      window.scrollTo(0, 400)
    }
  }

  return (
    <React.Fragment>
      <Logo />
      <Container>
        <Heading>
          Switching super felt good, right? Customise the email below and we’ll
          help you send it to the CEO of your old fund.
        </Heading>
        <Heading>Let’s get started.</Heading>
        <FullNameDetail name="myName">
          Type in your full name, so your old super fund knows exactly who’s
          money they are missing out on.
        </FullNameDetail>
        <DownArrow />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Input
            placeholder="Your full name"
            value={myName}
            onChange={e => setMyName(e.target.value)}
          ></Input>
          <Note
            style={{
              height: "60px",
            }}
          >
            Your
            <br />
            name
            <br />
            here
          </Note>
        </div>
        <LetterContainer>
          <P
            style={{
              textAlign: "center",
              fontSize: "calc(12px + 1vw)",
              textTransform: "uppercase",
            }}
          >
            From the desk of {myName}
          </P>
          <Heading style={{ textAlign: "center", color: "black" }}>
            Attention: Ian Silk, CEO AustralianSuper
          </Heading>
          <P>
            Due to your failure to consider climate change when investing for my
            future, I have moved my super out&nbsp;of
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
          {renderCheckbox(
            checked1,
            setChecked1,
            "You had my super invested in fossil fuels."
          )}
          {renderCheckbox(
            checked2,
            setChecked2,
            "I believe the impact of fossil fuel investments in my super costs more than those investments are worth."
          )}
          {renderCheckbox(
            checked3,
            setChecked3,
            "My super isn’t just the money I retire with, it’s the world my investments create for when I get to retire."
          )}
          {renderCheckbox(
            checked4,
            setChecked4,
            "You did not disclose where you were investing my money, which leads me to believe this information reflects poorly on you."
          )}
          {renderCheckbox(
            checked5,
            setChecked5,
            "You did not invest in line with Paris Agreement goals or in a way that accounts for the urgency of the climate crisis."
          )}
          {renderCheckbox(
            checked6,
            setChecked6,
            "The investments you had my super in compromised my personal values and ethics."
          )}
          {renderCheckbox(
            checked7,
            setChecked7,
            "I have been personally affected by climate change and your investments were doing nothing to deal with this important issue."
          )}
          {renderCheckbox(
            checked8,
            setChecked8,
            "Clean energy is the future I want and need super to be invested in, and you compromised that future with fossil fuels."
          )}
          {renderOtherCheckbox(
            checkedOther1,
            setCheckedOther1,
            "TYPE YOUR OWN HERE",
            textOther1,
            setTextOther1
          )}
          <P>
            You should be protecting our future with the financial influence you
            have been entrusted with, and people would be shocked at how you
            invest their super.
          </P>
          <P>I’m asking you to:</P>
          <Note>
            Make
            <br />
            Your
            <br />
            Demands
            <br />
          </Note>
          {renderCheckbox(
            checked9,
            setChecked9,
            "Divest from fossil fuels so that all your members are protected from the environmental harm being caused today and stranded assets in the future."
          )}
          {renderCheckbox(
            checked10,
            setChecked10,
            "Invest more in clean energy instead of fossil fuels so that super can contribute to a better future."
          )}
          {renderCheckbox(
            checked11,
            setChecked11,
            "Develop a sustainable ESG super option that excludes fossil fuels and alert your members so that they can choose not to finance pollution. "
          )}
          {renderCheckbox(
            checked12,
            setChecked12,
            "Make a commitment to exclude all fossil fuels by 2030."
          )}
          {renderOtherCheckbox(
            checkedOther2,
            setCheckedOther2,
            "MAKE YOUR OWN DEMANDS HERE",
            textOther2,
            setTextOther2
          )}
          <P>These changes are essential to the safety of our future.</P>
          <Note>
            Demand
            <br />
            A
            <br />
            Reply
            <br />
          </Note>
          {renderCheckbox(
            checked13,
            setChecked13,
            "I expect a response, explaining the decisions you made with my money and why you haven’t acted sooner on climate change."
          )}
          {renderCheckbox(
            checked14,
            setChecked14,
            "I would like This email to be passed on to your Executives and management."
          )}
          {renderOtherCheckbox(
            checkedOther3,
            setCheckedOther3,
            "ADD YOUR OWN REQUEST HERE",
            textOther3,
            setTextOther3
          )}
          <P>
            I made my choice and moved my money. I chose a fund investing in
            companies and technology that will improve my future.
          </P>
          <P>
            Don’t sit on the fence. It’s your responsibility to be a leader in
            cleaning up the super industry.
          </P>
          <P>Signed,</P>
          <MyName>{myName}</MyName>
        </LetterContainer>
        <div style={{ textAlign: "center" }}>
          <Button onClick={handleSubmit}>Create letter</Button>
        </div>

        {/* <LetterContainer>
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
        </LetterContainer> */}
      </Container>
    </React.Fragment>
  )
}
