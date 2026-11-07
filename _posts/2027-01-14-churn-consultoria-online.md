---
title: "Churn na consultoria online: como calcular e reduzir"
description: "Churn na consultoria online: fórmula com exemplo, como ele define o tempo de permanência e o valor de cada aluno, leitura por coorte e ações por fase."
categoria: alunos
image: /assets/og-revo.png
capa: false
---

Conta rápida: em janeiro entraram 5 alunos novos e saíram 5. Em fevereiro, entraram 6 e saíram 6. Você trabalhou em vendas o mês inteiro, respondeu direct, fez stories, fechou contratos, e a consultoria continua com os mesmos 40 alunos. É como encher um balde furado.

Esse furo tem nome: churn, a taxa de alunos que cancelam num período. Enquanto você só olha quantos alunos entraram, o churn trabalha em silêncio. Medir é simples, e o número muda a forma de decidir onde colocar seu tempo: às vezes reter 2 alunos por mês rende mais do que vender 2 novos.

Abaixo você vai ver a fórmula com exemplo, como o churn define quanto vale cada aluno, como ler por coorte, em que momentos o aluno costuma sair e o que fazer em cada um.

## A fórmula do churn

**Churn mensal = alunos que cancelaram no mês ÷ alunos ativos no início do mês x 100**

Use os alunos do início do mês como base. Alunos que entraram e saíram dentro do mesmo mês contam como cancelamento, mas vale anotar à parte, porque costumam indicar problema de onboarding.

> **Exemplo de conta (números ilustrativos):**
> Alunos ativos em 1º de março: 40.
> Cancelaram durante março: 4.
> Churn de março = 4 ÷ 40 x 100 = **10%**.

### Defina o que é cancelamento

Antes de calcular, escreva a regra e use sempre a mesma:

- **Cancelou e avisou:** conta.
- **Não renovou o plano trimestral ou semestral:** conta no mês em que venceu.
- **Inadimplente:** conta a partir do dia em que a consultoria foi encerrada, conforme o contrato (por exemplo, D+30).
- **Pausa combinada:** não conta como cancelamento, mas acompanhe à parte. Se a pausa vira saída, conte no mês em que ela terminou sem retorno.

Se a regra muda todo mês, o número não serve para comparar.

## Quanto vale cada aluno

O churn mostra quanto tempo, em média, o aluno fica. Uma aproximação simples é:

**Permanência média (em meses) ≈ 1 ÷ churn mensal**

E o valor que cada aluno traz ao longo desse tempo (chamado de LTV, lifetime value):

**LTV ≈ mensalidade x permanência média**

> **Exemplo de conta (números ilustrativos):**
> Mensalidade: R$ 200. Churn mensal: 10% (0,10).
> Permanência média ≈ 1 ÷ 0,10 = **10 meses**.
> LTV ≈ 200 x 10 = **R$ 2.000** por aluno.
>
> Se o churn cair para 5% (0,05):
> Permanência média ≈ 1 ÷ 0,05 = **20 meses**.
> LTV ≈ 200 x 20 = **R$ 4.000** por aluno.
>
> Reduzir o churn pela metade dobra o valor de cada aluno, sem mudar o preço.

É uma aproximação: funciona melhor quando o churn é estável por vários meses. Com poucos alunos, um mês ruim distorce bastante.

## Leia o churn por coorte

O churn geral esconde onde está o problema. A leitura por coorte agrupa os alunos pelo mês em que entraram e mostra quantos continuam ativos ao longo do tempo.

> **Exemplo de coorte (números ilustrativos):**
>
> | Entrada | Alunos | Ativos no 1º mês | No 2º mês | No 3º mês | No 4º mês |
> | --- | --- | --- | --- | --- | --- |
> | Janeiro | 10 | 10 | 8 | 7 | 5 |
> | Fevereiro | 8 | 8 | 6 | 6 | 6 |
> | Março | 12 | 12 | 11 | 10 | 10 |
>
> Na coorte de janeiro, a maior queda foi do 3º para o 4º mês (de 7 para 5): pode ser o fim do plano trimestral.
> A coorte de março perdeu menos alunos no 2º mês do que as anteriores: vale entender o que mudou no onboarding.

Uma planilha simples resolve. Uma linha por aluno, com mês de entrada, plano, mês de saída e motivo da saída.

## Quando o aluno costuma sair

Na consultoria online, alguns momentos concentram cancelamentos:

| Momento | O que costuma acontecer | O que fazer |
| --- | --- | --- |
| Primeiras 2 a 4 semanas | Aluno não engrenou, não entendeu como usar o app, não viu resposta rápida | Onboarding caprichado, primeiro check-in respondido com atenção, contato na primeira semana |
| 2º e 3º mês | Resultado mais lento que o esperado, rotina apertou | Mostrar a evolução com fotos e cargas comparadas; ajustar o treino à rotina |
| Fim do plano (trimestral, semestral) | A renovação vira decisão | Conversa de renovação antes do vencimento, com o que foi conquistado e o próximo objetivo |
| Depois de atingir o objetivo | "Já consegui, não preciso mais" | Propor um novo objetivo antes que o atual acabe |
| Viagem, mudança, aperto financeiro | Saída por motivo externo | Oferecer pausa ou versão adaptada |

Sinais antes do cancelamento costumam aparecer no [check-in semanal](/blog/checkin-semanal-consultoria/): atraso no envio, respostas mais curtas, treinos não registrados. Para o plano completo de retenção, veja [como reduzir a desistência de alunos](/blog/reduzir-desistencia-alunos/).

## Pergunte o motivo de cada saída

Toda saída é informação. Uma mensagem curta, sem tentar convencer:

> "Oi, [nome], obrigado pelo tempo que treinamos juntos. Para eu melhorar a consultoria, você pode me contar o principal motivo da sua saída? Pode ser bem sincero."

Anote o motivo na planilha em categorias fixas: preço, resultado, tempo, atendimento, motivo pessoal, foi para outro profissional. Depois de alguns meses, o motivo mais frequente mostra onde agir primeiro.

O contrato também ajuda: regras claras de cancelamento, aviso prévio e renovação evitam saídas por mal-entendido. Veja [o que não pode faltar no contrato de consultoria online](/blog/contrato-consultoria-online/).

## Checklist mensal de churn

- [ ] Contei os alunos ativos no primeiro dia do mês.
- [ ] Contei os cancelamentos, usando a mesma regra.
- [ ] Calculei o churn do mês e comparei com os três meses anteriores.
- [ ] Atualizei a planilha de coortes.
- [ ] Registrei o motivo de cada saída.
- [ ] Escolhi uma ação para o motivo mais frequente.

## Dados que já estão na ficha

O cálculo do churn depende de informação organizada: quem está ativo, quem atrasou, quem parou de mandar check-in. Na [Revo](/), cada aluno tem ficha com treino, dieta, protocolo, check-ins e pagamento na mesma tela, com status de pagamento Em dia, Pendente ou Atrasado. O resumo do dia mostra check-ins para responder e pagamentos atrasados, que são justamente os primeiros sinais de risco. No Financeiro, extrato e próximos recebimentos ajudam a conferir quem continua pagando quando você fecha a conta do mês.

## Resumo

- Churn mensal = cancelamentos no mês ÷ alunos ativos no início do mês x 100.
- Defina uma regra fixa do que conta como cancelamento.
- Permanência média ≈ 1 ÷ churn; LTV ≈ mensalidade x permanência.
- Reduzir o churn aumenta o valor de cada aluno sem mexer no preço.
- Leia por coorte para descobrir em que mês o aluno sai.
- Pergunte e registre o motivo de cada saída, e aja sobre o mais frequente.
