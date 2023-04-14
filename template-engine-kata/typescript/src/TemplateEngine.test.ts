import { TemplateEngine } from './TemplateEngine'

describe('Template Engine', () => {
  it('should print empty text when entry is empty', () => {
    const templateEngine = new TemplateEngine()
    const text = ''
    const dictionary = {}

    const actual = templateEngine.replace(text, dictionary)

    const expected = ''
    expect(actual).toBe(expected)
  })

  it('should print the text with the variable replaced', () => {
    const templateEngine = new TemplateEngine()
    const text = 'This is a template with ${variable}'
    const dictionary = { 'variable': 'value' }

    const actual = templateEngine.replace(text, dictionary)

    const expected = 'This is a template with value'
    expect(actual).toBe(expected)
  })

  it('should print the text with more than one variable replaced', () => {
    const templateEngine = new TemplateEngine()
    const text = 'This is a text with a ${variable} to be replaced. \n' +
      'And this is another text with ${other-variable} to be replaced. \n' +
      'And this is another text with ${another-variable} to be replaced.'
    const dictionary = {
      'variable': 'value', 
      'other-variable': 'other-value', 
      'another-variable': 'another-value'
    }

    const actual = templateEngine.replace(text, dictionary)

    const expected = 'This is a text with a value to be replaced. \n' +
      'And this is another text with other-value to be replaced. \n' +
      'And this is another text with another-value to be replaced.'
    expect(actual).toBe(expected)
  })

  it('should print the text that replaces all occurrences of the same variable', () => {
    const templateEngine = new TemplateEngine()
    const text = 'This is a text with a ${variable} and ${variable} to be replaced.'
    const dictionary = { 'variable': 'value' }

    const actual = templateEngine.replace(text, dictionary)

    const expected = 'This is a text with a value and value to be replaced.'
    expect(actual).toBe(expected)
  })

  it('should throw error when it does not find the variable in the dictionary', () => {
    const templateEngine = new TemplateEngine()
    const text = 'This is a text with a ${foo} to be replaced.'
    const dictionary = {}

    const action = () => templateEngine.replace(text, dictionary)

    const expectedError = 'The keys [foo] were not found in the dictionary.'
    expect(action).toThrowError(expectedError)
  })

  it('should throw error when variable from dictionary is not used', () => {
    const templateEngine = new TemplateEngine()
    const text = 'This is a text.'
    const dictionary = { 'foo': 'value' }

    const action = () => templateEngine.replace(text, dictionary)

    const expectedError = 'The keys [foo] were not found in text.'
    expect(action).toThrowError(expectedError)
  })

  it('should throw all errors in one concatenated', () => {
    const templateEngine = new TemplateEngine()
    const text = 'This is a text with a ${foo} and ${bar} to be replaced.'
    const dictionary = { 'fizz': 'value', 'buzz': 'value' }

    const action = () => templateEngine.replace(text, dictionary)

    const expectedError = 'The keys [foo, bar] were not found in the dictionary.\n' + 
                          'The keys [fizz, buzz] were not found in text.'
    expect(action).toThrowError(expectedError)
  })

  // TODO: Add more tests for the following types:
  // const dictionary = { 
  //   'number': 1, 
  //   'infinity': Infinity, 
  //   'notANumber': NaN, 
  //   'object': {}, 
  //   'array': [], 
  //   'undefined': undefined, 
  //   'null': null, 
  //   'function': () => {}, 
  //   'promise': Promise.resolve()
  // }

  // TODO: Add more tests for special keys:
  // const dictionary = { 
  //   'space in key': 'value'
  // }
})
