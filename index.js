let processForm = () => {
  let pages = document.getElementById("pages").value;
  let sheets = document.getElementById("sheets").value;
  let gsm = document.getElementById("gsm").value;
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let cost = document.getElementById("cost").value;
  let total_books = document.getElementById("total_books").value;
  let print_cost = document.getElementById("print_cost").value;
  let binding_cost = document.getElementById("binding_cost").value;
  let cover_cost = document.getElementById("cover_cost").value;
  let cost_of_making_per_book = document.getElementById(
    "cost_of_making_per_book"
  );
  let cost_of_making_total_books = document.getElementById(
    "cost_of_making_total_books"
  );
  let cost_of_paper_per_book = document.getElementById(
    "cost_of_paper_per_book"
  );
  let cost_of_paper_for_total_books = document.getElementById(
    "cost_of_paper_for_total_books"
  );
  let paper_weight_output = document.getElementById("paper_weight_output");
  // number of book calculation
  let rim_pages = pages / 16;
  let number_of_books = sheets / rim_pages;
  let number_of_books_rounded = Math.round(number_of_books);

  // paper weight calculation
  total_weight_of_rim =
    ((length * 2.54) / 100) * ((width * 2.54) / 100) * (gsm / 1000) * sheets;

  // cost calculation
  let cost_of_rim = cost * total_weight_of_rim;
  let cost_of_rim_per_book = cost_of_rim / number_of_books_rounded;
  let total_cost_of_rim_for_total_books = cost_of_rim_per_book * total_books;
  let print_bind_cover_cost =
    parseInt(print_cost) + parseInt(binding_cost) + parseInt(cover_cost);
  let cost_per_book_inclding_print_bind_cover =
    cost_of_rim_per_book + parseInt(print_bind_cover_cost);
  let total_cost_including_print_bind_cover =
    cost_per_book_inclding_print_bind_cover * total_books;

  //display

  paper_weight_output.innerHTML = (total_weight_of_rim.toFixed(2) + " kg")
  cost_of_paper_per_book.innerHTML = cost_of_rim_per_book.toFixed(2);

  cost_of_paper_for_total_books.innerHTML =
    total_books + " books: ₹" + total_cost_of_rim_for_total_books.toFixed(2);

  cost_of_making_per_book.innerHTML =
    cost_per_book_inclding_print_bind_cover.toFixed(2);

  cost_of_making_total_books.innerHTML =
    total_cost_including_print_bind_cover.toFixed(2);
  // alert('index.js ' + pages + "rim: " + rim)
};
