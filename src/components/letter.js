export const letter = (
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
) => {
  return `ATTENTION: ${ceo ? ceo + ", CEO of " : ""}${fund}

Due to your failure to consider climate change when investing for my future, I have moved my super out of ${fund}.

Super has the power to have a positive impact on the world, but your fund wasn’t investing in things I believe in. So I chose a fund that will use my super in ways that shape a better future. I moved my money because:
${
  checked1
    ? `
- ` + points[1]
    : ""
}${
    checked2
      ? `
- ` + points[2]
      : ""
  }${
    checkedOther1 && textOther1
      ? `
- ` + textOther1
      : ""
  }

I’m asking you to change, on behalf of people who don’t know where their super is going yet. It's your responsibility to do more to protect the retirement of the people you represent.

You should:
${
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
    checkedOther2 && textOther2
      ? `
- ` + textOther2
      : ""
  }

This is the minimum you can do to respond to the risks of climate change and prepare people for the future.
${
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
    checkedOther3 && textOther3
      ? `
- ` + textOther3
      : ""
  }

It’s your responsibility to be a leader in cleaning up the super industry. If you sit on the fence, you only risk losing more people like me.

Signed,
${myName}
`
}
