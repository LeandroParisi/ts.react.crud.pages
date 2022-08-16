import { CustomId } from 'Typing/Types/CustomId'
import { SectionType } from './Enums/SectionType'

export interface IEntityViewSection {
  icon : any
  title : string
  subtitle? : string
  content : {
    values : Array<string | number>,
    type : SectionType
  }
}

export interface IEntityView {
  id : CustomId
  name : string
  image : string
  isActive : boolean
  sections : Array<IEntityViewSection>
}
