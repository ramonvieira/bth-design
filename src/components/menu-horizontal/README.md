# Menu horizontal

## Estrutura

| Elemento                 | Classe                            | Descrição                                                                         |
| :----------------------- | :-------------------------------- | :-------------------------------------------------------------------------------- |
| `<section>`              | `.bf-menu--horizontal`            | Container do menu                                                                 |
| `<nav>`                  | `.bf-menu--horizontal__body`      | Container com os itens do menu                                                    |
| `<ul>`                   | `.bf-menu--horizontal__list`      | Container dos itens do menu                                                       |
| `<li>`                   | `.bf-menu--horizontal__item`      | Item do menu                                                                      |
| `<a>`                    | `.bf-menu--vertical__toggle`      | Botão para ativar o toggle do menu vertical se existir                            |
| `<div>`                  | `.bth-brand-name`                 | Indica o nome do produto acompanhado do logo da Betha                             |
| `<ul>`                   | `.bth-menu__tools`                | Container com as ferramentas da aplicação                                         |
| `<a>`                    | `.bf-sidepanel__account__toogle`  | Botão para ativar o painel lateral com informações da conta na versão responsiva  |

### Modificadores

| Elemento | Classe                                   | Descrição                                               |
| :------- | :--------------------------------------- | :------------------------------------------------------ |
| `<li>`   | `.bf-menu--horizontal__item--active`     | Indica que o menu esta ativo                            |
| `<li>`   | `.bf-menu--horizontal__item--has-list`   | Indica que possui uma lista de itens                    |
| `<span>` | `.badge-danger--notificacao`             | Indica as notificações do usuário                       | 
| `<span>`   | `.badge-danger--notificacao-small`     | Indica as notificações do usuário na versão responsiva  |

## Exemplos

### Estrutura básica

```html
<section class="bf-menu--horizontal">
    <nav class="bf-menu--horizontal__body">
        <ul class="bf-menu--horizontal__list">  
            <li class="bf-menu--horizontal__item">
                <a href="" class="bf-menu--vertical__toggle"> </a>
            </li>  
            <li class="bf-menu--horizontal__item">
                <div class="bth-brand-name">
                    <span>e-Nota</span>   
                </div>
            </li>  
            <li class="bf-menu--horizontal__item bf-menu--horizontal__item--has-list ">  
                <ul class="bf-menu--horizontal__list">
                    <li class="bf-menu--horizontal__item bf-menu--horizontal__item--active"
                        title="Visão geral">
                        <a href="">
                            <span>Visão geral</span>
                        </a>
                    </li>
                </ul>
            </span>  
            <li class="bf-menu--horizontal__item">
                <ul class="bth-menu__tools">
                    <li class="hidden-sm hidden-xs">
                        <a href>
                            <i class="fa fa-search fa-fw"></i>
                        </a>
                    </li>
                    <li class="hidden-sm hidden-xs">
                        <a href>
                            <i class="fa fa-question-circle fa-fw"></i>
                        </a>
                    </li>
                    <li class="hidden-sm hidden-xs">
                        <a href>
                            <i class="fa fa-bell fa-fw"></i>
                            <span class="badge badge-danger badge-danger--notificacao">6</span>
                        </a>
                    </li>
                    <li class="hidden-sm hidden-xs">
                        <a href>
                            <img class="bf-avatar">
                        </a>
                    </li>
                    <li class="visible-sm visible-xs">
                        <a href class="bf-sidepanel__account__toogle">
                            <span class="badge badge-danger badge-danger--notificacao-small"></span>    
                        </a>
                    </li>
                </ul>
            </li>  
        </ul>  
    </nav> 
</section>
```
