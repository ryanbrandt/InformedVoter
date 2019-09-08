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
