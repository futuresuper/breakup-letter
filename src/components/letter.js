export const letter = (
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
) => {
  return `ATTENTION: ${ceo ? ceo + ", CEO of " : ""}${fund}

Due to your failure to consider climate change when investing for my future, I have moved my super out of ${fund}.

I chose a fund that will use my super to sustain lasting climate action with investments that don’t compromise my future and will benefit me in my retirement. I don’t believe you did that because:

${checked1 ? "- " + points[1] : ""}${
    checked2
      ? `
- ` + points[2]
      : ""
  }${
    checked3
      ? `
- ` + points[3]
      : ""
  }${
    checked4
      ? `
- ` + points[4]
      : ""
  }${
    checked5
      ? `
- ` + points[5]
      : ""
  }${
    checked6
      ? `
- ` + points[6]
      : ""
  }${
    checked7
      ? `
- ` + points[7]
      : ""
  }${
    checked8
      ? `
- ` + points[8]
      : ""
  }${
    checkedOther1 && textOther1
      ? `
- ` + textOther1
      : ""
  }

You should be protecting our future with the financial influence you have been entrusted with, and people would be shocked at how you invest their super.

I’m asking you to:

${checked9 ? `- ` + points[9] : ""}${
    checked10
      ? `
- ` + points[10]
      : ""
  }${
    checked11
      ? `
- ` + points[11]
      : ""
  }${
    checked12
      ? `
- ` + points[12]
      : ""
  }${
    checkedOther2 && textOther2
      ? `
- ` + textOther2
      : ""
  }

These changes are essential to the safety of our future.

${checked13 ? `- ` + points[13] : ""}${
    checked14
      ? `
- ` + points[14]
      : ""
  }${checkedOther3 && textOther3 ? "- " + textOther3 : ""}

I made my choice and moved my money. I chose a fund investing in companies and technology that will improve my future.

Don’t sit on the fence. It’s your responsibility to be a leader in cleaning up the super industry.

Signed,
${myName}
`
}
