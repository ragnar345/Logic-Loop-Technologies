// Sample products data
const products = [
    {
        id: 1,
        name: "Enterprise Software Development",
        price: 799.99,
        category: "software",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56H_si6dRAa90PtGNzLwiY-Irnctx2m-0Kg&s",
        description: "Complete business management solution",
        rating: 4.5, // Add a rating property
        reviews: 120 // Add a reviews property
    },
    {
        id: 2,
        name: "Network Security Package",
        price: 599.99,
        category: "software",
        image: "https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/network_security.jpg.webp?itok=upKzAwyx",
        description: "Advanced security solutions for your network",
        rating: 4.5, // Add a rating property
        reviews: 85 // Add a reviews property
    },
    {
        id: 3,
        name: "Server Hardware Bundle",
        price: 999.99,
        category: "hardware",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KOrSjrfy2N-TfEN5akccIN-wKff4AUKdAw&s",
        description: "High-performance server setup",
        rating: 4.5, // Add a rating property
        reviews: 95 // Add a reviews property
    },
    {
        id: 4,
        name: "Cloud Backup Service",
        price: 199.99,
        category: "services",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:570,cw:3424,ch:2568,q:80,w:3424/RXjTpHQERsFQaUFEMYn96f.jpg",
        description: "Secure cloud backup for your business data",
        rating: 4.5, // Add a rating property
        reviews: 60 // Add a reviews property
    },
    {
        id: 5,
        name: "IT Consultancy",
        price: 299.99,
        category: "services",
        image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_hybrid&w=740",
        description: "Professional IT consultancy services",
        rating: 4.5, // Add a rating property
        reviews: 75 // Add a reviews property
    },
    {
        id: 6,
        name: "Macbook Pro M1 Max",
        price: 1499.99,
        category: "computers",
        image: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large_2x.jpg",
        description: "2021 Apple MacBook Pro with Apple M1 Max Chip (16-inch, 32GB RAM, 1TB SSD Storage) Space Gray (Renewed)",
        rating: 4.5, // Add a rating property
        reviews: 110 // Add a reviews property
    },
    {
        id: 7,
        name: "Dell Inspiron 15",
        price: 749.99,
        category: "computers",
        image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6f49aa9c-f378-4b16-b756-f41e56fed7a1.__CR0,0,800,600_PT0_SX600_V1___.jpg",
        description: "Dell Inspiron 15, 15.6-inch display, Intel Core i5, 8GB RAM, 256GB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 95 // Add a reviews property
    },
    {
        id: 8,
        name: "HP Pavilion x360",
        price: 899.99,
        category: "computers",
        image: "https://m.media-amazon.com/images/I/61NUG7GNncL._AC_UF1000,1000_QL80_.jpg",
        description: "HP Pavilion x360, 14-inch touchscreen, Intel Core i7, 16GB RAM, 512GB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 80 // Add a reviews property
    },
    {
        id: 9,
        name: "Apple iMac 24-inch",
        price: 1299.99,
        category: "computers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsjAQjadVcJS5jCpwrxxl_YcJ6uCUb8AXZQ&s",
        description: "Apple iMac 24-inch, M1 chip, 8GB RAM, 256GB SSD, Retina display.",
        rating: 4.5, // Add a rating property
        reviews: 70 // Add a reviews property
    },
    {
        id: 10,
        name: "Lenovo ThinkPad X1 Carbon",
        price: 1399.99,
        category: "computers",
        image: "https://cdn.myrapidtrack.com/products/images/1642277876175661281.jpg",
        description: "Lenovo ThinkPad X1 Carbon, 14-inch display, Intel Core i7, 16GB RAM, 512GB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 65 // Add a reviews property
    },
    {
        id: 11,
        name: "Lenovo Legion 7i gen 9(2023) ",
        price: 1899.99,
        category: "computers",
        image: "https://p1-ofp.static.pub//fes/cms/2024/04/11/mi91jmo0vurj72vo6n6yikuh4zpznu073022.png",
        description: "Lenovo Legion 7i gen 9 , 16-inch display, Intel Core i9, 32GB RAM, 1TB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 40 // Add a reviews property
    },
    {
        id: 12,
        name: "iPhone 15 Pro Max ",
        price: 1699.99,
        category: "phones",
        image: "https://arabcomputers.com.sa/wp-content/uploads/2023/09/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-ME.jpg",
        description: "iPhone 15 Pro Max , 6.8-inch display 120Hz, 8GB RAM, 1TB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 30 // Add a reviews property
    },
    {
        id: 13,
        name: "Samsung Galaxy S24 Ultra ",
        price: 1599.99,
        category: "phones",
        image: "https://oxygendigitalshop.com/media/cache/2500x0/catalog/product/-/o/-original-imagx9egaxqpja77_1705903402.webp",
        description: "Samsung Galaxy S24 Ultra , 6.8-inch display 120Hz, 12GB RAM, 1TB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 25 // Add a reviews property
    },
    {
        id: 14,
        name: "Google Pixel 9 Pro Fold ",
        price: 1899.99,
        category: "phones",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3gpjMSnnYJxYeBNdQ56UNOZ8otSREKaFynJU0j2jk19gSqxaDXeVGGLHjIrXq-TTGHo&usqp=CAU",
        description: "Google Pixel 9 Pro Fold , 6.8-inch display 120Hz, 12GB RAM, 1TB SSD.",
        rating: 4.5, // Add a rating property
        reviews: 10 // Add a reviews property
    },
    {
        id: 15,
        name: "Dell XPS 13 Plus ",
        price: 1049.99,
        category: "computers",
        image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/02/dell-xps-13-plus.png",
        description: "Qualcomm® Adreno™ Graphics,16 GB LPDDR5X,512 GB SSD,13.4-inch.",
        rating: 4.5, // Add a rating property
        reviews: 55 // Add a reviews property
    },
    {
        id: 16,
        name: "Google Pixel 9 Pro ",
        price: 999.99,
        category: "phones",
        image: "https://www.dxomark.com/wp-content/uploads/medias/post-176677/Google-Pixel-9-Pro-XL_featured-image-packshot-review.png",
        description: "Google Pixel 9 Pro - Unlocked Android Smartphone with Gemini, Triple Rear Camera System, 24-Hour Battery,128GB.",
        rating: 4.5, // Add a rating property
        reviews: 20 // Add a reviews property
    },
    {
        id: 17,
        name: "iPhone 16 ",
        price: 649.99,
        category: "phones",
        image: "https://www.istudio.store/cdn/shop/files/iPhone_16_Black_PDP_Image_Position_1a_Black_Color__TH-TH.jpg?v=1725929160",
        description: "Apple iPhone 16, US Version, 128GB,Unlocked (Renewed).",
        rating: 4.5, // Add a rating property
        reviews: 15 // Add a reviews property
    },
    {
        id: 18,
        name: "iPhone 16 Pro",
        price: 800.99,
        category: "phones",
        image: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/a/p/apple_iphone_16_pro_desert_titanium_-1_3.jpg",
        description: "Apple iPhone 16 Pro, US Version, 256GB, Desert Titanium - Unlocked (Renewed).",
        rating: 4.5, // Add a rating property
        reviews: 15 // Add a reviews property
    },
    {
        id: 19,
        name: "iPhone 15 Pro",
        price: 649.99,
        category: "phones",
        image: "https://www.istore.com.ng/cdn/shop/files/iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-1__WWEN_a68bcd8f-e3ac-43cc-a732-e78abfe963e2_1200x.png?v=1697038060",
        description: "Apple iPhone 15 Pro, US Version, 256GB, Blue Titanium - Unlocked (Renewed).",
        rating: 4.5, // Add a rating property
        reviews: 15 // Add a reviews property
    },
    {
        id: 20,
        name: "iPad Pro",
        price: 1139.99,
        category: "computers",
        image: "https://images.vodafone.co.uk/gbnnsauqav4t/28C8cLIDw4ssjOF7TERriY/ddefb9b1b0011bd6912b661ae121dc5d/Apple_iPad_Pro_13_7th_gen_space_black-full-product-front-600.png",
        description: "Apple iPad Pro 13-Inch (M4): Built for Apple Intelligence, Ultra Retina XDR Display, 256GB, 12MP Front/Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life — Space Black.",
        rating: 4.5, // Add a rating property
        reviews: 95 // Add a reviews property
    },
    {
        id: 21,
        name: "Asus ROG Zephyrus G16(2024)",
        price: 1139.99,
        category: "computers",
        image: "https://dlcdnwebimgs.asus.com/gain/61B0C248-6C26-46F2-BDEE-E87345B2591E/w1000/h732",
        description: "ASUS ROG Zephyrus G16 Gaming Laptop, 16-inch,OLED 240Hz Display, Core Ultra 9 185H (Up to 5.1GHz), GeForce RTX 4070, 16GB DDR5, 2TB PCle 4.0, WiFi 6E, Backlit KB .",
        rating: 4.5, // Add a rating property
        reviews: 95 // Add a reviews property
    },
    {
        id: 22,
        name: "Apple Macbook Pro 14-inch",
        price: 1149.99,
        category: "computers",
        image: "https://inventstore.in/wp-content/uploads/2024/11/1-scaled.webp",
        description: "Apple 2024 MacBook Pro Laptop with M4 chip with 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage; Space Black.",
        rating: 4.5, // Add a rating property
        reviews: 95 // Add a reviews property
    },
    {
        id: 23,
        name: "Google Pixel 5",
        price: 149.99,
        category: "phones",
        image: "https://www.dxomark.com/wp-content/uploads/medias/post-59199/google_pixel_5_frontback.jpeg",
        description: "Google Pixel 5 - 5G Android Phone - Water Resistant - Unlocked Smartphone with Night Sight and Ultrawide Lens - Sorta Sage.",
        rating: 4.5, // Add a rating property
        reviews: 105000 // Add a reviews property
    },
    {
        id: 24,
        name: "Beat Making",
        price: 449.99,
        category: "audio production",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8QGpOSVZMdOZAYA4jrw__woywQCARh7N-w&s",
        description: "We offer well made beat for  songs which are on industry standard.",
        rating: 4.5, // Add a rating property
        reviews: 105000 // Add a reviews property
    },
    {
        id: 24,
        name: "Mixing and Mastering",
        price: 349.99,
        category: "audio production",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4wXaKlVjna3M8nwipOC4ZJT-fGyiKIvsqg&s",
        description: "We offer well mixed and mastered songs which are on industry standard.",
        rating: 4.5, // Add a rating property
        reviews: 125000 // Add a reviews property
    },
    {
        id: 25,
        name: "USB Dockking Station",
        price: 29.99,
        category: "computer Accessories",
        image: "https://www.mytrendyphone.eu/images/sandberg-usb-c-dock-hdmi-3xusb-pd-100w-dockingstation-p.webp",
        description: "Plugable USB 3.0 and USB-C Universal Laptop Docking Station .",
        rating: 4.5, // Add a rating property
        reviews: 175000 // Add a reviews property
    },
    {
        id: 26,
        name: "SAMSUNG T7 Portable SSD 1TB",
        price: 99.99,
        category: "computer Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThXHIGaSxF0dZ4rCUlF3DIpjb1CcM3C4NXA&s",
        description: "SAMSUNG T7 Portable SSD, 1TB External Solid State Drive, Speeds Up to 1,050MB/s, USB 3.2 Gen 2, Reliable Storage for Gaming, Students, Professionals, MU-PC1T0H/AM.",
        rating: 4.5, // Add a rating property
        reviews: 195000 // Add a reviews property
    },
    {
        id: 27,
        name: "Apple Mac Mini M2",
        price: 399.99,
        category: "computers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmtFGx78oYujR-n2ILv1qAfMXl7u9JFGiWA&s",
        description: "Apple 2023 Mac Mini Desktop Computer with Apple M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 256GB SSD Storage, Gigabit Ethernet. Works with iPhone/iPad.",
        rating: 4.5, // Add a rating property
        reviews: 195000 // Add a reviews property
    },
    {
        id: 28,
        name: "USB Flash Disk 128GB",
        price: 19.99,
        category: "computer Accessories",
        image: "https://m.media-amazon.com/images/I/61DjwgS4cbL.jpg",
        description: "SanDisk 128GB Ultra USB 3.0 Flash Drive.",
        rating: 4.5, // Add a rating property
        reviews: 195000 // Add a reviews property
    },
    {
        id: 29,
        name: "MacBook Pro Charger ",
        price: 99.99,
        category: "computer Accessories",
        image: "https://m.media-amazon.com/images/I/61+opOsESvL.jpg",
        description: "MacBook Pro Charger 96W USB C Charger Power Adapter MacBook Pro 16 15 13 inch, MacBook Air 2018 2019 2020 13 inch, Works with Type C 96W 87W 61W 30W 29W Charger for All USB C Laptop and Phones.",
        rating: 4.5, // Add a rating property
        reviews: 195000 // Add a reviews property
    },
    {
        id: 30,
        name: "Portable Charger Power Bank ",
        price: 15.99,
        category: "computer Accessories",
        image: "https://images-cdn.ubuy.ae/6683b14b06650302065cf9ef-portable-charger-power-bank-25800mah.jpg",
        description: "Portable Charger Power Bank 25800mAh,Ultra-High Capacity PD3.0 Fast Phone Charging with Newest Intelligent Controlling IC,3 USB Port External Cell Phone Battery Pack Compatible with iPhone,Android etc.",
        rating: 4.5, // Add a rating property
        reviews: 195000 // Add a reviews property
    },
    {
        id: 31,
        name: "iPhone 13 Mini ",
        price: 345.99,
        category: "phones",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1p-DDN-CNniw5iBpqvKywQfhlVZmb67_1Q&s",
        description: "Apple iPhone 13 Mini, 128GB, Midnight - Unlocked (Renewed)",
        rating: 4.5, // Add a rating property
        reviews: 295000 // Add a reviews property
    },
    {
        id: 32,
        name: "iPhone 12 Mini ",
        price: 245.99,
        category: "phones",
        image: "https://istore.co.na/cdn/shop/products/iPhone12_mini_Black_c07e2a1d-c918-4105-94df-03a076031d4f.png?v=1661410811",
        description: "Apple iPhone 12 Mini, 64GB, Black - Unlocked (Renewed)",
        rating: 4.5, // Add a rating property
        reviews: 295000 // Add a reviews property
    },
    {
        id: 33,
        name: "SAMSUNG Galaxy S25 Ultra ",
        price: 1299.99,
        category: "phones",
        image: "https://m.media-amazon.com/images/I/61n0lmxP5-L._UF894,1000_QL80_.jpg",
        description: "SAMSUNG Galaxy S25 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, AI Camera, Fast Processor, Long Battery Life, 2025, US 1 Yr Manufacturer Warranty, Titanium Black",
        rating: 4.5, // Add a rating property
        reviews: 595000 // Add a reviews property
    },
    {
        id: 34,
        name: "Lenovo Yoga Pro 9i 16 Laptop (2024 Model) ",
        price: 1799.99,
        category: "computers",
        image: "https://m.media-amazon.com/images/I/61ZFePTAUkL.jpg",
        description: "Lenovo Yoga Pro 9i 16 Laptop (2024 Model) Intel 14th Gen Ultra 9 185H, NVIDIA GeForce RTX 4060, 32GB RAM, 1TB NVMe SSD, 16 3.2K Mini-Led 165Hz 1200-nits, Windows 11 Pro, Luna Grey, 83DN0008US",
        rating: 4.5, // Add a rating property
        reviews: 695000 // Add a reviews property
    },
    
];

// Sample video URLs for demonstration (map product id to video URL)
const productVideos = {
    1: "https://www.youtube.com/embed/1uFVr15xDGg", // Enterprise Software Development
    2: "https://www.youtube.com/embed/2Vv-BfVoq4g", // Network Security Package
    3: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Server Hardware Bundle
    4: "https://www.youtube.com/embed/4Hq2LCb1ZwA", // Cloud Backup Service
    5: "https://www.youtube.com/embed/5qap5aO4i9A", // IT Consultancy
    6: "https://www.youtube.com/embed/6Dh-RL__uN4", // Macbook Pro M1 Max
    7: "https://www.youtube.com/embed/7wtfhZwyrcc", // Dell Inspiron 15
    8: "https://www.youtube.com/embed/8UVNT4wvIGY", // HP Pavilion x360
    9: "https://www.youtube.com/embed/9bZkp7q19f0", // Apple iMac 24-inch
    10: "https://www.youtube.com/embed/10Vh3gQ8QwA", // Lenovo ThinkPad X1 Carbon
    11: "https://www.youtube.com/embed/11Vh3gQ8QwA", // Lenovo Legion 7i gen 9(2023)
    12: "https://www.youtube.com/embed/12Vh3gQ8QwA", // iPhone 15 Pro Max
    13: "https://www.youtube.com/embed/13Vh3gQ8QwA", // Samsung Galaxy S24 Ultra
    14: "https://www.youtube.com/embed/14Vh3gQ8QwA", // Google Pixel 9 Pro Fold
    15: "https://www.youtube.com/embed/15Vh3gQ8QwA", // Dell XPS 13 Plus
    16: "https://www.youtube.com/embed/16Vh3gQ8QwA", // Google Pixel 9 Pro
    17: "https://www.youtube.com/embed/17Vh3gQ8QwA", // iPhone 16
    18: "https://www.youtube.com/embed/18Vh3gQ8QwA", // iPhone 16 Pro
    19: "https://www.youtube.com/watch?v=cBpGq-vDr2Y&t=1305s", // iPhone 15 Pro
    20: "https://www.youtube.com/watch?v=PHcDrXeyguM&t=594s", // iPad Pro
    21: "https://www.youtube.com/embed/21Vh3gQ8QwA", // Asus ROG Zephyrus G16(2024)
    22: "https://www.youtube.com/embed/22Vh3gQ8QwA", // Apple Macbook Pro 14-inch
    23: "https://www.youtube.com/embed/23Vh3gQ8QwA", // Google Pixel 5
    24: "https://www.youtube.com/embed/24Vh3gQ8QwA", // Beat Making / Mixing and Mastering
    25: "https://www.youtube.com/embed/25Vh3gQ8QwA", // USB Dockking Station
    26: "https://www.youtube.com/embed/26Vh3gQ8QwA", // SAMSUNG T7 Portable SSD 1TB
    27: "https://www.youtube.com/embed/27Vh3gQ8QwA", // Apple Mac Mini M2
    28: "https://www.youtube.com/embed/28Vh3gQ8QwA", // USB Flash Disk 128GB
    29: "https://www.youtube.com/embed/29Vh3gQ8QwA", // MacBook Pro Charger
    30: "https://www.youtube.com/embed/30Vh3gQ8QwA", // Portable Charger Power Bank
    31: "https://www.youtube.com/embed/31Vh3gQ8QwA", // iPhone 13 Mini
    32: "https://www.youtube.com/embed/32Vh3gQ8QwA", // iPhone 12 Mini
    33: "https://www.youtube.com/embed/33Vh3gQ8QwA", // SAMSUNG Galaxy S25 Ultra
    34: "https://www.youtube.com/watch?v=2G0nbDiGsoI&t=486s", // Lenovo yoga pro 91 (2024)
    // Add more mappings as needed for your products
};

// Convert YouTube watch URL to embed URL (handles v, t, start, and hash)
function getEmbedUrl(watchUrl) {
    if (!watchUrl) return null;
    try {
        // Support youtu.be short links
        if (watchUrl.includes('youtu.be/')) {
            const videoId = watchUrl.split('youtu.be/')[1].split(/[?&#]/)[0];
            let start = null;
            const url = new URL(watchUrl);
            if (url.searchParams.has("t")) {
                let t = url.searchParams.get("t");
                if (t.endsWith("s")) t = t.slice(0, -1);
                start = t;
            }
            let embedUrl = `https://www.youtube.com/embed/${videoId}`;
            if (start) embedUrl += `?start=${start}`;
            return embedUrl;
        }

        // Standard youtube.com/watch?v=... URLs
        const url = new URL(watchUrl);
        const videoId = url.searchParams.get("v");
        if (!videoId) return null;

        // Check for start time in 't' or 'start'
        let start = null;
        if (url.searchParams.has("start")) {
            start = url.searchParams.get("start");
        } else if (url.searchParams.has("t")) {
            let t = url.searchParams.get("t");
            if (t.endsWith("s")) t = t.slice(0, -1);
            start = t;
        }
        // Also check for t in the hash (e.g. ...watch?v=ID#t=1305s)
        if (!start && url.hash) {
            const hashMatch = url.hash.match(/t=(\d+)(s?)/);
            if (hashMatch) start = hashMatch[1];
        }
        let embedUrl = `https://www.youtube.com/embed/${videoId}`;
        if (start) {
            embedUrl += `?start=${start}`;
        }
        return embedUrl;
    } catch (e) {
        return null;
    }
}

// Create and append the side window HTML to the body
function createSideWindow() {
    if (document.getElementById('productVideoSideWindow')) return;
    const sideWindow = document.createElement('div');
    sideWindow.id = 'productVideoSideWindow';
    sideWindow.innerHTML = `
        <div class="side-window-content">
            <button id="closeSideWindow" aria-label="Close">&times;</button>
            <div id="videoContainer"></div>
        </div>
    `;
    document.body.appendChild(sideWindow);

    document.getElementById('closeSideWindow').onclick = () => {
        sideWindow.style.display = 'none';
        document.getElementById('videoContainer').innerHTML = '';
    };
}

// Show the side window with the product video
function showProductVideo(productId) {
    createSideWindow();
    const sideWindow = document.getElementById('productVideoSideWindow');
    const videoContainer = document.getElementById('videoContainer');
    const watchUrl = productVideos[productId];
    const embedUrl = getEmbedUrl(watchUrl);
    if (embedUrl) {
        videoContainer.innerHTML = `<iframe width="400" height="225" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        videoContainer.innerHTML = `<p style="color:#fff;">No video available for this product.</p>`;
    }
    sideWindow.style.display = 'flex';
}

// DOM Elements
const categoryCheckboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
const productsGrid = document.getElementById('productsGrid');
const cartCountElement = document.querySelector('.cart-count');

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Render products to the page
function renderProducts(productList) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    if (productList.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found.</p>';
        return;
    }

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" style="cursor:pointer;">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-rating">
                ${renderStars(product.rating)}
                <span class="reviews">(${product.reviews} reviews)</span>
            </div>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        `;
        // Add click event to image for video side window
        const img = productDiv.querySelector('.product-image');
        img.addEventListener('click', () => showProductVideo(product.id));
        productsGrid.appendChild(productDiv);
    });
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
}

// Filter products by category
function filterProductsByCategory() {
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const filteredProducts = selectedCategories.length
        ? products.filter(product => selectedCategories.includes(product.category))
        : products;

    renderProducts(filteredProducts);
}

// Add event listeners to category checkboxes
categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProductsByCategory);
});

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            alert(`${product.name} is already in your cart.`);
        } else {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${product.name} has been added to your cart.`);
        }
    }
}

// Fetch and render products from backend API
function fetchAndRenderProducts() {
    renderProducts(products);
}

document.addEventListener('DOMContentLoaded', function () {
    fetchAndRenderProducts();
    updateCartCount();
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateToggleIcon(savedTheme);
    } else {
        body.classList.add("light-mode"); // Default to light mode
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            updateToggleIcon("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
            updateToggleIcon("light-mode");
        }
    });

    // Update toggle button icon based on theme
    function updateToggleIcon(theme) {
        const icon = theme === "dark-mode" ? "fas fa-sun" : "fas fa-moon";
        themeToggle.innerHTML = `<i class="${icon}"></i>`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Sidebar login/profile logic
  const sidebarLoginBtn = document.getElementById('sidebarLoginBtn');
  const sidebarLoginContainer = document.getElementById('sidebarLoginContainer');
  const sidebarProfileBox = document.getElementById('sidebarProfileBox');
  const sidebarProfileName = document.getElementById('sidebarProfileName');
  const sidebarProfilePic = document.getElementById('sidebarProfilePic');
  const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');

  function getRandomPic() {
    const id = Math.floor(Math.random() * 99) + 1;
    return `https://randomuser.me/api/portraits/men/${id}.jpg`;
  }

  function updateSidebarProfile() {
    const username = localStorage.getItem('username');
    const profilePic = localStorage.getItem('profilePic');
    if (username) {
      sidebarLoginContainer.style.display = 'none';
      sidebarProfileBox.style.display = 'flex';
      sidebarProfileName.textContent = username;
      sidebarProfilePic.src = profilePic || getRandomPic();
    } else {
      sidebarLoginContainer.style.display = 'flex';
      sidebarProfileBox.style.display = 'none';
    }
  }

  // On login button click, redirect to login page (or show modal if you want)
  sidebarLoginBtn.onclick = function() {
    // Redirect to login page
    window.location.href = "login.html";
    // If you want a modal instead, you can show the login form here
  };

  // Logout logic
  sidebarLogoutBtn.onclick = function() {
    localStorage.removeItem('username');
    localStorage.removeItem('profilePic');
    updateSidebarProfile();
  };

  updateSidebarProfile();
});

// --- Firebase Config ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ...other config...
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();