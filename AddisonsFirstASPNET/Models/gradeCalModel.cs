using System;
using System.ComponentModel.DataAnnotations;

namespace AddisonsFirstASPNET.Models
{
    public class gradeCalModel
    { 
        [Required]
        [Range(0,100)]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int grouppro { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int exams { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
