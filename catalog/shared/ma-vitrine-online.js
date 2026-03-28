(function () {
  var BRAND = {
    brand: "Ma Vitrine Online",
    owner: "Hicham AIFOUT",
    address: "10 Av. Pierre 1er de Serbie, 75116 Paris",
    phoneDisplay: "+33 6 11 09 76 55",
    phoneHref: "+33611097655",
    email: "contact@mavitrineonline.fr"
  };

  var PERSON_ROLES = [
    "Fondateur - Ma Vitrine Online",
    "Direction - Ma Vitrine Online",
    "Pilotage - Ma Vitrine Online",
    "Coordination - Ma Vitrine Online",
    "Accompagnement - Ma Vitrine Online"
  ];

  var PRESETS = {
    "Lounge-1.0.0": {
      model: "Model 1",
      style: "Atmosphere",
      showcaseTitle: "Une ambiance calme pour cafe, brunch ou adresse premium.",
      showcaseText: "Ce style fonctionne tres bien pour un lieu qui mise sur les photos, les respirations et un message haut de gamme sans surcharge visuelle.",
      positioning: "Grand hero, mise en scene editoriale, sensation de lieu soigne et mature.",
      modulesText: "Accueil immersif, carte courte, galerie photo, prise de contact rapide et reseaux sociaux.",
      useCase: "Ideal pour coffee shop, brunch, cave a manger ou petit restaurant de quartier tres image.",
      replace: {
        "Lounge Cafe": BRAND.brand,
        "Lounge": BRAND.brand
      },
      patches: [
        { selector: ".intro-header__overline", mode: "text", value: "Showroom" },
        { selector: ".intro-header__big-type", mode: "html", value: "Ma Vitrine<br>Online" },
        { selector: ".intro-block-content__text", mode: "text", value: "Une base apaisante pour presenter une adresse, raconter l'ambiance et installer une vraie sensation de qualite." },
        { selector: ".header-contact__num", mode: "text", value: "Choisir ce style" },
        { selector: ".header-contact__num", mode: "attr", attr: "href", value: "#mvo-contact" },
        { selector: ".intro-block-content__social a", mode: "text", values: ["FB", "IG", "WEB", "DEMO"] }
      ]
    },
    "burgerking-main": {
      model: "Model 2",
      style: "Pop Express",
      showcaseTitle: "Un style energique pour restauration rapide, burger ou carte courte.",
      showcaseText: "La structure est directe, lisible et pensee pour pousser les clics vers la carte, la commande ou la reservation.",
      positioning: "Visuels forts, promesses claires, rythme commercial et boutons tres visibles.",
      modulesText: "Hero carrousel, offres phares, modules de conversion, carte rapide et page contact.",
      useCase: "Ideal pour burger, tacos, street-food, pizzeria rapide ou concept de livraison.",
      replace: {
        "Burger King": BRAND.brand
      },
      hide: [".feature", ".menu", ".team", ".blog"],
      patches: [
        { selector: ".navbar-brand", mode: "html", value: "Ma <span>Vitrine</span> Online" },
        { selector: ".carousel-text h1", mode: "html", values: [
          "Une vitrine qui donne<br><span>envie d'entrer</span>",
          "Un style pense pour<br><span>la carte courte</span>",
          "Une base faite pour<br><span>convertir vite</span>"
        ]},
        { selector: ".carousel-text p", mode: "text", values: [
          "Une page d'accueil tres lisible pour mettre en avant un concept, une promesse et deux actions claires.",
          "Ce template rassure vite le visiteur avec un discours simple, des visuels forts et une hierarchie commerciale nette.",
          "Parfait pour un restaurant qui veut presenter ses offres, ses horaires et ses liens de commande sans friction."
        ]},
        { selector: ".carousel-btn .btn:first-child", mode: "text", value: "Voir les modules" },
        { selector: ".carousel-btn .btn:last-child", mode: "text", value: "Parler du projet" }
      ]
    },
    "delicious-master": {
      model: "Model 3",
      style: "Editorial Food",
      showcaseTitle: "Une base magazine pour concept food, brunch ou lieu qui veut raconter une histoire.",
      showcaseText: "La navigation et la mise en page donnent tout de suite une sensation de contenu riche, d'univers de marque et d'inspiration.",
      positioning: "Beaucoup de place pour le storytelling, les actualites, les photos et les blocs inspiration.",
      modulesText: "Hero editorial, selections, blocs contenu, articles, pages dediees et sections galerie.",
      useCase: "Ideal pour brunch, traiteur, concept food, epicerie fine ou restaurant avec actualites regulieres.",
      replace: {
        "Delicious": BRAND.brand
      },
      hide: [".top-catagory-area", ".best-receipe-area", ".small-receipe-area", ".quote-subscribe-adds"],
      patches: [
        { selector: ".hero-slides-content h2", mode: "text", values: [
          "Un style editorial pour vendre une ambiance",
          "Une vitrine qui laisse respirer le contenu",
          "Un bon choix pour raconter un concept"
        ]},
        { selector: ".hero-slides-content p", mode: "text", value: "Cette base est pratique pour mettre en avant une histoire, des visuels, des actualites et un vrai ton de marque autour du lieu." },
        { selector: ".hero-slides-content a", mode: "text", value: "Voir la demo" }
      ]
    },
    "feane-1.0.0": {
      model: "Model 4",
      style: "Street Kitchen",
      showcaseTitle: "Un style dynamique pour restaurant urbain, livraison ou click and collect.",
      showcaseText: "Le hero est immediat, les appels a l'action sont visibles et la structure convient tres bien a une carte simple avec offres fortes.",
      positioning: "Template efficace, mobile-friendly et tres direct pour aller vite a l'essentiel.",
      modulesText: "Hero carrousel, presentation, offres, avis, reservation et rappels visuels de commande.",
      useCase: "Ideal pour fast casual, smash burger, street-food, dark kitchen ou petit reseau de points de vente.",
      replace: {
        "Feane": BRAND.brand
      },
      hide: [".offer_section", ".food_section", ".book_section", ".client_section"],
      patches: [
        { selector: ".navbar-brand span", mode: "text", value: BRAND.brand },
        { selector: ".detail-box h1", mode: "text", value: "Restaurant, bar ou brunch" },
        { selector: ".detail-box p", mode: "text", value: "Une base moderne pour presenter l'essentiel: concept, promesse, points forts, liens de commande et prise de contact." },
        { selector: ".detail-box .btn1", mode: "text", value: "Voir la demo" }
      ]
    },
    "feliciano-master": {
      model: "Model 5",
      style: "Signature",
      showcaseTitle: "Une vitrine haut de gamme pour restaurant, bistrot chic ou adresse evenementielle.",
      showcaseText: "Le ton est plus premium, avec un hero ample, beaucoup de verticalite et un rendu ideal pour une offre plus statutaire.",
      positioning: "Visuels larges, atmosphere elegante, sections tres utiles pour raconter l'adresse et son niveau de service.",
      modulesText: "Hero plein ecran, presentation du lieu, carte, chiffres de confiance, temoignages et contact.",
      useCase: "Ideal pour restaurant signature, lieu de reception, rooftop, cave haut de gamme ou grande brasserie.",
      replace: {
        "Feliciano": BRAND.brand
      },
      patches: [
        { selector: ".navbar-brand", mode: "text", value: BRAND.brand },
        { selector: ".slider-item .subheading", mode: "text", value: BRAND.brand },
        { selector: ".slider-item h1", mode: "text", values: [
          "Un style premium pour marquer les esprits",
          "Une base elegante et rassurante",
          "Un site concu pour valoriser l'adresse"
        ]}
      ]
    },
    "gourmet-master": {
      model: "Model 6",
      style: "Maison",
      showcaseTitle: "Un template raffine, lumineux et tres lisible pour restaurant ou maison de famille.",
      showcaseText: "La navigation reste classique mais l'ensemble donne une image serieuse, propre et assez chaleureuse pour beaucoup de concepts.",
      positioning: "Belle respiration, photos larges, hero sobre et sections simples a personnaliser.",
      modulesText: "Hero, presentation, specialites, galerie, equipe, actualites et contact.",
      useCase: "Ideal pour brasserie, restaurant familial, cave, cuisine maison ou table de quartier.",
      replace: {
        "Gourmet": BRAND.brand
      },
      patches: [
        { selector: ".navbar-brand", mode: "text", value: BRAND.brand },
        { selector: ".slider-item h1", mode: "text", values: [
          "Un style clair pour restaurant ou brasserie",
          "Une experience simple, elegante et utile"
        ]},
        { selector: ".slider-item .btn", mode: "text", value: "Voir les modules" }
      ]
    },
    "grandcoffee-master": {
      model: "Model 7",
      style: "Coffee & Brunch",
      showcaseTitle: "Une base accessible pour cafe, coffee shop, brunch ou salon de the.",
      showcaseText: "Le rendu est chaleureux et tres accueillant, avec une logique de lecture simple et des sections faciles a vendre a un prospect.",
      positioning: "Grand hero, message simple, galerie facile a comprendre et navigation rassurante.",
      modulesText: "Accueil, concept, galerie, services, horaires, contact et ancrages visuels pour reseaux sociaux.",
      useCase: "Ideal pour cafe de quartier, coffee shop, brunch du week-end ou adresse de passage.",
      replace: {
        "Grand Coffee": BRAND.brand,
        "Grandcoffee": BRAND.brand
      },
      patches: [
        { selector: ".outstanding_text", mode: "text", value: "Template" },
        { selector: ".coffee_text", mode: "text", value: BRAND.brand },
        { selector: ".there_text", mode: "text", value: "Une base conviviale pour mettre en avant l'ambiance, les horaires, les photos du lieu et les services essentiels." },
        { selector: ".learnmore_bt a", mode: "text", value: "Voir la demo" }
      ]
    },
    "pato-master": {
      model: "Model 8",
      style: "Night & Chic",
      showcaseTitle: "Une ambiance sombre et chic pour bar, cocktails, restaurant du soir ou privatisation.",
      showcaseText: "C'est un bon point de depart pour un lieu qui veut etre plus selectif, plus nocturne et plus visuel dans sa presentation.",
      positioning: "Beaucoup d'impact sur le hero, un ton tres premium et une forte perception d'experience.",
      modulesText: "Hero plein ecran, sections menu, reservation, galerie, experience et contact.",
      useCase: "Ideal pour bar a cocktails, restaurant lounge, speakeasy, lieu de fete ou salle privatisable.",
      replace: {
        "Pato Place": BRAND.brand,
        "Pato": BRAND.brand
      },
      patches: [
        { selector: ".caption1-slide1", mode: "text", value: "Template" },
        { selector: ".caption2-slide1", mode: "text", value: BRAND.brand },
        { selector: ".wrap-btn-slide1 a", mode: "text", value: "Voir les modules" }
      ]
    },
    "restaurant-1.0.0": {
      model: "Model 9",
      style: "Premium Landing",
      showcaseTitle: "Une landing page complete pour concept ambitieux, groupe ou futur reseau multi-sites.",
      showcaseText: "Cette base est plus corporate et tres modulaire. Elle convient bien quand on veut rassurer, structurer et montrer beaucoup d'informations proprement.",
      positioning: "Sections nombreuses, argumentaire solide, FAQ, blocs equipe et vraie logique de conversion.",
      modulesText: "Hero, chiffres, services, testimonials, livraison, equipe, FAQ et contact complet.",
      useCase: "Ideal pour groupe, franchise, grosse brasserie, chaine de restauration ou projet qui veut faire tres professionnel.",
      replace: {},
      patches: [
        { selector: "header .navbar-start > a", mode: "text", value: BRAND.brand },
        { selector: "h1 span", mode: "html", value: "Une vitrine claire.<br>Un style qui rassure." },
        { selector: ".bg-base-200 span", mode: "text", value: "Showroom de templates restaurants" },
        { selector: ".text-base-content\\/80.max-w-3xl", mode: "text", value: "Une landing page tres solide pour presenter un concept, installer la confiance et guider le visiteur vers l'action." },
        { selector: ".btn.btn-primary.btn-gradient.btn-lg", mode: "text", value: "Voir la demo" },
        { selector: "section#about-us h2", mode: "text", value: "Pourquoi ce style fonctionne" },
        { selector: "section#about-us p.text-base-content\\/80.text-xl", mode: "text", value: "Cette version convient quand il faut expliquer un positionnement, des services, des points forts et des preuves de confiance avec beaucoup de clarte." }
      ]
    },
    "templatemo_507_victory": {
      model: "Model 10",
      style: "Brasserie Classique",
      showcaseTitle: "Une structure directe et rassurante pour restaurant traditionnel, pizzeria ou brasserie.",
      showcaseText: "Tout est centre sur l'essentiel: hero, promesse, bloc de contact et navigation simple. C'est facile a vendre et facile a personnaliser.",
      positioning: "Template pragmatique, rapide a comprendre et tres efficace pour un besoin classique.",
      modulesText: "Hero simple, blocs categories, reservation, carte, contact et footer clair.",
      useCase: "Ideal pour brasserie, restaurant traditionnel, pizzeria, grill ou lieu qui veut aller a l'essentiel.",
      replace: {
        "Victory": BRAND.brand
      },
      hide: [".services", ".featured-food"],
      patches: [
        { selector: ".navbar-brand", mode: "text", value: BRAND.brand },
        { selector: ".banner h4", mode: "text", value: "Un template neutre pour presenter un futur site" },
        { selector: ".banner h2", mode: "text", value: "Restaurant, bar ou brasserie" },
        { selector: ".banner p", mode: "text", value: "Une base simple, rassurante et facile a adapter avec la vraie carte, les vraies photos et les bons liens de reservation." },
        { selector: ".banner .primary-button a", mode: "text", value: "Voir les modules" },
        { selector: ".cook-content h4", mode: "text", value: "Une base facile a vendre" },
        { selector: ".cook-content .contact-content span", mode: "text", value: "Cette structure peut accueillir :" },
        { selector: ".cook-content .contact-content h6", mode: "text", value: "Accueil, carte, reservation, privatisation" },
        { selector: ".cook-content .primary-white-button a", mode: "text", value: "Choisir ce style" }
      ]
    },
    "yummy-red-1.0.0": {
      model: "Model 11",
      style: "Moderne Lumineux",
      showcaseTitle: "Une base claire et contemporaine pour restaurant, traiteur, cantine premium ou brunch.",
      showcaseText: "Le rendu est propre, lumineux et tres rassurant. C'est un style simple a projeter pour beaucoup de concepts differents.",
      positioning: "Navigation moderne, hero lisible, sections nombreuses et bonne tenue mobile.",
      modulesText: "Hero, presentation, menu, evenements, equipe, galerie et reservation.",
      useCase: "Ideal pour restaurant familial, traiteur, cantine premium, brunch ou cuisine saine.",
      replace: {
        "Yummy": BRAND.brand
      },
      hide: ["#menu", "#events", "#chefs", "#book-a-table", "#gallery"],
      patches: [
        { selector: ".sitename", mode: "text", value: BRAND.brand },
        { selector: "#hero h1", mode: "html", value: "Un site clair pour<br>restaurant ou brunch" },
        { selector: "#hero p", mode: "text", value: "Une base lumineuse pour presenter un concept, mettre en avant les points forts et guider vers la prise de contact." },
        { selector: ".btn-get-started", mode: "text", values: ["Voir la demo", "Voir les modules"] },
        { selector: ".btn-watch-video span", mode: "text", value: "Retour catalogue" },
        { selector: ".btn-watch-video", mode: "attr", attr: "href", value: "../index.html" }
      ]
    }
  };

  var SHARED_BASE = (function () {
    var current = document.currentScript;
    if (current && current.src) {
      return current.src.replace(/\/ma-vitrine-online\.js(?:\?.*)?$/, "");
    }
    return "../shared";
  })();

  function q(selector, root) {
    try {
      return (root || document).querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function qa(selector, root) {
    try {
      return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    } catch (error) {
      return [];
    }
  }

  function logoSrc() {
    return SHARED_BASE + "/logo-ma-vitrine-online.svg";
  }

  function ensureStylesheet() {
    if (q('link[href*="ma-vitrine-online.css"]')) {
      return;
    }
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = SHARED_BASE + "/ma-vitrine-online.css";
    document.head.appendChild(stylesheet);
  }

  function inferSlug() {
    var slug = document.body && document.body.getAttribute("data-mvo-template");
    if (slug) {
      return slug;
    }
    var pathname = String(window.location.pathname || "").replace(/\\/g, "/");
    var match = pathname.match(/\/template\/([^/]+)\//);
    return match ? decodeURIComponent(match[1]) : "";
  }

  function applyValue(node, mode, value, attr) {
    if (!node || typeof value === "undefined") {
      return;
    }
    if (mode === "html") {
      node.innerHTML = value;
      return;
    }
    if (mode === "attr") {
      node.setAttribute(attr, value);
      return;
    }
    node.textContent = value;
  }

  function applyPatches(patches) {
    (patches || []).forEach(function (patch) {
      var nodes = qa(patch.selector);
      if (!nodes.length) {
        return;
      }
      if (patch.values && patch.values.length) {
        nodes.forEach(function (node, index) {
          applyValue(node, patch.mode, patch.values[Math.min(index, patch.values.length - 1)], patch.attr);
        });
        return;
      }
      nodes.forEach(function (node) {
        applyValue(node, patch.mode, patch.value, patch.attr);
      });
    });
  }

  function replaceLogos() {
    qa("img[src*='logo'], img[data-logofixed], .footer-logo img, .logo img, .nav-brand img").forEach(function (img, index) {
      if (index > 12) {
        return;
      }
      img.setAttribute("src", logoSrc());
      img.removeAttribute("srcset");
      img.removeAttribute("data-logofixed");
      img.setAttribute("alt", BRAND.brand);
      img.style.height = "auto";
      img.style.maxWidth = index === 0 ? "180px" : "150px";
      img.style.objectFit = "contain";
    });
  }

  function buildCommonTokens() {
    return {
      "555-123-3456": BRAND.phoneDisplay,
      "+01 1234567890": BRAND.phoneDisplay,
      "+012 345 67890": BRAND.phoneDisplay,
      "1235 2355 98": BRAND.phoneDisplay,
      "+1 242 4942 290": BRAND.phoneDisplay,
      "+1) 96 716 6879": BRAND.phoneDisplay,
      "+1 5589 55488 55": BRAND.phoneDisplay,
      "123 Street, NY, USA": BRAND.address,
      "123 Street, New York, USA": BRAND.address,
      "34 Street Name, City Name Here, United States": BRAND.address,
      "8th floor, 379 Hudson St, New York, NY 10018": BRAND.address,
      "A108 Adam Street, New York, NY 535022": BRAND.address,
      "A108 Adam Street": BRAND.address,
      "New York, NY 535022": BRAND.address,
      "456 Elm Street, Los Angeles": BRAND.address,
      "198 West 21th Street, Suite 721 New York NY 10016": BRAND.address,
      "info@example.com": BRAND.email,
      "demo@gmail.com": BRAND.email,
      "contact@site.com": BRAND.email,
      "info@yourdomain.com": BRAND.email,
      "youremail@email.com": BRAND.email,
      "info@yoursite.com": BRAND.email,
      "yourmail@gmail.com": BRAND.email,
      "johndoe@gmail.com": BRAND.email,
      "contact@lounge.com": BRAND.email,
      "John Rockefeller": BRAND.owner,
      "Andrew Carnegie": BRAND.owner,
      "John Morgan": BRAND.owner,
      "Henry Ford": BRAND.owner,
      "Adam Phillips": BRAND.owner,
      "Dylan Adams": BRAND.owner,
      "Jhon Doe": BRAND.owner,
      "Josh Dunn": BRAND.owner,
      "Saul Goodman": BRAND.owner,
      "Sara Wilsson": BRAND.owner,
      "Jena Karlis": BRAND.owner,
      "John Larson": BRAND.owner,
      "John Doe": BRAND.owner,
      "John Smooth": BRAND.owner,
      "Ceo & Founder": PERSON_ROLES[0],
      "CEO, Co Founder": PERSON_ROLES[0],
      "CEO, XYZ Company": PERSON_ROLES[1],
      "Restaurant Owner": PERSON_ROLES[0],
      "Store Owner": PERSON_ROLES[0],
      "Head Chef": PERSON_ROLES[1],
      "Designer": PERSON_ROLES[2],
      "Entrepreneur": PERSON_ROLES[3],
      "Cleveland, Ohio": "Paris 16e",
      "Pittsburgh, Pennsylvania": "Paris 16e",
      "New York City": "Paris 16e",
      "Dearborn, Michigan": "Paris 16e"
    };
  }

  function buildTokenMap(preset) {
    var tokens = buildCommonTokens();
    Object.keys(preset.replace || {}).forEach(function (key) {
      tokens[key] = preset.replace[key];
    });
    return tokens;
  }

  function replaceTextTokens(tokens) {
    var keys = Object.keys(tokens || {}).sort(function (left, right) {
      return right.length - left.length;
    });
    if (!keys.length) {
      return;
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        var parentName = node.parentNode && node.parentNode.nodeName;
        if (parentName === "SCRIPT" || parentName === "STYLE") {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var current;
    while ((current = walker.nextNode())) {
      var value = current.nodeValue;
      keys.forEach(function (key) {
        value = value.split(key).join(tokens[key]);
      });
      current.nodeValue = value;
    }
  }

  function rewriteBrandNodes() {
    var selectors = [
      ".navbar-brand",
      ".sitename",
      ".footer-logo",
      "footer .ftco-heading-2",
      ".footer-logo h1",
      ".footer-logo h2",
      ".site-logo a",
      ".header .navbar-brand",
      ".logo .brand-name",
      ".footer-brand"
    ];
    selectors.forEach(function (selector) {
      qa(selector).forEach(function (node) {
        if (!node.textContent || !node.textContent.trim()) {
          return;
        }
        node.textContent = BRAND.brand;
      });
    });
  }

  function rewritePortraitCards() {
    var portraitSelector = [
      "img[src*='team-']",
      "img[src*='chef-']",
      "img[src*='avatar']",
      "img[src*='testimonial']",
      "img[src*='person_']",
      "img[src*='client']",
      "img[src*='user-0']",
      "img[src*='cook_']",
      "[style*='person_']",
      "[style*='chef-']",
      "[style*='avatar']"
    ].join(", ");

    qa(portraitSelector).forEach(function (node, index) {
      var card = node.closest(".team-item, .team-member, .staff, .testimonial-item, .testimonials-slider__slide, .media, .item, .comment-body, .comment, blockquote, .ftco-animate");
      if (!card || card.getAttribute("data-mvo-person") === "1") {
        if (node.tagName === "IMG") {
          node.alt = BRAND.owner;
        }
        return;
      }

      card.setAttribute("data-mvo-person", "1");

      var cite = q(".testimonials-slider__cite", card);
      if (cite) {
        var locationNode = q("span", cite);
        cite.textContent = BRAND.owner + " ";
        if (locationNode) {
          cite.appendChild(locationNode);
          locationNode.textContent = "Paris 16e";
        }
      }

      var nameNode = q(".team-text h2, .team-text h3, .team-text h4, .member-info h4, .staff h3, .staff h4, .testimonial-content h3, .author h3, .comment-body h3, .comment-body h4, h3, h4, h5", card);
      if (nameNode) {
        nameNode.textContent = BRAND.owner;
      }

      var roleNode = q(".team-text p, .member-info span, .staff .position, .position, .testimonial-content h4, .author p, .comment-body p", card);
      if (roleNode && roleNode.textContent.trim().length < 80) {
        roleNode.textContent = PERSON_ROLES[index % PERSON_ROLES.length];
      }

      if (node.tagName === "IMG") {
        node.alt = BRAND.owner;
      }
    });
  }

  function rewriteContactDetails() {
    qa("a[href^='tel:']").forEach(function (anchor) {
      anchor.setAttribute("href", "tel:" + BRAND.phoneHref);
      if ((anchor.textContent || "").trim()) {
        anchor.textContent = BRAND.phoneDisplay;
      }
    });

    qa("a[href^='mailto:']").forEach(function (anchor) {
      anchor.setAttribute("href", "mailto:" + BRAND.email);
      anchor.textContent = BRAND.email;
    });

    qa("iframe[src*='google.com/maps'], iframe[src*='google.com/maps/embed']").forEach(function (iframe) {
      iframe.setAttribute("src", "https://www.google.com/maps?q=" + encodeURIComponent(BRAND.address) + "&output=embed");
    });
  }

  function classifyLink(anchor) {
    var text = (anchor.textContent || "").toLowerCase().trim();
    if (/catalogue|retour/.test(text)) {
      return "../index.html";
    }
    if (/contact|book|reservation|order|demo|call|commande|reserver|privat|table/.test(text)) {
      return "#mvo-contact";
    }
    if (/about|story|welcome|learn|read more|concept|apropos|a propos/.test(text)) {
      return "#mvo-summary";
    }
    if (/menu|service|feature|chef|gallery|news|recipe|event|module|carte|galerie|equipe|offer|dishes/.test(text)) {
      return "#mvo-modules";
    }
    return "#mvo-summary";
  }

  function rewriteLocalLinks() {
    qa("a[href]").forEach(function (anchor) {
      var href = (anchor.getAttribute("href") || "").trim();
      if (anchor.matches(".carousel-control, .carousel-control-prev, .carousel-control-next, [data-slide], [data-bs-slide], [data-toggle], [data-bs-toggle]")) {
        return;
      }
      if (/^(mailto:|tel:|javascript:)/i.test(href)) {
        return;
      }
      if (/^https?:/i.test(href)) {
        if (/youtube\.com|youtu\.be/.test(href)) {
          anchor.setAttribute("href", "../index.html");
        }
        return;
      }
      if (href === "#0" || href === "#" || href === "" || href.indexOf(".html") !== -1) {
        anchor.setAttribute("href", classifyLink(anchor));
        return;
      }
      if (href.charAt(0) === "#" && href !== "#top") {
        anchor.setAttribute("href", classifyLink(anchor));
      }
    });
  }

  function neutralizeForms() {
    qa("form").forEach(function (form) {
      form.setAttribute("action", "#mvo-contact");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      });
      if (form.parentNode && !q(".mvo-form-note", form.parentNode)) {
        var note = document.createElement("p");
        note.className = "mvo-form-note";
        note.textContent = "Version showroom : les formulaires sont neutralises jusqu'a la mise en ligne du vrai projet.";
        form.parentNode.appendChild(note);
      }
    });
  }

  function hideSections(selectors) {
    (selectors || []).forEach(function (selector) {
      qa(selector).forEach(function (node) {
        node.style.display = "none";
      });
    });
  }

  function injectRibbon(preset) {
    if (q(".mvo-ribbon")) {
      return;
    }
    var ribbon = document.createElement("div");
    ribbon.className = "mvo-ribbon";
    ribbon.innerHTML =
      '<a class="mvo-ribbon__brand" href="../index.html">' +
      '<img src="' + logoSrc() + '" alt="' + BRAND.brand + '">' +
      "<span><strong>" + BRAND.brand + "</strong><small>" + preset.model + " · " + preset.style + "</small></span>" +
      "</a>" +
      '<a class="mvo-ribbon__back" href="../index.html">Retour au catalogue</a>';
    document.body.appendChild(ribbon);
  }

  function injectShowcase(preset) {
    if (q("#mvo-summary")) {
      return;
    }

    var section = document.createElement("section");
    section.className = "mvo-preview-section";
    section.id = "mvo-summary";
    section.innerHTML =
      '<span class="mvo-preview-kicker">' + preset.model + " · Template neutralise</span>" +
      '<h2 class="mvo-preview-title">' + preset.showcaseTitle + "</h2>" +
      '<p class="mvo-preview-copy">' + preset.showcaseText + "</p>" +
      '<div class="mvo-preview-grid" id="mvo-modules">' +
      '<article class="mvo-preview-card"><strong>Positionnement</strong><p>' + preset.positioning + "</p></article>" +
      '<article class="mvo-preview-card"><strong>Modules prets</strong><p>' + preset.modulesText + "</p></article>" +
      '<article class="mvo-preview-card"><strong>Bon usage</strong><p>' + preset.useCase + "</p></article>" +
      '<article class="mvo-preview-card"><strong>Identite de demo</strong><p>Nom: ' + BRAND.brand + "<br>Contact: " + BRAND.owner + "<br>Tel: " + BRAND.phoneDisplay + "<br>Adresse: " + BRAND.address + "</p></article>" +
      "</div>" +
      '<div class="mvo-preview-footer" id="mvo-contact">' +
      '<p><span class="mvo-inline-brand"><img src="' + logoSrc() + '" alt="' + BRAND.brand + '"></span><br>' + BRAND.owner + "<br>" + BRAND.address + "<br>" + BRAND.phoneDisplay + "</p>" +
      '<div class="mvo-preview-actions">' +
      '<a class="mvo-preview-btn is-primary" href="../index.html">Voir tous les modeles</a>' +
      '<a class="mvo-preview-btn" href="#top">Revenir en haut</a>' +
      "</div>" +
      "</div>";

    var footer = q("footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  }

  function setMetadata(preset) {
    document.title = BRAND.brand + " | " + preset.model;
    var description = q('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", preset.showcaseText);
    document.documentElement.setAttribute("lang", "fr");
    document.documentElement.setAttribute("data-mvo-model", preset.model);
  }

  function start() {
    ensureStylesheet();

    var slug = inferSlug();
    var preset = PRESETS[slug];
    if (!preset || !document.body) {
      return;
    }

    document.body.classList.add("mvo-preview-ready");
    document.body.setAttribute("data-mvo-model", preset.model);

    setMetadata(preset);
    replaceTextTokens(buildTokenMap(preset));
    applyPatches(preset.patches);
    rewriteBrandNodes();
    replaceLogos();
    rewritePortraitCards();
    rewriteContactDetails();
    hideSections(preset.hide);
    rewriteLocalLinks();
    neutralizeForms();
    injectShowcase(preset);
    injectRibbon(preset);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
