using Microsoft.AspNetCore.Mvc;
using BackendApi.Data;
using BackendApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : ControllerBase
    {
        private readonly AppDbContext _context;

        public InventoryController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _context.InventoryItems.ToListAsync();
            return Ok(items);
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> CreateItem(InventoryItem item)
        {
            _context.InventoryItems.Add(item);
            await _context.SaveChangesAsync();
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
              var item = await _context.InventoryItems.FindAsync(id);
              if (item == null)
              return NotFound();

             _context.InventoryItems.Remove(item);
              await _context.SaveChangesAsync();

              return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, InventoryItem updatedItem)
        {
            var item = await _context.InventoryItems.FindAsync(id);
            if (item == null)
            return NotFound();

            item.Name = updatedItem.Name;
            item.Quantity = updatedItem.Quantity;
            item.Price = updatedItem.Price;

            await _context.SaveChangesAsync();

            return Ok(item);
        }


    }
 
}

