# L ONGs API
LONGs é um localizador de Ongs.

Este repositório possui o backend do meu TCC.
Este backend será responsável por receber as requests e manipular as ONGs no banco de dados de acordo com o [Front](https://github.com/samisafatli/LongsClient).

## Setup

`yarn`

## Run
`yarn run dev`

### Fazer um post:
O projeto rodará na porta ´http://localhost:3333/ongs´
Você pode usar um insomnia para realizar um teste, basta bater na url e passar os seguintes dados num json:
`{
	"title": string,
	"description": string,
	"email": string,
  "category": string,
}`

As operações possíveis são:
`Delete, Update, Create, IndexByID e ShowAll`
