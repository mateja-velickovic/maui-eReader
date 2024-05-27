using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using matvelickov.Models;

namespace matvelickov.Services
{
    public class BookService
    {
        private readonly HttpClient _httpClient;

        public BookService()
        {
            _httpClient = new HttpClient();
            _httpClient.BaseAddress = new Uri("http://127.0.0.1:3000/api/");
        }

        // Méthode pour récupérer tous les livres
        public async Task<List<Book>> GetBooksAsync()
        {
            var response = await _httpClient.GetStringAsync("books");
            Console.WriteLine(response); // Affiche la réponse JSON brute

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            var apiResponse = JsonSerializer.Deserialize<ApiResponse<Book>>(response, options);

            return apiResponse?.Data ?? new List<Book>();
        }

        // Méthode pour récupérer un livre par ID
        public async Task<Book> GetBookByIdAsync(int id)
        {
            var response = await _httpClient.GetStringAsync($"books/{id}");
            Console.WriteLine(response); // Affiche la réponse JSON brute

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            var apiResponse = JsonSerializer.Deserialize<ApiResponse<Book>>(response, options);

            return apiResponse?.Data?.FirstOrDefault();
        }
    }
}
