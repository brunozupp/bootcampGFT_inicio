using System;

namespace DesafioAnimal
{
    class Program
    {
        public static void Main(string[] args)
        {
            String tipoOsseo; //declare as suas variaveis
            String tipoAnimal;
            String tipoAlimentacao;

            tipoOsseo = Console.ReadLine(); //insira suas variaveis
            tipoAnimal = Console.ReadLine();
            tipoAlimentacao = Console.ReadLine();

            if ((tipoOsseo.Equals("vertebrado")) && (tipoAnimal.Equals("ave")) && (tipoAlimentacao.Equals("carnivoro")))
            {
                Console.WriteLine("aguia");
            }

            if ((tipoOsseo.Equals("vertebrado")) && (tipoAnimal.Equals("ave")) && (tipoAlimentacao.Equals("onivoro")))
            {
                Console.WriteLine("pomba");
            }

            if ((tipoOsseo.Equals("vertebrado")) && (tipoAnimal.Equals("mamifero")) && (tipoAlimentacao.Equals("onivoro")))
            {
                Console.WriteLine("homem");
            }

            if ((tipoOsseo.Equals("vertebrado")) && (tipoAnimal.Equals("mamifero")) && (tipoAlimentacao.Equals("herbivoro")))
            {
                Console.WriteLine("vaca");
            }

            if ((tipoOsseo.Equals("invertebrado")) && (tipoAnimal.Equals("inseto")) && (tipoAlimentacao.Equals("hematofago")))
            {
                Console.WriteLine("pulga");
            }

            if ((tipoOsseo.Equals("invertebrado")) && (tipoAnimal.Equals("inseto")) && (tipoAlimentacao.Equals("herbivoro")))
            {
                Console.WriteLine("lagarta");
            }

            if ((tipoOsseo.Equals("invertebrado")) && (tipoAnimal.Equals("anelideo")) && (tipoAlimentacao.Equals("hematofago")))
            {
                Console.WriteLine("sanguessuga");
            }

            if ((tipoOsseo.Equals("invertebrado")) && (tipoAnimal.Equals("anelideo")) && (tipoAlimentacao.Equals("onivoro")))
            {
                Console.WriteLine("minhoca");
            }

        }
    }
}
