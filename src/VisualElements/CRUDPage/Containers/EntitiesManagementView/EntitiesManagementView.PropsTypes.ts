/* eslint-disable no-use-before-define */
import { ICrudActions } from 'Typing/Interfaces/IActions/ICrudActions'
import { IBaseEntityAdapter } from 'Typing/Interfaces/IBaseEntityAdapter'

export interface EntitiesManagementViewProps<TEntityTypes, TEntity> {
  entityAdapter : IBaseEntityAdapter<TEntity>
  type : keyof TEntityTypes
  entities : Array<TEntity>
  crudActionProvider : ICrudActions<TEntity>
  classNames? : EntityManagementCSSClasses
  options? : EntitiesManagementOptions
}

export interface EntityManagementCSSClasses {
  containerClass? : string
  addIconClass? : string
  editModalClass? : string
}

export interface EntitiesManagementOptions {
  pagination? : {

  }
}
