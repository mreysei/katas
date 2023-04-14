export class TemplateEngine {
  constructor() {}

  public replace(text: string, dictionary: Record<string, any>): string {
    const variableList = Object.entries(dictionary)
    
    const replacedText = variableList.reduce((replacedText, [key, value]) => {
      return replacedText.replaceAll("${" + key + "}", value)
    }, text)
    
    const errors = this.getErrorsFrom(text, replacedText, dictionary)
    if (errors.length > 0) {
      throw new Error(errors.join('\n'))
    }
    return replacedText
  }

  private getErrorsFrom(text: string, replacedText: string, dictionary: Record<string, any>): string[] {
    const errors: string[] = []
        
    const variableUnused = Object.keys(dictionary).filter((key) => !text.includes(key))
    const unreplacedKeys = replacedText.match(/\$\{.*?\}/g)?.map(key => key.replace(/\$\{|\}/g, '')) || []

    if (unreplacedKeys.length > 0) {
      errors.push(`The keys [${unreplacedKeys.join(', ')}] were not found in the dictionary.`)
    }
    if (variableUnused.length > 0) {
      errors.push(`The keys [${variableUnused.join(', ')}] were not found in text.`)
    }

    return errors
  }
}