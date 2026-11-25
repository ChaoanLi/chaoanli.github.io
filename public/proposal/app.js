'use strict';
(() => {
  const byId = id => document.getElementById(id);
  function normalize(text) {
    return text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  function searchTerms(query) {
    return normalize(query).trim().split(/\s+/).filter(Boolean);
  }

  // Keep filters with this browser history entry, including in the offline site.
  function searchControls(prefix) {
    const search = byId(prefix + '-search');
    const group = byId(prefix + '-group');
    const saved = history.state?.librarySearch;
    if (saved) {
      search.value = saved.query;
      group.value = saved.group;
    }
    function remember(page = 0) {
      const librarySearch = {query: search.value, group: group.value, page};
      history.replaceState({...history.state, librarySearch}, '');
    }
    return {search, group, remember, page: saved?.page ?? 0};
  }

  const sourceList = byId('src-list');
  if (sourceList) {
    const controls = searchControls('src');
    const records = Array.from(sourceList.children, node => ({
      node,
      group: node.querySelector('.meta').textContent,
      text: normalize(node.querySelector('div').textContent)
    }));
    function filter() {
      const words = searchTerms(controls.search.value);
      const group = controls.group.value;
      let count = 0;
      for (const record of records) {
        const matches = (!group || record.group === group) && words.every(word => record.text.includes(word));
        record.node.hidden = !matches;
        if (matches) count++;
      }
      byId('src-count').textContent = count
        ? count + (count === 1 ? ' source record' : ' source records')
        : 'No matching sources. Change your search or collection.';
    }
    function changeFilter() {
      filter();
      controls.remember();
    }
    controls.search.addEventListener('input', changeFilter);
    controls.group.addEventListener('change', changeFilter);
    filter();
  }

  const awardList = byId('award-list');
  if (awardList) {
    const controls = searchControls('award');
    const pageSize = 15;
    let page = controls.page;
    const records = window.AMDO_AWARDS.map(award => ({
      award,
      text: normalize([award.id, award.title, award.institution, award.pi, ...award.programs].join(' '))
    }));
    function awardCard(award) {
      const card = document.createElement('article');
      card.className = 'result';
      const body = document.createElement('div');
      const meta = document.createElement('p');
      meta.className = 'meta';
      meta.textContent = 'NSF ' + award.id + '  ·  ' + award.programs.join(' / ');
      const title = document.createElement('h3');
      const link = document.createElement('a');
      link.href = 'award-' + award.id + '.html';
      link.textContent = award.title;
      title.append(link);
      const institution = document.createElement('p');
      institution.textContent = award.institution + ' · ' + award.start + ' – ' + award.end;
      body.append(meta, title, institution);
      card.append(body);
      return card;
    }
    function show() {
      const words = searchTerms(controls.search.value);
      const group = controls.group.value;
      const hits = records.filter(({award, text}) =>
        (!group || award.programs.includes(group)) && words.every(word => text.includes(word)));
      const pages = Math.ceil(hits.length / pageSize);
      page = Math.max(0, Math.min(page, pages - 1));
      byId('award-count').textContent = hits.length
        ? hits.length.toLocaleString() + (hits.length === 1 ? ' matching award' : ' matching awards')
        : 'No matching awards. Try another keyword, institution or program.';
      const visible = hits.slice(page * pageSize, (page + 1) * pageSize);
      awardList.replaceChildren(...visible.map(({award}) => awardCard(award)));
      byId('previous').disabled = page === 0;
      byId('next').disabled = page + 1 >= pages;
      byId('page-count').textContent = pages ? 'Page ' + (page + 1) + ' of ' + pages : '';
    }
    function changeFilter() {
      page = 0;
      show();
      controls.remember(page);
    }
    function changePage(offset) {
      page += offset;
      show();
      controls.remember(page);
      awardList.querySelector('a').focus({preventScroll: true});
      awardList.scrollIntoView({block: 'start', behavior: 'instant'});
    }
    controls.search.addEventListener('input', changeFilter);
    controls.group.addEventListener('change', changeFilter);
    byId('previous').addEventListener('click', () => changePage(-1));
    byId('next').addEventListener('click', () => changePage(1));
    show();
  }
})();
