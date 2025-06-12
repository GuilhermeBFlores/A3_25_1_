import { defineStore } from 'pinia';
import axios from 'axios';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    produtos: [],
    carrinho: [],
  }),

  actions: {
    async carregarDados() {
      try {
        // Carrega o JSON (pode ser de um arquivo ou API)
        const resposta = await axios.get('/assets/dados.json');
        this.produtos = resposta.data.produtos;
        this.carrinho = resposta.data.carrinho;

        // Opcional: Carregar do localStorage, se existir
        const dadosSalvos = localStorage.getItem('dados');
        if (dadosSalvos) {
          const dados = JSON.parse(dadosSalvos);
          this.produtos = dados.produtos || [];
          this.carrinho = dados.carrinho || [];
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    },

    adicionarAoCarrinho(produtoId, quantidade) {
      const produto = this.produtos.find(p => p.id === produtoId);
      if (!produto || produto.estoque < quantidade) {
        // Usar notificações do Quasar para feedback
        this.$q.notify({
          type: 'negative',
          message: 'Produto indisponível ou estoque insuficiente!',
        });
        return;
      }

      const itemCarrinho = {
        produtoId,
        quantidade,
        precoUnitario: produto.preco,
        precoTotal: produto.preco * quantidade,
      };

      this.carrinho.push(itemCarrinho);

      // Salvar no localStorage
      localStorage.setItem('dados', JSON.stringify({
        produtos: this.produtos,
        carrinho: this.carrinho,
      }));

      this.$q.notify({
        type: 'positive',
        message: `${produto.nome} adicionado ao carrinho!`,
      });
    },

    removerDoCarrinho(produtoId) {
      this.carrinho = this.carrinho.filter(item => item.produtoId !== produtoId);
      localStorage.setItem('dados', JSON.stringify({
        produtos: this.produtos,
        carrinho: this.carrinho,
      }));
      this.$q.notify({
        type: 'positive',
        message: 'Item removido do carrinho!',
      });
    },
  },

  getters: {
    totalCarrinho(state) {
      return state.carrinho.reduce((total, item) => total + item.precoTotal, 0).toFixed(2);
    },
  },
});