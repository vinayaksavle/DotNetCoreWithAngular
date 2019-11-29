using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPCoreWithAngular.DataAccess;
using ASPCoreWithAngular.Interfaces;
using ASPCoreWithAngular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPCoreWithAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IEmployee objemployee;

        public EmployeeController(IEmployee _objemployee)
        {
            objemployee = _objemployee;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Employee> Index()
        {
            return objemployee.GetAllEmployees();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Employee employee)
        {
            return objemployee.AddEmployee(employee);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Employee Details(int id)
        {
            return objemployee.GetEmployeeData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]Employee employee)
        {
            return objemployee.UpdateEmployee(employee);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objemployee.DeleteEmployee(id);
        }

        //[HttpGet]
        //[Route("GetCityList")]
        //public IEnumerable<City> Details()
        //{
        //    return objemployee.GetCities();
        //}

    }
}