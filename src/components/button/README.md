## Estados
| Elemento         | Classe                    | Descrição                                                                                                           |
| :--------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| `<button>`       | `.btn-default`            | Define o botão com a cor branca com borda cinza                                                                     |
| `<button>`       | `.btn-success`            | Define o botão com a cor verde                                                                                      |
| `<button>`       | `.btn-primary`            | Define o botão com a cor azul                                                                                       |
| `<button>`       | `.btn-danger`             | Define o botão com a cor vermelha                                                                                   |
| `<button>`       | `.btn-warning`            | Define o botão com a cor amarela                                                                                    |
| `<button>`       | `.btn-info`               | Define o botão com a cor azul claro                                                                                 |
| `<button>`       | `.btn-link`               | Retira a borda do botão                                                                                             |
| `<button>`       | `.btn-add`                | Adiciona o símbolo de + no início do botão                                                                          |
| `<button>`       | `.active`                 | Coloca o botão em estado de ativo                                                                                   |
| `<button>`       | `.disabled`               | Desabilita o botão                                                                                                  |
| `<button>`       | `.btn-circle`             | Transforma o botão em um círculo                                                                                    |


## Tamanhos
| Elemento         | Classe                    | Descrição                                                                                                           |
| :--------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| `<button>`       | `.btn-lg`                 | Tamanho grande                                                                                                      |
| `<button>`       | `.btn-sm`                 | Tamanha médio                                                                                                       |
| `<button>`       | `.btn-xs`                 | Tamanho pequeno                                                                                                     |

## Como usar

### Button circle com ações

```html
<div class="corner-action corner-action-right">
  <div class="btn-group" uib-dropdown>
      <button class="btn btn-primary btn-circle dropdown-toggle " title="Opções" data-toggle="dropup" uib-dropdown-toggle>
          <span class="btn-circle__icon--closed">
              <i class="fa fa-fw fa-share-alt"></i>
          </span>
          <span class="btn-circle__icon--opened">
              <i class="fa fa-fw fa-close"></i>
          </span>
      </button>
      <ul class="dropdown-menu dropdown-menu-right">
          <li>
              <a href="" class="btn-circle__options--description">
                  Emitir nota
              </a>
              <a class="btn btn-circle btn-circle__options--icon"><i class="fa fa-file-text fa-fw"></i></a> 
          </li>
          <li>
              <a href="" class="btn-circle__options--description">
                  Novo tomador                    
              </a>
              <a class="btn btn-circle btn-circle__options--icon"><i class="fa fa-users fa-fw"></i></a>
          </li>
          <li>
              <a href="" class="btn-circle__options--description">
                  Transferir créditos                    
              </a>
              <a class="btn btn-circle btn-circle__options--icon"><i class="fa fa-credit-card fa-fw"></i></a>
          </li>
          <li>
              <a href="" class="btn-circle__options--description">
                  Importar lotes de RPS                    
              </a>
              <a class="btn btn-circle btn-circle__options--icon"><i class="fa fa-file fa-fw"></i></a>
          </li>                                                                    
      </ul>
  </div>
</div>
```