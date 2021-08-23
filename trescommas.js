function trescommas(int) {
  if (typeof int === "string") {
    return "Feed me integers please"
  } else if (int === 0) {
    return "$1,000,000,000"
  } else {
    return `$${(new Intl.NumberFormat().format(Math.abs(int * 1000000000)))}`
  }
}

module.exports = { trescommas };


console.log(trescommas("9"))
console.log(typeof "9")