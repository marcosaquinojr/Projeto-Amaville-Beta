# AmaVille Escola

Site institucional da AmaVille Escola, desenvolvido com TanStack Start, React, Tailwind CSS e Cloudflare Workers.

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Verificação

```bash
npm run check
```

Esse comando executa lint, verificação de tipos e build de produção.

## Publicação

O projeto está configurado para o Worker `amaviile` em `wrangler.jsonc`.

```bash
npm run deploy
```

## Informações da escola

Telefone, endereço, links oficiais, ano letivo e URL canônica ficam centralizados em `src/lib/school.ts`. O conteúdo de 2027 foi alinhado com a apresentação oficial da escola e com o perfil oficial no Instagram:

- [Instagram da AmaVille](https://www.instagram.com/amavilleescolaprogramabilingue/)
- [Apresentação AmaVille 2027](https://drive.google.com/file/d/12vlWQY2IUE6rFbsZP4N6YVOU0gn1ICgw/view?usp=sharing)

Antes de publicar um novo período de matrículas, atualize o ano, os valores e as condições comerciais na fonte central e nas seções de matrícula.
