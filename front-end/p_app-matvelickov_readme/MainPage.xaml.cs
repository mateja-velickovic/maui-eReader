using matvelickov.Models;
using matvelickov.Services;
using System.Collections.ObjectModel;

namespace matvelickov
{
    public partial class MainPage : ContentPage
    {
        private readonly BookService _bookService;
        public ObservableCollection<Book> Books { get; set; }

        public MainPage()
        {
            InitializeComponent();
            _bookService = new BookService();
            Books = new ObservableCollection<Book>();
            this.BindingContext = this; 
            LoadBooks();
        }

        private async void LoadBooks()
        {
            var books = await _bookService.GetBooksAsync();
            foreach (var book in books)
            {
                Books.Add(book);
            }
        }

        private async void ImageClicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new DetailsPage());
        }
    }
}
