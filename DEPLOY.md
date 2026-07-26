# Guia de publicação — Dépayser Conference (Vercel)

## Antes de tudo — a pasta certa
O app Next.js está em **`depayser-conference-paris-2026/depayser-conference-paris-2026/`**
(a pasta que contém `app/`, `components/`, `package.json` com "next").
É essa pasta que deve ser publicada. Existe uma pasta "de fora" com o mesmo nome —
ignore-a; na Vercel isso se resolve com o **Root Directory** (passo 3).

---

## Passo 1 — Subir o código para o GitHub (recomendado)
1. Crie um repositório novo (privado) no GitHub, ex.: `depayser-site`.
2. No terminal, dentro da pasta do app:
   ```bash
   cd caminho/para/depayser-conference-paris-2026/depayser-conference-paris-2026
   git init
   git add .
   git commit -m "Site Dépayser — versão inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/depayser-site.git
   git push -u origin main
   ```
   > O `.gitignore` já protege `node_modules`, `.next`, `.env*` e `.vercel`.

## Passo 2 — Importar na Vercel
1. Entre em https://vercel.com com sua conta.
2. **Add New → Project** → conecte o GitHub → escolha `depayser-site`.

## Passo 3 — Configurar o projeto
- **Framework Preset:** Next.js (detectado automaticamente).
- **Root Directory:** se você subiu SÓ a pasta do app, deixe a raiz. Se subiu a
  pasta "de fora" junto, clique em **Edit** e selecione a subpasta
  `depayser-conference-paris-2026`.
- **Build Command / Output:** deixe o padrão (a Vercel cuida do Next.js).

## Passo 4 — Variáveis de ambiente (opcional agora)
Em **Settings → Environment Variables**, quando você escolher a ferramenta de
captura de leads, adicione:
```
NEXT_PUBLIC_WAITLIST_ENDPOINT = (endereço do formulário Brevo/Formspree/etc.)
```
Sem essa variável, o formulário da Academy usa o fallback (abre o e-mail da equipe).
Nada quebra se ficar vazio.

## Passo 5 — Deploy
Clique em **Deploy**. Em ~1–2 min sai um link `*.vercel.app` no ar.

## Passo 6 — Domínio próprio
Em **Settings → Domains**, adicione **depayseracademy.com** (e o www).
A Vercel mostra os registros DNS a configurar onde você comprou o domínio
(um A/ALIAS para o apex e um CNAME para o www). HTTPS é automático.

---

## Checklist pré-lançamento (conferir com o site no ar)
- [ ] Cada botão de ingresso abre o Stripe certo e com o preço certo:
      Classic 39€ · Classic Duo 69€ · VIP 149€ · VIP + Acompanhante 279€
- [ ] Imagem do card VIP + Acompanhante mostra a arte de 279€ (não a de 149€)
- [ ] Contador regressivo aparece e conta certo para 18/10/2026
- [ ] CTA fixo "Garantir ingresso" aparece ao rolar
- [ ] FAQ abre/fecha; links de mapa, WhatsApp e e-mail funcionam
- [ ] Formulário da Academy envia (ou abre o e-mail no fallback)
- [ ] Logos do topo e rodapé aparecem no tamanho certo
- [ ] Testar no celular (a maioria virá do Instagram)
- [ ] Instagram @depayser.academy e e-mail suporte@depayseracademy.com corretos

## Depois do deploy (próximas mudanças combinadas)
- Prova social (depoimentos/fotos/números) — aguardando material
- Pixel + Analytics (remarketing)
- SEO técnico: dados estruturados de Evento (schema.org) + favicon
- Revisão das bios (Amanda / Ricardo)
