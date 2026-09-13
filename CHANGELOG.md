# AGBEN3D — Relatório de versões

## V1 — Estrutura inicial
- Primeira home do e-commerce.
- Identidade em branco, preto e azul escuro.
- Produtos demonstrativos.
- WhatsApp da AGBEN3D.
- Origem de produção em São José — SC.
- Layout responsivo para desktop e celular.

## V2 — Publicação e contato
- Site publicado no GitHub Pages.
- Botão de WhatsApp funcionando.
- Área de envio de projeto personalizado.
- Formulário com nome, WhatsApp, tipo de projeto, quantidade, medidas, cor, descrição e arquivo de referência.
- Mensagem automática preparada para abrir no WhatsApp.

## V3 — Catálogo e páginas de produto
- Página “Todos os produtos”.
- Página individual para cada produto.
- Descrição, preço demonstrativo, peso, tamanho, cor e quantidade.
- Botão “Comprar agora”.
- Área de projeto redesenhada.
- Mais preto e azul no layout.
- Animações leves de entrada e hover.

## V4 — Identidade, hero rotativo e preparação 3D/AR
- Favicon com a identidade AGBEN3D.
- Header escuro e maior presença de azul e preto.
- Hero com frases e imagens rotativas.
- Catálogo com cards menores.
- Página de produto preparada para futura visualização 3D e realidade aumentada.

## V5 — Estabilidade visual e refinamento de UI
- Hero com altura controlada para evitar deslocamentos durante as trocas.
- Produtos em destaque mantidos na Home.
- Cards compactos e identidade visual refinada.
- Área de personalização redesenhada.
- Seção “Como funciona” refeita.

## V5.1 e V5.2 — Correções do hero
- Ajustes de altura e responsividade.
- Remoção de elementos que se sobrepunham ao texto.
- Correção do espaçamento entre texto e informações principais.

## V5.3 — Padronização do catálogo
- Cards da página Produtos alinhados ao mesmo padrão visual da Home.
- Grade mais compacta no desktop e responsiva no celular.

## V5.4 — Paginação
- Limite de 15 produtos por página.
- Navegação por página, anterior e próxima.
- Filtros recalculando a paginação automaticamente.

## V5.5 — Refinamento mobile
- Remoção de informações repetidas no catálogo.
- Correção dos cards no celular.
- Filtros adaptados para telas pequenas.
- Maior destaque para “Ver todos os produtos” na Home.

## V5.6 — Experiência de compra
- Copy do site revisada para linguagem mais comercial.
- Benefícios da Home refinados no celular.
- Clique em “Comprar agora” passou a abrir uma confirmação antes do WhatsApp.
- Removidas observações técnicas abaixo do botão de compra.

## V5.7 — Revisão estrutural e correção das páginas individuais
- Revisão do fluxo Home → catálogo → produto → WhatsApp.
- Correção do erro que fazia produtos diferentes abrirem como “Capivara Calma”.
- Criação de uma única base central de dados para os 15 produtos.
- Home, catálogo e páginas individuais agora usam os mesmos IDs, nomes, preços, categorias e descrições.
- Título da aba do navegador passa a acompanhar o produto aberto.
- Peso, tamanho, cores, imagem e descrição passam a ser carregados pelo produto correto.
- Textos internos/de desenvolvimento removidos ou substituídos por linguagem voltada ao cliente.
- Melhorias de acessibilidade em botões, labels, links externos e modal de compra.
- Tratamento de produto inexistente com retorno seguro ao catálogo.

## Próximos passos
- Substituir ilustrações pelas fotos oficiais.
- Inserir preços, pesos e dimensões definitivos.
- Criar painel administrativo para cadastro e edição dos produtos.
- Integrar pagamento real via gateway.
- Integrar cálculo de frete real.
- Receber/converter modelos 3D para GLB/USDZ.
- Ativar viewer 3D interativo e realidade aumentada no celular.
