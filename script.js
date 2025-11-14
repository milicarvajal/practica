// === Modo oscuro persistente (todas las páginas) ===
if (localStorage.getItem('tema') === 'oscuro') $('body').addClass('oscuro');
$('#btn-tema').on('click', function(){
  $('body').toggleClass('oscuro');
  localStorage.setItem('tema', $('body').hasClass('oscuro') ? 'oscuro' : 'claro');
});

// === Cambio de tipografía simple y persistente ===
if (localStorage.getItem('tipografia') === 'mono') $('body').css('font-family','Courier New, monospace');
$('#btn-tipografia').on('click', function(){
  const isMono = $('body').css('font-family').includes('Courier');
  if (isMono){
    $('body').css('font-family','system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif');
    localStorage.setItem('tipografia','normal');
  } else {
    $('body').css('font-family','Courier New, monospace');
    localStorage.setItem('tipografia','mono');
  }
});

// === Validación jQuery del formulario (feedback claro) ===
$('#formulario').on('submit', function(e){
  e.preventDefault();
  const nombre = $('#nombre').val().trim();
  const email = $('#email').val().trim();
  const mensaje = $('#mensaje').val().trim();
  const res = $('#resultado');

  if(!nombre || !email || !mensaje){
    res.text('⚠️ Completá todos los campos.').css('color','red');
    return;
  }
  if(!/.+@.+\..+/.test(email)){
    res.text('⚠️ El email no es válido.').css('color','red');
    return;
  }
  res.text('✅ ¡Gracias! Te contactaré a la brevedad.').css('color','green');
  this.reset();
});
