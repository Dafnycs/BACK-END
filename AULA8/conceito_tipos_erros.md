<!-- 📊 STATUS CODES (RESPOSTAS DO SERVIDOR) -->

2xx - SUCESSO (Tudo certo)
    200 - ok (requisição funcionou)
    201 - Criado (post funcionou)

3xx - REDIRICIONAMENTO (Mudou lugar)
    301 Mudou permanentemente

4xx - ERRO DO CLIENTE (Você errou)
    400 - Requisição errada
    401 - Não auutorizado (sem login)
    403 - Proibido (Login sem permissão)
    404 - Não encontrado

5xx - ERRO DE SERVIDOR (Eles erraram)
    500 - Erro interno no servidor
    503 - Serviço indisponível

CENÁRIO: Você pede uma pizza! 🍕

200 = "Aqui está sua pizza"✅
404 = "Não temos essa pizza"❌
500 = "O forno queimou oou quebrou"💥
401 = "Só entregamos para clientes"🔒
421 = "Muitos pedidos, aguarde"⌚