var showModalButtons = document.querySelectorAll(".showModalButton");

        showModalButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                var targetModalId = button.getAttribute("data-modal-target");
                openModal(targetModalId);
            });
        });

        function openModal(modalId) {
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        }

        function closeModal(modalId) {
            var modal = document.getElementById(modalId);
            modal.style.display = "none";
        }