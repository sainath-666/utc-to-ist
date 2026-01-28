function utcToIst(date = new Date()) {
  const utc = new Date(date);
  return new Date(utc.getTime() + 5.5 * 60 * 60 * 1000);
}

function istToUtc(date = new Date()) {
  const ist = new Date(date);
  return new Date(ist.getTime() - 5.5 * 60 * 60 * 1000);
}

function formatIst(date = new Date()) {
  return utcToIst(date).toISOString().replace("T", " ").slice(0, 19);
}

module.exports = {
  utcToIst,
  istToUtc,
  formatIst
};
