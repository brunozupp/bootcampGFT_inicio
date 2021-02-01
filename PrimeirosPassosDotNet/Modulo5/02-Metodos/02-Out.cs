namespace Modulo5.Metodos
{
    public class Out
    {
        // Coloca o valor nas variáveis que tem out antes do tipo
        static void Dividir(int x, int y, out int resultado, out int resto) 
        {
            resultado = x / y;
            resto = x % y;
        }
        
        public static void Dividir() 
        {
            // Tem que colocar a palavra out nas variáveis que quer que sejam setadas valores 
            // dentro da função
            Dividir(10, 3, out int resultado, out int resto);
            System.Console.WriteLine("{0} {1}", resultado, resto);	// Escreve "3 1"
        }
    }
}