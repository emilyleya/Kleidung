// ============================================================
// DRIP — OUTFIT BUILDER APP
// ============================================================

let currentOutfit = {};
let savedOutfits = [];
let currentStyle = 'all';

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  loadSavedOutfits();
  renderAllItems();
  setupEventListeners();
});

// ============================================================
// RENDER ITEMS BY CATEGORY
// ============================================================

function renderAllItems() {
  renderCategory('tops', 'grid-tops', 'count-tops');
  renderCategory('bottoms', 'grid-bottoms', 'count-bottoms');
  renderCategory('shoes', 'grid-shoes', 'count-shoes');
  renderCategory('jewelry', 'grid-jewelry', 'count-jewelry');
}

function renderCategory(category, gridId, countId) {
  const grid = document.getElementById(gridId);
  const countEl = document.getElementById(countId);
  
  if (!grid) return;
  
  grid.innerHTML = '';
  
  let items = PRODUCTS[category];
  if (!items) return;
  
  // Filter by current style
  if (currentStyle !== 'all') {
    items = items.filter(item => item.style === currentStyle);
  }
  
  countEl.textContent = items.length;
  
  items.forEach((item, index) => {
    const card = createItemCard(item, category);
    grid.appendChild(card);
    // Stagger animation
    setTimeout(() => card.style.animation = `fadeIn 0.25s ease both`, index * 20);
  });
}

function createItemCard(item, category) {
  const card = document.createElement('div');
  card.className = 'item-card';
  card.dataset.id = item.id;
  card.dataset.category = category;
  
  if (currentOutfit[category]?.id === item.id) {
    card.classList.add('selected');
  }
  
  const imgWrap = document.createElement('div');
  imgWrap.className = 'item-img-wrap';
  
  // Image with fallback
  const img = document.createElement('img');
  img.src = item.img;
  img.alt = item.name;
  img.onerror = () => {
    imgWrap.innerHTML = `<div class="item-img-fallback">
      <span>${category === 'tops' ? '👕' : category === 'bottoms' ? '👖' : category === 'shoes' ? '👟' : '💎'}</span>
      <span>${item.name}</span>
    </div>`;
  };
  
  imgWrap.appendChild(img);
  
  const info = document.createElement('div');
  info.className = 'item-info';
  info.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-brand">${item.brand}</div>
    <div class="item-style-tag tag-${item.style}">${item.style.toUpperCase()}</div>
  `;
  
  card.appendChild(imgWrap);
  card.appendChild(info);
  
  card.addEventListener('click', () => selectItem(item, category, card));
  
  return card;
}

// ============================================================
// OUTFIT MANAGEMENT
// ============================================================

function selectItem(item, category, cardEl) {
  // Update outfit
  currentOutfit[category] = item;
  
  // Update UI
  document.querySelectorAll(`.item-card[data-category="${category}"]`).forEach(c => {
    c.classList.remove('selected');
  });
  cardEl.classList.add('selected');
  
  // Update slot
  updateSlot(category, item);
  
  // Update vibe
  updateVibe();
  
  // Enable buttons
  updateActionButtons();
}

function updateSlot(category, item) {
  const slotMap = {
    tops: 'slot-top',
    bottoms: 'slot-bottom',
    shoes: 'slot-shoes',
    jewelry: 'slot-jewelry-neck' // Default for jewelry
  };
  
  const slotId = slotMap[category];
  const slot = document.getElementById(slotId);
  
  if (!slot) return;
  
  slot.innerHTML = `
    <div class="slot-filled-content">
      <img src="${item.img}" alt="${item.name}" class="slot-filled-img" onerror="this.style.display='none'">
      <div class="slot-filled-info">
        <div class="slot-filled-name">${item.name}</div>
        <div class="slot-filled-brand">${item.brand}</div>
        <a href="${item.link}" class="slot-link" target="_blank">→ Shop</a>
      </div>
      <button class="slot-remove" onclick="removeItem('${category}')">✕</button>
    </div>
  `;
  
  slot.classList.add('filled', 'just-filled');
  setTimeout(() => slot.classList.remove('just-filled'), 600);
  
  updateOutfitList();
}

function removeItem(category) {
  delete currentOutfit[category];
  
  // Reset slot
  const slotMap = {
    tops: 'slot-top',
    bottoms: 'slot-bottom',
    shoes: 'slot-shoes',
    jewelry: 'slot-jewelry-neck'
  };
  
  const slot = document.getElementById(slotMap[category]);
  slot.innerHTML = `
    <div class="slot-empty-icon">${category === 'tops' ? '+' : category === 'bottoms' ? '+' : category === 'shoes' ? '+' : '◇'}</div>
    <span>${category === 'tops' ? 'Oberteil' : category === 'bottoms' ? 'Hose / Rock' : category === 'shoes' ? 'Schuhe' : 'Halskette'}</span>
  `;
  slot.classList.remove('filled');
  
  // Deselect card
  document.querySelector(`.item-card[data-category="${category}"][data-id="${PRODUCTS[category].find(p => p.name === currentOutfit[category]?.name)?.id}"]`)?.classList.remove('selected');
  
  updateVibe();
  updateActionButtons();
  updateOutfitList();
}

function updateOutfitList() {
  const list = document.getElementById('outfitItemsList');
  
  if (Object.keys(currentOutfit).length === 0) {
    list.innerHTML = '<p class="empty-hint">Klicke auf Kleidungsstücke links, um ein Outfit zusammenzustellen.</p>';
    return;
  }
  
  let html = '<div style="display: grid; gap: 8px;">';
  Object.values(currentOutfit).forEach(item => {
    html += `
      <div style="display: flex; gap: 8px; padding: 8px; background: var(--surface); border-radius: 6px; font-size: 12px;">
        <img src="${item.img}" alt="${item.name}" style="width: 40px; height: 50px; object-fit: cover; border-radius: 4px;">
        <div>
          <div style="font-weight: 500;">${item.name}</div>
          <div style="color: var(--text3); font-size: 11px;">${item.price}</div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  list.innerHTML = html;
}

function updateVibe() {
  const vibeTag = document.getElementById('vibeTag');
  
  if (Object.keys(currentOutfit).length === 0) {
    vibeTag.textContent = '— Wähle Teile aus —';
    return;
  }
  
  // Determine vibe from selected items
  const styles = Object.values(currentOutfit).map(item => item.style);
  const primaryStyle = styles[0];
  
  if (styles.every(s => s === primaryStyle)) {
    vibeTag.textContent = VIBES[primaryStyle] || '🔥 Custom Blend';
  } else {
    vibeTag.textContent = '🔥 Custom Blend';
  }
}

function updateActionButtons() {
  const saveBtn = document.getElementById('saveBtn');
  const shareBtn = document.getElementById('shareBtn');
  
  const hasItems = Object.keys(currentOutfit).length > 0;
  saveBtn.disabled = !hasItems;
  shareBtn.disabled = !hasItems;
}

// ============================================================
// STYLE FILTERING
// ============================================================

function setupEventListeners() {
  // Style pills
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      
      currentStyle = e.target.dataset.style;
      renderAllItems();
    });
  });
  
  // Action buttons
  document.getElementById('saveBtn').addEventListener('click', saveOutfit);
  document.getElementById('shareBtn').addEventListener('click', shareOutfit);
  document.getElementById('clearBtn').addEventListener('click', clearOutfit);
  document.getElementById('randomBtn').addEventListener('click', randomOutfit);
  
  // View navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = e.target.dataset.view;
      switchView(view);
    });
  });
  
  // Saved view buttons
  document.getElementById('clearAllBtn').addEventListener('click', clearAllSaved);
  
  // Share modal
  document.getElementById('shareModalClose').addEventListener('click', () => {
    document.getElementById('shareModal').style.display = 'none';
  });
  document.getElementById('copyBtn').addEventListener('click', copyShareCode);
}

function clearOutfit() {
  currentOutfit = {};
  document.querySelectorAll('.item-card').forEach(card => card.classList.remove('selected'));
  document.querySelectorAll('.slot').forEach(slot => {
    if (!slot.id.includes('jewelry')) {
      slot.innerHTML = `<div class="slot-empty-icon">+</div><span>${slot.id}</span>`;
    } else {
      slot.innerHTML = `<div class="slot-empty-icon">◇</div><span>Schmuck</span>`;
    }
    slot.classList.remove('filled');
  });
  updateVibe();
  updateActionButtons();
  updateOutfitList();
  showToast('Outfit geleert');
}

function randomOutfit() {
  currentOutfit = {};
  const categories = ['tops', 'bottoms', 'shoes'];
  
  categories.forEach(category => {
    let items = PRODUCTS[category];
    if (currentStyle !== 'all') {
      items = items.filter(item => item.style === currentStyle);
    }
    if (items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      selectItem(randomItem, category, document.querySelector(`.item-card[data-id="${randomItem.id}"]`));
    }
  });
  
  showToast('✨ Zufalls-Outfit generiert!');
}

// ============================================================
// SAVE & SHARE
// ============================================================

function saveOutfit() {
  const name = `Outfit ${new Date().toLocaleString('de-DE')}`;
  const outfit = {
    id: Date.now(),
    name: name,
    items: { ...currentOutfit },
    date: new Date().toISOString()
  };
  
  savedOutfits.push(outfit);
  localStorage.setItem('dripOutfits', JSON.stringify(savedOutfits));
  
  updateSavedCount();
  showToast('✅ Outfit gespeichert!');
}

function shareOutfit() {
  const code = btoa(JSON.stringify(currentOutfit));
  document.getElementById('shareCode').value = code;
  document.getElementById('shareModal').style.display = 'flex';
}

function copyShareCode() {
  const code = document.getElementById('shareCode');
  code.select();
  document.execCommand('copy');
  showToast('✅ Code kopiert!');
}

// ============================================================
// SAVED OUTFITS
// ============================================================

function loadSavedOutfits() {
  const saved = localStorage.getItem('dripOutfits');
  if (saved) {
    savedOutfits = JSON.parse(saved);
  }
  updateSavedCount();
  renderSavedOutfits();
}

function updateSavedCount() {
  document.getElementById('saved-count').textContent = savedOutfits.length;
}

function renderSavedOutfits() {
  const grid = document.getElementById('savedGrid');
  
  if (savedOutfits.length === 0) {
    grid.innerHTML = `
      <div class="empty-saved">
        <div class="empty-icon">✦</div>
        <p>Noch keine Outfits gespeichert.</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = '';
  savedOutfits.forEach(outfit => {
    const card = document.createElement('div');
    card.className = 'saved-outfit-card';
    
    const itemThumbs = Object.values(outfit.items)
      .map(item => `<img src="${item.img}" alt="${item.name}" class="saved-card-thumb" onerror="this.style.display='none'">`)
      .join('');
    
    card.innerHTML = `
      <div class="saved-card-title">${outfit.name}</div>
      <div class="saved-card-items">${itemThumbs}</div>
      <div class="saved-card-actions">
        <button class="btn-load" onclick="loadOutfit(${outfit.id})">Laden</button>
        <button class="btn-delete" onclick="deleteOutfit(${outfit.id})">✕</button>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function loadOutfit(id) {
  const outfit = savedOutfits.find(o => o.id === id);
  if (!outfit) return;
  
  currentOutfit = { ...outfit.items };
  
  Object.entries(currentOutfit).forEach(([category, item]) => {
    const card = document.querySelector(`.item-card[data-id="${item.id}"]`);
    if (card) {
      selectItem(item, category, card);
    }
  });
  
  switchView('builder');
  showToast('✅ Outfit geladen!');
}

function deleteOutfit(id) {
  savedOutfits = savedOutfits.filter(o => o.id !== id);
  localStorage.setItem('dripOutfits', JSON.stringify(savedOutfits));
  updateSavedCount();
  renderSavedOutfits();
  showToast('❌ Outfit gelöscht');
}

function clearAllSaved() {
  if (confirm('Alle gespeicherten Outfits löschen?')) {
    savedOutfits = [];
    localStorage.removeItem('dripOutfits');
    updateSavedCount();
    renderSavedOutfits();
    showToast('❌ Alle Outfits gelöscht');
  }
}

// ============================================================
// VIEW SWITCHING
// ============================================================

function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
  
  if (view === 'saved') {
    renderSavedOutfits();
  }
}

// ============================================================
// UTILITIES
// ============================================================

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}
