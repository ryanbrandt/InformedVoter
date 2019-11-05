/**
 * @param {String} status FEC coded candidate status
 * @returns decoded candidate status
 */
export function decodeStatus(status) {
  switch (status) {
    case "C":
      return "Current";
    case "P":
      return "Prior";
    case "N":
      return "Not Yet Candidate";
    case "F":
      return "Future Candidate";
    default:
      return "N/A";
  }
}

/**
 * @param {String} party FEC coded political party
 * @returns decoded political party
 */
export function decodeParty(party) {
  switch (party) {
    case "DEM":
      return "Democrat";
    case "REP":
      return "Republican";
    case "SOC":
      return "Socialist";
    case "GRE":
      return "Green";
    case "LIB":
      return "Libertarian";
    default:
      return "N/A";
  }
}

/**
 * @param {String} office FEC coded office
 * @returns decoded office
 */
export function decodeOffice(office) {
  switch (office) {
    case "P":
      return "President";
    case "S":
      return "Senate";
    case "H":
      return "House";
    default:
      return "N/A";
  }
}
