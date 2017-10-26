// ast-pretty-print is really handy :)
const printAST = require('ast-pretty-print')
const {createMacro} = require('babel-macros')

module.exports = createMacro(greetingMacro)

function greetingMacro({references, babel}) {
  const {default: hello = [], goodbye = []} = references
  hello.forEach(reference => {
    // console.log(printAST(reference))
    reference.replaceWith(babel.types.stringLiteral('hi there'))
  })
  goodbye.forEach(reference => {
    // console.log(printAST(reference))
    reference.replaceWith(babel.types.stringLiteral('goodbye friend'))
  })
}
