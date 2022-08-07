import { IEntityView } from "Interfaces/EntitiesManagementPage/IEntityView";
import { IEntityEdit } from "Interfaces/EntityEditModal/IEntityEdit";
import { CustomId } from "Types/CustomId";

export interface IBaseEntityAdapter<TEntity, TId extends CustomId> {
  DefaultEntity : TEntity
  
  AdaptEntityToManagementView(entity : TEntity) : IEntityView<TId>

  AdaptEntityToEditView<TValue, TCustomFields>(entity : TEntity) : IEntityEdit<TId, TValue, TCustomFields>
}