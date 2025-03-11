# Listagem/Tabela

| Elemento         | Classe                    | Descrição                                                                                                           |
| :--------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| `<div>`          | `.cell-container`         | Container do `.cell-wrapper` para situações onde é necessário exebir ellipsis                                       |
| `<div>`          | `.cell-wrapper`           | Deve ser inserido dentro da célula quando houver a necessidade de dividi-la                                         |
| `<div>`          | `.empty`                  | Insere um elemento vazio                                                                                            |
| `<div>`          | `.img-wrapper`            | Engloba e estiliza um elemento `<img>`                                                                              |
| `<table>`        | `.table-card`             | Estiliza a tabela como um card em resolução inferior a 768                                                          |
| `<table>`        | `.table-unbordered`       | Retira apenas as bordas laterais da tabela                                                                         |
| `<table>`        | `.table-unfixed`          | Define o layout da tabela para auto                                                                                 |
| `<table>`        | `.table-unstriped`        | Remove as cores intercaladas nas linhas                                                                             |
| `<table>`        | `.table`                  | Classe principal que estiliza a tabela                                                                              |
| `<td>`           | `.children`               | Estiliza a célula que receberá os subitens                                                                          |
| `<td>`           | `.col-arrow`              | Deve ser inserida na célula que receberá o indicador de agrupamento (seta)                                          |
| `<td>`           | `.collapsed`              | Deve ser inserida na célula que receberá o conteúdo encapsulado                                                     |
| `<td>`           | `.ellipsis`               | Acrescenta reticências quando o tamanho do conteúdo extrapola a largura da célula                                   |
| `<td>`           | `.has-alert`              | Indica a célula que há um alerta no conteúdo                                                                        |
| `<td>`           | `.has-edit`               | Indica a célula que há um campo editável no conteúdo                                                                |
| `<td>`           | `.table-card--td__action` | Deve ser inserida na célula que contém as ações de uma table-card (Editar, excluir...)                              |
| `<td>`           | `.table-card--td__full`   | Deve ser inserida na primeira célula se esta utilizar 100% da sua largura em uma table-card                         |
| `<td>` ou `<th>` | `.col-[5-95]`             | Define o percentual de largura da célula em relação ao espaço disponível da tabela                                  |
| `<td>` ou `<th>` | `.col-fit`                | Ajusta a largura da célula baseando-se no conteúdo                                                                  |
| `<tr>`           | `.indentation`            | Deve ser inserida na linha correspondente ao conteúdo encapsulado, acrescenta uma indentação na lateral esquerda    |
| `<tr>`           | `.no-indentation`         | Deve ser inserido na linha correspondente ao conteúdo encapsulado, remove a identação                               |
| `<tr>`           | `.opened`                 | Informa ao cabeçalho que o conteúdo encapsulado está aberto. É responsável por alterar o status do indicador (seta) |

## Padrão

```html
<table class="table">
  <thead>
    <tr>
      <th>
        <a href="">
          Ano
        </a>
      </th>
    </tr>
  </thead>
  <tbody ng-init="items = [{},{},{}]">
    <tr
      ng-repeat-start="item in items track by $index">
      <td>
        2017
      </td>
    </tr>
  </tbody>
</table>
```

## Padrão + Cell Wrapper

```html
<table class="table">
  <thead>
    <tr>
      <th>
        <a href="">
          Ano
        </a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="cell-container">
            <span class="cell-wrapper">
                <img  src="" />
            </span>
            <span class="cell-wrapper">
                Texto
            </span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

## Agrupamento

```html
<!-- Primeiro nível -->
<table class="table table-unstriped table-unfixed">
  <!-- Primeiro nível > Cabeçalho -->
  <thead>
    <tr>
      <th></th>
      <th>
        <a href="">
          Ano
          <i class="material-icons">arrow_upward</i>
        </a>
      </th>
    </tr>
  </thead>
  <!-- Primeiro nível > Corpo -->
  <tbody ng-init="items = [{},{},{}]">
    <!-- Primeiro nível > Cabeçalho do agrupamento -->
    <tr
      ng-repeat-start="item in items track by $index"
      ng-class="{'opened': item.collapsed}">
      <td class="col-fit col-arrow">
        <button
          class="btn btn-link btn-sm"
          ng-click="item.collapsed = !item.collapsed">
          <i class="material-icons">keyboard_arrow_down</i>
        </button>
      </td>
      <td>
        2017
      </td>
    </tr>
    <!-- Primeiro nível > Corpo do agrupamento -->
    <tr
      ng-repeat-end
      class="indentation">
      <td
        colspan="2"
        ng-class="{'collapsed': !item.collapsed}">
        <div data-collapse="!item.collapsed">
          <!-- Segundo nível -->
          <table class="table table-unstriped table-unfixed">
            <!-- Segundo nível > Cabeçalho -->
            <thead>
              <tr>
                <th></th>
                <th>
                  <a href="#">
                    Descrição
                    <i class="order material-icons">arrow_upward</i>
                  </a>
                </th>
                <th>
                  <a href="#">
                    Data inicial
                    <i class="order material-icons">arrow_upward</i>
                  </a>
                </th>
                <th>
                  <a href="#">
                    Data final
                    <i class="order material-icons">arrow_upward</i>
                  </a>
                </th>
                <th>
                  <a href="#">
                    Data de vencimento
                    <i class="order material-icons">arrow_upward</i>
                  </a>
                </th>
                <th></th>
              </tr>
            </thead>
            <!-- Segundo nível > Corpo -->
            <tbody ng-init="item.subitems = [{},{},{},{}]">
              <!-- Segundo nível > Cabeçalho do agrupamento -->
              <tr
                ng-repeat-start="subitem in item.subitems track by $index"
                ng-class="{'opened': subitem.subCollapsed}">
                <td class="col-fit col-arrow">
                  <button
                    class="btn btn-link btn-sm"
                    ng-click="subitem.subCollapsed = !subitem.subCollapsed">
                    <i class="material-icons">keyboard_arrow_down</i>
                  </button>
                </td>
                <td class="col-25">
                  <!-- Segundo nível > Célula com avatar e informação complementar -->
                  <div class="cell-wrapper">
                    <div class="img-wrapper">
                      <img
                        alt=""
                        src="http://design.bethacloud.com.br/doc/img/avatar.png">
                    </div>
                  </div>
                  <div class="cell-wrapper">
                    <span>Informação principal</span>
                    <br>
                    <span class="info">Informação complementar</span>
                  </div>
                </td>
                <td>20/02/2017</td>
                <td>20/02/2017</td>
                <td>20/02/2017</td>
                <td class="col-fit">
                  <a href="" title="Editar">
                    <i class="fa fa-fw fa-pencil"></i>
                  </a>
                  <a href="" title="Excluir">
                    <i class="fa fa-fw fa-trash-o"></i>
                  </a>
                </td>
              </tr>
              <!-- Segundo nível > Corpo do agrupamento -->
              <tr
                ng-repeat-end
                class="no-indentation">
                <td
                  colspan="6"
                  ng-class="{'collapsed': !subitem.subCollapsed}">
                  <div data-collapse="!subitem.subCollapsed">
                    <!-- Terceiro nível -->
                    <table class="table table-unfixed">
                      <!-- Terceiro nível > Cabeçalho -->
                      <thead>
                        <tr>
                          <th></th>
                          <th class="col-25">
                            <a href="">
                              Descrição
                              <i class="material-icons">arrow_upward</i>
                            </a>
                          </th>
                          <th>
                            <a href="">
                              Data inicial
                              <i class="material-icons">arrow_upward</i>
                            </a>
                          </th>
                          <th>
                            <a href="">
                              Data final
                              <i class="material-icons">arrow_upward</i>
                            </a>
                          </th>
                          <th>
                            <a href="">
                              Data de vencimento
                              <i class="material-icons">arrow_upward</i>
                            </a>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <!-- Terceiro nível > Corpo -->
                      <tbody ng-init="subitem.children = [{},{},{},{}]">
                        <tr ng-repeat="child in subitem.children track by $index">
                          <td></td>
                          <td class="ellipsis">
                            Descrição
                          </td>
                          <td>20/02/2017</td>
                          <td>20/02/2017</td>
                          <td>20/02/2017</td>
                          <td class="col-fit">
                            <a href="" title="Editar">
                              <i class="fa fa-fw fa-pencil"></i>
                            </a>
                            <a href="" title="Excluir">
                              <i class="fa fa-fw fa-trash-o"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Terceiro nível > Paginação -->
                    <div class="row">
                      <div class="col-md-6">
                        <form class="form-inempty">
                          <small>
                            1-20 de 100
                          </small>
                        </form>
                      </div>
                      <div class="col-md-6">
                        <div class="pull-right">
                          <button class="btn btn-default btn-xs disabled">
                            <i class="fa fa-angle-left"></i> Anterior</button>
                          <button class="btn btn-default btn-xs active">1</button>
                          <button class="btn btn-default btn-xs">2</button>
                          <button class="btn btn-default btn-xs">3</button>
                          <button class="btn btn-default btn-xs">4</button>
                          <button class="btn btn-default btn-xs">Próxima
                            <i class="fa fa-angle-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Segundo nível > Paginação -->
          <div class="row">
            <div class="col-md-6">
              <form class="form-inempty">
                <small>
                  1-20 de 100
                </small>
              </form>
            </div>
            <div class="col-md-6">
              <div class="pull-right">
                <button class="btn btn-default btn-xs disabled">
                  <i class="fa fa-angle-left"></i> Anterior</button>
                <button class="btn btn-default btn-xs active">1</button>
                <button class="btn btn-default btn-xs">2</button>
                <button class="btn btn-default btn-xs">3</button>
                <button class="btn btn-default btn-xs">4</button>
                <button class="btn btn-default btn-xs">Próxima
                  <i class="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

## Treelist

```html
<table class="table table-treelist">
  <thead>
    <tr>
      <th class="col-25">
        <div class="cell-indentation">
          <div class="empty"></div>
        </div>
        <a href="">
          <span>Descrição</span>
          <i class="material-icons">arrow_downward</i>
        </a>
      </th>
      <th>
        <span>Gestor</span>
      </th>
      <th class="col-25">
        <span>Colaboradores</span>
      </th>
      <th width="61" class="text-center"></th>
    </tr>
  </thead>
  <tbody>
    <tr ng-class="{'opened' : treeList}">
      <td>
        <div class="cell-indentation">
          <button class="btn btn-xs btn-link" ng-click="treeList = !treeList">
            <i class="material-icons">keyboard_arrow_down</i>
          </button>
        </div>
        Estratégia de Produtos
      </td>
      <td>Marcelo Medeiros</td>
      <td class="col-25">8000</td>
      <td width="61" class="text-center">
        <a href="" title="Editar">
          <i class="material-icons">create
          </i>
        </a>
        <a href="" title="Excluir">
          <i class="material-icons">delete
          </i>
        </a>
      </td>
    </tr>
    <tr>
      <td class="children" ng-class="{'collapsed' : !treeList}" colspan="4">
        <div data-collapse="!treeList">
          <table class="table">
            <tbody>
              <tr>
                <td class="col-25">
                  <div class="cell-indentation">
                    <div class="empty"></div>
                    <div class="empty"></div>
                  </div>
                  Design
                </td>
                <td>Marcelo Medeiros</td>
                <td class="col-25">4</td>
                <td width="61" class="text-center">
                  <a href="" title="Editar">
                    <i class="material-icons">create
                    </i>
                  </a>
                  <a href="" title="Excluir">
                    <i class="material-icons">delete
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="col-25">
                  <div class="cell-indentation">
                    <div class="empty"></div>
                    <div class="empty"></div>
                  </div>
                  Universidade Corporativa
                </td>
                <td>Larissa</td>
                <td class="col-25">15</td>
                <td width="61" class="text-center">
                  <a href="" title="Editar">
                    <i class="material-icons">create
                    </i>
                  </a>
                  <a href="" title="Excluir">
                    <i class="material-icons">delete
                    </i>
                  </a>
                </td>
              </tr>
              <tr ng-class="{'opened' : treeList2}">
                <td class="col-25">
                  <div class="cell-indentation">
                    <div class="empty"></div>
                    <button class="btn btn-xs btn-link" ng-click="treeList2 = !treeList2">
                      <i class="material-icons">keyboard_arrow_down</i>
                    </button>
                  </div>
                  Central de Suporte
                </td>
                <td>Luiz Carlos Souza</td>
                <td class="col-25">5000</td>
                <td width="61" class="text-center">
                  <a href="" title="Editar">
                    <i class="material-icons">create
                    </i>
                  </a>
                  <a href="" title="Excluir">
                    <i class="material-icons">delete
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="children" ng-class="{'collapsed' : !treeList2}" colspan="4">
                  <div data-collapse="!treeList2">
                    <table class="table">
                      <tbody>
                        <tr ng-class="{'opened' : treeList3}">
                          <td class="col-25">
                            <div class="cell-indentation">
                              <div class="empty"></div>
                              <div class="empty"></div>
                              <button class="btn btn-xs btn-link" ng-click="treeList3 = !treeList3">
                                <i class="material-icons">keyboard_arrow_down</i>
                              </button>
                            </div>
                            Divisão Técnica
                          </td>
                          <td>Augusto Miguel Hawk</td>
                          <td class="col-25">15</td>
                          <td width="61" class="text-center">
                            <a href="" title="Editar">
                              <i class="material-icons">create
                              </i>
                            </a>
                            <a href="" title="Excluir">
                              <i class="material-icons">delete
                              </i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="children" ng-class="{'collapsed' : !treeList3}" colspan="4">
                            <div data-collapse="!treeList3">
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <td class="col-25 ellipsis">
                                      <div class="cell-indentation">
                                        <div class="empty"></div>
                                        <div class="empty"></div>
                                        <div class="empty"></div>
                                        <div class="empty"></div>
                                      </div>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore iste. Ad iste numquam consequuntur, necessitatibus
                                      distinctio laborum! Nobis debitis temporibus repellat hic. Molestiae obcaecati
                                      recusandae praesentium tempore nostrum accusantium!
                                    </td>
                                    <td>Tony Estaile</td>
                                    <td class="col-25">30</td>
                                    <td width="61" class="text-center">
                                      <a href="" title="Editar">
                                        <i class="material-icons">create
                                        </i>
                                      </a>
                                      <a href="" title="Excluir">
                                        <i class="material-icons">delete
                                        </i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class="col-25">
                            <div class="cell-indentation">
                              <div class="empty"></div>
                              <div class="empty"></div>
                              <div class="empty"></div>
                            </div>
                            Atendimento
                          </td>
                          <td>Valentina de Souza Souza</td>
                          <td class="col-25">50</td>
                          <td width="61" class="text-center">
                            <a href="" title="Editar">
                              <i class="material-icons">create
                              </i>
                            </a>
                            <a href="" title="Excluir">
                              <i class="material-icons">delete
                              </i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr ng-class="{'opened' : groupSingle}">
      <td>
        <div class="cell-indentation">
          <div class="empty"></div>
        </div>
        Fábrica de Software
      </td>
      <td>Fábio Godoy</td>
      <td class="col-25">10000</td>
      <td width="61" class="text-center">
        <a href="" title="Editar">
          <i class="material-icons">create
          </i>
        </a>
        <a href="" title="Excluir">
          <i class="material-icons">delete
          </i>
        </a>
      </td>
    </tr>
  </tbody>
</table>
```

## Table card

```html
<table class="table table-card">
  <thead>
    <tr>
      <th>
        <a href="">
          Ano
        </a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table-card--td__full">
        2019
      </td>
      <td class="table-card__td--action">
         <button class="btn btn-xs btn-link" title="Excluir">
              <i class="fa fa-trash-o"></i>
          </button>
      </td>
    </tr>
  </tbody>
</table>
```