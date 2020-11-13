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
  RedLine,
} from "../components/elements"
import {
  Checkbox,
  Checkmark,
  Checktext,
  BrowserDefaultCheckbox,
} from "../components/checkbox"

export default function Home() {
  const [page, setPage] = useState(1)

  const [myName, setMyName] = useState("")
  const [fund, setFund] = useState("")
  const [ceo, setCeo] = useState("")

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

  const points = [
    "",
    "You had my super invested in fossil fuels.",
    "I believe the impact of fossil fuel investments in my super costs more than those investments are worth.",
    "My super isn’t just the money I retire with, it’s the world my investments create for when I get to retire.",
    "You did not disclose where you were investing my money, which leads me to believe this information reflects poorly on you.",
    "You did not invest in line with Paris Agreement goals or in a way that accounts for the urgency of the climate crisis.",
    "The investments you had my super in compromised my personal values and ethics.",
    "I have been personally affected by climate change and your investments were doing nothing to deal with this important issue.",
    "Clean energy is the future I want and need super to be invested in, and you compromised that future with fossil fuels.",
    "Divest from fossil fuels so that all your members are protected from the environmental harm being caused today and stranded assets in the future.",
    "Invest more in clean energy instead of fossil fuels so that super can contribute to a better future.",
    "Develop a sustainable ESG super option that excludes fossil fuels and alert your members so that they can choose not to finance pollution. ",
    "Make a commitment to exclude all fossil fuels by 2030.",
    "I expect a response, explaining the decisions you made with my money and why you haven’t acted sooner on climate change.",
    "I would like This email to be passed on to your Executives and management.",
  ]

  const letter = `ATTENTION: ${ceo ? ceo + ", CEO of " : ""}${fund}

Due to your failure to consider climate change when investing for my future, I have moved my super out of ${fund}.

I chose a fund that will use my super to sustain lasting climate action with investments that don’t compromise my future and will benefit me in my retirement. I don’t believe you did that because:

${checked1 ? "- " + points[1] : ""}
${checked2 ? "- " + points[2] : ""}
${checked3 ? "- " + points[3] : ""}
${checked4 ? "- " + points[4] : ""}
${checked5 ? "- " + points[5] : ""}
${checked6 ? "- " + points[6] : ""}
${checked7 ? "- " + points[7] : ""}
${checked8 ? "- " + points[8] : ""}
${checkedOther1 && textOther1 ? "- " + textOther1 : ""}

You should be protecting our future with the financial influence you have been entrusted with, and people would be shocked at how you invest their super.

I’m asking you to:

${checked9 ? "- " + points[9] : ""}
${checked10 ? "- " + points[10] : ""}
${checked11 ? "- " + points[11] : ""}
${checked12 ? "- " + points[12] : ""}
${checkedOther2 && textOther2 ? "- " + textOther2 : ""}

These changes are essential to the safety of our future.

${checked13 ? "- " + points[13] : ""}
${checked14 ? "- " + points[14] : ""}
${checkedOther3 && textOther3 ? "- " + textOther3 : ""}

I made my choice and moved my money. I chose a fund investing in companies and technology that will improve my future.

Don’t sit on the fence. It’s your responsibility to be a leader in cleaning up the super industry.

Signed,
${myName}
`

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

  const copyLetter = () => {
    copyTextToClipboard(letter)
  }

  const formatLetter = text => {
    return text.split("\n").map(str => <p>{str}</p>)
  }

  const showError = (text, location) => {
    alert(text)
    window.scrollTo(0, location)
  }

  const handleSubmit = () => {
    if (!myName) {
      showError("Please add your name", 400)
      return
    }
    if (!fund) {
      showError("Please choose your Fund", 800)
      return
    }
    if (
      !checked1 &&
      !checked2 &&
      !checked3 &&
      !checked4 &&
      !checked5 &&
      !checked6 &&
      !checked7 &&
      !checked8 &&
      (!checkedOther1 || !textOther1)
    ) {
      showError("Please select at least one reason", 1000)
      return
    }
    if (
      !checked9 &&
      !checked10 &&
      !checked11 &&
      !checked12 &&
      (!checkedOther2 || !textOther2)
    ) {
      showError("Please make at least one demand", 1500)
      return
    }
    if (!checked13 && !checked14 && (!checkedOther3 || !textOther3)) {
      showError("Please request a reply", 2000)
      return
    }
    setPage(2)
    window.scrollTo(0, 0)
  }

  return (
    <React.Fragment>
      <Logo />
      <Container>
        {page === 1 && (
          <div>
            <Heading>
              Switching super felt good, right? Customise the email below and
              we’ll help you send it to the CEO of your old fund.
            </Heading>
            <Heading>Let’s get started.</Heading>
            <FullNameDetail>
              Type in your full name, so your old super fund knows exactly who’s
              money they are missing out on.
            </FullNameDetail>
            <DownArrow />
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
                height: "60px",
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
                From the desk of {myName ? myName : "me"}
              </P>
              <Heading style={{ textAlign: "center", color: "black" }}>
                Attention: {ceo ? ceo + ", CEO of " : ""}
                {fund ? fund : " My old fund"}
              </Heading>
              <P>
                Due to your failure to consider climate change when investing
                for my future, I have moved my super out&nbsp;of
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
              <Input
                placeholder="Fund Name"
                value={fund}
                onChange={e => setFund(e.target.value)}
              ></Input>
              <P>
                I chose a fund that will use my super to sustain lasting climate
                action with investments that don’t compromise my future and will
                benefit me in my retirement. I don’t believe you did that
                because:
              </P>
              <Note>
                Pick
                <br />
                Your
                <br />
                Reasons
                <br />
              </Note>
              {renderCheckbox(checked1, setChecked1, points[1])}
              {renderCheckbox(checked2, setChecked2, points[2])}
              {renderCheckbox(checked3, setChecked3, points[3])}
              {renderCheckbox(checked4, setChecked4, points[4])}
              {renderCheckbox(checked5, setChecked5, points[5])}
              {renderCheckbox(checked6, setChecked6, points[6])}
              {renderCheckbox(checked7, setChecked7, points[7])}
              {renderCheckbox(checked8, setChecked8, points[8])}
              {renderOtherCheckbox(
                checkedOther1,
                setCheckedOther1,
                "TYPE YOUR OWN HERE",
                textOther1,
                setTextOther1
              )}
              <P>
                You should be protecting our future with the financial influence
                you have been entrusted with, and people would be shocked at how
                you invest their super.
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
              {renderCheckbox(checked9, setChecked9, points[9])}
              {renderCheckbox(checked10, setChecked10, points[10])}
              {renderCheckbox(checked11, setChecked11, points[11])}
              {renderCheckbox(checked12, setChecked12, points[12])}
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
              {renderCheckbox(checked13, setChecked13, points[13])}
              {renderCheckbox(checked14, setChecked14, points[14])}
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
                Don’t sit on the fence. It’s your responsibility to be a leader
                in cleaning up the super industry.
              </P>
              <P>Signed,</P>
              <MyName>{myName}</MyName>
            </LetterContainer>
            <div style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit}>Create letter</Button>
              <Small>
                Don’t worry, you’ll get a chance to check over it before you hit
                send.
              </Small>
            </div>
          </div>
        )}

        {page === 2 && (
          <div>
            <Heading>
              NICE WORK, just a few more steps to add your Personal touch.
            </Heading>
            <Note>
              Step
              <br />1
            </Note>
            <RedLine />
            <P>
              Start a new email with the subject and contact details supplied
              below.
            </P>
            <P>TO: members@australiansuper.com.au</P>
            <P>Subject: Why I left AustrailanSuper</P>
            <Note>
              Step
              <br />2
            </Note>
            <RedLine />
            <P>
              Check the letter you created. If it sounds like you, copy + paste.
            </P>
            <Button onClick={copyLetter}>Testing a copy button</Button>
            <LetterContainer>{formatLetter(letter)}</LetterContainer>
            <Heading>
              Lots of Future Super members are already writing to hostplus.
            </Heading>
            <Note>
              Step
              <br />3
            </Note>
            <RedLine />
            <P>
              Hit send on the email. It’s time to add yours to the mix and make
              change.
            </P>
            <Heading>ALL done? Press this button: </Heading>
            <div style={{ textAlign: "center" }}>
              <Button>I sent it</Button>
            </div>
          </div>
        )}
      </Container>
    </React.Fragment>
  )
}

// Make the copy button clickable
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea")
  textArea.value = text

  // Avoid scrolling to bottom
  textArea.style.top = "0"
  textArea.style.left = "0"
  textArea.style.position = "fixed"

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    var successful = document.execCommand("copy")
    var msg = successful ? "successful" : "unsuccessful"
    console.log("Fallback: Copying text command was " + msg)
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err)
  }

  document.body.removeChild(textArea)
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text)
    return
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!")
    },
    function (err) {
      console.error("Async: Could not copy text: ", err)
    }
  )
}
