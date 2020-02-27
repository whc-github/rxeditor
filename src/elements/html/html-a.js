import {RXElement} from "../rxelement"

export class HTMLA extends RXElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlA'
    this.toolboxInfo.elementName = "A"
    this.className = 'HTMLA'

    this.editMarginStyle.padding = ''


    this.unshiftGroup({
      id:'aOptions',
      label:'Link Options',
    })

    this.meta.tag = 'a'
    this.label = "a"
    this.meta.innerHTML = "Sample Link "
    this.becomeToTextfield()
  }

  make(){
    return new HTMLA
  } 
}
