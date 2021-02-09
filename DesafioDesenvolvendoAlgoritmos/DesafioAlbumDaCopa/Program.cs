using System;

namespace DesafioAlbumDaCopa
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroDeFigurinhas = Int32.Parse(Console.ReadLine()); // Total de figurinhas na revista
            int numeroDeFigurinhasCompradas = Int32.Parse(Console.ReadLine());
            int totalDeFigurinhas = 0;

            int[] albumDeFigurinha = new int[numeroDeFigurinhas];

            // IMPLEMENTE AQUI A SOLUÇÃO

            for (int i = 0; i < numeroDeFigurinhasCompradas; i++)
            {
                var figurinha = int.Parse(Console.ReadLine());

                bool temFigurinhaNoAlbum = false;
                for (int j = 0; j < numeroDeFigurinhas; j++)
                {
                    if(albumDeFigurinha[j] == figurinha)
                    {
                        temFigurinhaNoAlbum = true;
                        break;
                    }
                }

                if(!temFigurinhaNoAlbum)
                {
                    albumDeFigurinha[totalDeFigurinhas] = figurinha;
                    totalDeFigurinhas++;
                }
            }

            // Total de figurinhas que falta
            totalDeFigurinhas = numeroDeFigurinhas - totalDeFigurinhas;

            Console.WriteLine(totalDeFigurinhas);
        }
    }
}
