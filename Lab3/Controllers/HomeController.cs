using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Lab3.Models;

namespace Lab3.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var students = new List<Student>
            {
                new Student { Id = 1, Name = "Eren", Midterm = 100, Final = 80 },
                new Student { Id = 2, Name = "Ali", Midterm = 40, Final = 60 },
                new Student { Id = 3, Name = "Esma", Midterm = 60, Final = 75 },
                new Student { Id = 3, Name = "Anıl", Midterm = 20, Final = 12 }
            };

            return View(students);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
