# How to count the award portfolio

The answer to “how many?” changes with the unit. A program-code match, an institutional award and a collaborative project answer different questions.

## Reconstruct the search

The 24 November 2026 archive covers active and expired records under 088Y00 (Advanced Manufacturing), 229Y00 (Manufacturing Systems Integration), 072Y00 (Engineering Design and Systems Engineering) and 006Y00 (Operations Engineering). The four searches returned 956, 66, 194 and 464 distinct award IDs respectively. Across the union there were 1,655 IDs and 1,654 nonempty abstracts.

## Read an empty result carefully

The search under the new AMDO code 361Y00 returned zero entries in that snapshot. Programs appear on different coding schedules, and some awards match several program codes. Adding the four totals double-counts overlapping records. Awards alone omit unsuccessful applications and unreported comparisons.

## Compare money on the same basis

A restricted historical slice used standard and continuing grants with initial award action since January 2023. It contained 570 distinct institutional awards with positive estimated totals. Their median estimated funding was $317,820 and median recorded duration was three years. Separate estimated totals from obligations, group linked awards before estimating collaboration size and date every comparison.

## Primary sources and references

- NSF award API search documentation — https://www.research.gov/common/webapi/awardapisearch-v1.htm
- AMDO award-search entry — https://www.nsf.gov/awardsearch/search-results?ProgEleCode=361Y00&BooleanElement=Any&BooleanRef=Any&ActiveAwards=true
- Example of a record without an abstract — https://api.nsf.gov/services/v1/awards/2010792.json
- CMMI program context — https://www.nsf.gov/funding/opportunities/engineering-eng-civil-mechanical-manufacturing-innovation/nsf26-515/solicitation

Question for discussion: Design a reproducible portfolio query. Specify dates, program codes, funding field, unit and treatment of collaborations. Explain one claim about acceptance rates that the resulting data cannot support.
