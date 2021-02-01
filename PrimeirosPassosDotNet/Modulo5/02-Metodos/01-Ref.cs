namespace Modulo5.Metodos
{
    public class Ref
    {
        // ref -> por eu ter o ref, ao inverter os valores dessas variáveis, vai refletir nos argumentos
        // da onde eu chamei. É preciso do ref nesse caso por int ser do tipo valor e não referência
        static void Inverter(ref int x, ref int y)
        {
            int temp = x;
            x = y;
            y = temp;
        }

        public static void Inverter()
        {
            int i = 1, j = 2;
            System.Console.WriteLine($"Como era: i = {i} | j = {j}");
            // É preciso colocar ref aqui tbm
            Inverter(ref i, ref j);
            System.Console.WriteLine($"Como está agora: i = {i} | j = {j}");    // Escreve "2 1"
        }
    }
}