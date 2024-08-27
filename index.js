function criptografarTexto() {
  const texto = document.getElementById("textoParaCriptografar").value.trim();
  const mensagemErro = document.getElementById("mensagemErro");
  const regex = /^[a-z\s]*$/;

  if (texto) {
    if (!regex.test(texto)) {
      mensagemErro.innerText = "Letras maiúsculas e caracteres especiais não são permitidos. Use apenas letras minúsculas.";
    } else {
      mensagemErro.innerText = "";
      const textoCriptografado = btoa(texto);
      document.getElementById("textoParaDescriptografar").value = textoCriptografado;
      document.getElementById("textoCriptografado").value = textoCriptografado;
      exibirResultado("Texto Criptografado: " + textoCriptografado);
    }
  } else {
    alert("Por favor, insira um texto para criptografar.");
  }
}

function descriptografarTexto() {
  const textoCriptografado = document.getElementById("textoParaDescriptografar").value.trim();
  
  if (textoCriptografado) {
    try {
      const textoDescriptografado = atob(textoCriptografado);
      document.getElementById("textoParaCriptografar").value = textoDescriptografado;
      exibirResultado("Texto Descriptografado: " + textoDescriptografado);
    } catch (e) {
      alert("Texto criptografado inválido.");
    }
  } else {
    alert("Por favor, insira um texto criptografado para descriptografar.");
  }
}

function copiarTexto() {
  const texto = document.getElementById("textoCriptografado").value;
  
  if (texto) {
    navigator.clipboard.writeText(texto).then(() => {
      alert("Texto copiado para a área de transferência!");
    }).catch(err => {
      alert("Erro ao copiar o texto: " + err);
    });
  } else {
    alert("Nada para copiar!");
  }
}

function exibirResultado(mensagem) {
  const resultado = document.getElementById("resultadoTexto");
  resultado.innerText = mensagem;
  document.querySelector(".result").style.display = "block";
}
function criptografarTexto() {
  const texto = document.getElementById("textoParaCriptografar").value.trim();
  const mensagemErro = document.getElementById("mensagemErro");
  const regex = /^[a-z\s]*$/;

  if (texto) {
    if (!regex.test(texto)) {
      mensagemErro.innerText = "Letras maiúsculas e caracteres especiais não são permitidos. Use apenas letras minúsculas.";
    } else {
      mensagemErro.innerText = "";
      const textoCriptografado = btoa(texto);
      document.getElementById("textoParaDescriptografar").value = textoCriptografado;
      document.getElementById("textoCriptografado").value = textoCriptografado;
      exibirResultado("Texto Criptografado: " + textoCriptografado);
    }
  } else {
    alert("Por favor, insira um texto para criptografar.");
  }
}

function descriptografarTexto() {
  const textoCriptografado = document.getElementById("textoParaDescriptografar").value.trim();
  
  if (textoCriptografado) {
    try {
      const textoDescriptografado = atob(textoCriptografado);
      document.getElementById("textoParaCriptografar").value = textoDescriptografado;
      exibirResultado("Texto Descriptografado: " + textoDescriptografado);
    } catch (e) {
      alert("Texto criptografado inválido.");
    }
  } else {
    alert("Por favor, insira um texto criptografado para descriptografar.");
  }
}

function copiarTexto() {
  const texto = document.getElementById("textoCriptografado").value;
  
  if (texto) {
    navigator.clipboard.writeText(texto).then(() => {
      alert("Texto copiado para a área de transferência!");
    }).catch(err => {
      alert("Erro ao copiar o texto: " + err);
    });
  } else {
    alert("Nada para copiar!");
  }
}

function exibirResultado(mensagem) {
  const resultado = document.getElementById("resultadoTexto");
  resultado.innerText = mensagem;
  document.querySelector(".result").style.display = "block";
}
