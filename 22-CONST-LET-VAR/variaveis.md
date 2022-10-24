# Variáveis
    Variáveis são valores nomeados que podem armazenar qualquer tipo de valor JavaScript.
```ssh
let mensagem = “olá”
mensagem
```
    LET é a palavra-chave que informa ao JavaScript que você está declarando uma variável.
    “mensagem” é o nome dessa variável.
    = é o operador que informa ao JavaScript que um valor virá em seguida.
    “olá” é o valor para a variável armazenar.

## Nomeando uma variável:
    Comece com uma letra, sublinhado _ ou cifrão $.
    Após a primeira letra, você pode usar números, bem como letras, sublinhados ou cifrões.
    Não use nenhuma das palavras-chave reservadas do JavaScript.

## Escopo em JavaScript:
    Contexto atual do código, que determina as variáveis que estarão disponíveis para acessarmos.
    Em Javascript, temos dois tipos de escopo:
    
    Escopo global são aquelas variáveis declaradas fora de um bloco.
    
    Escopo de bloco são aquelas declaradas dentro de um bloco.
    
    Um bloco é o código contido dentro de um par de chaves.

## Hoisting (içamento ou elevação)
    Mecanismo JavaScript onde as variáveis e declarações de função são movidas para o topo
    de seu escopo antes da execução do código.

## Bloco em Javascript:
    Bloco é um pedaço de código limitado por chaves. Qualquer coisa dentro de chaves é um bloco.

## Var
    As declarações var têm escopo global ou escopo de bloco.
    A variavel var pode ser re-declarada e atualizada.
    Variáveis var são elevadas ao topo do seu escopo e inicializadas com o valor undefined.

## Let
    Tentar acessar uma variável let fora do seu bloco (as chaves onde foi definido)
    retorna um erro e isso acontece porque as variáveis let têm escopo de bloco.

    Uma variável let pode ter seu valor atualizado, mas a variável não pode ser declarada novamente
    dentro do seu escopo.

    Se uma mesma variável let for definida em escopos diferentes, não vai dar erro.

    Assim como var, as declarações let são içadas para o topo.
 
    Ao contrário de var que é inicializado como indefinido, a palavra-chave let não é inicializada.

## Const
    Variáveis declaradas com const mantêm valores constantes.

    Assim como as declarações let, as declarações const só podem ser acessadas dentro do bloco
    que foram declaradas.

    Const não pode ser atualizado ou re-declarado.

    Toda variável declarada como const deve ser inicializada no momento da declaração.

    Assim como let, as declarações const são içadas para o topo, mas não são inicializadas.

## Resumo
    As declarações var têm escopo global enquanto let e const têm escopo de bloco.

    As variáveis var podem ser atualizadas e declaradas novamente dentro de seu escopo.

    As variáveis let podem ser atualizadas, mas não podem ser declaradas novamente.

    As variáveis const não podem ser atualizadas nem declaradas novamente.

    Tanto var, quanto let e const são todos içados para o topo de seu escopo. 
    Mas enquanto as variáveis var são inicializadas com undefined, as variáveis let e const não são inicializadas.

    Enquanto var e let podem ser declaradas sem serem inicializadas,
    const deve ser inicializado durante a declaração.


## Para se aprofundar mais:

[Escopos em Javascript](https://imasters.com.br/desenvolvimento/escopos-em-javascript)</br>
[Como criar bons nomes para variáveis](https://youtu.be/ji7l3s05QnE)











