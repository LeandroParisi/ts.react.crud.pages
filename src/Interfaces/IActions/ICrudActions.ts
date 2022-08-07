import { CustomId } from "Types/CustomId";
import { IActionResponse } from "./IActionResponse";

export type ICreateEntityAction<TEntity> = (params : {body : TEntity}) => IActionResponse

export type IUpdateEntityAction<TId extends CustomId, TEntity> = (params : {id: TId, body : TEntity}) => IActionResponse

export type IDeleteEntityAction<TId extends CustomId> = (id : TId) => IActionResponse

export type IActivateEntityAction<TId extends CustomId> = (id : TId) => IActionResponse

export type IDeactivateEntityAction<TId extends CustomId> = (id : TId) => IActionResponse

export type IGetAllEntitiesAction<TEntity> = (query? : string) => Array<TEntity>

export interface ICrudActions<TId extends CustomId, TEntity> {
  CreateEntity? : ICreateEntityAction<TEntity>
  UpdateEntity? : IUpdateEntityAction<TId, TEntity>
  DeleteEntity? : IDeleteEntityAction<TId>
  ActivateEntity? : IActivateEntityAction<TId>
  DeactivateEntity? : IDeactivateEntityAction<TId>
  GetAllEntities? : IGetAllEntitiesAction<TEntity>
}

