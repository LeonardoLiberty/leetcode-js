function Power (base, exponent) {
  function positivePower (exponent) {
    if (exponent === 0) return 1
    if (exponent === 1) return base

    let re
    if (exponent % 2 === 0) {
      let half = positivePower(exponent / 2)
      re = half * half
    } else {
      let half = positivePower((exponent - 1) / 2)
      re = half * half * base
    }
    return re
  }

  if (exponent >= 0) {
    return positivePower(exponent)
  } else {
    return 1 / positivePower(-exponent)
  }
}

export default Power
