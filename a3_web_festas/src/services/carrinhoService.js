import { LocalStorage } from 'quasar'

const CHAVE = 'carrinho'

export function adicionarItem(produto) {
  const carrinho = LocalStorage.getItem(CHAVE) || []
  carrinho.push(produto)
  LocalStorage.set(CHAVE, carrinho)
}

export function obterCarrinho() {
  return LocalStorage.getItem(CHAVE) || []
}

export function limparCarrinho() {
  LocalStorage.remove(CHAVE)
}

export function removerItemPorIndex(index) {
    const carrinho = obterCarrinho()
    carrinho.splice(index, 1)
    LocalStorage.set(CHAVE, carrinho)
  }
  
