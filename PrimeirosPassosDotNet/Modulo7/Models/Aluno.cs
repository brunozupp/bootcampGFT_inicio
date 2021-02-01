using System;
using System.Collections.Generic;
using System.Text;

namespace Modulo7.Models
{
    public struct Aluno
    {
        public Aluno(string Nome, decimal Nota)
        {
            this.Nome = Nome;
            this.Nota = Nota;
        }
        
        public string Nome { get; set; }

        public decimal Nota { get; set; }
    }
}
