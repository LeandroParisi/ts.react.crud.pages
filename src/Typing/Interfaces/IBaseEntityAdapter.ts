import { IEntityView } from 'Typing/Interfaces/EntitiesManagementPage/IEntityView'
import { IEntityEdit } from 'Typing/Interfaces/EntityEditModal/IEntityEdit'

export interface IBaseEntityAdapter<TEntity> {
  DefaultEntity : TEntity

  AdaptEntityToManagementView(entity : TEntity) : IEntityView

  AdaptEntityToEditView<TValue, TCustomFields>(entity : TEntity) : IEntityEdit<TValue, TCustomFields>
}
