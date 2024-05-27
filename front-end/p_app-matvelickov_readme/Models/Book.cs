namespace matvelickov.Models
{
    public class ApiResponse<T>
    {
        public string Message { get; set; }
        public List<T> Data { get; set; }
    }

    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int NumberOfPages { get; set; }
        public string PdfLink { get; set; }
        public string Abstract { get; set; }
        public string Editor { get; set; }
        public string EditionYear { get; set; }
        public string ImagePath { get; set; }
        public int CategoryId { get; set; }
        public int AuthorId { get; set; }
        public int UserId { get; set; }
        public DateTime Created { get; set; }
    }
}
