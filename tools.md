# Tools
_V4_
_Read by the orchestrator at plan time when a project may require external tool use. Not loaded on every boot. When a node is authorized to use a tool, the orchestrator passes the relevant tool entry from this file into that node's charter — the node reads the guidance there, not from this file directly._

---

## Maintenance Note
This file contains distilled best practices as of the date this was written. The tools and their capabilities evolve — check the official docs links in each entry periodically and update this file when guidance changes. Agents do not fetch these links at runtime; this file is the source of truth for agents.

---

## Tool Registry

| Tool | Capability | MCP Server Name |
|---|---|---|
| BFL / FLUX | Image generation | `bfl-flux` |
| ElevenLabs | Audio / speech generation | `ElevenLabs` |
| *(video — TBD)* | Video generation | *(not yet configured)* |

---

## Image Generation — BFL / FLUX

**Official docs:** https://docs.bfl.ml/api_integration/mcp_integration
**Prompting guide:** https://docs.bfl.ml/guides/prompting_summary
**MCP server name:** `bfl-flux`

### Models available
| Model             | Best for                        | Notes                                       |
| ----------------- | ------------------------------- | ------------------------------------------- |
| FLUX.2 [pro]      | Default for most tasks          | Best balance of speed, quality, cost        |
| FLUX.2 [max]      | Hero images, final deliverables | Highest quality — use sparingly, costs more |
| FLUX.2 [flex]     | Text/typography in images       | Optimized for readable text in visuals      |
| FLUX.2 [klein] 9B | Fast iterations                 | Good quality, sub-second generation         |
| FLUX.2 [klein] 4B | Cheapest/fastest                | Rapid drafts only — lower quality           |

**Default recommendation:** use FLUX.2 [pro] unless there is a specific reason to choose otherwise.

### Prompt structure
Use this hierarchy consistently — the model weights earlier content more heavily:

```
[Subject] + [Action/pose] + [Style] + [Lighting] + [Technical specs]
```

Examples:
- `Luxury leather handbag on marble surface, soft directional lighting, warm amber tones, product photography, 85mm lens f/2.8`
- `Professional headshot of woman in her 30s, natural smile, studio lighting, cream background, corporate photography`
- `Red fox sitting in tall grass, wildlife documentary photography, misty dawn, shallow depth of field`

### Key prompting rules
- **Subject first.** Lead with the primary subject — do not bury it at the end of a long prompt
- **Be specific.** Vague terms like "make it look good" produce weak results. Specify style, lighting, composition
- **Use natural language** — no need for comma-separated keyword lists; full descriptive sentences work well
- **Exact colors:** use hex codes for brand consistency, e.g. `primary color #FF6B35`
- **Typography:** wrap text in quotes and specify style — `the word "OPEN" in bold red neon sans-serif above the door`
- **Avoid contradictions:** `bright sunny day with moody dramatic shadows` confuses the model

### Aspect ratios
Specify as part of the prompt or as a parameter. Common values:
- `1:1` — square (social media, icons)
- `16:9` — widescreen (hero images, banners)
- `4:3` — standard landscape
- `9:16` — portrait/mobile
- `3:2` — photography standard

### Lighting reference terms
- `golden hour` — warm, directional, atmospheric
- `Rembrandt lighting` — dramatic portrait lighting
- `soft box` / `studio lighting` — clean, controlled
- `overcast` — diffused, flat, even
- `cinematic` — high contrast, filmic

### Photography/technical terms
- Aperture: `f/1.4` (blurred background) → `f/8` (everything sharp)
- Focal length: `24mm` (wide) → `85mm` (portrait, compressed)
- Style: `editorial`, `documentary`, `product photography`, `fine art`

### What to avoid
- Do not use negative prompt syntax (not natively supported in the same way as Stable Diffusion)
- Do not iterate repeatedly — refine the prompt first, generate once
- Do not use FLUX for real-time or conversational use cases — it is a generation tool, not a chat tool

---

## Audio Generation — ElevenLabs

**Official docs:** https://elevenlabs.io/docs/overview/capabilities/text-to-speech
**Prompting guide (v3):** https://elevenlabs.io/docs/best-practices/prompting/eleven-v3
**MCP server name:** `ElevenLabs`

### Models available
| Model | Best for | Notes |
|---|---|---|
| Eleven v3 (alpha) | Expressive, emotional speech | Supports Audio Tags — use for creative/narrative work |
| Eleven Multilingual v2 | Highest quality, nuanced expression | No Audio Tags — best for professional narration |
| Eleven Flash v2.5 | Real-time / low latency | 75ms latency — use when speed matters |

**Default recommendation:** use Eleven v3 when expressiveness matters and the content is not real-time. Use Multilingual v2 for clean, professional narration without emotional direction.

### Audio Tags (Eleven v3 only)
Audio Tags are inline bracketed cues that direct the model's performance. They are interpreted as instructions — not spoken aloud. Place them immediately before the text they should affect.

**Emotion:**
`[excited]`, `[nervous]`, `[tired]`, `[frustrated]`, `[sorrowful]`, `[happy]`, `[angry]`, `[fearful]`, `[disgusted]`, `[surprised]`

**Delivery / pacing:**
`[whispers]`, `[shouting]`, `[quietly]`, `[rushed]`, `[drawn out]`, `[pause]`, `[hesitant]`, `[stammers]`

**Physical / nonverbal:**
`[sighs]`, `[laughs]`, `[laughs softly]`, `[nervous laugh]`, `[gulps]`, `[clears throat]`, `[gasps]`

**Character / accent:**
`[pirate voice]`, `[French accent]`, `[Australian accent]`, `[American accent]`, `[Southern US accent]`, `[sarcastically]`, `[dismissive]`

**Sound effects (inline):**
`[gunshot]`, `[explosion]`, `[applause]`, `[clapping]`, `[leaves rustling]`, `[gentle footsteps]`

**Tagging example:**
```
[sorrowful] I couldn't sleep that night. The air was too still. [quietly] And suddenly, that's when I saw it.
```

```
[hesitant][nervous] I... I'm not sure this is going to work. [gulps] But let's try anyway.
```

### Key prompting rules
- **Voice matters most.** The voice must be compatible with the tags you use — a shouting voice won't respond well to `[whispering]`. Use Instant Voice Clones (IVC) or ElevenLabs library voices for v3, not Professional Voice Clones (PVC) — PVCs are not yet optimized for v3
- **Stability setting:** use `Creative` or `Natural` for maximum expressiveness with Audio Tags. `Robust` reduces responsiveness to directional prompts
- **Punctuation shapes delivery:** ellipses (`...`) create natural pauses, capital letters add emphasis, standard punctuation establishes rhythm
- **Narrative style:** write prompts like a script or novel — full sentences with emotional context, not keyword lists
- **Tags can be layered:** `[tired][quietly]` stacks cues for nuanced delivery
- **Match tags to the voice:** a serious professional voice won't respond well to `[giggles]`
- **Do not use SSML break tags with v3** — use `...` or `[pause]` instead

### Pauses (non-v3 models)
For Multilingual v2 and Flash models, use SSML break tags for pauses:
```
This is a sentence. <break time="1.5s" /> This follows after a pause.
```
Maximum: 3 seconds. Do not overuse — causes instability.

### Output behavior
- Default output format: `mp3`
- Default save location: `~/Desktop` (configured globally)
- The node's charter should specify the intended output path — pass it explicitly in the tool call if a specific project folder is needed
- Audio tags in the output script are interpreted, not spoken — no post-production cleanup needed for tags themselves
- Note: if dialogue tags (e.g. `she said excitedly`) are used as narrative context guides, they **will** be spoken aloud — remove them from final output or use bracketed Audio Tags instead

### What to avoid
- Do not iterate repeatedly — refine the script and tags first, generate once
- Do not use v3 for real-time / conversational applications — use Flash v2.5 for those
- Do not use PVCs with v3 — use IVCs or library voices

---

## Video Generation — *(Not yet configured)*

_Placeholder. To be populated when a video generation MCP server is configured._

When added, this entry should cover: MCP server name, model options, prompt structure, aspect ratios, duration limits, and output format. Update the Tool Registry table above and the constitution's External Tools section when this capability is live.

---
_Last reviewed: 2026-03-31. Check official docs links above and update this file when guidance changes._
