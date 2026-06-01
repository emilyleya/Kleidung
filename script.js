// 1. DATENBASIS: Die Kleidungsstücke (Direkt als SVG-Pfade, damit du keine Bilddateien brauchst)
const products = [
  {
    id: "top_blue",
    name: "Blue Hoodie",
    category: "tops",
    link: "https://example.com/shop/blue-hoodie",
    svg: `<rect x="85" y="125" width="130" height="130" rx="15" fill="#2575fc"/>
          <rect x="65" y="135" width="25" height="90" rx="8" fill="#1b63db"/>
          <rect x="210" y="135" width="25" height="90" rx="8" fill="#1b63db"/>`
  },
  {
    id: "top_red",
    name: "Red Summer Tee",
    category: "tops",
    link: "https://example.com/shop/red-tee",
    svg: `<rect x="88" y="128" width="124" height="100" rx="5" fill="#e53935"/>
          <rect x="68" y="128" width="22" height="40" rx="5" fill="#e53935"/>
          <rect x="210" y="128" width="22" height="40" rx="5" fill="#e53935"/>`
  },
  {
    id: "pants_jeans",
    name: "Classic Jeans",
    category: "bottoms",
    link: "https://example.com/shop/jeans",
    svg: `<rect x="112" y="240" width="32" height="150" fill="#3a6073"/>
          <rect x="156" y="240" width="32" height="150" fill="#3a6073"/>
          <rect x="90" y="235" width="120" height="30" rx="5" fill="#2b4c5e"/>`
  },
  {
    id: "pants_shorts",
    name: "Cargo Shorts",
    category: "bottoms",
    link: "https://example.com/shop/shorts",
    svg: `<rect x="112" y="240" width="34" height="70" fill="#757575"/>
          <rect x="154" y="240" width="34" height="70" fill="#757575"/>`
  },
  {
    id: "shoes_sneakers",
    name: "White Sneakers",
    category: "shoes",
    link: "https://example.com/shop/sneakers",
    svg: `<rect x="105" y="380" width="38" height="20" rx="5" fill="#ffffff" stroke="#ccc"/>
          <rect x="157" y="380" width="38" height="20" rx="5" fill="#ffffff" stroke="#ccc"/>`
  },
  {
    id: "shoes_boots",
    name: "Dark Boots",
    category: "shoes",
    link: "https://example.com/shop/boots",
    svg: `<rect x="105" y="370" width="38" height="32" rx="5" fill="#3e2723"/>
          <rect x="157" y="370" width="38" height="32" rx="5" fill="#3e2723"/>`
  }
];

// 2. AKTUELLER ZUSTAND (State)
let currentOutfit = { tops: null, bottoms: null, shoes: null };

// 3. AVATAR FUNKTIONEN (Ändert CSS Variablen)
function setSkin(color) {
  document.documentElement.style.setProperty('--skin-color', color);
}
function setHair(color) {
  document.documentElement.style.setProperty('--hair-color', color);
}

// 4. INITIALISIERUNG DER WEBSITE
function initShop() {
  // Erstellt die Kacheln für jedes Produkt dynamisch im HTML
  products.forEach(product => {
    const grid = document.getElementById(`grid-${product.category}`);
    if (grid) {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.id = `card-${product.id}`;
      card.innerText = product.name;
      card.onclick = () => selectItem(product);
      grid.appendChild(card);
    }
  });

  // URL-Wiederherstellung (Falls jemand einen geteilten Outfit-Link öffnet)
  const params = new URLSearchParams(window.location.search);
  products.forEach(p => {
    if (params.get(p.category) === p.id) selectItem(p);
  });
  if (params.get('skin')) setSkin(params.get('skin'));
  if (params.get('hair')) setHair(params.get('hair'));
}

// 5. KLEIDUNG AN- UND AUSZIEHEN LOGIK
function selectItem(product) {
  const cat = product.category;
  
  // Falls in der Kategorie schon was getragen wird: Altes Teil visuell deaktivieren
  if (currentOutfit[cat]) {
    document.getElementById(`card-${currentOutfit[cat].id}`).classList.remove('active');
  }
  
  // Wenn dasselbe Teil nochmal geklickt wird -> Ausziehen
  if (currentOutfit[cat]?.id === product.id) {
    currentOutfit[cat] = null;
    document.getElementById(`layer-${cat}`).innerHTML = "";
  } else {
    // Neues Teil anziehen
    currentOutfit[cat] = product;
    document.getElementById(`card-${product.id}`).classList.add('active');
    // Die SVG-Grafik der Kleidung in den entsprechenden Layer rendern
    document.getElementById(`layer-${cat}`).innerHTML = product.svg;
  }

  renderShopLinks();
}

// 6. LINKS AKTUALISIEREN
function renderShopLinks() {
  const list = document.getElementById('shop-links');
  list.innerHTML = "";
  let hasItems = false;

  for (let cat in currentOutfit) {
    if (currentOutfit[cat]) {
      hasItems = true;
      const item = currentOutfit[cat];
      list.innerHTML += `<li><strong>${cat.toUpperCase()}:</strong> <a class="shop-link" href="${item.link}" target="_blank">${item.name} kaufen ↗</a></li>`;
    }
  }
  if (!hasItems) list.innerHTML = "<li>Keine Artikel ausgewählt</li>";
}

// 7. SHARE & SPEICHER-FUNKTION (Erzeugt einen URL-Link)
function shareOutfit() {
  const skin = getComputedStyle(document.documentElement).getPropertyValue('--skin-color').trim();
  const hair = getComputedStyle(document.documentElement).getPropertyValue('--hair-color').trim();
  
  let url = new URL(window.location.href);
  url.searchParams.set('skin', skin);
  url.searchParams.set('hair', hair);
  
  if (currentOutfit.tops) url.searchParams.set('tops', currentOutfit.tops.id);
  if (currentOutfit.bottoms) url.searchParams.set('bottoms', currentOutfit.bottoms.id);
  if (currentOutfit.shoes) url.searchParams.set('shoes', currentOutfit.shoes.id);

  navigator.clipboard.writeText(url.toString());
  alert("Dein Outfit-Link wurde kopiert! Schicke ihn jemanden, um deinen Avatar zu zeigen.");
}

// Startet das Skript, sobald die Seite geladen ist
window.onload = initShop;