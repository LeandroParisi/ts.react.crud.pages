/* eslint-disable no-use-before-define */
import { ICrudActions } from 'Interfaces/IActions/ICrudActions'
import { IBaseEntityAdapter } from 'Interfaces/IBaseEntityAdapter'
import { CustomId } from 'Types/CustomId'

export interface EntitiesManagementViewProps<TId extends CustomId, TEntityTypes, TEntity> {
  entityAdapter : IBaseEntityAdapter<TEntity, TId>
  type : keyof TEntityTypes
  crudActionProvider : ICrudActions<TId, TEntity>
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
