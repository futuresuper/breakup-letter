import React, { useState } from "react"
import Notifications, { notify } from "react-notify-toast"
import "../components/index.css"
import copy from "../helpers/clipboard"
import { points } from "../components/points"
import { letter } from "../components/letter"
import { funds } from "../components/funds"
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
  SmallButton,
  RedLine,
  EmailDetails,
  LetterToCopy,
  LetterToCopyInnerContainer,
  ExpandButton,
  CopyButton,
  Dropdown,
  DropdownItem,
  Link,
} from "../components/elements"
import {
  Checkbox,
  Checkmark,
  Checktext,
  BrowserDefaultCheckbox,
} from "../components/checkbox"

export default function Home() {
  const [page, setPage] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [matchedFundList, setMatchedFundList] = useState([])
  const [myName, setMyName] = useState("")
  const [fund, setFund] = useState("")
  const [fundEmail, setFundEmail] = useState("")
  const [fundForm, setFundForm] = useState("")
  const [ceo, setCeo] = useState("")
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

  const getLetter = () => {
    return letter(
      ceo,
      fund,
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
      checked9,
      checked10,
      checked11,
      checked12,
      checked13,
      checked14,
      checkedOther1,
      checkedOther2,
      checkedOther3,
      textOther1,
      textOther2,
      textOther3,
      points,
      myName
    )
  }

  const copyLetter = () => {
    copy(getLetter())
    notify.show("Copied Letter ✅", "success")
  }

  const copySubject = () => {
    copy("Why I left " + fund)
    notify.show("Copied Subject Line 👍", "success")
  }

  const copyEmail = () => {
    copy(fundEmail)
    notify.show("Copied Email Address 🎉", "success")
  }

  const formatLetter = text => {
    return text.split("\n").map(str => <p>{str}</p>)
  }

  const showError = (text, location) => {
    notify.show(text, "warning")
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

  const handleFundClick = fund => {
    setFund(fund)
    if (funds[fund] && funds[fund].ceoName) {
      setCeo(funds[fund].ceoName)
    }
    if (
      funds[fund] &&
      funds[fund].fundEmail &&
      funds[fund].fundEmail.length > 5
    ) {
      setFundEmail(funds[fund].fundEmail)
    }
    if (funds[fund] && funds[fund].fundContactForm) {
      setFundForm(funds[fund].fundContactForm)
    }
    setShowDropdown(false)
  }

  const renderMatchedFundList = () => {
    return matchedFundList.map(fund => (
      <DropdownItem onClick={() => handleFundClick(fund)}>{fund}</DropdownItem>
    ))
  }

  const filterFunds = str => {
    const matchedFunds = []
    for (const [key, value] of Object.entries(funds)) {
      if (key.toUpperCase().includes(str)) {
        matchedFunds.push(key)
      }
    }
    setMatchedFundList(matchedFunds)
  }

  const handleFundChange = str => {
    setFund(str)
    if (str.length > 2) {
      filterFunds(str.toUpperCase())
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  return (
    <React.Fragment>
      <Notifications />
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
                onChange={e => handleFundChange(e.target.value)}
              ></Input>
              {showDropdown && <Dropdown>{renderMatchedFundList()}</Dropdown>}
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
              Lots of Future Super members are already writing to{" "}
              {fund ? fund : "your old fund"}.
            </Heading>
            <P>It’s time to add your voice to the mix and demand change.</P>
            <Note>
              Step
              <br />1
            </Note>
            <RedLine />
            {fundEmail && (
              <div>
                <P>
                  Start a new email with the subject and contact details
                  supplied below.
                </P>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gridGap: "1vw",
                    maxWidth: 600,
                    justifyContent: "center",
                    marginLeft: "14%",
                    marginTop: "calc(4vw + 10px)",
                    marginBottom: "calc(4vw + 10px)",
                  }}
                >
                  <EmailDetails>TO: {fundEmail}</EmailDetails>
                  <SmallButton onClick={copyEmail}>copy</SmallButton>
                  <EmailDetails>Subject: Why I left {fund}</EmailDetails>
                  <SmallButton onClick={copySubject}>copy</SmallButton>
                </div>
              </div>
            )}
            {!fundEmail && (
              <div style={{ marginBottom: 130 }}>
                <P>Head to {fund}'s contact form:</P>
                <P>
                  <Link onClick={() => window.open(fundForm, "_blank")}>
                    {fundForm}
                  </Link>
                </P>
              </div>
            )}

            <Note>
              Step
              <br />2
            </Note>
            <RedLine />
            <P>Copy & paste the email you created.</P>
            <Small>
              If you'd like to make any final changes you can do that once
              you've pasted it in.
            </Small>
            <LetterToCopy>
              <LetterToCopyInnerContainer expanded={expanded}>
                {formatLetter(getLetter())}
              </LetterToCopyInnerContainer>
              <ExpandButton onClick={() => setExpanded(true)}>
                Expand
              </ExpandButton>
              <CopyButton onClick={copyLetter}>Copy</CopyButton>
            </LetterToCopy>
            <Note>
              Step
              <br />3
            </Note>
            <RedLine />

            <P>
              {fundEmail ? "Hit send on the email" : "Submit the contact form"},
              and then press this button:{" "}
            </P>
            <div style={{ textAlign: "center" }}>
              <Button>I sent it</Button>
            </div>
          </div>
        )}
      </Container>
    </React.Fragment>
  )
}
