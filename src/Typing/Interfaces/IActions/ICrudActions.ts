import { CustomId } from 'Typing/Types/CustomId'
import { IActionResponse } from './IActionResponse'

export type ICreateEntityAction<TEntity> = (params : {body : TEntity}) => IActionResponse

export type IUpdateEntityAction<TEntity> = (params : {id: CustomId, body : TEntity}) => IActionResponse

export type IDeleteEntityAction = (id : CustomId) => IActionResponse

export type IActivateEntityAction = (id : CustomId) => IActionResponse

export type IDeactivateEntityAction = (id : CustomId) => IActionResponse

export type IGetAllEntitiesAction<TEntity> = (query? : string) => Array<TEntity>

export interface ICrudActions<TEntity> {
  CreateEntity? : ICreateEntityAction<TEntity>
  UpdateEntity? : IUpdateEntityAction<TEntity>
  DeleteEntity? : IDeleteEntityAction
  ActivateEntity? : IActivateEntityAction
  DeactivateEntity? : IDeactivateEntityAction
  GetAllEntities? : IGetAllEntitiesAction<TEntity>
}
