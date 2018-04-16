/* 
 * @param 字符串
 * @param 是否保证原始字符串不变（是否每次匹配后修改原始字符串）
 */
function Match(str, keep) {
  var match = {
    originStr: str,
    str: str
  };

  match.loop = function(reg, callback) {
    var matches;
    while ((matches = match.str.match(reg))) {
      if (typeof callback === 'function') {
        match.str = callback(match.str, matches) || '';
      }
    }
    if (keep) {
      match.str = match.originStr;
    }
    return match;
  };

  return match;
}

module.exports = Match;
