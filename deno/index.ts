const FILENAME = './content.txt'
const SECONDS_SHIFTED = 3 * 60 + 2
const regEx = /\d+/g

const content = await Deno.readTextFile(FILENAME)
console.log(content)
console.log(content.match(regEx))
const lines = content.split('\n')
console.log(lines)
