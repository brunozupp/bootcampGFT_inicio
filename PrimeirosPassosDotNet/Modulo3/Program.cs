using System;

namespace Modulo3
{
    class Program
    {
        static void Main(string[] args)
        {
            Pilha pilha = new Pilha();
            pilha.Empilha(1);
            pilha.Empilha(2);
            pilha.Empilha(3);
            pilha.Empilha(4);
            pilha.Empilha(5);

            Console.WriteLine("Primeira vez");
            pilha.print();

            Console.WriteLine($"Foi removido o {pilha.Desempilha()}");

            Console.WriteLine("Segunda vez");
            pilha.print();
        }
    }
}
