document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });

document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Entrando...';
            button.disabled = true;
            
            setTimeout(function() {
                window.location.href = 'admin.html';
            }, 1500);
        });