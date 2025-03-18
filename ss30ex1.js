let choice;
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity:20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity:21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity:15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity:30,
        category: "món ăn dân tộc Kinh",
    }
];
let cart = [];
function showProductsByCategory() {
    let category = prompt("Nhap danh muc muon xem").trim();
    let filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    
    if (filteredProducts.length === 0) {
        console.log("Khong co san pham");
    } else {
        console.log(`===== DANH MỤC: ${category.toUpperCase()} =====`);
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id} | ${product.name} | ${product.price} VND | Còn lại: ${product.quantity}`);
        });
    }
}

function addToCart() {
    let productId = +prompt("Nhap ID san pham muon mua");
    let product = products.find(p => p.id === productId);
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
        products.sort((a, b) => a.price - b.price);
        console.log("Sap xep thanh cong");
        products.forEach(p => console.log(`${p.name} - ${p.price} VND`));
    } else if (order === 'desc'){
        products.sort((a, b) => b.price - a.price);
        console.log("Sap xep thanh cong");
        products.forEach(p => console.log(`${p.name} - ${p.price} VND`));
    } else{
        console.log("Sap xep that bai");       
    }
}

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Tổng tiền thanh toán: ${total} VND`);
}

do {
    let choice = +prompt(` Nhap lua chon:
    1. Hiển thị sản phẩm theo danh mục
    2. Mua sản phẩm
    3. Sắp xếp sản phẩm theo giá (1: tăng dần, 2: giảm dần)
    4. Tính tổng tiền thanh toán
    5. Thoát`);

    switch (choice) {
        case 1:
            showProductsByCategory();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            let order = prompt("Nhập kiểu sắp xếp (asc: tăng dần, desc: giảm dần)");
            sortProducts(order);
            break;
        case 4:
            calculateTotal();
            break;
        case 5:
            console.log("Thoat chương trinh");
            exit();
            break;
        default:
            alert("Lua chon khong dung");
    }
} while (choice !== 5);
