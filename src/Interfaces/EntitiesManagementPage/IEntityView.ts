import { SectionType } from "./Enums/SectionType"

export interface IEntityView<TId extends number | string> {
  id : TId
  name : string
  image : string
  isActive : boolean
  sections : Array<IEntityViewSection>
}

export interface IEntityViewSection {
  icon : any
  title : string
  subtitle? : string
  content : {
    values : Array<string | number>,
    type : SectionType
  }
}
