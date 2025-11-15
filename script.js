
const blogs = [
  {
    title: " Gokarnanatheshwara Temple",
    image: "https://i.pinimg.com/736x/86/39/6d/86396d0d4b0daaf483d10f60f6b99132.jpg",
    desc: "Kudroli Gokarnanatheshwara Temple ,Mangalore is a famous temple dedicated to Lord Shiva.",
    details: "The Kudroli Gokarnanatheshwara Temple in Mangalore, Karnataka, is dedicated to Lord Shiva and was founded in 1912 by Adhyaksha Koragappa under the guidance of social reformer Sree Narayana Guru. The temple is known for its beautiful architecture, significant during the Mangaluru Dasara celebration, and its role in promoting social equality. "
  },
  {
    title: "Kadri Shree Manjunatha Temple",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEVbINOt9QbrcMAAQ2vYrlGkY728AssGUaM6_WhoC4UCc7mrfidGRWtOwDd1GAEH0ir4FTZ77esJt08HvDu0mM7zZ3mRBSoC3_vFJkz0_8yZoEIihckFimYo8ApoXm-azCPSLTS4P52NQX=s294-w294-h220-n-k-no",
    desc: "Explore the ancient architecture and spiritual significance of the Mangaldevi Temple.",
    details: "The Mangaldevi Temple is a historic site in Kudla, known for its intricate carvings and serene atmosphere. Visitors can learn about the temple's history and enjoy the peaceful surroundings."
  },
  {
    title: "Sultan Battery",
    image: "https://lh3.googleusercontent.com/gpms-cs-s/APRy3c-fZLLxo6fpYDhu-vFWcUu6hRsVZnKx2dm3cM_sLgKX-QZi6C_5-eu8jP6aVgMVVLX8FeZmqNdk57vBvRcWEPlhlxWnja5L19Pdxd5YLTPy28aAIM3-TTqUa-pFdlKHnstGeykH=s294-w294-h220-n-k-no",
    desc: "Explore the ancient architecture and historical significance of Sultan Battery.",
    details: "Sultan Battery is a watchtower built in the 18th century by Sultan Tipu. It offers a panoramic view of the Arabian Sea and is a popular spot for photography."
  },
  {
    title: "Pilikula Nisargadhama",

    image: "https://static.asianetnews.com/images/w-1280,h-720,format-jpg,imgid-01jzacfqy5s4r88bptxwz0gczn,imgname-pilikula-biological-park--1--1751621558213.jpg",
    desc: "Explore the biodiversity and natural beauty of Pilikula Nisargadhama.",
    details: "Pilikula Nisargadhama is a scenic park in Kudla, featuring a zoo, botanical garden, and water park. It's a great place for family outings and nature walks."
  },
];

const destinations = [
  {
    name: "Panambur Beach",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/06/Panambur-Beach-800x450-1.jpg",
    info: "One of the most beautiful and clean beaches in Kudla.",
    details: "Panambur Beach is known for its cleanliness, camel rides, and beach festivals. It's a perfect spot for families and photography lovers."
  },
  {
    name: "Kapu Beach",
    image: "https://i0.wp.com/saichintala.com/wp-content/uploads/2023/09/dji_0053.jpg?fit=1200%2C800&ssl=1",
    info: "Famous for its lighthouse and stunning sunsets.",
    details: "Kapu Beach is known for its stunning sunsets, lighthouse, and clean sands. It's a popular spot for relaxation and water sports."
  },
];



const guides = [
  {
    name: "Ravi S",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl7RX8NPBkVMD1gwIkZNambOiCavQKkhvsQ&s",
    expertise: "Local Culture Expert",
    details: "Ravi has been guiding tourists around Kudla for over 10 years. He specializes in cultural tours and heritage sites."
  },
  {
    name: "Anita Dsouza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tE3dzMJvrRNRdFDMc9yN9_5VvPJAsG7u5Q&s",
    expertise: "Nature & Trekking Guide",
    details: "Anita organizes nature trails, beach treks, and eco-tours. She loves helping visitors experience Kudla’s natural beauty."
  },
];

// Function to display cards
function displayData(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = list
    .map(
      (item) => `
      <div class="card" onclick="openModal('${item.title || item.name}', '${item.image}', '${item.details.replace(/'/g, "&#39;")}')">
        <img src="${item.image}" alt="${item.title || item.name}">
        <h3>${item.title || item.name}</h3>
        <p>${item.desc || item.info || item.expertise}</p>
      </div>
    `
    )
    .join("");
}

// Function to open modal
function openModal(title, image, text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalText").innerText = text;
}

// Close modal
document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";// -------------------- DATA --------------------

const blogs = [
  {
    title: "Gokarnanatheshwara Temple",
    image: "https://i.pinimg.com/736x/86/39/6d/86396d0d4b0daaf483d10f60f6b99132.jpg",
    desc: "Kudroli Gokarnanatheshwara Temple ,Mangalore is a famous temple dedicated to Lord Shiva.",
    details: "The Kudroli Gokarnanatheshwara Temple in Mangalore was founded in 1912. It is known for its architecture and Mangaluru Dasara celebration."
  },
  {
    title: "Kadri Shree Manjunatha Temple",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEVbINOt9QbrcMAAQ2vYrlGkY728AssGUaM6_WhoC4UCc7mrfidGRWtOwDd1GAEH0ir4FTZ77esJt08HvDu0mM7zZ3mRBSoC3_vFJkz0_8yZoEIihckFimYo8ApoXm-azCPSLTS4P52NQX=s294-w294-h220-n-k-no",
    desc: "Explore this ancient temple and its peaceful surroundings.",
    details: "Kadri Shree Manjunatha Temple is a historic temple known for its unique architecture and spiritual significance."
  },
  {
    title: "Sultan Battery",
    image: "https://lh3.googleusercontent.com/gpms-cs-s/APRy3c-fZLLxo6fpYDhu-vFWcUu6hRsVZnKx2dm3cM_sLgKX-QZi6C_5-eu8jP6aVgMVVLX8FeZmqNdk57vBvRcWEPlhlxWnja5L19Pdxd5YLTPy28aAIM3-TTqUa-pFdlKHnstGeykH=s294-w294-h220-n-k-no",
    desc: "Explore the historical watchtower built by Tipu Sultan.",
    details: "Sultan Battery offers beautiful sea views and is a popular tourist attraction."
  },
  {
    title: "Pilikula Nisargadhama",
    image: "https://static.asianetnews.com/images/w-1280,h-720,format-jpg,imgid-01jzacfqy5s4r88bptxwz0gczn,imgname-pilikula-biological-park--1--1751621558213.jpg",
    desc: "A nature park with zoo, botanical garden & lake.",
    details: "Pilikula is a large nature park offering a zoo, botanical garden, water activities and cultural attractions."
  },
];

const destinations = [
  {
    name: "Panambur Beach",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/06/Panambur-Beach-800x450-1.jpg",
    info: "Clean & beautiful beach perfect for families.",
    details: "Panambur Beach is known for festivals, camel rides, water sports and cleanliness."
  },
  {
    name: "Kapu Beach",
    image: "https://i0.wp.com/saichintala.com/wp-content/uploads/2023/09/dji_0053.jpg?fit=1200%2C800&ssl=1",
    info: "Famous for lighthouse and sunset views.",
    details: "Kapu Beach has a lighthouse, golden sands and stunning sunset views."
  },
];

const guides = [
  {
    name: "Ravi S",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl7RX8NPBkVMD1gwIkZNambOiCavQKkhvsQ&s",
    expertise: "Local Culture Expert",
    details: "Ravi has 10+ years of experience guiding cultural tours across Kudla."
  },
  {
    name: "Anita Dsouza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tE3dzMJvrRNRdFDMc9yN9_5VvPJAsG7u5Q&s",
    expertise: "Nature & Trekking Guide",
    details: "Anita conducts eco-tours, nature trails and beach treks."
  },
];

// -------------------- FUNCTIONS --------------------

// DISPLAY CARDS
function displayData(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = list
    .map(
      (item, index) => `
      <div class="card" onclick="openModalByIndex('${containerId}', ${index})">
        <img src="${item.image}">
        <h3>${item.title || item.name}</h3>
        <p>${item.desc || item.info || item.expertise}</p>
      </div>
      `
    )
    .join("");
}

// OPEN MODAL USING INDEX
function openModalByIndex(section, index) {
  let item;

  if (section === "blog-list") item = blogs[index];
  else if (section === "destination-list") item = destinations[index];
  else if (section === "guide-list") item = guides[index];

  openModal(item.title || item.name, item.image, item.details);
}

// FILL MODAL
function openModal(title, image, text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalText").innerText = text;
}

// CLOSE MODAL
document.getElementById("closeBtn").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) modal.style.display = "none";
};

// LOAD ALL SECTIONS
displayData(blogs, "blog-list");
displayData(destinations, "destination-list");
displayData(guides, "guide-list");

  }
};

// Display all sections
displayData(blogs, "blog-list");
displayData(destinations, "destination-list");
displayData(guides, "guide-list");
