/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var another = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  let rows = Array.from({ length: numRows }, () => ''); // 행 배열 초기화
  let currRow = 0;
  let direction = -1; // 방향 제어: 1 (아래), -1 (위)

  for (let char of s) {
    rows[currRow] += char;

    // 방향 변경 (맨 아래 또는 맨 위 도달 시)
    if (currRow === 0 || currRow === numRows - 1) {
      direction *= -1;
    }

    currRow += direction;
  }

  return rows.join(''); // 모든 행을 합쳐 결과 반환
};

/**
 * 
  'P'	0	["P", "", ""]
  'A'	1	["P", "A", ""]
  'Y'	2	["P", "A", "Y"]
  'P'	1	["P", "AP", "Y"]
  'A'	0	["PA", "AP", "Y"]
  'L'	1	["PA", "APL", "Y"]
  'I'	2	["PA", "APL", "YI"]
  'S'	1	["PA", "APLS", "YI"]
  'H'	0	["PAH", "APLS", "YI"]
  'I'	1	["PAH", "APLSI", "YI"]
  'R'	2	["PAH", "APLSI", "YIR"]
  'I'	1	["PAH", "APLSII", "YIR"]
  'N'	0	["PAHN", "APLSII", "YIR"]
  'G'	1	["PAHN", "APLSIIG", "YIR"]
 */
console.log(another('PAYPALISHIRING', 3));
