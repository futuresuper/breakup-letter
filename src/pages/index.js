import React, { useState } from "react"
import Notifications, { notify } from "react-notify-toast"
import "../components/index.css"
import Footer from "../components/Footer"
import copy from "../helpers/clipboard"
import { points } from "../components/points"
import { letter } from "../components/letter"
import { funds } from "../components/funds"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
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
  ShareContainer,
  Image,
  ImageGrid,
  ReferBox,
  ShareLinkContainer,
  HeadingShare,
  ShareLink,
} from "../components/elements"
import {
  Checkbox,
  Checkmark,
  Checktext,
  BrowserDefaultCheckbox,
} from "../components/checkbox"
import img1 from "../images/bye-buy.png"
import img2 from "../images/invest-others.png"
import img3 from "../images/not-you.png"
import img4 from "../images/save-future.png"
import { useQueryParam, StringParam } from "use-query-params"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Home() {
  const [page, setPage] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [matchedFundList, setMatchedFundList] = useState([])
  const [rcode] = useQueryParam("rcode", StringParam)
  const [rlink] = useState(
    rcode ? "futuresuper.com.au?r=" + rcode : "futuresuper.com.au"
  )
  const [firstName] = useQueryParam("first", StringParam)
  const [lastName] = useQueryParam("last", StringParam)
  const [myName, setMyName] = useState(
    firstName && lastName ? firstName + " " + lastName : ""
  )
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

  const copyShareLink = () => {
    copy("https://www." + rlink)
    notify.show("Copied personal link ????", "success")
    trackCustomEvent({
      category: "Breakup Letter",
      action: "Click",
      label: "Copied Personal Share Link",
    })
  }

  const copyLetter = () => {
    copy(getLetter())
    notify.show("Copied Letter ???", "success")
    trackCustomEvent({
      category: "Breakup Letter",
      action: "Click",
      label: "Copied Letter",
    })
  }

  const copySubject = () => {
    copy("Why I left " + fund)
    notify.show("Copied Subject Line ????", "success")
    trackCustomEvent({
      category: "Breakup Letter",
      action: "Click",
      label: "Copied Subject Line",
    })
  }

  const copyEmail = () => {
    copy(fundEmail)
    notify.show("Copied Email Address ????", "success")
    trackCustomEvent({
      category: "Breakup Letter",
      action: "Click",
      label: "Copied Email Address",
    })
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
      showError("Please add your name", 300)
      return
    }
    if (!fund) {
      showError("Please choose your Fund", 600)
      return
    }
    if (!checked1 && !checked2 && (!checkedOther1 || !textOther1)) {
      showError("Please select at least one reason", 800)
      return
    }
    if (!checked3 && !checked4 && (!checkedOther2 || !textOther2)) {
      showError("Please make at least one demand", 1200)
      return
    }
    if (!checked5 && !checked6 && (!checkedOther3 || !textOther3)) {
      showError("Please request a reply", 1450)
      return
    }
    setPage(2)
    window.scrollTo(0, 0)
    trackCustomEvent({
      category: "Breakup Letter",
      action: "Click",
      label: "Clicked Create Letter Button",
    })
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
    trackCustomEvent({
      category: "Breakup Letter",
      action: "Click",
      label: "Selected Fund",
    })
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
      <Helmet>
        <script src="https://www.googleoptimize.com/optimize.js?id=GTM-5QGGPRK"></script>
      </Helmet>
      <SEO
        title="Send A Letter To Your Old Fund | Future Super"
        description="Switching super felt pretty good right? But what next? Write to your old fund and tell them why you left."
        keywords={[`future`, `super`, `breakup`, `letter`]}
        image="https://uploads-ssl.webflow.com/5ec37dbb4834011cb8cd3469/5efacd0c3672ef40a9d5b739_FutureSuperOGimage.png"
        url="https://letter.futuresuper.com.au/"
        socialHeadline="Send A Message To Your Old Fund"
      />
      <Notifications />
      <Logo />
      <Container>
        {page === 1 && (
          <div>
            <Heading>
              SWITCHING SUPER FELT GOOD, RIGHT? CUSTOMISE THE EMAIL BELOW AND
              WE???LL HELP YOU SEND IT TO YOUR OLD FUND.
            </Heading>
            <FullNameDetail>
              Type in your full name, so your old super fund knows exactly whose
              money they are missing out on.
            </FullNameDetail>
            <DownArrow />
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
                height: "60px",
                minHeight: "10vw",
              }}
            >
              <Input
                placeholder="Your full name"
                value={myName}
                onChange={e => setMyName(e.target.value)}
                style={{
                  height: 60,
                  boxSizing: "border-box",
                  minHeight: "10vw",
                }}
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
                Super has the power to have a positive impact on the world, but
                your fund wasn???t investing in things I believe in. So I chose a
                fund that will use my super in ways that shape a better future.
                I moved my money because:
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
              {renderOtherCheckbox(
                checkedOther1,
                setCheckedOther1,
                "TYPE YOUR OWN HERE",
                textOther1,
                setTextOther1
              )}
              <P>
                I???m asking you to change, on behalf of people who don???t know
                where their super is going yet. It's your responsibility to do
                more to protect the retirement of the people you represent.
              </P>
              <P>You should:</P>
              <Note>
                Make
                <br />
                Your
                <br />
                Demands
                <br />
              </Note>
              {renderCheckbox(checked3, setChecked3, points[3])}
              {renderCheckbox(checked4, setChecked4, points[4])}
              {renderOtherCheckbox(
                checkedOther2,
                setCheckedOther2,
                "MAKE YOUR OWN DEMANDS HERE",
                textOther2,
                setTextOther2
              )}
              <P>
                This is the minimum you can do to respond to the risks of
                climate change and prepare people for the future.
              </P>
              <Note>
                Demand
                <br />
                A
                <br />
                Reply
                <br />
              </Note>
              {renderCheckbox(checked5, setChecked5, points[5])}
              {renderCheckbox(checked6, setChecked6, points[6])}
              {renderOtherCheckbox(
                checkedOther3,
                setCheckedOther3,
                "ADD YOUR OWN REQUEST HERE",
                textOther3,
                setTextOther3
              )}
              <P>
                It???s your responsibility to be a leader in cleaning up the super
                industry. If you sit on the fence, you only risk losing more
                people like me.
              </P>
              <P>Signed,</P>
              <MyName>{myName}</MyName>
            </LetterContainer>
            <div style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit}>Create letter</Button>
              <Small>
                This letter is from you, so you can personalise it before you
                hit send.
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
            <P>It???s time to add your voice to the mix and demand change.</P>
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
                    maxWidth: 700,
                    justifyContent: "center",
                    marginLeft: "8%",
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
              <Button
                onClick={() => {
                  setPage(3)
                  window.scrollTo(0, 0)
                  trackCustomEvent({
                    category: "Breakup Letter",
                    action: "Click",
                    label: "Clicked I Sent It Button",
                  })
                }}
              >
                I sent it
              </Button>
            </div>
          </div>
        )}
        {page === 3 && (
          <div>
            <Heading>
              Awesome Stuff{myName ? " " + myName.split(" ")[0] : ""}! you???re
              one of
            </Heading>
            <Heading
              black
              style={{
                fontSize: "12vw",
                margin: 0,
                lineHeight: "100%",
                webkitTextStroke: "3px black",
                webkitTextFillColor: "transparent",
              }}
            >
              53
            </Heading>
            <Heading black>
              Future Super members To write to your old fund in the last 30
              days.
            </Heading>
            <Heading black>Want more simple ways You can make change?</Heading>
            <ShareContainer>
              <HeadingShare>Make It Count</HeadingShare>
              <P>Share your unique referral code</P>
              <ReferBox>
                <ShareLinkContainer>
                  <ShareLink
                    onClick={() =>
                      window.open("https://www." + rlink, "_blank")
                    }
                  >
                    {rlink}
                  </ShareLink>
                </ShareLinkContainer>
                <SmallButton
                  onClick={copyShareLink}
                  style={{ height: 50, paddingBottom: 0 }}
                >
                  Copy
                </SmallButton>
              </ReferBox>

              <Small style={{ marginTop: 40 }}>
                We???ll track if people make the switch so we can thank you.
              </Small>
            </ShareContainer>
            <ShareContainer>
              <HeadingShare>Get social</HeadingShare>
              <P>Share a graphic tile</P>
              <ImageGrid>
                <Image src={img1} alt="Bye Bye"></Image>
                <Image src={img2} alt="Not You"></Image>
                <Image src={img3} alt="Save The Future"></Image>
                <Image src={img4} alt="Invest In Others"></Image>
              </ImageGrid>
              <Small>
                Grace your social media with a whimsical image about the power
                of super.
              </Small>
            </ShareContainer>
          </div>
        )}
      </Container>
      <Footer />
    </React.Fragment>
  )
}
