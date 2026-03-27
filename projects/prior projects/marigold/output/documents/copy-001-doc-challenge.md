# copy-001 — Adversarial Challenge
_Domain: Content_
_Date: 2026-03-27_
_Verdict: PROCEED_

## Verdict
PROCEED

## Findings

### Critical
None

### High
None

### Medium

1. **Placeholder instructor names conflict with copy-002.** copy-001 uses Amara Jacobs, Marcus Leong, Priya Desai, and Elena Vargas as placeholder instructor names. copy-002 uses Sara O., Priya L., Tomoko R., and Jordan K. in the schedule and testimonials. These two sets of placeholder names are entirely different (the only overlap is the first name "Priya" with different surnames). While both documents note these are placeholders for Sara to replace, a client reading the Gate 2 report will encounter two inconsistent instructor rosters, which undermines the professional quality of the deliverable. The report-002 node or the orchestrator should align these before the Gate 2 report is assembled. This does not require rework of copy-001 itself — it is a cross-document coordination issue.

2. **Homepage CTA section (Section 5) copy is identical to About page CTA (Section 5).** Both use "Ready to begin?" as the H2 and "Your mat is waiting. Whether it is your first class or your hundredth, every session is a fresh start." as the body. While the architecture spec notes this pattern repeats, identical copy across pages may read as template-like to a careful reader. A slight variation in the About page CTA copy (different supporting line, same button text) would reinforce the sense that each page is intentionally crafted. This is a polish note, not a rework requirement.

### Low

1. **Values section choices (Community, Intention, Accessibility) are well-selected but not validated against Sara's own language.** The copy-001 memory notes these were chosen based on intake record and brand alignment, not client-provided values. They are strong choices — but the report should flag them as placeholder values for Sara's confirmation, similar to how bios are flagged as placeholder content.

2. **"Read our story" link text on homepage is slightly generic.** The link in Section 2 uses "Read our story" which is functional but does not carry the same editorial confidence as the rest of the copy. A more brand-voiced alternative (e.g., "How Marigold began" or "The story behind the studio") would be more distinctive. Minor polish.

## Downstream Flags

- **For copy-002 / report-002 / orchestrator:** Instructor name alignment is needed before the Gate 2 report. copy-001 and copy-002 use entirely different placeholder instructor rosters.
- **For report-002:** The three values (Community, Intention, Accessibility) should be presented as draft values for Sara's approval, not as finalized brand pillars.
- **For web-001:** The CTA pattern on Homepage Section 5 and About Section 5 is identical in copy. If this feels repetitive in implementation, a small copy variation on the About page would be appropriate.
