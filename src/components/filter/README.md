# Filtros

## Estrutura


### Bloco

| Elemento | Classe                     | Descrição                         |
| :------- | :------------------------- | :----------------------------------------------------------------------------------------- |
| `<div>`  | `.bth-filter`              | Container principal do componente                                                          |
| `<div>`  | `.bth-filter-container`    | Container principal que econvole o ambiente do componente                                  |
| `<div>`  | `.bth-filter-backdrop`     | Elemento que sobrepõe a listagem quando o filtro está flutuando ou a listagem é atualizada |

### Elementos

| Elemento | Classe                             | Descrição                                                                      |
| :------- | :--------------------------------- | :----------------------------------------------------------------------------- |
| `<div>`  | `.bth-filter__header`              | Cabeçalho da sidebar                                                           |
| `<div>`  | `.bth-filter__body`                | Cabeçalho do corpo                                                             |
| `<div>`  | `.bth-filter__footer`              | Cabeçalho do rodapé                                                            |
| `<div>`  | `.bth-filter__more`                | Container da ação para adicionar mais itens a uma determinada lista de filtros |
| `<ul>`   | `.bth-filter__list`                | Container da lista de filtros                                                  |
| `<div>`  | `.bth-filter__available-options`   | Dropdown para mais opções de filtros                                           |
| `<div>`  | `.bth-filter-container__result`    | Container dos resultados da pesquisa                                           |
| `<div>`  | `.bth-filter-container__sidebar`   | Container do sidebar onde se encontra o componente                             |

### Modificadores

| Elemento | Classe                                     | Descrição                                       |
| :------- | :----------------------------------------- | :---------------------------------------------- |
| `<div>`  | `.bth-filter--floating`                    | Estiliza a sidebar quando estiver flutuando     |
| `<ul>`   | `.bth-filter__list--checkbox`              | Lista de checkbox                               |
| `<ul>`   | `.bth-filter__list--switch`                | Lista de switch                                 |
| `<ul>`   | `.bth-filter__list--radio`                 | Lista de radio                                  |
| `<div>`  | `.bth-filter-backdrop--inverse`            | Inverte as cores do backdrop                    |

## Como usar

### Padrão

```html
<div class="bth-container container-fluid">
	<div class="bth-container-card" ng-init="currentTab = 2">
		<div class="bth-card__body" style="min-height: calc(100vh - 180px)">
			<div class="bth-filter-container">
				<div class="bth-filter-container__result">
					<div class="bth-filter-backdrop ng-hide">
						<div class="row">
							<div class="col-md-6 col-md-offset-3" ng-init="showAlert = true">
								<div class="alert alert-info alert-icon" ng-show="showAlert">
									Foram adicionados novos critérios à pesquisa.
									<a href="" class="alert-link" ng-click="showAlert = !showAlert">Atualizar os resultados</a>.
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-3">
							<button type="button" class="btn btn-success btn-sm btn-add" title="Adicionar ausência">Ausência</button>
						</div>
						<div class="col-md-9">
							<div class="pull-right">
								<div class="bth-search">
									<div class="input-group input-group-search input-group-sm">
										<input type="text" placeholder="O que você esta buscando?" class="form-control" dropdown-toggle data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<div class="input-group-btn">
											<button class="btn btn-sm btn-default" type="button">
												<i class="fa fa-search"></i>
											</button>
										</div>
										<ul class="dropdown-menu dropdown-menu-left"  aria-labelledby="dropdownColunas">
											<li class="dropdown-header">Consultas salvas</li>
											<li><a href="">Consulta salva 1 <i class="fa fa-trash-o pull-right"></i></a></li>
											<li><a href="">Consulta salva 2 <i class="fa fa-trash-o pull-right"></i></a></li>
										</ul>
									</div>
									<button class="btn btn-default btn-sm" type="button" ng-click="visible=true;" title="Abre as opções avançadas de filtragem" ng-show="floating">
										<i class="fa fa-filter"></i> Filtros
										<span class="badge badge-primary">2</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="row bottom">
						<div class="col-md-12">
							<ul class="bth-tag__list">
								<li>
									<span class="bth-tag bth-tag--hover">
										<i class="fa fa-thumb-tack tx__blue" ng-if="fix"></i>
										<i class="fa fa-search" ng-if="!fix"></i> 
										<span class="bth-tag__type">PROFISSIONAL: </span>
										José Santos
										<a href="" class="bth-tag__close">✕</a>
									</span>
								</li>
								<li>
									<span class="bth-tag bth-tag--hover">
										<i class="fa fa-thumb-tack tx__blue" ng-if="fix"></i>
										<i class="fa fa-filter" ng-if="!fix"></i>
										<span class="bth-tag__type">MOTIVO: </span>
										<span>Férias </span>
										<small >
											e mais 2 itens
										</small>
										<a href="" class="bth-tag__close">✕</a>
									</span>
								</li>
								<li>
									<div class="btn-group">
										<button class="btn btn-link btn-xs" ng-init="thumbRotate = true" ng-mouseover="thumbRotate = !fix ? false : true" ng-mouseleave="thumbRotate = !fix ? true : false" ng-click="fix = !fix" title="{{fix ? 'Desafixar' : 'Fixar'}} filtros">
											<i class="fa fa-thumb-tack" ng-class="{'thumb-rotate' : thumbRotate, 'tx__blue' : !thumbRotate}"></i>
										</button>
										<button class="btn btn-link btn-xs" title="Adicionar as consultas salvas">
											<i class="fa fa-plus"></i>
										</button>
										<button class="btn btn-link btn-xs" title="Limpar filtros">
											<i class="fa fa-trash-o"></i>
										</button>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="bth-empty bth-empty--filter">
								<h3>Faça uma <a href="">pesquisa</a> ou utilize os filtros para mostrar os resultados.</h3>
								<p>
									- Pressione P para definir sua busca
									<br /> 
									- Depois, pressione F2 para realizar a pesquisa
								</p>
								<h4>Se preferir, escolha um filtro rápido</h4>
							</div>
						</div>
					</div>
				</div>
				<div class="bth-filter-container__sidebar" ng-show="floating ? visible : true">
					<div class="bth-filter" ng-class="{'bth-filter--floating' : floating && visible}">
						<div class="bth-filter__header">
							<div class="bth-filter__header__title">
								Filtros <span class="bth-filter__header--key">(F2)</span>
							</div>
							<div class="bth-filter__header__attach">
								<button type="button" class="btn btn-link btn-xs" ng-click="floating=!floating; visible=true;">
									<i class="fa fa-fw fa-thumb-tack"></i>
								</button>
							</div>
							<div class="bth-filter__header__close" ng-show="floating">
								<button type="button" class="btn btn-link btn-xs" ng-click="visible=false;">
									<i class="material-icons">close</i>
								</button>
							</div>
						</div>
						<div class="bth-filter__body">
							<div class="bth-card bth-card--collapse" ng-repeat="filter in [{id: 0, type: 'dateRange'}, {id: 1, type: 'selectRange'}, {id: 2, type: 'checkbox', options: [{id: 0, label: 'Opção 1'},{id: 1, label: 'Opção 2'}]}, {id: 3, type: 'radio', options: [{id: 0, label: 'Opção 1'},{id: 1, label: 'Opção 2'}]}]">
								<div class="bth-card__header" ng-class="{'bth-card__header--opened': !filter.opened}" ng-click="filter.opened = !filter.opened">
									<label for="">FILTRO {{$index}}</label>
									<span class="badge badge-default" ng-show="$index==2">2</span>
									<a href="" ng-show="$index==2"><small>Limpar</small></a>
								</div>
								<div class="bth-card__body" uib-collapse="filter.opened">
									<div class="row bottom" ng-if="filter.type =='dateRange'">
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label for="">De</label>
											<div class="input-group input-group-sm">
												<input type="text" class="form-control input-sm" ng-model="option.id" data-bf-date >
											</div>
										</div>
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label for="">Até</label>
											<div class="input-group input-group-sm">
												<input type="text" class="form-control input-sm" ng-model="filter.id" data-bf-date >
											</div>
										</div>
									</div>
									<div class="row bottom" ng-if="filter.type=='selectRange'">
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label for="">De</label>
											<select data-bf-select2="{}" ng-model="option.id">
												<option ng-value="option.label" ng-repeat="option in filter.options | orderBy:['id']:false">{{option.label}}</option>
											</select>
										</div>
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label for="">Até</label>
											<select data-bf-select2="{}" ng-model="filter.id">
												<option ng-value="option.label" ng-repeat="option in filter.options | orderBy:['id']:false">{{option.label}}</option>
											</select>
										</div>
									</div>
									<ul class="bth-filter__list bth-filter__list--checkbox" ng-show="filter.type=='checkbox'">
										<li class="ui-list-container-checkbox" ng-repeat="option in filter.options | orderBy:filter.orderBy:false">
											<div class="bth-checkbox">
												<input type="checkbox" name="options{{filter.id}}" id="checkbox{{filter.id}}{{option.id}}" ng-model="option.checked">
												<label for="checkbox{{filter.id}}{{option.id}}">{{option.label}}</label>
											</div>
										</li>
									</ul>
									<div class="btn-group" data-placement="bottom-right" uib-dropdown dropdown-append-to-body ng-if="$index==2">
										<a href="" class="bth-filter__more dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>
											<small>+ 2 opções disponíveis</small>
										</a>
										<ul class="dropdown-menu has-content dropdown bth-filter__available-options" uib-dropdown-menu keep-open>
											<li class="has-content">
												<div class="input-group input-group-search input-group-sm">
													<input type="text" placeholder="O que você está buscando?" class="form-control">
												</div>
											</li>
											<li ng-repeat="option in filter.options | orderBy:['checked','label']:false">
												<a href="" ng-click="option.checked = !option.checked">{{option.label}}</a>
											</li>
										</ul>
									</div>
									<ul class="bth-filter__list bth-filter__list--radio" ng-show="filter.type=='radio'">
										<li class="ui-list-container-radio" ng-repeat="option in filter.options | orderBy:filter.orderBy:false" ng-init="filter.name = 1">
											<div class="bth-radio">
												<input type="radio" name="options{{filter.id}}" id="radio{{filter.id}}{{option.id}}" ng-model="filter.name" value="{{option.id}}">
												<label for="radio{{filter.id}}{{option.id}}">{{option.label}}</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="bth-filter__footer">
							<button class="btn btn-primary" ng-class="{'btn-block' : !filtering}">
								Filtrar (ENTER)
							</button>
							<button class="btn btn-default" ng-if="filtering">
								Limpar filtros
							</button>
						</div>   
					</div>
				</div>
				<div class="bth-filter-backdrop bth-filter-backdrop--inverse" ng-show="floating ? visible : floating" ng-click="visible = false;"></div>
			</div>
		</div>
	</div>
</div>
```

### Lista de filtros

```html
<ul class="bth-filter__list bth-filter__list--checkbox">
	<li>
		<div class="bth-radio">
			<input type="radio" name="search" id="search01">
			<label for="search01">Título</label>
		</div>
	</li>
</ul>
```