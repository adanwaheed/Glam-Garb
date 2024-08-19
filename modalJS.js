var modal = document.getElementById("myModal");
        var img = document.querySelectorAll(".card img");
        var modalImg = document.querySelector(".modal-content img");
        var productName = document.getElementById("product-name");
        var productPrice = document.getElementById("product-price");
        var quantityInput = document.getElementById("quantity");
        var modalImg = document.querySelector(".modal-content img");
        
        
        img.forEach(function(element) {
          element.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            productName.textContent = this.nextElementSibling.textContent;
            productPrice.textContent = this.nextElementSibling.nextElementSibling.textContent;
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

       