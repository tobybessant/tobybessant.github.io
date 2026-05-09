---
title: "Load balancing: round robin, random, and least connections"
date: 2026-05-09
draft: false
description: Three of the most common load-balancing algorithms, with a live sim for each. Round robin, random, and least connections — what they actually do and when each one falls over.
---

When traffic to a service grows past what one machine can handle, you put a **load balancer** in front of multiple identical backends. The interesting question is: how does the LB decide which backend gets the next request?

This post is an excuse to play with three of the most common algorithms side by side. Each sim is live — change the rate, change the server count, watch what happens.

## Round robin

Cycle through the servers in order: 1, 2, 3, 1, 2, 3, …

It's the simplest thing that could possibly work, and it works *well* when every request takes roughly the same time and every server is roughly the same speed. Fairness is mechanical: server `i` gets every `n`-th request, full stop.

{{< sim-load-balancer algorithm="round-robin" servers="3" rate="3" >}}

Notice the `served` counters drift apart over time even though dispatch is perfectly even. That's because each server in this sim has a slightly different processing speed — round robin keeps the *dispatch* balanced, but the *work* isn't. Crank the rate up and watch which server backs up first.

## Random

Pick a server uniformly at random for each request.

{{< sim-load-balancer algorithm="random" servers="3" rate="3" >}}

Over a long run the distribution converges to roughly even, same as round robin. The selling point isn't fairness — it's that random needs **no shared state** between LB instances. Round robin requires every LB to agree on whose turn it is; random doesn't care. That makes it a popular choice when you horizontally scale the load balancers themselves.

## Least connections

Send each new request to whichever server currently has the fewest in-flight requests.

{{< sim-load-balancer algorithm="least-connections" servers="3" rate="4" >}}

This is where things get interesting. Round robin and random are *blind* — they ignore what's actually happening on the backends. Least connections looks at real load. If one server happens to draw a string of slow requests, traffic naturally drains away from it.

Watch the `active` count: it stays remarkably even compared to the other two algorithms, even when the per-server speeds are wildly different.

The cost: the LB has to track active connections per backend. That's cheap when the LB is one process, expensive when it's a fleet — which is exactly the tradeoff random was avoiding.

## What I'd reach for next

- **Weighted round robin** — same idea as round robin, but server `i` gets weight `wᵢ` consecutive requests. Useful when you have heterogeneous hardware.
- **Power of two choices** — pick two servers at random, send the request to whichever has fewer active connections. Gets ~95% of the benefit of least-connections with almost none of the bookkeeping.
- **Consistent hashing** — same client always lands on the same backend (assuming no failures). Critical for sticky sessions and cache locality.

Each of these probably deserves its own sim.
