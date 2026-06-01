// ============================================================
// DRIP — PRODUCT DATA
// Bilder: Unsplash (kostenlos, keine Lizenzprobleme)
// Ersetze die URLs mit echten Produktfotos deiner Marke
// ============================================================

// Unsplash-Bilder werden via ?w=400 auf passende Größe skaliert
// Fallback-Emojis werden angezeigt wenn Bild nicht lädt

const PRODUCTS = {

  tops: [
    // ── Y2K ──────────────────────────────────────────────────
    { id: "t01", name: "Metallic Crop Top", brand: "Mesh&More", style: "y2k", price: "39€", img: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=400", link: "#", color: "#ff3cac" },
    { id: "t02", name: "Baby Tee Logo Print", brand: "2KVibes", style: "y2k", price: "24€", img: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400", link: "#", color: "#ff3cac" },
    { id: "t03", name: "Butterfly Halter", brand: "Kitten Co.", style: "y2k", price: "32€", img: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400", link: "#", color: "#ff3cac" },
    { id: "t04", name: "Rhinestone Tube Top", brand: "Glitterati", style: "y2k", price: "28€", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", link: "#", color: "#ff3cac" },
    { id: "t05", name: "Colorblock Zip Crop", brand: "2KVibes", style: "y2k", price: "44€", img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400", link: "#", color: "#ff3cac" },
    // ── Hip Hop ───────────────────────────────────────────────
    { id: "t06", name: "Oversized Box Logo Tee", brand: "StreetCore", style: "hiphop", price: "55€", img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400", link: "#", color: "#39ff14" },
    { id: "t07", name: "Graphic Hoodie Drip", brand: "Block Wear", style: "hiphop", price: "79€", img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400", link: "#", color: "#39ff14" },
    { id: "t08", name: "Tracksuit Jacket", brand: "FlyBoy", style: "hiphop", price: "89€", img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400", link: "#", color: "#39ff14" },
    { id: "t09", name: "Jersey Stripe Tee", brand: "StreetCore", style: "hiphop", price: "38€", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400", link: "#", color: "#39ff14" },
    { id: "t10", name: "Satin Bomber Jacket", brand: "Block Wear", style: "hiphop", price: "120€", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400", link: "#", color: "#39ff14" },
    // ── Rock ──────────────────────────────────────────────────
    { id: "t11", name: "Band Tee Vintage Wash", brand: "GrungeHaus", style: "rock", price: "35€", img: "https://images.unsplash.com/photo-1618517047922-6c7f13296842?w=400", link: "#", color: "#888" },
    { id: "t12", name: "Leather Biker Jacket", brand: "IronClad", style: "rock", price: "189€", img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400", link: "#", color: "#888" },
    { id: "t13", name: "Fishnet Layer Top", brand: "GrungeHaus", style: "rock", price: "22€", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400", link: "#", color: "#888" },
    { id: "t14", name: "Flannel Overshirt", brand: "WildBore", style: "rock", price: "59€", img: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400", link: "#", color: "#888" },
    { id: "t15", name: "Slash-Neck Crop Knit", brand: "IronClad", style: "rock", price: "44€", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", link: "#", color: "#888" },
    // ── Clean Girl ────────────────────────────────────────────
    { id: "t16", name: "Ribbed Tank White", brand: "Ceres Studio", style: "cleangirl", price: "28€", img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4571?w=400", link: "#", color: "#00e5ff" },
    { id: "t17", name: "Linen Shirt Oversized", brand: "Hessian & Co", style: "cleangirl", price: "65€", img: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=400", link: "#", color: "#00e5ff" },
    { id: "t18", name: "Fitted Polo Knit", brand: "Ceres Studio", style: "cleangirl", price: "48€", img: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400", link: "#", color: "#00e5ff" },
    { id: "t19", name: "Silk Slip Cami", brand: "Hessian & Co", style: "cleangirl", price: "75€", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400", link: "#", color: "#00e5ff" },
    { id: "t20", name: "Cream Cardigan Set", brand: "Ceres Studio", style: "cleangirl", price: "89€", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", link: "#", color: "#00e5ff" },
    // ── Hippie ────────────────────────────────────────────────
    { id: "t21", name: "Tie-Dye Oversized Tee", brand: "EarthMade", style: "hippie", price: "35€", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400", link: "#", color: "#ffd000" },
    { id: "t22", name: "Crochet Crop Vest", brand: "Sundust", style: "hippie", price: "52€", img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=400", link: "#", color: "#ffd000" },
    { id: "t23", name: "Boho Patchwork Blouse", brand: "EarthMade", style: "hippie", price: "68€", img: "https://images.unsplash.com/photo-1485462537746-965f33f5bdb5?w=400", link: "#", color: "#ffd000" },
    { id: "t24", name: "Peasant Top Embroidered", brand: "Sundust", style: "hippie", price: "44€", img: "https://images.unsplash.com/photo-1553746432-f11c30b1c28f?w=400", link: "#", color: "#ffd000" },
    { id: "t25", name: "Macramé Halter", brand: "EarthMade", style: "hippie", price: "38€", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400", link: "#", color: "#ffd000" },
    // ── Punk ──────────────────────────────────────────────────
    { id: "t26", name: "Torn Graphic Tee", brand: "Anarchy Co.", style: "punk", price: "29€", img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400", link: "#", color: "#ff5555" },
    { id: "t27", name: "Studded Leather Vest", brand: "RiotGear", style: "punk", price: "145€", img: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=400", link: "#", color: "#ff5555" },
    { id: "t28", name: "Plaid Bondage Top", brand: "Anarchy Co.", style: "punk", price: "48€", img: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=400", link: "#", color: "#ff5555" },
    { id: "t29", name: "Safety Pin Blouse", brand: "RiotGear", style: "punk", price: "55€", img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=400", link: "#", color: "#ff5555" },
    { id: "t30", name: "Mesh Layered Top", brand: "Anarchy Co.", style: "punk", price: "32€", img: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?w=400", link: "#", color: "#ff5555" },
    // ── Girly ─────────────────────────────────────────────────
    { id: "t31", name: "Ruffle Bow Blouse", brand: "Coquette", style: "girly", price: "58€", img: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=400", link: "#", color: "#ff7ec7" },
    { id: "t32", name: "Pastel Babydoll Top", brand: "Lollipop", style: "girly", price: "42€", img: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=400", link: "#", color: "#ff7ec7" },
    { id: "t33", name: "Pearl Button Cardigan", brand: "Coquette", style: "girly", price: "72€", img: "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?w=400", link: "#", color: "#ff7ec7" },
    { id: "t34", name: "Lace Trim Cami", brand: "Lollipop", style: "girly", price: "35€", img: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400", link: "#", color: "#ff7ec7" },
    { id: "t35", name: "Floral Puff Sleeve Top", brand: "Coquette", style: "girly", price: "64€", img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400", link: "#", color: "#ff7ec7" },
    // ── Skater ────────────────────────────────────────────────
    { id: "t36", name: "Skate Deck Graphic Tee", brand: "Concrete Wave", style: "skater", price: "32€", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400", link: "#", color: "#7b61ff" },
    { id: "t37", name: "Raglan Long Sleeve", brand: "Drop-In", style: "skater", price: "38€", img: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400", link: "#", color: "#7b61ff" },
    { id: "t38", name: "Quarter Zip Fleece", brand: "Concrete Wave", style: "skater", price: "68€", img: "https://images.unsplash.com/photo-1618517047922-6c7f13296842?w=400", link: "#", color: "#7b61ff" },
    { id: "t39", name: "Open-knit Skate Top", brand: "Drop-In", style: "skater", price: "44€", img: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400", link: "#", color: "#7b61ff" },
    { id: "t40", name: "Loose Fit Crew Neck", brand: "Concrete Wave", style: "skater", price: "42€", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", link: "#", color: "#7b61ff" },
    // ── Schick ────────────────────────────────────────────────
    { id: "t41", name: "Silk Blouse Champagne", brand: "Maison 8", style: "schick", price: "135€", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400", link: "#", color: "#c8d2ff" },
    { id: "t42", name: "Structured Blazer Crop", brand: "Atelier Nord", style: "schick", price: "220€", img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4571?w=400", link: "#", color: "#c8d2ff" },
    { id: "t43", name: "Fine Knit Turtleneck", brand: "Maison 8", style: "schick", price: "98€", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400", link: "#", color: "#c8d2ff" },
    { id: "t44", name: "Button-Down Poplin", brand: "Atelier Nord", style: "schick", price: "115€", img: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=400", link: "#", color: "#c8d2ff" },
    { id: "t45", name: "Cashmere V-Neck Knit", brand: "Maison 8", style: "schick", price: "165€", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", link: "#", color: "#c8d2ff" },
    // ── Black Tie ─────────────────────────────────────────────
    { id: "t46", name: "Satin Corset Bodice", brand: "Noir Étoile", style: "blacktie", price: "185€", img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400", link: "#", color: "#bbb" },
    { id: "t47", name: "Strapless Bustier Top", brand: "Gala House", style: "blacktie", price: "145€", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400", link: "#", color: "#bbb" },
    { id: "t48", name: "Tuxedo Jacket Fitted", brand: "Noir Étoile", style: "blacktie", price: "310€", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", link: "#", color: "#bbb" },
    { id: "t49", name: "Draped Cowl Neck Top", brand: "Gala House", style: "blacktie", price: "110€", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400", link: "#", color: "#bbb" },
    { id: "t50", name: "Velvet Halter Neck", brand: "Noir Étoile", style: "blacktie", price: "125€", img: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400", link: "#", color: "#bbb" },
    // ── Chill ─────────────────────────────────────────────────
    { id: "t51", name: "Oversized Crewneck", brand: "Soft Hours", style: "chill", price: "52€", img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400", link: "#", color: "#00b4dc" },
    { id: "t52", name: "Slouchy Knit Sweater", brand: "Sunday Club", style: "chill", price: "68€", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400", link: "#", color: "#00b4dc" },
    { id: "t53", name: "Waffle Thermal Top", brand: "Soft Hours", style: "chill", price: "38€", img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4571?w=400", link: "#", color: "#00b4dc" },
    { id: "t54", name: "Zip-Up Hoodie Soft", brand: "Sunday Club", style: "chill", price: "72€", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400", link: "#", color: "#00b4dc" },
    { id: "t55", name: "Tie Dye Comfort Tee", brand: "Soft Hours", style: "chill", price: "29€", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400", link: "#", color: "#00b4dc" },
  ],

  bottoms: [
    // ── Y2K ──────────────────────────────────────────────────
    { id: "b01", name: "Low Rise Mini Skirt", brand: "2KVibes", style: "y2k", price: "38€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b02", name: "Cargo Pants Y2K", brand: "Kitten Co.", style: "y2k", price: "72€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
    { id: "b03", name: "PVC Mini Skirt", brand: "Glitterati", style: "y2k", price: "44€", img: "https://images.unsplash.com/photo-1601925228632-89f9f5ca2d2b?w=400", link: "#" },
    { id: "b04", name: "Flared Low Waist Jeans", brand: "2KVibes", style: "y2k", price: "89€", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", link: "#" },
    { id: "b05", name: "Rhinestone Denim Skirt", brand: "Glitterati", style: "y2k", price: "65€", img: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=400", link: "#" },
    // ── Hip Hop ───────────────────────────────────────────────
    { id: "b06", name: "Wide Leg Baggy Jeans", brand: "Block Wear", style: "hiphop", price: "95€", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", link: "#" },
    { id: "b07", name: "Track Pants Snap Side", brand: "FlyBoy", style: "hiphop", price: "68€", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400", link: "#" },
    { id: "b08", name: "Cargo Shorts Oversized", brand: "StreetCore", style: "hiphop", price: "55€", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400", link: "#" },
    { id: "b09", name: "Jogger Pants Premium", brand: "FlyBoy", style: "hiphop", price: "72€", img: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400", link: "#" },
    { id: "b10", name: "Denim Cargo Jeans", brand: "Block Wear", style: "hiphop", price: "88€", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", link: "#" },
    // ── Rock ──────────────────────────────────────────────────
    { id: "b11", name: "Skinny Ripped Jeans", brand: "GrungeHaus", style: "rock", price: "78€", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400", link: "#" },
    { id: "b12", name: "Black Plaid Mini", brand: "IronClad", style: "rock", price: "48€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b13", name: "Vinyl Drainpipe Pants", brand: "WildBore", style: "rock", price: "95€", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400", link: "#" },
    { id: "b14", name: "Kilt Plaid Tartan", brand: "GrungeHaus", style: "rock", price: "88€", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", link: "#" },
    { id: "b15", name: "Mesh Panel Leggings", brand: "IronClad", style: "rock", price: "55€", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400", link: "#" },
    // ── Clean Girl ────────────────────────────────────────────
    { id: "b16", name: "Cream Wide Leg Pants", brand: "Ceres Studio", style: "cleangirl", price: "95€", img: "https://images.unsplash.com/photo-1609981370459-7cba1d55551b?w=400", link: "#" },
    { id: "b17", name: "Tailored Midi Skirt", brand: "Hessian & Co", style: "cleangirl", price: "88€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b18", name: "Linen Straight Trousers", brand: "Ceres Studio", style: "cleangirl", price: "110€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
    { id: "b19", name: "Ribbed Knit Midi Skirt", brand: "Hessian & Co", style: "cleangirl", price: "75€", img: "https://images.unsplash.com/photo-1601925228632-89f9f5ca2d2b?w=400", link: "#" },
    { id: "b20", name: "Barrel Leg Jeans Ecru", brand: "Ceres Studio", style: "cleangirl", price: "120€", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", link: "#" },
    // ── Hippie ────────────────────────────────────────────────
    { id: "b21", name: "Flowy Maxi Skirt", brand: "Sundust", style: "hippie", price: "65€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b22", name: "Patchwork Bell Bottoms", brand: "EarthMade", style: "hippie", price: "88€", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400", link: "#" },
    { id: "b23", name: "Boho Wrap Skirt Print", brand: "Sundust", style: "hippie", price: "52€", img: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=400", link: "#" },
    { id: "b24", name: "Embroidered Linen Pants", brand: "EarthMade", style: "hippie", price: "78€", img: "https://images.unsplash.com/photo-1609981370459-7cba1d55551b?w=400", link: "#" },
    { id: "b25", name: "Tiered Cotton Midi", brand: "Sundust", style: "hippie", price: "60€", img: "https://images.unsplash.com/photo-1601925228632-89f9f5ca2d2b?w=400", link: "#" },
    // ── Punk ──────────────────────────────────────────────────
    { id: "b26", name: "Tartan Bondage Pants", brand: "Anarchy Co.", style: "punk", price: "88€", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400", link: "#" },
    { id: "b27", name: "Ripped Fishnet Skirt", brand: "RiotGear", style: "punk", price: "42€", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", link: "#" },
    { id: "b28", name: "Vinyl Drainpipe Jeans", brand: "Anarchy Co.", style: "punk", price: "95€", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", link: "#" },
    { id: "b29", name: "Studded Denim Skirt", brand: "RiotGear", style: "punk", price: "68€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b30", name: "Combat Cargo Pants", brand: "Anarchy Co.", style: "punk", price: "105€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
    // ── Girly ─────────────────────────────────────────────────
    { id: "b31", name: "Tulle Puff Mini Skirt", brand: "Coquette", style: "girly", price: "78€", img: "https://images.unsplash.com/photo-1601925228632-89f9f5ca2d2b?w=400", link: "#" },
    { id: "b32", name: "Satin Bow Mini Skirt", brand: "Lollipop", style: "girly", price: "58€", img: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=400", link: "#" },
    { id: "b33", name: "Pastel Plaid Trousers", brand: "Coquette", style: "girly", price: "88€", img: "https://images.unsplash.com/photo-1609981370459-7cba1d55551b?w=400", link: "#" },
    { id: "b34", name: "Cherry Print Midi", brand: "Lollipop", style: "girly", price: "65€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b35", name: "Wide Leg Sailor Pants", brand: "Coquette", style: "girly", price: "92€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
    // ── Skater ────────────────────────────────────────────────
    { id: "b36", name: "Wide Leg Skate Cords", brand: "Concrete Wave", style: "skater", price: "72€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
    { id: "b37", name: "Baggy Jeans Distressed", brand: "Drop-In", style: "skater", price: "88€", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", link: "#" },
    { id: "b38", name: "Plaid Skater Skirt", brand: "Concrete Wave", style: "skater", price: "55€", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", link: "#" },
    { id: "b39", name: "Sweat Shorts Wide", brand: "Drop-In", style: "skater", price: "45€", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400", link: "#" },
    { id: "b40", name: "Cargo Shorts Skate", brand: "Concrete Wave", style: "skater", price: "62€", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400", link: "#" },
    // ── Schick ────────────────────────────────────────────────
    { id: "b41", name: "Tailored Cigarette Pants", brand: "Maison 8", style: "schick", price: "145€", img: "https://images.unsplash.com/photo-1609981370459-7cba1d55551b?w=400", link: "#" },
    { id: "b42", name: "Pencil Skirt Midi", brand: "Atelier Nord", style: "schick", price: "128€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b43", name: "High-Waist Culottes", brand: "Maison 8", style: "schick", price: "118€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
    { id: "b44", name: "Pleated Maxi Skirt", brand: "Atelier Nord", style: "schick", price: "165€", img: "https://images.unsplash.com/photo-1601925228632-89f9f5ca2d2b?w=400", link: "#" },
    { id: "b45", name: "Wide Leg Wool Trousers", brand: "Maison 8", style: "schick", price: "198€", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400", link: "#" },
    // ── Black Tie ─────────────────────────────────────────────
    { id: "b46", name: "Flared Gown Skirt", brand: "Noir Étoile", style: "blacktie", price: "280€", img: "https://images.unsplash.com/photo-1601925228632-89f9f5ca2d2b?w=400", link: "#" },
    { id: "b47", name: "Satin Maxi Skirt Slit", brand: "Gala House", style: "blacktie", price: "235€", img: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=400", link: "#" },
    { id: "b48", name: "Velvet Wide Trousers", brand: "Noir Étoile", style: "blacktie", price: "195€", img: "https://images.unsplash.com/photo-1609981370459-7cba1d55551b?w=400", link: "#" },
    { id: "b49", name: "Ball Gown Tulle Skirt", brand: "Gala House", style: "blacktie", price: "320€", img: "https://images.unsplash.com/photo-1583496661160-fb5218afa9a9?w=400", link: "#" },
    { id: "b50", name: "Column Skirt Black", brand: "Noir Étoile", style: "blacktie", price: "175€", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400", link: "#" },
    // ── Chill ─────────────────────────────────────────────────
    { id: "b51", name: "Jogger Pants Cozy", brand: "Soft Hours", style: "chill", price: "55€", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400", link: "#" },
    { id: "b52", name: "Baggy Sweatpants", brand: "Sunday Club", style: "chill", price: "62€", img: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400", link: "#" },
    { id: "b53", name: "Linen Drawstring Pants", brand: "Soft Hours", style: "chill", price: "72€", img: "https://images.unsplash.com/photo-1609981370459-7cba1d55551b?w=400", link: "#" },
    { id: "b54", name: "Bike Shorts Oversized", brand: "Sunday Club", style: "chill", price: "35€", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400", link: "#" },
    { id: "b55", name: "Wide Leg Cargos Soft", brand: "Soft Hours", style: "chill", price: "78€", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", link: "#" },
  ],

  shoes: [
    // ── Y2K ──────────────────────────────────────────────────
    { id: "s01", name: "Platform Sneaker Chunky", brand: "ThickSole", style: "y2k", price: "105€", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
    { id: "s02", name: "Butterfly Mule", brand: "Kitten Co.", style: "y2k", price: "78€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s03", name: "Clear Vinyl Heels", brand: "Glitterati", style: "y2k", price: "88€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s04", name: "Wedge Platform Boot", brand: "2KVibes", style: "y2k", price: "125€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    { id: "s05", name: "Jelly Sandals Y2K", brand: "ThickSole", style: "y2k", price: "45€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    // ── Hip Hop ───────────────────────────────────────────────
    { id: "s06", name: "Air Force 1 Low", brand: "Nike", style: "hiphop", price: "110€", img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400", link: "#" },
    { id: "s07", name: "Jordan 1 Retro High", brand: "Nike", style: "hiphop", price: "185€", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
    { id: "s08", name: "Timberland 6-Inch Boot", brand: "Timberland", style: "hiphop", price: "195€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    { id: "s09", name: "Yeezy Foam Runner", brand: "Adidas", style: "hiphop", price: "290€", img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400", link: "#" },
    { id: "s10", name: "Crocs Mega Crush", brand: "Crocs", style: "hiphop", price: "85€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    // ── Rock ──────────────────────────────────────────────────
    { id: "s11", name: "Doc Martens 1460", brand: "Dr. Martens", style: "rock", price: "165€", img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400", link: "#" },
    { id: "s12", name: "Chelsea Boot Leather", brand: "IronClad", style: "rock", price: "145€", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", link: "#" },
    { id: "s13", name: "Converse High-Top", brand: "Converse", style: "rock", price: "85€", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
    { id: "s14", name: "Creeper Platform", brand: "GrungeHaus", style: "rock", price: "115€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s15", name: "Lug Sole Ankle Boot", brand: "WildBore", style: "rock", price: "138€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    // ── Clean Girl ────────────────────────────────────────────
    { id: "s16", name: "Slingback Kitten Heel", brand: "Hessian & Co", style: "cleangirl", price: "115€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s17", name: "Loafer Leather Tan", brand: "Ceres Studio", style: "cleangirl", price: "145€", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", link: "#" },
    { id: "s18", name: "Pointed Ballet Flat", brand: "Hessian & Co", style: "cleangirl", price: "95€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s19", name: "Mary Jane Block Heel", brand: "Ceres Studio", style: "cleangirl", price: "125€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s20", name: "Strappy Sandal Minimal", brand: "Hessian & Co", style: "cleangirl", price: "88€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    // ── Hippie ────────────────────────────────────────────────
    { id: "s21", name: "Birkenstock Arizona", brand: "Birkenstock", style: "hippie", price: "95€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    { id: "s22", name: "Suede Fringe Boot", brand: "Sundust", style: "hippie", price: "135€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    { id: "s23", name: "Espadrille Wedge", brand: "EarthMade", style: "hippie", price: "72€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s24", name: "Woven Leather Sandal", brand: "Sundust", style: "hippie", price: "85€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    { id: "s25", name: "Embroidered Ankle Boot", brand: "EarthMade", style: "hippie", price: "145€", img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400", link: "#" },
    // ── Punk ──────────────────────────────────────────────────
    { id: "s26", name: "Studded Combat Boot", brand: "Anarchy Co.", style: "punk", price: "158€", img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400", link: "#" },
    { id: "s27", name: "Platform Mary Jane", brand: "RiotGear", style: "punk", price: "112€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s28", name: "New Rock Monster Boot", brand: "RiotGear", style: "punk", price: "245€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    { id: "s29", name: "Chain Combat Boot", brand: "Anarchy Co.", style: "punk", price: "175€", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", link: "#" },
    { id: "s30", name: "Chunky Lace Boot", brand: "RiotGear", style: "punk", price: "135€", img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400", link: "#" },
    // ── Girly ─────────────────────────────────────────────────
    { id: "s31", name: "Bow Ballet Flat", brand: "Coquette", style: "girly", price: "82€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s32", name: "Kitten Heel Mule Pink", brand: "Lollipop", style: "girly", price: "95€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s33", name: "Platform Chunky Heels", brand: "Coquette", style: "girly", price: "118€", img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400", link: "#" },
    { id: "s34", name: "Strappy Block Heel", brand: "Lollipop", style: "girly", price: "105€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s35", name: "Fluffy Slide Sandal", brand: "Coquette", style: "girly", price: "68€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    // ── Skater ────────────────────────────────────────────────
    { id: "s36", name: "Vans Old Skool", brand: "Vans", style: "skater", price: "80€", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
    { id: "s37", name: "Nike SB Dunk Low", brand: "Nike SB", style: "skater", price: "105€", img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400", link: "#" },
    { id: "s38", name: "Vans Sk8-Hi", brand: "Vans", style: "skater", price: "90€", img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400", link: "#" },
    { id: "s39", name: "DC Shoes Court", brand: "DC Shoes", style: "skater", price: "75€", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
    { id: "s40", name: "Emerica Wino G6", brand: "Emerica", style: "skater", price: "85€", img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400", link: "#" },
    // ── Schick ────────────────────────────────────────────────
    { id: "s41", name: "Pointed Toe Pump", brand: "Maison 8", style: "schick", price: "195€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s42", name: "Block Heel Loafer", brand: "Atelier Nord", style: "schick", price: "165€", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", link: "#" },
    { id: "s43", name: "Croc Embossed Mule", brand: "Maison 8", style: "schick", price: "145€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s44", name: "Knee-High Leather Boot", brand: "Atelier Nord", style: "schick", price: "285€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    { id: "s45", name: "Strappy Heel Sandal", brand: "Maison 8", style: "schick", price: "175€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    // ── Black Tie ─────────────────────────────────────────────
    { id: "s46", name: "Satin Stiletto Heel", brand: "Noir Étoile", style: "blacktie", price: "245€", img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400", link: "#" },
    { id: "s47", name: "Crystal Embellished Pump", brand: "Gala House", style: "blacktie", price: "385€", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "#" },
    { id: "s48", name: "Strappy Satin Sandal", brand: "Noir Étoile", style: "blacktie", price: "210€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    { id: "s49", name: "Patent Leather Loafer", brand: "Gala House", style: "blacktie", price: "195€", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", link: "#" },
    { id: "s50", name: "Lace-Up Velvet Boot", brand: "Noir Étoile", style: "blacktie", price: "320€", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400", link: "#" },
    // ── Chill ─────────────────────────────────────────────────
    { id: "s51", name: "Adidas Samba OG", brand: "Adidas", style: "chill", price: "100€", img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400", link: "#" },
    { id: "s52", name: "New Balance 550", brand: "New Balance", style: "chill", price: "120€", img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400", link: "#" },
    { id: "s53", name: "UGG Mini Platform", brand: "UGG", style: "chill", price: "165€", img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400", link: "#" },
    { id: "s54", name: "Shower Slide Chunky", brand: "Sunday Club", style: "chill", price: "38€", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400", link: "#" },
    { id: "s55", name: "Cloud Shoe Soft", brand: "Soft Hours", style: "chill", price: "88€", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
  ],

  jewelry: [
    // ── Halsketten ────────────────────────────────────────────
    { id: "j01", name: "Gold Chain Layered", brand: "AuraCo", style: "all", subcat: "neck", price: "45€", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400", link: "#" },
    { id: "j02", name: "Pearl Choker Classic", brand: "Lumi", style: "girly", subcat: "neck", price: "35€", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", link: "#" },
    { id: "j03", name: "Silver Cuban Link", brand: "Chain Gang", style: "hiphop", subcat: "neck", price: "65€", img: "https://images.unsplash.com/photo-1573408301185-9519f94816b8?w=400", link: "#" },
    { id: "j04", name: "Spike Collar Punk", brand: "RiotGear", style: "punk", subcat: "neck", price: "28€", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400", link: "#" },
    { id: "j05", name: "Beaded Boho Necklace", brand: "Sundust", style: "hippie", subcat: "neck", price: "32€", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", link: "#" },
    { id: "j06", name: "Minimalist Pendant Gold", brand: "Ceres Studio", style: "cleangirl", subcat: "neck", price: "55€", img: "https://images.unsplash.com/photo-1573408301185-9519f94816b8?w=400", link: "#" },
    { id: "j07", name: "Y2K Butterfly Necklace", brand: "Glitterati", style: "y2k", subcat: "neck", price: "24€", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400", link: "#" },
    { id: "j08", name: "Pavé Diamond Choker", brand: "Noir Étoile", style: "blacktie", subcat: "neck", price: "185€", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", link: "#" },
    // ── Armbänder ─────────────────────────────────────────────
    { id: "j09", name: "Tennis Bracelet Silver", brand: "AuraCo", style: "schick", subcat: "wrist", price: "75€", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400", link: "#" },
    { id: "j10", name: "Friendship Braided Set", brand: "Sundust", style: "chill", subcat: "wrist", price: "18€", img: "https://images.unsplash.com/photo-1573408301185-9519f94816b8?w=400", link: "#" },
    { id: "j11", name: "Gold Bangles Stack", brand: "Lumi", style: "cleangirl", subcat: "wrist", price: "48€", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400", link: "#" },
    { id: "j12", name: "Chain Cuff Punk", brand: "Anarchy Co.", style: "punk", subcat: "wrist", price: "35€", img: "https://images.unsplash.com/photo-1573408301185-9519f94816b8?w=400", link: "#" },
    { id: "j13", name: "Charm Bracelet Cutesy", brand: "Lollipop", style: "girly", subcat: "wrist", price: "42€", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400", link: "#" },
    { id: "j14", name: "Rubber Band Stack Skate", brand: "Concrete Wave", style: "skater", subcat: "wrist", price: "12€", img: "https://images.unsplash.com/photo-1573408301185-9519f94816b8?w=400", link: "#" },
    // ── Kopfschmuck ───────────────────────────────────────────
    { id: "j15", name: "Silk Scrunchie Set", brand: "Hessian & Co", style: "cleangirl", subcat: "head", price: "22€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j16", name: "Butterfly Hair Clips", brand: "2KVibes", style: "y2k", subcat: "head", price: "18€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j17", name: "Flower Crown Boho", brand: "EarthMade", style: "hippie", subcat: "head", price: "28€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j18", name: "Mini Top Hat Punk", brand: "RiotGear", style: "punk", subcat: "head", price: "35€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j19", name: "Crystal Tiara Gala", brand: "Noir Étoile", style: "blacktie", subcat: "head", price: "125€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j20", name: "Beanie Knit Cool", brand: "Sunday Club", style: "chill", subcat: "head", price: "25€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j21", name: "Snapback Cap Skate", brand: "Drop-In", style: "skater", subcat: "head", price: "32€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j22", name: "Bow Headband Girly", brand: "Coquette", style: "girly", subcat: "head", price: "20€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j23", name: "Gold Headband Schick", brand: "Maison 8", style: "schick", subcat: "head", price: "68€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j24", name: "Bandana Classic HipHop", brand: "StreetCore", style: "hiphop", subcat: "head", price: "15€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
    { id: "j25", name: "Chain Headband Y2K", brand: "Glitterati", style: "y2k", subcat: "head", price: "28€", img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400", link: "#" },
  ]
};

// Vibe descriptions for style combinations
const VIBES = {
  y2k:      "✨ Y2K Energy",
  hiphop:   "🎤 Street Drip",
  rock:     "🤘 Rock Grunge",
  cleangirl:"🤍 Clean Girl",
  hippie:   "🌸 Free Spirit",
  punk:     "⚡ Punk Riot",
  girly:    "🎀 Coquette",
  skater:   "🛹 Skate Core",
  schick:   "✦ Polished",
  blacktie: "🖤 Black Tie",
  chill:    "☁️ Soft Life",
  mixed:    "🔥 Custom Blend"
};
