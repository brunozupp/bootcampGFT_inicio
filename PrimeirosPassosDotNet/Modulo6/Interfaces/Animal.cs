using System;
using System.Collections.Generic;
using System.Text;

namespace Modulo6.Interfaces
{
    public class Animal : IAnimal3, IAnimal4
    {
        public void Alimentar()
        {
            throw new NotImplementedException();
        }

        public double Peso(double altura, double largura)
        {
            throw new NotImplementedException();
        }

        public void Respirar()
        {
            throw new NotImplementedException();
        }
    }
}
