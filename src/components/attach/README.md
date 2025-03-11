# Anexo

## Como usar

### Anexo único

```html
<label for="">Anexo
  <i class="fa fa-fw fa-question-circle" title="Descrição da ajuda"></i>
</label>
<div class="input-group input-group-attach">
  <div class="form-control">
    <div class="label">
      <a href="">
        <span class="name">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</span>
        <span class="extension">txt</span>
      </a>
      <button class="btn btn-link btn-xs btn-remove"></button>
    </div>
  </div>
  <div class="input-group-btn">
    <button class="btn btn-default">
      <i class="fa fa-fw fa-paperclip"></i>
    </button>
  </div>
</div>
```

### Anexo único em tabela

```html
<td class="has-edit">
  <div class="input-group input-group-attach">
    <div class="form-control">
      <div class="label">
        <a href="">
          <span class="name">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</span>
          <span class="extension">txt</span>
        </a>
        <button class="btn btn-link btn-xs btn-remove"></button>
      </div>
    </div>
    <div class="input-group-btn">
      <button class="btn btn-default">
        <i class="fa fa-fw fa-paperclip"></i>
      </button>
    </div>
  </div>
</td>
```

### Anexo de foto

```html
 <div class="bth-attach-photo">
    <div class="bth-attach-photo__thumb">
          <!-- Empty state -->
            <span class="bth-attach-photo__thumb-icon">
              <i class="fa fa-fw fa-image tx__gray fa-2x"></i>
            </span>
          <!-- Imagem adicionada -->
            <span class="bth-attach-photo__thumb-image"  ng-show="imagem" style="background-image: url({{'imagem+extensão'}})">
        </span>
        <!-- Imagem com erro -->
        <span class="bth-attach-photo__thumb-icon bth-attach-photo__thumb-icon--error hide" data-message-error="Tamanho excedido">
            <i class="fa fa-fw fa-exclamation-triangle"></i>
        </span>
        <!-- Overlay -->
        <span class="bth-attach-thumb-overlay">
            <a href="" 
                class="bth-attach-thumb-overlay__action" 
                ng-focus="showOverlay"
                ng-blur="hideOverlay"
                title="Adicionar imagem">
                <i class="fa fa-fw fa-camera"></i>
            </a>
        </span> 
    </div>
      <!-- Footer com ações-->
    <div class="bth-attach-photo__footer">
        <button class="btn btn-link btn-sm" title="Remover imagem">
            <i class="fa fa-fw fa-trash">
            </i>
        </button>
        <button class="btn btn-link btn-sm" title="Adicionar imagem">
            <i class="fa fa-fw fa-camera">
            </i>
        </button>
    </div>
      <!-- Carregamento da imagem -->
      <span class="bth-attach-photo__spinner hide" title="Carregando...">
        <span data-container="body" class="bth-attach-photo__spinner-icon text-center list-loading">
            <i class="icon-spinner icon-small icon-spin"> </i>
        </span>
    </span> 
</div>
```