//?? fetch https://github.com/rolling-scopes-school/tasks/blob/master/tasks/coffee-house/products.json

const menuItems = [
  {
    id: 1,
    url: './src/assets/menu-section/coffee-1.jpg',
    name: 'Irish coffee',
    description:
      'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: '7.00',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 2,
    url: './src/assets/menu-section/coffee-2.jpg',
    name: 'Kahlua coffee',
    description:
      'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: '7.00',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 3,
    url: './src/assets/menu-section/coffee-3.jpg',
    name: 'Honey raf',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    price: '5.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 4,
    url: './src/assets/menu-section/coffee-4.jpg',
    name: 'Ice cappuccino',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    price: '5.00',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 5,
    url: './src/assets/menu-section/coffee-5.jpg',
    name: 'Espresso',
    description: 'Classic black coffee',
    price: '4.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 6,
    url: './src/assets/menu-section/coffee-6.jpg',
    name: 'Latte',
    description:
      'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: '5.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 7,
    url: './src/assets/menu-section/coffee-7.jpg',
    name: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    price: '5.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 8,
    url: './src/assets/menu-section/coffee-8.jpg',
    name: 'Coffee with cognac',
    description: 'Fragrant black coffee with cognac and whipped cream',
    price: '6.50',
    category: 'coffee',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 9,
    url: './src/assets/menu-section/tea-1.jpg',
    name: 'Moroccan',
    description:
      'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: '4.50',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 10,
    url: './src/assets/menu-section/tea-2.jpg',
    name: 'Ginger',
    description: 'Original black tea with fresh ginger, lemon and honey',
    price: '5.00',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 11,
    url: './src/assets/menu-section/tea-3.jpg',
    name: 'Cranberry',
    description: 'Invigorating black tea with cranberry and honey',
    price: '5.00',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 12,
    url: './src/assets/menu-section/tea-4.jpg',
    name: 'Sea buckthorn',
    description:
      'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: '5.50',
    category: 'tea',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 13,
    url: './src/assets/menu-section/dessert-1.jpg',
    name: 'Marble cheesecake',
    description:
      'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: '3.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 14,
    url: './src/assets/menu-section/dessert-2.jpg',
    name: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    price: '4.00',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 15,
    url: './src/assets/menu-section/dessert-3.jpg',
    name: 'Cheesecakes',
    description:
      'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: '4.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 16,
    url: './src/assets/menu-section/dessert-4.jpg',
    name: 'Creme brulee',
    description:
      'Delicate creamy dessert in a caramel basket with wild berries',
    price: '4.00',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 17,
    url: './src/assets/menu-section/dessert-5.jpg',
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: '4.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 18,
    url: './src/assets/menu-section/dessert-6.jpg',
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: '4.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 19,
    url: './src/assets/menu-section/dessert-7.jpg',
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: '5.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    id: 20,
    url: './src/assets/menu-section/dessert-8.jpg',
    name: 'Black forest',
    description:
      'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: '6.50',
    category: 'dessert',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },
];

class Item {
  constructor({ id, url, name, description, price, category, ...rest }) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  getItem() {
    let template = '';
    let item = document.createElement('div');
    item.className = 'menu__item';
    item.setAttribute('data-id', this.id);
    item.setAttribute('data-cat', this.category);

    this.url &&
      (template += `<div class="menu__item-img">
        <img
          src=${this.url}
          alt="menu-item-coffee"
        />
      </div>`);

    if (this.name || this.description) {
      template += `<div class="menu__item-text">`;
      this.name &&
        (template += `<h3 class="menu__item-name">${this.name}</h3>`);
      this.description &&
        (template += `<p class="menu__item-desc">
          ${this.description}
          </p>`);
      template += `</div>`;
    }

    this.price &&
      (template += `<h3 class="menu__item-price">$${this.price}</h3>`);

    item.innerHTML = template;
    return item;
  }
}

class Modal {
  constructor(classes) {
    this.classes = classes;
  }

  createModal(content) {
    this.overlay = this.createNode(this.overlay, 'div', 'overlay');
    this.modal = this.createNode(this.modal, 'div', this.classes);
    this.modalContent = this.createNode(
      this.modalContent,
      'div',
      'modal__content'
    );
    this.modalClose = this.createNode(
      this.modalClose,
      'button',
      'modal__close-btn'
    );
    this.modalClose.innerHTML = `Close`;

    this.setContent(content);

    this.addModalElements();

    this.bindEvents();

    this.openModal();
  }

  createNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }

  addModalElements() {
    this.modal.append(this.modalContent);
    this.modal.append(this.modalClose);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalClose.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    if (
      e.target.classList.contains('overlay') ||
      e.target.classList.contains('modal__close-btn')
    ) {
      e.preventDefault();
      body.classList.remove('body-lock')
      window.scrollTo(0, body.dataset.scrollY)
      document.querySelector('.overlay').remove();
    }
  }
}

class MenuModal extends Modal {
  constructor(
    classes,
    { id, url, name, description, price, category, sizes, additives }
  ) {
    super(classes);
    this.id = id;
    this.url = url;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.sizes = sizes;
    this.additives = additives;
  }

  getMenuModal() {
    let template = '';
    let modalItem = document.createElement('div');
    modalItem.className = 'modal__item-content';

    this.url &&
      (template += `<div class="modal__item-img">
        <img
          src=${this.url}
          alt="menu-item-coffee"
        />
      </div>`);

    if (
      this.name ||
      this.description ||
      this.content ||
      this.sizes ||
      this.additives
    ) {
      template += `<div class="modal__item-text">`;

      if (this.name || this.description) {
        template += `<div>
          <h3 class="modal__item-name">${this.name}</h3>
          <p class="modal__item-desc">${this.description}</p>
        </div>`;
      }

      if (this.sizes) {
        template += `<div class="modal__item-sizes-box">Size`;
        template += `<div class="modal__item-sizes">`;
        Object.entries(this.sizes).map((btn) => {
          template += `<button class="modal__item-size" data-price=${btn[1]['add-price']}><span class="modal__item-icon">${btn[0]}</span>${btn[1].size}</button>`;
        });
        template += `</div>`;
        template += `</div>`;
      }

      if (this.additives) {
        template += `<div class="modal__item-adds-box">Additives`;
        template += `<div class="modal__item-additives">`;
        this.additives.map(
          (add, i) =>
            (template += `<button class="modal__item-add" data-price=${
              add['add-price']
            }><span class="modal__item-icon">${i + 1}</span>${
              add.name
            }</button>`)
        );
        template += `</div>`;
        template += `</div>`;
      }

      this.price &&
        (template += `<h3 class="modal__item-price">Total: <span>$${this.price}</span></h3>`);
    }
    template += `<div class="modal__notification"><div class="modal__notification-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_268_9737)">
    <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_268_9737">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg></div> The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</div>`;

    template += `</div>`;

    modalItem.innerHTML = template;
    return modalItem;
  }

  renderModalItem() {
    let content = this.getMenuModal();
    super.createModal(content);
  }
}

if (menuItems) {
  renderMenuItems();
}

let items = document.querySelectorAll('.menu__item');
let menuBtns = document.querySelectorAll('.menu__btn');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('menu')) {
    document.querySelector('.header__menu').classList.add('selected');
  }

  openBurgerMenu();
  closeBurgerMenu();

  switchCategory('menu__btn');
  showFilterItems(getActiveCat());

  document.querySelector('.more-btn').addEventListener('click', () => {
    hideItems();

    let selectedItems = [...items].filter(
      (item) => item.dataset.cat === getActiveCat()
    );

    selectAllItems(selectedItems);
    document.querySelector('.more-btn').style.display = 'none';
  });
});

window.addEventListener('resize', () => {
  showFilterItems(getActiveCat());
});

function getActiveCat() {
  let activeCat = Array.from(menuBtns).find((btn) =>
    btn.classList.contains('active')
  );
  return activeCat.dataset.cat;
}

(function() {
  matchMedia('only screen and (min-width:768px)').addEventListener('change', () => body.classList.remove('body-lock'))
})();

function openBurgerMenu() {
  document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('open');
    body.classList.toggle('body-lock');
    document
      .querySelectorAll('.burger__line')
      .forEach((el) => el.classList.toggle('close'));
  });
}

function closeBurgerMenu() {
  const menuLinks = document.querySelectorAll('.link');

  menuLinks.forEach((link) =>
    link.addEventListener('click', () => {
      document.querySelector('.header__nav').classList.remove('open');
      body.classList.remove('body-lock')
      document
        .querySelectorAll('.burger__line')
        .forEach((el) => el.classList.remove('close'));
    })
  );
}

function selectAllItems(selectedItems) {
  selectedItems.forEach((selectedItem) => {
    selectedItem.style.display = 'flex';
    selectedItem.classList.add('appear');
  });
}

function selectFourItems(selectedItems) {
  selectedItems.slice(0, 4).forEach((selectedItem) => {
    selectedItem.style.display = 'flex';
    selectedItem.classList.add('appear');
  });
}

function hideItems() {
  items.forEach((item) => {
    item.style.display = 'none';
  });
}

function switchCategory(cls) {
  document.querySelector('.menu__tabs').addEventListener('click', (e) => {
    let selectedTab;
    e.target.classList.contains(cls) && (selectedTab = e.target);
    e.target.parentElement.classList.contains(cls) &&
      (selectedTab = e.target.parentElement);
    e.target.parentElement.parentElement.classList.contains(cls) &&
      (selectedTab = e.target.parentElement.parentElement);
    removeActiveTab(cls);
    addActiveTab(selectedTab);
    showFilterItems(selectedTab.dataset.cat);
  });
}

function switchChoiceSize(cls, price) {
  document
    .querySelector('.modal__item-sizes')
    .addEventListener('click', (e) => {
      let selectedTab;
      e.target.classList.contains(cls) && (selectedTab = e.target);
      e.target.parentElement.classList.contains(cls) &&
        (selectedTab = e.target.parentElement);
      removeActiveTab(cls);
      addActiveTab(selectedTab);
      getPrice(price);
    });
}

function switchChoiceAdd(cls, price) {
  document
    .querySelector('.modal__item-additives')
    .addEventListener('click', (e) => {
      let selectedTab;
      e.target.classList.contains(cls) && (selectedTab = e.target);
      e.target.parentElement.classList.contains(cls) &&
        (selectedTab = e.target.parentElement);
      if (selectedTab.classList.contains('active')) {
        selectedTab.classList.remove('active');
      } else {
        addActiveTab(selectedTab);
      }
      getPrice(price);
    });
}

function getPrice(price) {
  let selectTabSizePrice = +document.querySelector('.modal__item-size.active')
    .dataset.price;
  let selectTabsAddPrice = document.querySelectorAll('.modal__item-add.active');
  let addsSum = [...selectTabsAddPrice]
    .map((selectTab) => +selectTab.dataset.price)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  let result = document.querySelector('.modal__item-price span');
  let sum = price + selectTabSizePrice + addsSum;
  result.innerText = `$${sum.toFixed(2)}`;
}

function removeActiveTab(cls) {
  const tabs = document.getElementsByClassName(cls);
  [...tabs].forEach((tab) => tab.classList.remove('active'));
}

function addActiveTab(selectedTab) {
  selectedTab.classList.add('active');
}

function showFilterItems(cat) {
  hideItems();
  document.querySelector('.more-btn').style.display = 'none';

  let filterItems = [...items].filter((item) => item.dataset.cat === cat);

  if (window.innerWidth <= 768 && filterItems.length > 4) {
    document.querySelector('.more-btn').style.display = 'block';
    selectFourItems(filterItems);
  } else {
    selectAllItems(filterItems);
  }
}

function getChooseMenuItem(itemId) {
  return menuItems.find((menuItem) => menuItem.id === itemId);
}

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight
}

function renderMenuItems() {
  let menuCategoryWrapper = getMenuCategoryContainer();
  generateItems(menuItems).forEach((item) => {
    menuCategoryWrapper.append(item.getItem());
  });
  document
    .querySelector('.menu__category-container')
    .addEventListener('click', (e) => {
      if (e.target.closest('.menu__item')) {

      e.preventDefault()
      body.dataset.scrollY = getBodyScrollTop();
      
      if (existVerticalScroll()) { 
        body.classList.add('body-lock')
        body.style.top = `-${body.dataset.scrollY}px`
      }
      
      let itemId = +e.target.closest('.menu__item').dataset.id;
      let chooseMenuItem = getChooseMenuItem(itemId);
      renderMenuModal(chooseMenuItem);
    }
  });
}

function getMenuCategoryContainer() {
  let menuCategoryContainer = document.querySelector(
    '.menu__category-container'
  );
  menuCategoryContainer.innerHTML = '';
  return menuCategoryContainer;
}

function generateItems(menuItems) {
  let items = [];
  menuItems.forEach((menuItem) => {
    items.push(new Item(menuItem));
  });
  return items;
}

function renderMenuModal(chooseMenuItem) {
  let menuModal = new MenuModal('modal', chooseMenuItem);
  menuModal.renderModalItem();
  document
    .querySelector('.modal__item-sizes')
    .firstChild.classList.add('active');
  let price = +chooseMenuItem.price;
  switchChoiceSize('modal__item-size', price);
  switchChoiceAdd('modal__item-add', price);
}
