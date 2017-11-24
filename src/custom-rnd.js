// simple determinisct password conversion
function stringToSeed(str) {
    return str.split('').map(char=>char.charCodeAt(0)).reduce((c1,c2)=>(3*c1)+(7*c2));
}

Math.seed = function(s) {
    var m_w  = s;
    var m_z  = 987654321;
    var mask = 0xffffffff;

    return function() {
      m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;

      var result = ((m_z << 16) + m_w) & mask;
      result /= 4294967296;

      return result + 0.5;
    }
}