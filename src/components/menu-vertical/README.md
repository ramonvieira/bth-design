# Menu

## Estrutura

| Elemento                 | Classe                       | Descrição                                                                   |
| :----------------------- | :--------------------------- | :-------------------------------------------------------------------------- |
| `<aside>`                | `.bf-menu--vertical`         | Container do menu                                                           |
| `<nav>`                  | `.bf-menu--vertical__body`   | Navegação principal da aplicação                                            |
| `<nav>`                  | `.bf-menu--vertical__footer` | Navegação auxiliar, também possui o flaoting para fixar ou desafixar o menu |
| `<ul>`                   | `.bf-menu--vertical__list`   | Container dos itens do menu                                                 |
| `<li>`                   | `.bf-menu--vertical__item`   | Item do menu                                                                |

### Modificadores

| Elemento | Classe                                   | Descrição                                               |
| :------- | :--------------------------------------- | :------------------------------------------------------ |
| `<li>`   | `.bf-menu--vertical__item--active`       | Indica que o menu esta ativo                            |
| `<li>`   | `.bf-menu--vertical__item--has-children` | Indica que possui subitens                              |
| `<li>`   | `.bf-menu--vertical__item--collapsed`    | Indica que esta fechado                                 | 
| `<li>`   | `.bf-menu--vertical__item--floating`     | Indica que o conteúdo trata-se da ação de float do menu |

## Exemplos

### Estrutura básica

```html
<aside class="bf-menu--vertical">

  <nav class="bf-menu--vertical__body">
    <!-- MENU -->
    <ul class="bf-menu--vertical__list">
      <li class="bf-menu--vertical__item bf-menu--vertical__item--has-children bf-menu--vertical__item--collapsed">
        <a href="#">
          <i class="fa fa-fw fa-file-text"></i>
          <span>
            Folha de pagamento
          </span>
          <i class="fa fa-fw fa-angle-up"></i>
        </a>

        <!-- SUBMENU -->
        <ul class="bf-menu--vertical__list">
          <li class="bf-menu--vertical__item">
            <a href="#">
              <span>Agências bancárias</span>
            </a>
          </li>
          <li class="bf-menu--vertical__item">
            <a href="#">
              <span> Relatórios</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="bf-menu--vertical__item bf-menu--vertical__item--active">
        <a href="">
          <i class="fa fa-fw fa-play"></i>
          <span>
            Eventos
          </span>
        </a>
      </li>
    </ul>
  </nav>
  <nav class="bf-menu--vertical__footer">
    <ul class="bf-menu--vertical__list">
      <li class="bf-menu--vertical__item bf-menu--vertical__item--floating">
        <a href="">
          <i class="fa fa-fw fa-thumb-tack"></i>
          <span></span>
        </a>
      </li>
    </ul>
  </nav>
</aside>
```
