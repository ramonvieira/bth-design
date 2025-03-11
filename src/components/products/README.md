# Product

## Estrutura

| Elemento                 | Classe                                          | Descrição                                                                                       |
| :----------------------- | :--------------                                 | :---------------------------------------------------------------------------------------------- |
| `<div>`                  | `.bth-product-details`                          | Principal classe da estrutura                                                                   |
| `<div>`                  | `.bth-product-details-solutions`                | Container com as soluções Betha                                                                 |
| `<div>`                  | `.bth-product-details-solutions__header`        | Cabeçalho da seção de soluções da betha                                                         |
| `<div>`                  | `.bth-product-details-solutions__body`          |  Container da lista de soluções                                                                 |
| `<ul>`                   | `.bth-product-details-solutions__list`          | Lista das soluções Betha                                                                        |
| `<div>`                  | `.bth-product__brand`                           | Logo da Betha                                                                                   |
| `<span>`                 | `.bth-product__name`                            | Nome da solução                                                                                 |

### Modificadores

| Elemento | Classe                     | Descrição                                                |
| :------- | :---------------------     | :------------------------------------------------------- |
| `<div>`  | `.bth-product__brand--`    | Indica a cor do produto conforme a marca                 |


## Exemplos

### Estrutura básica do Product

```html
<div class="bth-product-details">                    
    <div class="bth-product-details-solutions">
        <div class="bth-product-details-solutions__header">   
            <div class="row top">
                <div class="col-md-12 col-sm-12 col-xs-12 col-xs-12">
                    <h4>Mais produtos</h4>                    
                    <button type="button" class="btn btn-lg btn-link pull-right visible-sm visible-xs tx__gray">
                        <i class="fa fa-close fa-fw"></i>
                    </button>
                    <a href="">Ver todos</a>
                </div>
            </div>
        </div>
        <div class="bth-product-details-solutions__body">
            <ul class="bth-product-details-solutions__list">
                <li>
                    <div class="bth-card bth-card--bordered bth-card--clickable">
                        <div class="bth-card__body">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">
                                    <div class="bth-product__brand bth-product__brand--lime"></div>
                                    <span class="bth-product__name"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>                    
    </div>
</div>
```
