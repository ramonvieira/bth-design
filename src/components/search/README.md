# Pesquisa

## Estrutura

### Bloco

| Elemento | Classe        | Descrição           |
| :------- | :------------ | :------------------ |
| `<div>`  | `.bth-seach`  | Container principal |

### Elementos

| Elemento | Classe                         | Descrição                                                                    |
| :------- | :----------------------        |------------------------------------------------------------------------------|
| `<div>`  | `.input-group-search`          | Elemento que engloba os itens da pesquisa                                    |
| `<div>`  | `.bth-popover-refine-filter`   | Elemento que estiliza a popover de refinar pesquisa                          |
| `<div>`  | `.bth-refine-search`           | Elemento que engloba as listas com as opções de refinar pesquisa             |
| `<ul>`   | `.bth-refine-search__list`     | Elemento que estiliza as listas com as opções de refinar pesquisa            |
| `<li>`   | `.header`                      | Elemento que estiliza o cabeçalho das listas de refinar pesquisa             |
| `<li>`   | `.ui-list-container-radio`     | Elemento que estiliza os itens da lista de refinar pesquisa do tipo radio    |
| `<li>`   | `.ui-list-container-checkbox`  | Elemento que estiliza os itens da lista de refinar pesquisa do tipo checkbox |

### Modificadores

| Elemento | Classe                               | Descrição                                       |
| :------- | :----------------------------------- | :---------------------------------------------- |
| `<div>`  | `.input-group-search--btn-refine`    | Estiliza a opção de refinar a pesquisa          |
| `<ul>`   | `.bth-refine-search__list--checkbox` | Define o tipo de lita do refinar pesquisa       |

## Como usar

### Padrão

```html
<div class="row">
    <div class="col-md-8 col-sm-7 col-xs-12">
    </div>
    <div class="col-md-4 col-sm-5 col-xs-12 text-right">
        <div class="bth-search">
            <div class="input-group input-group-sm input-group-search">
                <input type="text" ng-model="searchQuery" placeholder="O que você está buscando?" class="form-control ellipsis" dropdown-toggle data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <button class="btn btn-sm btn-link input-group-search--btn-refine" uib-popover-template="'common/popover-refinar-pesquisa.html'" popover-class="bth-popover-refine-filter" popover-append-to-body="true" popover-placement="bottom-right">
                    <i class="fa fa-sliders"></i>
                </button> 

                <div class="input-group-btn">
                    <button class="btn btn-sm btn-default"><i class="fa fa-search"></i></button>
                </div>

                <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownColunas">
                    <li class="dropdown-header">Filtros rápidos</li>
                    <li><a href="">Filtro rápido <i class="fa fa-trash-o pull-right"></i></a></li>
                </ul>
            </div>

            <button class="btn btn-default btn-sm" type="button" title="Abre as opções avançadas de filtragem" >
                <i class="fa fa-filter"></i> Filtros <span class="badge badge-primary">0</span>
            </button>
        </div>
    </div>
</div>
```

### Refinar pesquisa

```html
<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="row">
            <div class="col-md-12">
                <strong>Refinar a busca </strong>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="bth-refine-search">
                    <ul class="bth-refine-search__list bth-refine-search__list--checkbox">
                        <li class="header">
                            <small>Pesquisar em</small>
                        </li>
                        <li class="ui-list-container-checkbox">
                            <div class="bth-checkbox">
                                <input type="checkbox" name="check1" id="check1">
                                <label for="check1"> 
                                    Coluna 1
                                </label>
                            </div>
                        </li>
                        <li class="ui-list-container-checkbox">
                            <div class="bth-checkbox">
                                <input type="checkbox" name="check2" id="check2">
                                <label for="check2">
                                    Coluna 2
                                </label>
                            </div>
                        </li>
                        <li class="ui-list-container-checkbox">
                            <div class="bth-checkbox">
                                <input type="checkbox" name="check3" id="check3">
                                <label for="check3">
                                    Coluna 3
                                </label>
                            </div>
                        </li>
                    </ul>
                    <ul class="bth-refine-search__list bth-refine-search__list--radio">
                        <li class="header">
                            <small>Considerando apenas registros que</small>
                        </li>
                        <li class="ui-list-container-radio">
                            <div class="bth-radio">
                                <input type="radio" name="r1" id="r1">
                                <label for="r1"> 
                                    <span class="bth-tag bth-tag--fixed-width">Ab</span>
                                    Contenham o termo digitado
                                </label>
                            </div>
                        </li>
                        <li class="ui-list-container-radio">
                            <div class="bth-radio">
                                <input type="radio" name="r1" id="r2">
                                <label for="r2">
                                        <span class="bth-tag bth-tag--fixed-width bth-tag--strike">Ab</span>
                                        Não contenham o termo digitado
                                </label>
                            </div>
                        </li>
                        <li class="ui-list-container-radio">
                            <div class="bth-radio">
                                <input type="radio" name="r1" id="r3">
                                <label for="r3">
                                    <span class="bth-tag bth-tag--fixed-width bth-tag--start">Ab</span>
                                    Iniciem com o termo digitado
                                </label>
                            </div>
                        </li>
                        <li class="ui-list-container-radio">
                            <div class="bth-radio">
                                <input type="radio" name="r1" id="r4">
                                <label for="r4">
                                    <span class="bth-tag bth-tag--fixed-width bth-tag--end">Ab</span>
                                    Terminem com o termo digitado
                                </label>
                            </div>
                        </li>
                        <li class="ui-list-container-radio">
                            <div class="bth-radio">
                                <input type="radio" name="r1" id="r5">
                                <label for="r5">
                                    <span class="bth-tag bth-tag--fixed-width bth-tag--exact">Ab</span>
                                    Sejam exatamente o termo digitado
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div> 
<div class="row bottom">
    <div class="col-md-12 col-sm-12 col-xs-12 text-right">
        <button class="btn btn-primary btn-sm">Aplicar</button>
        <button class="btn btn-default btn-sm">Cancelar</button>
    </div>
</div>
```
