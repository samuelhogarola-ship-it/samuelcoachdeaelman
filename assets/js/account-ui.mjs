export function clampPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.min(100, Math.max(0, Math.round(number)));
}

const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = String(text);
  return node;
};

export function renderChallenges(container, challenges, attempts, progress, copy) {
  container.replaceChildren();
  if (!challenges || !challenges.length) {
    const empty = element("p", "empty-state", copy.empty);
    empty.style.textAlign = "left";
    empty.style.padding = "0";
    container.appendChild(empty);
    return;
  }

  challenges.forEach((challenge) => {
    const current = copy.getProgress(challenge, attempts, progress);
    const target = Math.max(0, Number(challenge.target) || 0);
    const percent = target ? clampPercent((current / target) * 100) : 0;
    const done = target > 0 && current >= target;
    const card = element("div", `challenge-card${done ? " challenge-card--done" : ""}`);
    if (done) card.appendChild(element("span", "challenge-badge", copy.completed));
    card.appendChild(element("div", "challenge-card__icon", challenge.icon || ""));
    card.appendChild(element("div", "challenge-card__period", copy.periods[challenge.type] || ""));
    card.appendChild(element("div", "challenge-card__title", challenge[copy.titleField] || challenge.title_es || ""));
    card.appendChild(element("div", "challenge-card__desc", challenge[copy.descField] || challenge.desc_es || ""));

    const progressNode = element("div", "challenge-card__progress");
    const track = element("div", "challenge-card__track");
    const fill = element("div", "challenge-card__fill");
    fill.style.width = `${percent}%`;
    track.appendChild(fill);
    progressNode.append(track, element("span", "challenge-card__count", `${current} / ${target}`));
    card.appendChild(progressNode);
    container.appendChild(card);
  });
}

export function renderMessages(section, container, messages, locale) {
  container.replaceChildren();
  if (!messages || !messages.length) {
    section.hidden = true;
    return [];
  }

  section.hidden = false;
  messages.forEach((message) => {
    const card = element("div", `msg-card${message.is_read ? "" : " msg-card--unread"}`);
    const avatar = element("img", "msg-card__avatar");
    avatar.src = "/assets/img/logo-main.webp";
    avatar.alt = "Samuel";
    avatar.width = 36;
    avatar.height = 36;
    avatar.loading = "lazy";
    const body = element("div", "msg-card__body");
    const content = element("div", "msg-card__content", message.content || "");
    content.style.whiteSpace = "pre-line";
    const date = new Date(message.created_at).toLocaleDateString(locale, {
      day: "numeric",
      month: "long"
    });
    body.append(content, element("div", "msg-card__meta", `Samuel · ${date}`));
    card.append(avatar, body);
    container.appendChild(card);
  });

  return messages.filter((message) => !message.is_read).map((message) => message.id);
}

export async function markMessagesRead(baseUrl, anonKey, token, ids) {
  if (!ids.length) return;
  const response = await fetch(`${baseUrl}/rest/v1/rpc/mark_samuel_messages_read`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ p_ids: ids })
  });
  if (!response.ok) throw new Error("message_read_failed");
}

export function renderProgressTable(container, progress, copy) {
  if (!progress || !progress.length) return;
  const table = element("table", "progress-table");
  const thead = document.createElement("thead");
  const headingRow = document.createElement("tr");
  copy.headings.forEach((heading) => headingRow.appendChild(element("th", "", heading)));
  thead.appendChild(headingRow);
  const tbody = document.createElement("tbody");

  progress.forEach((row) => {
    const tr = document.createElement("tr");
    tr.appendChild(element("td", "", copy.levels[row.nivel] || row.nivel));
    tr.appendChild(element("td", "", copy.types[row.exercise_type] || row.exercise_type));
    tr.appendChild(element("td", "", row.completed_activities));
    const scoreCell = document.createElement("td");
    if (row.average_score === null || row.average_score === undefined) {
      scoreCell.textContent = "—";
    } else {
      const percent = clampPercent(row.average_score);
      const score = element("div", "score-bar");
      const track = element("div", "score-bar__track");
      const fill = element("div", "score-bar__fill");
      fill.style.width = `${percent}%`;
      track.appendChild(fill);
      score.append(track, element("span", "", percent));
      scoreCell.appendChild(score);
    }
    tr.appendChild(scoreCell);
    tbody.appendChild(tr);
  });

  table.append(thead, tbody);
  container.replaceWith(table);
}
