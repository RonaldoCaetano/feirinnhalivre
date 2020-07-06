# Feirinha Livre

Projeto desenvolvido para o MegaHack 3.0, evento organizado pela Shawee.

## Como utilizar

Primeiro, rode o comando `yarn` ou `npm install` para instalação das dependências

Para rodar o projeto, basta executar o comando `yarn start`. Isso fará com que uma janela seja aberta no seu navegador com um QRCode disponível.

Para escanear o QRCode você precisa do app do Expo, que é disponível gratuitamente na Apple Store ou Play Store

* [Play Store - Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)
* [Apple Store - Expo](https://apps.apple.com/br/app/expo-client/id982107779)

**IMPORTANTE** --> **Você precisa alterar o IP que temos no arquivo `api.ts` e colocar o que o Expo gera para você na mesma tela em que temos o QRCode. E mantenha na porta 3333, para evitar problemas**

## Chatbot

Para utilizar alguns serviços do app, como o login, primeiro você deve mandar uma mensagem com o conteúdo: `yellow-anchovy`, para o número `11 4837 7404`.

Isso é necessário pois utilizamos o plano gratuito da Zenvia, que só permite que as mensagens sejam enviadas a números autenticados pelo bot.

## Fluxo de conversa com o chatbot - Exemplo

Oi

*Bot: Olá, precisa de alguma coisa?*

Quem é vc?

*Bot: Sou Melinho Olivreira, seu assistente digital no Feirinha Livre. Em que posso te ajudar?*

Como eu cadastro um produto?

*Bot: Deixa eu te mostrar como  (video)*

Tem alguma promoção hoje?

*Bot: Tem uma super promoção na loja da Dona Maria, veja agora mesmo os preços.*

Estou procurando um produto

*Bot: Que produto está procurando?*

Puff Preto

*Bot: Posso sugerir alguns vendedores pra vc*

*Bot: Dona Maria*

*Bot: Precisa de ajuda com mais alguma coisa?*

Queria ver a imagem de um produto

Bot: Que produto gostaria de consultar?*

Puff Preto

*Bot: Este é o Puff Preto oferecido pela Dona Maria (imagem)*

*Bot: Precisa de ajuda com mais alguma coisa?*

Quanto ele custa?

*Bot: Este produto custa: R$24*

*Bot: Precisa de ajuda com mais alguma coisa?*

Quero adicionar no eu carrinho

*Bot: O produto foi adicionado em seu carrinho!*

*Bot: Precisa de ajuda com mais alguma coisa?*

Isso é tudo
Até mais. Sempre que precisar é só me chamar.
