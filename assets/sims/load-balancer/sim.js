(function () {
  if (window.__sim_loadbalancer_loaded) return;
  window.__sim_loadbalancer_loaded = true;

  const W = 600;
  const H = 320;
  const CLIENT = { x: 60, y: H / 2 };
  const LB = { x: 280, y: H / 2 };

  const ALGORITHMS = {
    "round-robin": {
      label: "Round Robin",
      pick: (servers, state) => {
        const i = state.rrIndex % servers.length;
        state.rrIndex = (state.rrIndex + 1) % servers.length;
        return servers[i];
      },
    },
    random: {
      label: "Random",
      pick: (servers) => servers[Math.floor(Math.random() * servers.length)],
    },
    "least-connections": {
      label: "Least Connections",
      pick: (servers) => {
        let best = servers[0];
        for (const s of servers) {
          if (s.activeConnections < best.activeConnections) best = s;
        }
        return best;
      },
    },
  };

  function init(el) {
    if (el.dataset.initialised) return;
    el.dataset.initialised = "1";

    const state = {
      algorithm: el.dataset.algorithm || "round-robin",
      requestRate: parseFloat(el.dataset.rate || "2"),
      paused: false,
      rrIndex: 0,
      requests: [],
      requestId: 0,
      lastSpawn: 0,
      lastTick: 0,
    };
    state.servers = makeServers(parseInt(el.dataset.servers || "3", 10));

    el.innerHTML = renderShell();
    const svg = el.querySelector(".sim-lb-svg");
    const ui = {
      algoSel: el.querySelector(".sim-lb-algo"),
      rateSlider: el.querySelector(".sim-lb-rate"),
      rateLabel: el.querySelector(".sim-lb-rate-label"),
      pauseBtn: el.querySelector(".sim-lb-pause"),
      resetBtn: el.querySelector(".sim-lb-reset"),
      serverSlider: el.querySelector(".sim-lb-server-count"),
      serverLabel: el.querySelector(".sim-lb-server-count-label"),
    };

    ui.algoSel.value = state.algorithm;
    ui.rateSlider.value = state.requestRate;
    ui.rateLabel.textContent = state.requestRate.toFixed(1);
    ui.serverSlider.value = state.servers.length;
    ui.serverLabel.textContent = state.servers.length;

    drawStatic(svg, state);

    ui.algoSel.addEventListener("change", (e) => {
      state.algorithm = e.target.value;
    });
    ui.rateSlider.addEventListener("input", (e) => {
      state.requestRate = parseFloat(e.target.value);
      ui.rateLabel.textContent = state.requestRate.toFixed(1);
    });
    ui.serverSlider.addEventListener("input", (e) => {
      const n = parseInt(e.target.value, 10);
      ui.serverLabel.textContent = n;
      state.servers = makeServers(n);
      state.rrIndex = 0;
      state.requests = [];
      drawStatic(svg, state);
    });
    ui.pauseBtn.addEventListener("click", () => {
      state.paused = !state.paused;
      ui.pauseBtn.textContent = state.paused ? "Resume" : "Pause";
    });
    ui.resetBtn.addEventListener("click", () => {
      state.servers.forEach((s) => {
        s.activeConnections = 0;
        s.totalServed = 0;
      });
      state.requests = [];
      state.rrIndex = 0;
    });

    requestAnimationFrame(tick);

    function tick(ts) {
      if (state.lastTick === 0) state.lastTick = ts;
      const dt = (ts - state.lastTick) / 1000;
      state.lastTick = ts;

      if (!state.paused) {
        const interval = 1000 / Math.max(0.01, state.requestRate);
        if (ts - state.lastSpawn > interval) {
          spawnRequest(state);
          state.lastSpawn = ts;
        }
        for (const r of state.requests) advanceRequest(r, dt, state);
        state.requests = state.requests.filter((r) => r.phase !== "done");
      }

      drawDynamic(svg, state);
      requestAnimationFrame(tick);
    }
  }

  function makeServers(n) {
    const servers = [];
    for (let i = 0; i < n; i++) {
      servers.push({
        id: i,
        activeConnections: 0,
        totalServed: 0,
        x: 500,
        y: n === 1 ? H / 2 : 60 + ((H - 120) * i) / (n - 1),
        // Per-server speed variance — makes least-connections diverge from round-robin.
        processingMultiplier: 0.7 + Math.random() * 0.8,
      });
    }
    return servers;
  }

  function spawnRequest(state) {
    state.requests.push({
      id: state.requestId++,
      phase: "to-lb",
      progress: 0,
      x: CLIENT.x,
      y: CLIENT.y,
      server: null,
      processingTime: 0,
      jitterX: 0,
      jitterY: 0,
    });
  }

  function advanceRequest(r, dt, state) {
    if (r.phase === "to-lb") {
      r.progress += dt * 2;
      if (r.progress >= 1) {
        const algo = ALGORITHMS[state.algorithm] || ALGORITHMS["round-robin"];
        r.server = algo.pick(state.servers, state);
        r.server.activeConnections++;
        r.phase = "to-server";
        r.progress = 0;
      } else {
        r.x = CLIENT.x + (LB.x - CLIENT.x) * r.progress;
        r.y = CLIENT.y;
      }
    } else if (r.phase === "to-server") {
      r.progress += dt * 2;
      if (r.progress >= 1) {
        r.phase = "processing";
        r.progress = 0;
        r.processingTime = (0.6 + Math.random() * 0.8) * r.server.processingMultiplier;
        r.jitterX = (Math.random() - 0.5) * 28;
        r.jitterY = (Math.random() - 0.5) * 28;
      } else {
        r.x = LB.x + (r.server.x - LB.x) * r.progress;
        r.y = LB.y + (r.server.y - LB.y) * r.progress;
      }
    } else if (r.phase === "processing") {
      r.progress += dt;
      if (r.progress >= r.processingTime) {
        r.server.activeConnections--;
        r.server.totalServed++;
        r.phase = "done";
      } else {
        r.x = r.server.x + r.jitterX;
        r.y = r.server.y + r.jitterY;
      }
    }
  }

  function renderShell() {
    return `
      <div class="sim-lb">
        <div class="sim-lb-controls">
          <label>Algorithm
            <select class="sim-lb-algo">
              <option value="round-robin">Round Robin</option>
              <option value="random">Random</option>
              <option value="least-connections">Least Connections</option>
            </select>
          </label>
          <label>Rate <span class="sim-lb-rate-label">2.0</span> req/s
            <input type="range" class="sim-lb-rate" min="0.5" max="12" step="0.5" value="2" />
          </label>
          <label>Servers <span class="sim-lb-server-count-label">3</span>
            <input type="range" class="sim-lb-server-count" min="1" max="6" step="1" value="3" />
          </label>
          <button class="sim-lb-pause" type="button">Pause</button>
          <button class="sim-lb-reset" type="button">Reset</button>
        </div>
        <svg class="sim-lb-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Load balancer simulation"></svg>
      </div>
    `;
  }

  function drawStatic(svg, state) {
    state.servers.forEach((s, i) => {
      s.x = 500;
      const n = state.servers.length;
      s.y = n === 1 ? H / 2 : 60 + ((H - 120) * i) / (n - 1);
    });

    let g = "";
    g += `<line x1="${CLIENT.x}" y1="${CLIENT.y}" x2="${LB.x}" y2="${LB.y}" class="sim-lb-wire" />`;
    for (const s of state.servers) {
      g += `<line x1="${LB.x}" y1="${LB.y}" x2="${s.x}" y2="${s.y}" class="sim-lb-wire" />`;
    }
    g += node(CLIENT.x, CLIENT.y, "Client", "client");
    g += node(LB.x, LB.y, "LB", "lb");
    for (const s of state.servers) {
      g += node(s.x, s.y, "S" + (s.id + 1), "server");
    }
    g += `<g class="sim-lb-stats"></g>`;
    g += `<g class="sim-lb-requests"></g>`;
    svg.innerHTML = g;
  }

  function node(x, y, label, kind) {
    const r = kind === "lb" ? 26 : 22;
    return `
      <g class="sim-lb-node sim-lb-node--${kind}">
        <rect x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" rx="6" />
        <text x="${x}" y="${y + 4}" text-anchor="middle">${label}</text>
      </g>
    `;
  }

  function drawDynamic(svg, state) {
    const stats = svg.querySelector(".sim-lb-stats");
    const reqs = svg.querySelector(".sim-lb-requests");
    if (!stats || !reqs) return;

    let s = "";
    for (const srv of state.servers) {
      s += `<text x="${srv.x + 32}" y="${srv.y - 4}" class="sim-lb-stat" text-anchor="start">${srv.activeConnections} active</text>`;
      s += `<text x="${srv.x + 32}" y="${srv.y + 12}" class="sim-lb-stat sim-lb-stat--muted" text-anchor="start">${srv.totalServed} served</text>`;
    }
    stats.innerHTML = s;

    let r = "";
    for (const req of state.requests) {
      const phase = req.phase === "processing" ? "processing" : "travel";
      r += `<circle cx="${req.x.toFixed(1)}" cy="${req.y.toFixed(1)}" r="4" class="sim-lb-request sim-lb-request--${phase}" />`;
    }
    reqs.innerHTML = r;
  }

  function initAll() {
    document.querySelectorAll("[data-sim-loadbalancer]").forEach(init);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
