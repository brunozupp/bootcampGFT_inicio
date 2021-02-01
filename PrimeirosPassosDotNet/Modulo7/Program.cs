using Modulo7.Models;
using System;

namespace Modulo7
{
    class Program
    {
        static void Main(string[] args)
        {

            Aluno[] alunos = new Aluno[5];

            var indice = 0;

            var escolha = Menu();

            while(escolha.ToUpper() != "X")
            {
                switch(escolha)
                {
                    case "1":
                        if(indice < 5)
                        {
                            alunos[indice] = AdicionarAluno();

                            indice++;
                        } else
                        {
                            Console.WriteLine("Não é mais possível adicionar alunos");
                            Console.WriteLine();
                        }
                    break;

                    case "2":
                        Print(alunos,indice);
                    break;

                    case "3":
                        MediaGeral(alunos, indice);
                    break;

                    default:
                        throw new ArgumentOutOfRangeException("O valor informado está fora do menu");
                }

                escolha = Menu();
            }
        }

        static string Menu()
        {
            Console.WriteLine();
            Console.WriteLine("Informe a opção desejada:");
            Console.WriteLine("1 - Inserir novo aluno");
            Console.WriteLine("2 - Listar alunos");
            Console.WriteLine("3 - Calcular média geral");
            Console.WriteLine("X - Sair");
            Console.WriteLine("Escolha: ");

            return Console.ReadLine();
        }

        static Aluno AdicionarAluno()
        {
            Console.WriteLine("Cadastro de aluno");

            string nome;
            do
            {
                Console.Write("Digite o nome do aluno = ");
                nome = Console.ReadLine();
            } while (string.IsNullOrWhiteSpace(nome));


            decimal nota;
            do
            {
                Console.Write("Digite a nota do aluno (a à 10) = ");
                nota = Convert.ToDecimal(Console.ReadLine().Replace(".",","));

            } while (nota < 0 || nota > 10);

  
            return new Aluno
            {
                Nome = nome,
                Nota = nota
            };
        }

        static void Print(Aluno[] alunos, int indice)
        {
            Console.WriteLine($"No momento possui {indice} aluno(s)");
            for (int i = 0; i < indice; i++)
            {
                Console.WriteLine($"Aluno: {alunos[i].Nome}");
                Console.WriteLine($"Nota: {alunos[i].Nota}");
                Console.WriteLine();
            }
            
            if(indice == 0) Console.WriteLine();
        }

        static void MediaGeral(Aluno[] alunos, int indice)
        {
            if (indice == 0)
            {
                Console.WriteLine("Não possui nenhum aluno no momento");
                return;
            }

            decimal sum = 0;

            for (int i = 0; i < indice; i++)
            {
                sum += alunos[i].Nota;
            }

            decimal media = sum / indice;
            Console.WriteLine($"A média geral dos alunos foi de {media}");

            ConceitoEnum conceito;
            if(media >= 0 && media <= 2)
            {
                conceito = ConceitoEnum.F;
            } else if(media > 2 && media <= 4)
            {
                conceito = ConceitoEnum.E;
            } else if(media > 4 && media <= 6)
            {
                conceito = ConceitoEnum.D;
            } else if (media > 6 && media <= 8)
            {
                conceito = ConceitoEnum.C;
            } else if(media > 8 && media <= 9)
            {
                conceito = ConceitoEnum.B;
            } else
            {
                conceito = ConceitoEnum.A;
            }

            Console.WriteLine($"O conceito foi de = {conceito}");

            Console.WriteLine();
        }
    }
}
