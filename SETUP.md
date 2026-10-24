# Natively — setup guide (from a real install on Windows)

Open-source Cluely alternative (Electron + React + TypeScript + Vite).
This copy includes small local evaluation stubs for the private `premium/`
submodule so the build passes (see "Premium note" below).

## Prerequisites

- Node.js v22.13+ and Git
- Windows: Visual Studio Build Tools 2022 with the C++ workload
  (needed to compile `better-sqlite3` and `keytar` native modules).
  If node-gyp says it cannot find Visual Studio even though Build Tools
  is installed (empty `vswhere` output), point it at the tools directly:
  `VCINSTALLDIR=C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\`
  plus `VSCMD_VER=17.0`, then re-run the install/rebuild.

## Install & run

```
npm install
npm start
```

`npm start` runs the Vite dev server (http://127.0.0.1:5180) and the
Electron app. First launch downloads local models (speech + embeddings).

## Premium note

`premium/` is a PRIVATE git submodule (`natively-premium`) and is not in
the public source. This repo contains three small clearly-marked local
stubs — `premium/electron/knowledge/{types,TavilySearchProvider,NativelySearchProvider}.ts`
— so the build passes. Company-research features that need Tavily /
Natively API keys will not work from this build without the real
submodule and keys.

## Configure (no keys are included in this repo)

1. **Audio → Speech Provider:** pick **Local Whisper** (on-device, no key)
   or **Groq Whisper** (needs a free Groq key, much faster).
2. **AI Providers:** add a provider key (Groq, Gemini, OpenAI, …) — or,
   if you run a local OpenAI-compatible gateway, use the
   **LiteLLM Proxy** card: Base URL = your gateway's `/v1` URL
   (e.g. `http://localhost:20128/v1`) + its key.
3. In the overlay's model selector, pick the model you configured
   (LiteLLM models appear as `litellm/...`).
4. **General → Undetectability:** turn it ON so the overlay hides from
   screen shares.

## RAM note (8 GB machines)

The local speech worker refuses to start if free RAM drops under ~0.62 GB,
and local Whisper can fall behind live audio when the machine is loaded.
Close heavy apps before a session. Faster options: Moonshine
(`onnx-community/moonshine-base-ONNX`, selectable in Settings → Audio)
or Groq Whisper (cloud, no local worker at all).
