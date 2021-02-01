using System;
using System.Collections.Generic;
using System.Text;

namespace Modulo3
{
    public class Pilha
    {
        Posicao primeiro; // o que tá no topo
        public void Empilha(object item)
        {
            primeiro = new Posicao(primeiro, item);
        }

        public object Desempilha()
        {
            if (primeiro == null)
            {
                throw new InvalidOperationException("A pilha está vazia!");
            }

            object resultado = primeiro.item;
            primeiro = primeiro.proximo;
            return resultado;
        }

        public void print()
        {
            if(this.primeiro == null)
            {
                Console.WriteLine("Não há itens na pilha");
                return;
            }

            Posicao primeiro = this.primeiro;

            while(true)
            {
                Console.WriteLine($"Item na pilha {primeiro.item}");

                if (primeiro.proximo == null) break;

                primeiro = primeiro.proximo;
            }
        }

        class Posicao
        {
            public Posicao proximo;
            public object item;
            public Posicao(Posicao proximo, object item)
            {
                this.proximo = proximo;
                this.item = item;
            }
        }
    }
}
