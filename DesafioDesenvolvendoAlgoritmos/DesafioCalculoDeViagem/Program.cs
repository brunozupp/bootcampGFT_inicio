using System;

namespace DesafioCalculoDeViagem
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string[] informacoes = Console.ReadLine().Split(" ");

                int tempo = Convert.ToInt32(informacoes[0]);

                int velocidadeMedia = Convert.ToInt32(informacoes[1]);

                double distancia = velocidadeMedia * tempo;

                double litros = distancia / 12;

                Console.WriteLine(litros.ToString("N3"));
            }
            catch (Exception)
            {
                Console.WriteLine("Um erro aconteceu");
            }
        }  
    }
}
