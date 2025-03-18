let choice;
let book = [];
let cart = [];
function showBooksByCategory() {
    let category = prompt("Nhap danh muc muon xem").trim();
    let filteredProducts = book.filter(product => product.category.toLowerCase() === category.toLowerCase());
    
    if (filteredProducts.length === 0) {
        console.log("Khong co san pham");
    } else {
        console.log(`===== DANH MỤC: ${category.toUpperCase()} =====`);
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id} | ${product.name} | ${product.price} VND | Còn lại: ${product.quantity}`);
        });
    }
}

function addBook(arr) {
    let nameBook = prompt("Nhap ten sach");
    let price = +prompt("Nhap gia sach");
    let quantity = +prompt("Nhap so luong sach");
    let category = prompt("Nhap loai sach");
    const newBook = {
        id: Math.ceil(Math.random() * 1000000), 
        name: nameBook, 
        price: price,
        quantity: quantity,
        category: category,
    };
    if(!Array.isArray(arr)){
        alert("Them sach that bai");
    }else{
        arr.push(newBook);
        alert("Them sach thanh cong");
    }
};

function searchBook(arr, bookId) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }    
    const foundBook = arr.find((book) => book.id === bookId);
    if (foundBook) {
        console.table([foundBook]);
    } else {
        alert("Khong co san pham trong mang");
    }
}

function addToCart() {
    let productId = +prompt("Nhap ID san pham muon mua");
    let product = book.find(p => p.id === productId);
    let quantity = +prompt("Nhap so luong muon mua");
    if (quantity > product.quantity) {
        alert("San pham khong du");
        return;
    }
    product.quantity -= quantity;
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity });
    }
    
    alert("Them thanh cong");
}

function sortProducts(order) {
    if (order === 'asc') {
        book.sort((a, b) => a.price - b.price);
        console.log("Sap xep thanh cong");
        book.forEach(p => console.log(`${p.name} - ${p.price} VND`));
    } else if (order === 'desc'){
        book.sort((a, b) => b.price - a.price);
        console.log("Sap xep thanh cong");
        book.forEach(p => console.log(`${p.name} - ${p.price} VND`));
    } else{
        console.log("Sap xep that bai");       
    }
}

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Tổng tiền thanh toán: ${total} VND`);
}

function showTotalBooksInStock() {
    let total = book.reduce((sum, b) => sum + b.quantity, 0);
    console.log(`Tổng số lượng sách giỏ hàng: ${total}`);
}

do {
    let choice = +prompt(` Nhap lua chon:
    1. Hiển thị danh sách sách theo thể loại 
    2. Thêm sách mới vào kho
    3. Tìm kiếm sách theo tên hoặc id.
    4. Mua sách 
    5. Sắp xếp sách theo giá
    6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
    7. Hiển thị tổng số lượng sách trong kho.
    8. Thoát
    `);

    switch (choice) {
        case 1:
            showBooksByCategory();
            break;
        case 2:
            addBook(book);
            break;
        case 3:
            const bookSearch = +prompt("Nhap id cua sach can tim");
            searchBook(book, bookSearch);
            break;
        case 4:
            addToCart();
            break;
        case 5:
            let order = prompt("Nhập kiểu sắp xếp (asc: tăng dần, desc: giảm dần)");
            sortProducts(order);
            break;
        case 6:
            calculateTotal();
            showTotalBooksInStock();
            break;
        case 7:
            let totalQuantity = book.reduce((sum, item) => sum + item.quantity, 0);
            console.log(`Tổng số lượng sách còn lại trong kho: ${totalQuantity}`);
            break;
        case 8:
            console.log("Thoat chương trinh");
            exit();
            break;
        default:
            alert("Lua chon khong dung");
    }
} while (choice !== 8);

