let cart = [];
let currentItem = {};

        var modal = document.getElementById("myModal");
        var img = document.querySelectorAll(".card img");
        var modalImg = document.querySelector(".modal-content img");
        var productName = document.getElementById("product-name");
        var productPrice = document.getElementById("product-price");
        var quantityInput = document.getElementById("quantity");

        img.forEach(function(element) {
          element.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            productName.textContent = this.nextElementSibling.textContent;
            productPrice.textContent = this.nextElementSibling.nextElementSibling.textContent;
            currentItem = {
              imgSrc: this.src,
              name: this.nextElementSibling.textContent,
              price: parseInt(this.nextElementSibling.nextElementSibling.textContent),
              quantity: parseInt(quantityInput.value)
            };
          });
        });

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
          modal.style.display = "none";
        }

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        function addToCart() {
          currentItem.quantity = parseInt(quantityInput.value);
          cart.push(currentItem);
          updateCart();
          closeItemPopup();
        }
      
        function removeFromCart(index) {
          cart.splice(index, 1);
          updateCart();
        }
      
        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            cartItems.innerHTML = '';
            let total = 0;
            
            cart.forEach((item, index) => {
              const li = document.createElement('li');
              li.innerHTML = `<img src="${item.imgSrc}" alt="${item.name}" width="50" height="50"> ${item.name} - $${item.price} x ${item.quantity} <button onclick="removeFromCart(${index})">Remove</button>`;
              li.style.display = "flex";
              li.style.justifyContent = "center";
              li.style.alignItems = "center";
              cartItems.appendChild(li);              
              total += item.price * item.quantity;
            });
            
            cartTotal.innerText = total.toFixed(2);
          }
      
        function toggleCartMenu() {
          const cartMenu = document.getElementById('cart-menu');
          cartMenu.classList.toggle('active');
        }
      
        document.addEventListener('click', function(event) {
          const cartMenu = document.getElementById('cart-menu');
          const cartButton = document.querySelector('.cart-button');
      
          if (!cartMenu.contains(event.target) && !cartButton.contains(event.target)) {
              cartMenu.classList.remove('active');
          }
        });
      
        document.getElementById('cart-menu').addEventListener('click', function(event) {
          event.stopPropagation();
        });
        
        function closeItemPopup() {
          modal.style.display = 'none';
        }