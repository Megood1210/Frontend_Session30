let choice;
let phone = [];
let cart = [];
function showPhonesByCategory() {
    let category = prompt("Nhap danh muc muon xem").trim();
    let filteredProducts = phone.filter(product => product.category.toLowerCase() === category.toLowerCase());
    
    if (filteredProducts.length === 0) {
        console.log("Khong co san pham");
    } else {
        console.log(`===== DANH MỤC: ${category.toUpperCase()} =====`);
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id} | ${product.name} | ${product.price} VND | Còn lại: ${product.quantity}`);
        });
    }
}

function addPhone(arr) {
    let namePhone = prompt("Nhap ten dien thoai");
    let price = +prompt("Nhap gia dien thoai");
    let quantity = +prompt("Nhap so luong dien thoai");
    let category = prompt("Nhap loai dien thoai");
    const newBook = {
        id: Math.ceil(Math.random() * 1000000), 
        name: namePhone, 
        price: price,
        quantity: quantity,
        category: category,
    };
    if(!Array.isArray(arr)){
        alert("Them dien thoai that bai");
    }else{
        arr.push(newBook);
        alert("Them dien thoai thanh cong");
    }
};

function searchPhone() {
    let find = prompt("Nhap id hoac ten muon tim: ");
    let foundPhone = phone.find((value) => value.id == find || value.name == find);
    return foundPhone ? foundPhone : "Khong co dien thoai";
}


function addToCart() {
    let productId = +prompt("Nhap ID san pham muon mua");
    let product = phone.find(p => p.id === productId);
    let quantity = +prompt("Nhap so luong muon mua");
    if (quantity > product.quantity) {
        alert("San pham khong dung");
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

function abate() {
    alert("Thanh toan thanh cong");
    cart.length = 0;  
    return carts;
}

function sortProducts(order) {
    if (order === 'asc') {
        phone.sort((a, b) => a.price - b.price);
        console.log("Sap xep thanh cong");
        phone.forEach(p => console.log(`${p.name} - ${p.price} VND`));
    } else if (order === 'desc'){
        phone.sort((a, b) => b.price - a.price);
        console.log("Sap xep thanh cong");
        phone.forEach(p => console.log(`${p.name} - ${p.price} VND`));
    } else{
        console.log("Sap xep that bai");       
    }
}

function total() {
    const total = cart.reduce(
      (value1, value2) => value1 + value2.price * value2.quantity,
      0
    );
    return total;
  }

function showbyrow() {
    let result = "";
    phone.forEach((item) => {
        result += `${item.category} - ${item.quantity}\n`;
    });
    return result || "Khong co dien thoai";
}

do {
    let choice = +prompt(` Nhap lua chon:
    1. Hiển thị danh sách điện thoại theo hãng
    2. Thêm điện thoại mới vào cửa hàng
    3. Tìm kiếm sách theo tên hoặc id.
    4. Mua điện thoại
    5. Thanh toán tất cả điện thoại trong giỏ hàng
    6. Sắp xếp điện thoại theo giá
    7. Hiển thị tổng số tiền của các điện thoại trong kho
    8. Hiển thị tổng số lượng điện thoại theo từng hàng
    9. Thoát
    `);

    switch (choice) {
        case 1:
            showPhonesByCategory();
            break;
        case 2:
            addPhone(phone);
            break;
        case 3:
            console.log(searchPhone());
            break;
        case 4:
            addToCart();
            break;
        case 5:
            console.log(abate());
            break;
        case 6:
            let order = prompt("Nhập kiểu sắp xếp (asc: tăng dần, desc: giảm dần)");
            sortProducts(order);
            break;
        case 7:
            console.log(total());
            break;
        case 8:
            console.log(showbyrow());
            break;
        case 9:
            console.log("Thoat chương trinh");
            exit();
            break;
        default:
            alert("Lua chon khong dung");
    }
} while (choice !== 9);
