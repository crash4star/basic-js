module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];

  if (Array.isArray(members)) {
    members.forEach(name => {
      if (typeof name == 'string') {
        dreamTeamName.push(name.trim().toUpperCase().split('')[0]);
      }
    });
    return dreamTeamName.sort().join('');
  } else {
    return false;
  }
};module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];

  if (Array.isArray(members)) {
    members.forEach(name => {
      if (typeof name == 'string') {
        dreamTeamName.push(name.trim().toUpperCase().split('')[0]);
      }
    });
    return dreamTeamName.sort().join('');
  } else {
    return false;
  }
};