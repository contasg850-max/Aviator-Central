<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Painel Aviator - Jogador</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="paymentSection">
  <h3>Escolha sua operadora e faça o pagamento:</h3>

  <div style="margin-top:10px;">
    <strong>e-Mola:</strong> 867695532<br>
    <span style="font-style:italic; color:#555;">Mario Augusto Da Silva</span>
  </div>

  <div style="margin-top:10px;">
    <strong>M-Pesa:</strong> 850172616<br>
    <span style="font-style:italic; color:#555;">Rafael Tembe</span>
  </div>

  <p style="margin-top:15px; font-weight:bold;">Faça o pagamento manualmente — obrigado</p>

  <input type="text" id="playerName" placeholder="Digite seu nome" style="padding:6px; margin-top:10px; width:80%;">
  <select id="houseSelect" style="padding:6px; margin-top:10px; width:80%;">
    <option value="Elephant Bet Moçambique">Elephant Bet Moçambique</option>
    <option value="888bets Moçambique">888bets Moçambique</option>
    <option value="Placard Moçambique">Placard Moçambique</option>
  </select>
  <button onclick="sendForApproval()">Enviar para aprovação</button>
</div>

<div id="panel" style="display:none;">
  <h2>Bem-vindo à Casa dos Patrões</h2>
  <div id="botMessage"></div>
  <div id="botPrediction"></div>
</div>

<script src="script.js"></script>
</body>
</html>
