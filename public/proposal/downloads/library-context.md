# AMDO Research Library

Snapshot: 2026-11-24

Public-source research notes. Historical panels do not identify current reviewers. Planned work in an award abstract is distinct from measured outcomes.

# What AMDO funds

Read the current call alongside the four older programs that shaped it. An AMDO question may begin with a material, an operator, a design choice or a production network.

## Follow the decision across scales

The program describes fundamental research on manufacturing, materials and service processes, their integration into facilities and supply chains, and the design and operation of these systems. Ask who can use an advance, which relationship is poorly understood and whether the result could carry beyond the original setting. A factory deployment alone leaves that last question open.

## Read the funding numbers at the right level

NSF 26-515 accepts proposals at any time. It encourages ambitious projects that justify sustained effort of up to five years. Its expected 225–275 awards and approximately $100 million cover four CMMI programs together. A team choosing March 2027 sets its own target. Check the live solicitation and policy guide again near submission.

## Search beyond the current program name

At 08:47–09:20 in the September 2026 CMMI webinar, NSF identifies Advanced Manufacturing, Manufacturing Systems Integration, Engineering Design and Systems Engineering, and Operations Engineering as predecessor programs. Their awards reveal prior questions and methods. Evaluate present fit against the current call.

## Primary sources and references

- AMDO program description — https://www.nsf.gov/funding/opportunities/amdo-advanced-manufacturing-design-operations
- NSF 26-515, Sections II, III and V — https://www.nsf.gov/funding/opportunities/engineering-eng-civil-mechanical-manufacturing-innovation/nsf26-515/solicitation
- CMMI webinar and recording — https://www.nsf.gov/funding/opportunities/engineering-eng-civil-mechanical-manufacturing-innovation/updates/121088

Question for discussion: Read the current call and one neighboring predecessor award. Identify the decision maker, the unknown relationship and a result that would matter to a second user. Quote the section that supports program fit.

---

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

---

# Materials processing and defect formation

A process engineer can change a cure cycle or forming condition. The scientific question is which physical mechanism the change affects and whether a finished part performs differently.

## Follow the evidence from process to material

NSF 2611536 describes in-situ measurements and multiscale models for curing-induced microcracking in thermoset composites. NSF 2555727 couples forming accuracy, fiber architecture and performance in continuous-fiber composites. The abstracts describe planned comparisons. Each raises the question of which internal state a surface signal can distinguish.

## Use a completed experiment to establish the boundary

In resin transfer molding, Facciotto and colleagues compared modeled resin flow and local saturation against camera observations through a transparent mold. The setup exposes flow near an observable surface. Independent internal measurements would be needed to establish the same behavior in the interior of a thick part. A mechanical test would address a further claim about strength.

## Design the comparison

Choose two plausible causes that produce similar visible defects, then select a measurement on which their predictions diverge. Identify the independent batch or specimen, the setting actually varied, the operator’s alternative and an engineering endpoint. Repeated images improve timing within a specimen. They do not create more independent batches.

## Primary sources and references

- Curing and microcracking, NSF 2611536 — https://api.nsf.gov/services/v1/awards/2611536.json
- Continuous-fiber forming, NSF 2555727 — https://api.nsf.gov/services/v1/awards/2555727.json
- Facciotto et al., multiscale void formation — https://doi.org/10.1016/j.compositesa.2023.107675
- Related manufacturing award 2023323 — https://api.nsf.gov/services/v1/awards/2023323.json

Question for discussion: Identify two mechanisms consistent with the same surface signal. What single additional measurement would distinguish them? Name the experimental unit and the claim that would survive an inconclusive result.

---

# Multistage quality and machine health

A three-university NSF collaboration already connects quality propagation, equipment degradation and operational control. A narrower open question is when a supervisor can identify the stage at which to act.

## One collaboration generated three award IDs

The Wisconsin–Madison record lists Shiyu Zhou and $300,442, Rutgers–New Brunswick lists Yuebin Guo and $223,843, and Iowa lists Yong Chen and $207,158. The obligations sum to $731,443 as recorded on 24 November 2026. The three MSI awards began 1 January 2024 and share one title and abstract. Wisconsin and Rutgers show end dates in December 2026 and Iowa in December 2027. These are three institutional components of one predecessor project.

## What the project and industry evidence establish

The abstract includes local anomaly indicators, machine degradation and prognosis, stochastic control, and laboratory and industrial validation. These are funded activities. Separate results are needed to assess achieved accuracy or plant impact. The CCAM digital-thread roadmap gives an independent reason to study linkage across stages, including trace-back of nonconforming feedstock and communication of downstream material requirements.

## What would change the decision?

Follow a workpiece through two stages to final inspection, recording material lot, settings, intervention and decision-time information. Pieces from the same maintenance episode share an exposure. If servicing coincides with a change of material lot, improved quality has two plausible explanations. Compare the proposed action with the current hold-and-inspect rule. Until a steward can confirm action variation, permission and repeated episodes, limit the claim to record linkage.

## Primary sources and references

- Wisconsin award 2323082 — https://api.nsf.gov/services/v1/awards/2323082.json
- Rutgers award 2323083 — https://api.nsf.gov/services/v1/awards/2323083.json
- Iowa award 2323084 — https://api.nsf.gov/services/v1/awards/2323084.json
- NIST-hosted CCAM digital-thread roadmap — https://doi.org/10.6028/NIST.GCR.24-057

Question for discussion: Starting from these three records, count the collaboration and reconcile the obligated funding. Then describe a data trace and a counterexample that distinguish upstream maintenance from downstream compensation. Separate verified facts from the open decision.

---

# Human–robot work allocation

A line planner can assign, reorder or interrupt tasks. The outcome that matters to workers may be less rework, lower workload or safer recovery from an interruption.

## Choose the action and its consequence

Weitian Wang’s MSI CAREER award 2338767 concerns human factors and scheduling for collaborative manufacturing. A linked paper examines commonsense knowledge for robot perception. Perception supports a potential decision, such as requesting confirmation before acting. Its accuracy alone cannot establish whether reallocating work improves human or team outcomes.

## Use public observations for the claim they measure

The HA4M data descriptor reports 217 videos from 41 people assembling an epicyclic gear train, with multiple sensor modalities and manually annotated actions. These records support studies of action recognition and variation across participants. A test of a new allocation policy also needs alternative assignments and observations of their consequences.

## Plan a fair test

Compare against the existing assignment rule on the same task mix. Where people repeat a task, hold complete participants or sessions out of training and account for practice effects. State who can alter assignments, what workers consider an acceptable burden and what permissions govern recording or intervention. Without those conditions, retain the narrower recognition question.

## Primary sources and references

- Human–robot teams, NSF 2338767 — https://api.nsf.gov/services/v1/awards/2338767.json
- Robot perception, journal article — https://doi.org/10.1109/TASE.2025.3565191
- HA4M dataset and annotations — https://doi.org/10.1038/s41597-022-01843-z

Question for discussion: Compare an action recognizer and a task-allocation policy. For each, identify an independent test unit, a baseline and an outcome. Which observations in HA4M support each comparison?

---

# Supply disruptions and recovery decisions

A planner facing a disruption must decide when to reroute, substitute a supplier or draw down stock. Retrospective visibility can make a policy appear more capable than it would have been on the day.

## Compare two funded routes

NSF 2548575 examines propagation of disruptions and adaptive sourcing, production and inventory decisions. NSF 2609644 addresses reconfiguration of service-oriented supply chains and counterfactual explanations. The former highlights a changing network state, the latter the choice among feasible alternatives. An investigator needs the timing of the information used for either decision.

## Reconstruct the planner’s view

A useful record includes the first disruption notice, what suppliers and capacity were visible then, the lead time for each action, and subsequent fulfillment or shortage. Specify whether the independent event is an outage, a supplier or a region. Orders affected by the same outage share a shock. A national time series can motivate a question while leaving firm-to-firm propagation unresolved.

## Compare against a rule a planner could have used

Give a simple inventory threshold or rerouting rule the same information and lead times as the proposed method. A policy that appears effective only with the final network state has benefited from hindsight. The Census data catalog distinguishes restricted microdata from public releases. Check field availability, linkage and permission before assuming a network can be reconstructed.

## Primary sources and references

- Disruption propagation, NSF 2548575 — https://api.nsf.gov/services/v1/awards/2548575.json
- Network reconfiguration, NSF 2609644 — https://api.nsf.gov/services/v1/awards/2609644.json
- U.S. Census restricted economic microdata — https://www.census.gov/topics/research/guidance/restricted-use-microdata/economic-data.html
- CCAM roadmap — https://doi.org/10.6028/NIST.GCR.24-057

Question for discussion: Choose one disruption. Make a timeline of what the planner knew before each action, identify the independent event, and test whether a simple threshold policy had access to the same information.

---

# Design tradeoffs and missing measurements

An early design decision can turn on a single uncertain attribute. The useful measurement is the one that could reverse a choice among feasible products.

## Connect the attribute to a real choice

NSF 2412472 investigates sparse lifecycle inventory data in the context of consumer electronics design. NSF 2419423 studies design teams under competitive conditions. Together they motivate two distinct questions. Can a designer measure the attribute that differentiates two alternatives? Will designers or customers act on that distinction?

## Separate consideration from selection

A study coauthored by Zhenghui Sha and Wei Chen models automotive choice in two stages. A buyer first considers a set of vehicles and then chooses within that set. A product change could affect either step. If only final choices are observed, both mechanisms may fit the same records. A survey or design experiment that observes the candidate set provides another test.

## Set the stopping rule before collecting data

Name a material, component or performance feature that a designer can actually change. Compare alternatives under the same system boundary, service life and use pattern. If plausible uncertainty leaves their ordering intact, an expensive measurement has little decision value. If ranking flips, document who could supply the measurement and how a second analyst would reproduce it.

## Primary sources and references

- Lifecycle inventory and acquisition, NSF 2412472 — https://api.nsf.gov/services/v1/awards/2412472.json
- Competitive design teams, NSF 2419423 — https://api.nsf.gov/services/v1/awards/2419423.json
- Two-stage automotive choice study — https://doi.org/10.1007/s11067-021-09526-9

Question for discussion: Compare two feasible designs. Identify the single missing attribute most likely to reverse their ordering and give a counterexample. State whether the available evidence measures technical performance, user preference or both.

---

# Returned parts and remanufacturing

A remanufacturer can inspect, disassemble, repair or retire a returned component. The decision depends on hidden wear, uncertain service history and the outcome after an action.

## Read the physical and operations precedents together

NSF 2618914 describes updating a digital representation for robotic remanufacturing under variation in components and wear. A reverse-logistics study by Angelus and Özer analyzes forward, reverse and expedited flows in a serial supply system. One starts with the state of the component and the other with the value of moving stock. Connecting them requires observing both physical condition and disposition.

## Follow the returned item

Preserve a component identifier, observable wear on arrival, available service history, the selected inspection or repair, and post-action performance or disposition. Several images of one component share its history. Returns from a common batch or service contract may share it too. Compare an added inspection against the current triage rule using the condition information actually available at intake.

## Look for the missing counterfactual

If only obviously repairable parts are repaired, observing high performance among repaired parts alone cannot establish the benefit of repairing borderline cases. Define a safe way to validate a sample of uncertain cases, or narrow the study to condition classification. A public source can motivate traceability while leaving access to used components and reuse rights open.

## Primary sources and references

- Robotic remanufacturing, NSF 2618914 — https://api.nsf.gov/services/v1/awards/2618914.json
- Reverse logistics and expedited flows — https://doi.org/10.1287/msom.2020.0874
- Circular manufacturing review — https://doi.org/10.1520/SSMS20250023

Question for discussion: Trace one returned part from arrival to disposition. Which unobserved outcome would make its repair appear better than it is? Name a comparison and the minimum record needed for a defensible claim.

---

# What the team’s published work establishes

Published work by Rui Tuo, Satish T. S. Bukkapatnam and Xianyang Zhang spans physical manufacturing, operations and statistical inference. Two pairwise collaborations show what an interface between disciplines has looked like in practice.

## Manufacturing measurements and operations

Hui Yang, Bukkapatnam and Leandro Barajas modeled a multistage assembly line and compared throughput predictions with historical production and discrete-event simulation. In a different setting, Jin, Tuo, Tiwari, Bukkapatnam and colleagues used measured surface profiles to study quality evolution in finishing. One paper makes the line the unit of performance, the other examines physical surface measurements. Neither establishes access to a future plant.

## Statistical comparison and implementation

Prakash, Tuo and Ding studied differences between wind-turbine power curves over a range of inputs. Li and Zhang’s fastcpd paper describes change-point methods and reproducible software for historical multivariate sequences. A Li–Zhang–Tuo preprint compares simulated and physical responses over a full domain or a subdomain. This distinction matters when a model agrees on average but misses an operating region.

## Test a prospective handoff

A process investigator can specify a physical outcome and its measurement units. A modeler can identify overlapping input conditions and deliver predictions with uncertainty. An inference specialist can specify dependence, validation splits and a failure criterion. These are prospective roles. Ask for one example record, a common identifier and the outcome needed by the next group before assigning people, facilities or access.

## Primary sources and references

- Yang et al., multistage assembly line — https://doi.org/10.1080/0951192X.2012.719085
- Jin et al., surface finishing study — https://doi.org/10.1080/24725854.2022.2113481
- Prakash et al., wind-turbine curve comparison — https://doi.org/10.1080/00401706.2021.1905073
- Li and Zhang, fastcpd and replication files — https://www.jstatsoft.org/article/view/v116i06
- Li, Zhang and Tuo, model-validation preprint — https://arxiv.org/abs/2604.17144

Question for discussion: Identify one result each group has already demonstrated, a specific artifact another group could use and a resource or permission that still requires confirmation. Link each historical claim to its paper.

---

# What historical reviewers’ public work can teach

Dated service entries establish past participation in named programs. Published research helps a team ask better questions about its own evidence. Neither identifies who will review a future application.

## Two examples with verifiable dates

Qing Li’s public CV lists Manufacturing Systems Integration in 2024 and Advanced Manufacturing in 2022 on PDF page 11. Katherine Fu’s CV lists the Engineering Design and Systems Engineering proposal review panel in fall 2019 on PDF page 24. These are self-disclosed predecessor-program records. The reviewed CV sample contained no independently confirmed service explicitly labeled AMDO.

## Turn a result into a question

Li, Guo and Kim studied change points in recurring events. An inference question suggested by their work is whether an apparent increase in failures reflects equipment deterioration or a change in observation or population. Fu and Song studied a design-by-analogy tool and measured several dimensions of design output. A design question suggested by their work is whether a tool increases the number of ideas, their independently judged quality, or both. These questions are the guide’s interpretation.

## Represent uncertainty faithfully

Keep the dated service fact, paper finding and inferred question in separate fields. NSF’s panelist confidentiality form explains protection of reviewer identities and proceedings. Invite an internal reader to challenge a measurement or comparison without assigning that view to a named scholar. A public CV also provides no denominator for estimating how a panel will be composed.

## Primary sources and references

- Qing Li, public university CV, PDF p. 11 — https://www.engineering.iastate.edu/people/files/2024/08/LiQ_CV_2023-2024.pdf
- Li, Guo and Kim, recurring events — https://doi.org/10.1080/00949655.2020.1792907
- Katherine Fu, public university CV, PDF p. 24 — https://edrl.engr.wisc.edu/wp-content/uploads/sites/142/2022/02/CV_Fu_Katherine_Feb1-2022.pdf
- Song and Fu, design by analogy — https://doi.org/10.1115/1.4053683
- NSF panelist confidentiality form — https://nsf-gov-resources.nsf.gov/files/COI-Confidentiality-Panelists-NSF_Form_1230P.pdf

Question for discussion: For one named researcher, give the exact historical service label, one measured result from a paper and a separately labeled question that result suggests. Leave future panel membership unknown.

---

# How to link an award to a research result

An award abstract defines a funded plan. A publication can provide evidence about a method, a result and sometimes the specific award that supported it. Follow each link before assigning credit.

## Look for three kinds of relationship

Record separately whether a paper appears on the award’s output list, whether its published acknowledgment names the same award number, and whether an investigator is a coauthor. Note publication and award dates. A paper can be relevant prior work even if it predates the new funding. An award can support work that draws on other funds too.

## A two-school attribution test

NSF 2005661 and 2005665 concern collaborative design research at Northwestern and Arkansas. Both records list a 2021 automotive-choice paper coauthored by Wei Chen and Zhenghui Sha. Its acknowledgment names an earlier NSF award, 1436658, and the Ford–Northwestern Alliance. A separate 2022 paper on product competition acknowledges both 2005661 and 2005665. Chen is a coauthor on that paper. The pair of cases shows why shared authors and award-listed outputs need separate columns.

## Ask what was actually tested

For the automotive-choice study, the empirical object is consumer choice and the distinction between consideration and purchase. Change the technology, user population or decision and fresh evidence may be needed. In a literature comparison, preserve the exact endpoint, dataset and baseline before describing how the result might transfer.

## Primary sources and references

- Northwestern award 2005661 — https://api.nsf.gov/services/v1/awards/2005661.json
- Arkansas award 2005665 — https://api.nsf.gov/services/v1/awards/2005665.json
- Two-stage automotive choice, 2021 — https://doi.org/10.1007/s11067-021-09526-9
- Product competition paper, 2022 — https://doi.org/10.1115/1.4054299

Question for discussion: Create one row per award–paper pair. Record the output listing, acknowledgment number, authors, dates, measured endpoint and claim boundary. Flag any relationship supported only by author overlap.

---

# Writing a multi-investigator NSF project

A useful work plan shows what each investigator hands to the next, how the recipient can accept it, and which conclusions remain possible if the handoff fails.

## Read an authors’ original proposal

Hamlington, Lovenduski and Niemeyer publicly deposited a collaborative proposal supported through two institutional awards. On PDF pages 3–4, the authors report earlier feedback and explain changes to the scientific hypotheses, external validation and broader impacts. Pages 5–6 connect objectives to tests, and pages 8–10 show preliminary work from the collaborators. The original plan and eventual award end dates answer different questions.

## Price the test and its fallback

Work backward from a decision the project could support. Specify the experiment, independent units, comparator and acceptance threshold. Translate each dependency into an artifact, owner, recipient and date. Cost physical batches, measurements, labor and validation explicitly. A fallback that changes from physical validation to simulation also changes which claim survives. Make that tradeoff visible.

## Keep substantive and administrative review distinct

NSF’s Project Summary uses Overview, Intellectual Merit and Broader Impacts under the cited PAPPG. Give broader impacts an identifiable audience, activity and evaluation, then check the solicitation and live policy guide for the version in force on submission. Multiple investigators at one institution and separately submitted collaborative proposals involve different administrative arrangements.

## Primary sources and references

- Authors’ openly deposited proposal — https://doi.org/10.5281/zenodo.3460972
- Colorado award 1924636 — https://api.nsf.gov/services/v1/awards/1924636.json
- Oregon State award 1924658 — https://api.nsf.gov/services/v1/awards/1924658.json
- NSF PAPPG, proposal preparation — https://www.nsf.gov/policies/pappg/24-1/ch-2-proposal-preparation
- Current PAPPG and supplements — https://www.nsf.gov/policies/pappg

Question for discussion: Build a handoff table from the public example: deliverable, sending and receiving group, acceptance test, resource, time dependency and consequence of delay. Mark which entries come from the authors and which are your suggestions.

---

# An evidence-to-decision research workflow

Start with a consequential decision and a public record of demand. The output is a reason to investigate, narrow or park a question, plus the observation that could change the choice.

## Find the nearest precedent and a counterexample

GrantGuide illustrates retrieval of related funded work using NIH material. Adapt that practice to the relevant funder, retrieve stable identifiers and inspect original records. Search both the proposed approach and the simpler existing practice. Then record the strongest case in which the existing practice would suffice. A long reference list adds little if the counterexample remains unanswered.

## Give readers different questions

Bäckman’s grant-review workflow assigns distinct responsibilities to readers. Here a domain reader checks physical meaning, a methods reader checks the unit and comparison, and an operations reader checks the decision and resource commitments. Each returns a source locator, a precise concern and the evidence that could resolve it. Preserve disagreement. Multiple model sessions can share the same blind spot.

## Hand back a decision someone can act on

Record the source version, date, unit, measured outcome and permission to reuse it. Separate established facts, interpretations and unanswered questions. Ask the lead investigator for one bounded decision and give a condition for reopening it. In the multistage case, three award IDs already cover one integrated project. Finding repeated intervention episodes linked to final inspection would justify investigating a narrower action comparison.

## Primary sources and references

- GrantGuide software paper — https://doi.org/10.1016/j.softx.2024.101784
- GrantGuide, fixed retrieval implementation — https://github.com/ElsevierSoftwareX/SOFTX-D-23-00668/blob/abca6f46bb76c40f6176ef26503b7544f205f7db/Grant_Guide/vector_databases.py
- Bäckman, fixed review instructions — https://github.com/claesbackman/AI-research-feedback/blob/a64e0db1b794375299b4c38874c1c9f6369a48d7/Skills/review-grant/SKILL.md
- Multistage award record — https://api.nsf.gov/services/v1/awards/2323082.json

Question for discussion: Use only these sources to prepare a decision card. Include the affected user, substantiated need, closest precedent, simple alternative, independent data unit, counterexample, missing permission and one decision the lead investigator can make.

---

# Test whether an AI-assisted review catches errors

A confident review can miss a wrong funding total or a broken experimental comparison. A paired exercise makes both misses and false alarms observable.

## Use a known defect and a correct control

Take an authorized copy of a public or team-owned document. In one version change one consequential fact, such as treating three linked institutional awards as independent demonstrations. Retain a correct version. Give them neutral labels in a shuffled order and withhold the answer key. Ask for the exact disputed claim, primary evidence and its consequence. Keep test copies out of the live research record.

## Count what the reader got right and wrong

Report defects detected out of defects planted and false alarms out of correct claims. Keep unresolved cases and denominators. Thorne and colleagues compared reading strategies on six UK EPSRC proposals. Their section-level approach outperformed their tested full-proposal and simulated-panel methods on detecting seeded defects. That small study motivates testing a process locally. It supplies no AMDO award-probability model.

## Leave feasibility and confidential material with accountable people

A SAGES study sent one unedited model-generated application to two reviewers who were unaware of its origin. One rated it Good and one Unacceptable. Both appreciated the writing, while objections included recruitment and access to a costly treatment. Ask a domain expert to check the real operational constraints. NSF also distinguishes applicant use of generative AI from the confidentiality obligations of people officially reviewing NSF material.

## Primary sources and references

- Thorne et al., study and limitations — https://arxiv.org/html/2603.08281v1
- Fixed defect-detection implementation — https://github.com/wrmthorne/grant-perturbation-analysis/blob/499aa48cd80b6c6e861f787353858e4d1a4d657b/scripts/perturbation_detection.py
- SAGES grant-writing pilot — https://doi.org/10.1007/s44414-025-00007-x
- NSF policy on generative AI and merit review — https://www.nsf.gov/policies/ai/merit-review

Question for discussion: Design a blinded pair using one public award and a correct control. Define the answer key, unit, false-alarm rule and evidence required to accept a correction. State clearly whether anyone has actually taken the test.

---

# NSF | Advanced Manufacturing, Design, and Operations

The program covers manufacturing and service processes, their integration into systems and supply chains, and the design and operation of those systems.

Evidence limit: The scope supplies a fit test. It gives no award quota or priority ranking for an individual method.

Original source: https://www.nsf.gov/funding/opportunities/amdo-advanced-manufacturing-design-operations

---

# NSF 26-515 | CMMI core programs

AMDO is one of four core programs covered by this solicitation. Proposals are accepted at any time. Longer projects may be appropriate when the research warrants them.

Evidence limit: Estimated awards and total funding cover the four programs together. March 2027 is a team planning target.

Original source: https://www.nsf.gov/funding/opportunities/engineering-eng-civil-mechanical-manufacturing-innovation/nsf26-515/solicitation

---

# NSF | Briefing on the new CMMI programs

At 08:47–09:20 the September 2026 briefing identifies the four predecessor programs behind AMDO: Advanced Manufacturing, Manufacturing Systems Integration, Engineering Design and Systems Engineering, and Operations Engineering.

Evidence limit: Historical awards reveal precedents. The current solicitation determines whether a new question fits.

Original source: https://www.nsf.gov/funding/opportunities/engineering-eng-civil-mechanical-manufacturing-innovation/updates/121088

---

# NSF | Award Search API

The archive queried program element codes, included active and expired awards and deduplicated IDs. A collaborative project may have an award ID at each participating institution.

Evidence limit: Public award records supply no denominator of submitted proposals. A query that returns zero records describes the public index on its retrieval date.

Original source: https://www.research.gov/common/webapi/awardapisearch-v1.htm

---

# NSF | Proposal and Award Policies and Procedures Guide

NSF posts its policy guide and subsequent supplements here. The version matters for sections, attachments, personnel documents and submission requirements.

Evidence limit: Check the guide, supplements and solicitation in effect for the actual submission date.

Original source: https://www.nsf.gov/policies/pappg

---

# NSF | How merit review works

NSF sets out Intellectual Merit and Broader Impacts and explains how reviewers and program officers contribute to the funding decision.

Evidence limit: These criteria do not identify individual reviewers, panel composition or the probability of funding.

Original source: https://www.nsf.gov/funding/merit-review

---

# NSF | Generative AI and merit review

NSF prohibits reviewers from uploading entrusted proposal or review information to unapproved generative AI tools. Applicants are responsible for accuracy and authenticity. NSF encourages disclosure of their use of AI.

Evidence limit: Distinguish applicant-side preparation from service as an NSF reviewer. Check for subsequent agency guidance.

Original source: https://www.nsf.gov/policies/ai/merit-review

---

# Texas A&M | Sponsored Research Services submission guidelines

SRS requests notice at least three weeks ahead, applicable administrative materials five business days ahead, and final technical materials one business day ahead.

Evidence limit: Use the team's chosen submission date to discuss routing for an anytime solicitation. Confirm which office and additional unit rules apply.

Original source: https://srs.tamu.edu/proposals/submission-guidelines/

---

# Kim, Whitt & Cha | Appointment-generated outpatient arrivals

Appointment creation, scheduled visit and arrival records at a Seoul endocrinology clinic let the authors reconstruct the schedule visible at the start of each day. Variation in those schedules explained much of the daily arrival variation.

Evidence limit: The study validated an arrival model. An improvement in staffing or wait time would require an intervention or a separate policy comparison.

Original source: https://www.columbia.edu/~ww2040/Appt_JOC_062617pm.pdf

---

# Kanoria & Qian | Dynamic resource allocation in closed networks

Mirror backpressure uses the current distribution of a fixed, circulating fleet. Under connectivity and demand conditions, the authors bound reward loss relative to a policy informed about demand rates.

Evidence limit: The guarantees depend on the network and demand assumptions. Numerical examples do not demonstrate deployment on a transport platform.

Original source: https://par.nsf.gov/servlets/purl/10471807

---

# Angelus & Özer | Coordinating forward, reverse and expedited flows

A serial inventory model distinguishes demand-level changes across periods from uncertainty within a period. Their distinction explains when moving inventory backward is valuable.

Evidence limit: The verified NSF listing establishes a publication link. The archived author version does not establish an acknowledgment of award 1644935.

Original source: https://par.nsf.gov/servlets/purl/10128753

---

# Eren, Nam & Sencer | Mechanics and dynamics of modulated turning

Time-domain simulations and turning experiments tested predicted chatter limits. Longer interruptions permitted up to about twice the stable cut width or depth of continuous cutting under the tested conditions.

Evidence limit: The reported gain depends on the tested dynamics, parameters and equipment. A new machine needs its own stability and performance measurements.

Original source: https://par.nsf.gov/servlets/purl/10341654

---

# Facciotto et al. | Void formation in resin transfer molding

A dual-scale transport model represents resin flow inside and between fiber bundles. Transparent-mold imaging made it possible to compare predicted flow fronts and local saturation with observations.

Evidence limit: Surface visibility alone cannot validate internal voids in thick parts or the mechanical strength of finished parts.

Original source: https://par.nsf.gov/servlets/purl/10441137

---

# He, Rhodes-Leader & Song | Digital twin validation over time

The authors compare simulation and system output distributions over multiple periods and variables. Controlled experiments examine power for marginal and joint discrepancies.

Evidence limit: MSI award 2417616 lists the paper. The paper acknowledges earlier CAREER award 2045400. Distributional agreement does not establish which operating action is best.

Original source: https://par.nsf.gov/servlets/purl/10630001

---

# Hidalgo et al. | Commonsense knowledge for robot perception

ConceptNet relations, object recognition and scene context support task-dependent placement decisions. The study tests ambiguous objects and explanations, including experiments with physical robots.

Evidence limit: A placement experiment supplies no direct estimate of full-shift workload, factory throughput or long-run scheduling gains.

Original source: https://par.nsf.gov/servlets/purl/10594472?download=1

---

# Chen & Fuge | Isometric embeddings for airfoil inverse design

An autoencoder constrained to preserve geodesic distances recovered structure in an airfoil collection. The representation also exposed a numerical optimizer's dependence on angle of attack.

Evidence limit: The results concern design geometry and a numerical solver. Wind-tunnel performance and manufacturability require separate tests.

Original source: https://par.nsf.gov/servlets/purl/10521920

---

# Bi et al. | Vehicle consideration and purchase in China

Chinese auto surveys from 2013–2015 distinguish vehicles a buyer considered from the final purchase. The two-stage consumer–vehicle network includes both Wei Chen and Zhenghui Sha as authors.

Evidence limit: Two later GOALI awards list the paper. Its acknowledgments identify earlier NSF award 1436658 and the Ford–Northwestern Alliance.

Original source: https://par.nsf.gov/servlets/purl/10233100?download=1

---

# Xie, Saha, Bennett et al. | Thermal histories and local properties

Experiments on directed-energy-deposited thin walls connect wavelet features of thermal histories with local mechanical properties. The authors identify temperature and frequency features useful for prediction.

Evidence limit: This is prior work for a later multi-site award beginning in 2027. It does not establish quality equivalence across production sites.

Original source: https://doi.org/10.1038/s41524-021-00555-z

---

# Gonzalez-Hodar & Song | Ranking and selection with streaming input

The procedure separates uncertainty in estimated inputs from simulation noise, reducing work on inferior candidates and stopping at an estimated probability of a good selection. Examples include a finite-capacity queue.

Evidence limit: The probability guarantee is approximate. A policy that changes the incoming observations introduces a distinct sampling problem.

Original source: https://www.informs-sim.org/wsc25papers/con267.pdf

---

# Ahmed et al. | Predicting competition between products

GraphSAGE predicts competition links for previously unseen vehicle models and is compared with network baselines. The paper acknowledges both collaborative GOALI awards, 2005661 and 2005665.

Evidence limit: Forecasting a competition link cannot establish the causal sales effect of changing one product attribute. Wei Chen is an author. Zhenghui Sha is not.

Original source: https://par.nsf.gov/servlets/purl/10416554?download=1

---

# Qing Li | Manufacturing Systems Integration and Advanced Manufacturing

Page 11 lists proposal panel service for Manufacturing Systems Integration in 2024 and Advanced Manufacturing in 2022.

Evidence limit: The CV identifies earlier program service. It supplies no current assignment or individual review.

Original source: https://www.engineering.iastate.edu/people/files/2024/08/LiQ_CV_2023-2024.pdf

---

# Katherine Fu | Engineering Design and Systems Engineering

The service table on page 24 names Fu as an EDSE proposal panel member in fall 2019 and lists earlier engineering design service in 2014.

Evidence limit: These are dated self-reports. They do not identify a future AMDO panel.

Original source: https://edrl.engr.wisc.edu/wp-content/uploads/sites/142/2022/02/CV_Fu_Katherine_Feb1-2022.pdf

---

# Phebe Vayanos | Operations Engineering

Page 42 records Operations Engineering panel service in 2024. Page 43 separately records a 2016 optimization panel under Service, Manufacturing and Operations Research.

Evidence limit: A historical service category does not reveal the proposals considered or how they were scored.

Original source: https://viterbi.usc.edu/directory/cv/vayanos_phebe_cv.pdf

---

# Sinan Müftü | Advanced Manufacturing

Pages 29–30 explicitly list Advanced Manufacturing panel reviews in 2023 and 2020.

Evidence limit: The record documents the named predecessor program; it identifies no applicants or new AMDO panelists.

Original source: https://doctorat.tuiasi.ro/wp-content/uploads/2024/03/CV_Sinan-Muftu_Semnat_Referent-oficial.pdf

---

# Karl Haapala | Manufacturing Machines and Equipment

Page 77 records NSF/CMMI Manufacturing Machines and Equipment program panel service in 2009 and 2014–2016.

Evidence limit: Use this as historical equipment-program context. The CV does not state that Haapala reviewed a particular proposal.

Original source: https://research.engr.oregonstate.edu/isl/sites/research.engr.oregonstate.edu.isl/files/cv.pdf

---

# Prahalada Rao | Advanced Manufacturing CAREER

Page 44 records Advanced Manufacturing CAREER panel service in September 2023. The next page includes a July 2016 SMOR proposal panel.

Evidence limit: His published collaboration with Bukkapatnam is a separate fact and supplies no evidence of a shared review assignment.

Original source: https://www.ise.vt.edu/content/dam/ise_vt_edu/Rao_CV_July_%202024.pdf

---

# Zhenghui Sha | Engineering Research Initiation

Page 21 records panel service for the 2021 Engineering Research Initiation opportunity in EDSE.

Evidence limit: The entry identifies a targeted ERI competition. The author's separate GOALI award records a different role.

Original source: https://sidilab.net/wp-content/uploads/2023/03/cv_sha_mar_2023_public.pdf

---

# Jeannette Song | Manufacturing Enterprise Systems

Page 14 lists a 2008 Manufacturing Enterprise Systems panel and a separate July 2020 Future Manufacturing service entry.

Evidence limit: The two program labels differ. Neither is evidence of AMDO service.

Original source: https://people.duke.edu/~jssong/documents/Jeannette_Song_CV.pdf

---

# Sarah Ryan | Manufacturing Enterprise Systems and SMOR

Page 24 records Manufacturing Enterprise Systems CAREER panels in 2004 and 2010, and a Service, Manufacturing and Operations Research panel in 2016.

Evidence limit: The dates establish historical service only. No team or application is identified.

Original source: https://www.engineering.iastate.edu/people/files/2024/08/Ryan_CV_Jun2024.pdf

---

# Sigrún Andradóttir | Operations research service

Page 20 groups review service across multiple years and program categories, including six panels for unsolicited Operations Research proposals.

Evidence limit: Years and categories are separately summarized. Assigning a particular year to each category would go beyond the CV.

Original source: https://feedback.coe.gatech.edu/sites/default/files/2024-09/CV_Andradottir.pdf

---

# Özalp Özer | Manufacturing Enterprise Systems

Page 14 places Manufacturing Enterprise Systems panel membership under the period 2003–2005.

Evidence limit: The interval does not specify an individual review. A later Operations Engineering award is a separate record.

Original source: https://www.ozalpozer.com/pdf/OzerCVonline.pdf

---

# NIST AM-Bench 2018 | IN625 single tracks on two machines

The experiment compared three nominal single-track conditions on two machines. At the fastest condition mean widths were 106 and 100 micrometers, while mean depths were 30 and 60 micrometers.

Evidence limit: Actual power, beam size, atmosphere and thermal imaging differed. A machine effect cannot be isolated by treating the two processes as identical.

Original source: https://www.nist.gov/ambench/amb2018-02-description

---

# NIST AM-Bench 2022 | IN718 track cross-sections

The cross-section table comprises seven settings, three tracks per setting and two cuts per track, all on one plate. Its 42 measurements retain the track-level grouping.

Evidence limit: Two cuts from one track are subsamples. This plate cannot independently validate build-to-build variability or performance across a continuous design space.

Original source: https://doi.org/10.18434/mds2-2718

---

# NIST | Smart Manufacturing Systems Test Bed

The technical report documents how a physical manufacturing test bed collects and exposes machine and production data. It can help specify the event identifiers and timestamps needed for a research question.

Evidence limit: An acquisition architecture alone does not guarantee linked part identities, maintenance actions or independent quality measurements.

Original source: https://nvlpubs.nist.gov/nistpubs/ams/NIST.AMS.200-2.pdf

---

# CCAM and NIST | Digital thread roadmap

The roadmap documents industry input about exchanging and reusing information throughout manufacturing, including barriers to adoption and opportunities for research.

Evidence limit: A named industry need supplies motivation. Access to a supplier network or its transaction-level data requires separate evidence.

Original source: https://doi.org/10.6028/NIST.GCR.24-057

---

# Manufacturing research | Circularity and traceability

The review connects product design, systems modeling and traceability in circular manufacturing. It helps identify which lifecycle events must be observed before comparing repair, reuse and recycling.

Evidence limit: A conceptual lifecycle framework does not supply part histories, disposition decisions or post-repair quality measurements.

Original source: https://doi.org/10.1520/SSMS20250023

---

# HA4M | Multimodal observations of assembly work

The data paper describes multimodal observations and action annotations for an assembly task, enabling comparison of recognition methods on a common activity.

Evidence limit: Recognition accuracy is an observable endpoint here. Claims about worker workload, rescheduling or rework require interventions and their outcomes.

Original source: https://pmc.ncbi.nlm.nih.gov/articles/PMC9718853/

---

# Jin, Tuo, Bukkapatnam et al. | Surface quality during finishing

The coauthors used physically measured surfaces and functional summaries to test changes in quality between finishing stages. The study documents collaboration across statistics and manufacturing.

Evidence limit: Past coauthorship does not establish current access to specimens, collaborators, laboratory time or permission to reuse data.

Original source: https://par.nsf.gov/servlets/purl/10353327

---

# Li, Zhang & Tuo | Global and regional validation of computer models

The preprint compares simulator and experimental responses over a full input domain and specified subregions. A shear-layer example illustrates how an aggregate comparison can conceal local model discrepancy.

Evidence limit: The study's testing assumptions must be revisited for adaptively selected regions, repeated stopping or a different experimental endpoint.

Original source: https://arxiv.org/abs/2604.17144v2

---

# Yang, Bukkapatnam & Barajas | Flow through a multistage assembly line

The authors built a continuous-flow model using records from an 18-machine assembly line. Simulated throughput over about a week of operation was within 5% of the historical average for their comparison.

Evidence limit: One line's throughput comparison does not validate a maintenance policy or disrupted production schedule.

Original source: https://doi.org/10.1080/0951192X.2012.719085

---

# Zhao, Dessouky & Bukkapatnam | Timetable buffers under random delays

The operations model allocates slack in a public transit timetable to reduce expected passenger waiting under random delays.

Evidence limit: A production scheduling application would require its own delay costs, resource constraints and executable actions.

Original source: https://doi.org/10.1287/trsc.1060.0170

---

# Prakash, Tuo & Ding | Comparing wind turbine performance curves

The paper compares noisy, irregularly sampled power curves and estimates where in the input domain the performance of two turbines differs.

Evidence limit: Differences between fitted curves do not identify which hardware or operating change caused them.

Original source: https://doi.org/10.1080/00401706.2021.1905073

---

# Chen & Tuo | Fixed-budget multifidelity computer experiments

The authors study allocation of a fixed computational budget when simulation fidelities have different costs. The loss function makes the value of added simulation runs explicit.

Evidence limit: A design for prediction accuracy may select different runs than one minimizing decision loss or the cost of a physical build.

Original source: https://doi.org/10.1016/j.jspi.2025.106286

---

# Li & Zhang | fastcpd software and reproducible examples

The Journal of Statistical Software article presents an R package for change-point detection with built-in models and user-specified losses, together with reproduction materials.

Evidence limit: Retrospective segmentation can be benchmarked with these tools. A real-time alarm needs prospective delay and false-alarm evaluation.

Original source: https://www.jstatsoft.org/article/view/v116i06

---

# Philip Guo | Annotated 2018 CAREER proposal

On PDF page 8 the author defines a substantive help session as at least ten back-and-forth exchanges. More than 6,547 such sessions supported the feasibility of voluntary real-time help on Python Tutor. NSF award 1845900 documents the award.

Evidence limit: The unit is a session. Distinct users and learning gains require other measurements. The marginal comments were added after the award.

Original source: https://www.sjsu.edu/research/docs/research-development/proposal-toolkits-and-document-templates/nsf/2018%20annotated%20version%20of%20funded%20CAREER%20proposal.pdf

---

# Hamlington, Lovenduski & Niemeyer | Collaborative proposal

The authors share the summary and narrative of a funded two-university project. PDF pages 12–13 compare simulation configurations, and pages 15–16 connect computing resources to a three-year work plan.

Evidence limit: The posted material omits a formal itemized budget. Later changes to the institutions' NSF award end dates cannot reconstruct the original personnel or salary split.

Original source: https://doi.org/10.5281/zenodo.3460972

---

# Friedland, Folt & Mercer | Writing Successful Science Proposals

The third edition separates conceptual framework, anticipated and unexpected results, schedule and team science. Those chapters can be used to check whether each aim has a response to an unfavorable result.

Evidence limit: This is cross-funder writing advice. Mandatory documents and page limits come from the applicable solicitation and policy guide.

Original source: https://yalebooks.yale.edu/book/9780300241181/writing-successful-science-proposals/

---

# Grant Writers' Seminars & Workshops | NSF Research.gov workbook

The May 2024 revision's public contents identify chapters on review principles, outlining a conceptual framework, broader impacts, final checks and the project summary.

Evidence limit: This is an independent commercial workbook aligned to policy at publication. The publicly available contents are a guide to coverage.

Original source: https://www.grantcentral.com/workbooks/national-science-foundation/

---

# Joshua Schimel | Writing Science

Chapters on framing a challenge, developing action and reporting outcomes support a reverse outline of an opening argument. Later chapters discuss compression, editing and limitations.

Evidence limit: A coherent narrative still needs independent support for its scientific premise, proposed test and projected benefit.

Original source: https://www.oupjapan.co.jp/en/products/detail/9759

---

# GrantGuide | Retrieval and NIH drafting functions

GrantGuide passes retrieved documents to its comparison function. Its separate aims-writing function takes the applicant's aims directly. The accompanying corpus contains funded summaries and public health statements.

Evidence limit: A generated paragraph's evidentiary basis depends on which function produced it. Funded abstracts supply neither complete proposals nor declined controls.

Original source: https://github.com/ElsevierSoftwareX/SOFTX-D-23-00668/blob/abca6f46bb76c40f6176ef26503b7544f205f7db/Grant_Guide/generate.py

---

# GrantKit | Assemble a reproducible review packet

The packet builder assembles grant metadata, rubric, section text, word counts and lint findings into JSON. No model call is needed for this step.

Evidence limit: The associated tests cover packet structure. A separate bundled formatting file misstates the font minimum for Times New Roman. Verify rules against NSF.

Original source: https://github.com/GrantKit/grantkit/blob/005b0bf087fa2faf3789a2dd0bc01455f2fb8384/grantkit/core/review.py

---

# Claes Bäckman | Six-role internal grant review

The instructions restrict each pass to current materials and divide review among writing, internal consistency, significance, methods, resources and an adversarial reader.

Evidence limit: The role instructions come without a human-alignment benchmark. Multiple simulated readers can share a blind spot.

Original source: https://github.com/claesbackman/AI-research-feedback/blob/a64e0db1b794375299b4c38874c1c9f6369a48d7/Skills/review-grant/SKILL.md

---

# Thorne et al. | Testing grant review with planted defects

Across six EPSRC proposals the researchers introduced 42 types of defects. Overall detection was 21.2%. Section-level review had a higher average detection score than the single-pass or council systems in their comparison.

Evidence limit: Repeated evaluations generated 7,347 observations from six underlying applications. Transfer to NSF requires new testing.

Original source: https://github.com/wrmthorne/grant-perturbation-analysis/blob/499aa48cd80b6c6e861f787353858e4d1a4d657b/scripts/perturbation_detection.py

---

# GrantReview-Bench | Results and baseline comparisons

On 166 Open Grants applications in the repository's comparison, the full multi-agent system had AUC 0.393, single-call full-document review 0.522 and retrieval-only prediction 0.609.

Evidence limit: These are repository-reported estimates for a selected corpus and model. Voluntary disclosure and funder mix limit any interpretation as a funding forecast.

Original source: https://github.com/grantagent-bench/grantreview-bench/blob/4361fbc4aabf0cb6c94e7a4320bace12592138b3/results/ogrants166/ablation_table.md

---

# Qian et al. | LLM-assisted writing and grant outcomes

Two US universities' applications and public award records supported comparisons of linguistic indicators of AI use with funding outcomes. In the reported analysis, the positive NIH association had no significant NSF counterpart.

Evidence limit: Language-based exposure estimates are noisy. Observational associations cannot isolate the causal effect of a particular writing workflow.

Original source: https://doi.org/10.1073/pnas.2601439123

---

# Williams et al. | Model and human reviews of seed grants

Three model families and three prompts were compared with four human reviewers on internal seed applications. Funding recommendations showed little agreement between models and people.

Evidence limit: The sample was small, some applications served as prompt examples and the study did not evaluate outcomes after revision.

Original source: https://doi.org/10.3389/feduc.2026.1856134

---

# Chhabra et al. | Blinded review of a generated surgical grant

Two blinded reviewers scored one generated application Good and Unacceptable, respectively. Concerns included recruitment, the sample-size calculation and access to an expensive study drug.

Evidence limit: The application used fictional investigators and preliminary data. A single case cannot estimate how authentic human–AI collaboration changes funding outcomes.

Original source: https://doi.org/10.1007/s44414-025-00007-x

---

# NSF 2323082 | Wisconsin–Madison multistage manufacturing award

The project proposes joint machine-health and product-quality modeling, stochastic control, and testing in a lab and on production systems. The Wisconsin record lists $300,442, January 2024 through December 2026.

Evidence limit: This is one institutional record in a three-university collaboration. Funding dates cannot establish time actually spent on field tests.

Original source: https://api.nsf.gov/services/v1/awards/2323082.json

---

# NSF 2323083 | Rutgers multistage manufacturing award

Rutgers University's linked award records $223,843, January 2024 through December 2026, for the collaborative project on integrated product quality and machine health.

Evidence limit: The shared project title and abstract do not establish a separate independent replication at Rutgers.

Original source: https://api.nsf.gov/services/v1/awards/2323083.json

---

# NSF 2323084 | Iowa multistage manufacturing award

Iowa's record lists $207,158, January 2024 through December 2027. The three institutional estimates total $731,443. Iowa's listed term is one year longer than those for Wisconsin and Rutgers.

Evidence limit: The total is a sum of award estimates. It does not identify a typical AMDO budget, the task budget for validation or the number of experiments performed.

Original source: https://api.nsf.gov/services/v1/awards/2323084.json
