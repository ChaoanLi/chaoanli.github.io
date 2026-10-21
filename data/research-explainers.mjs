// Deterministic teaching examples, not research observations or inference.
export function validationExample(mode) {
  const points = Array.from({ length: 121 }, (_, i) => {
    const x = i / 120;
    const model = 0.2 + 0.5 * x;
    const discrepancy = mode === 'local' ? 0.35 * Math.exp(-(((x - 0.5) / 0.075) ** 2))
      : mode === 'global' ? 0.18 : 0;
    return { x, model, discrepancy, observed: model + discrepancy + 0.025 * Math.sin(37 * x) };
  });
  const regions = [0, 1, 2].map(region => {
    const part = points.filter(p => Math.min(2, Math.floor(p.x * 3)) === region);
    return part.reduce((sum, p) => sum + Math.abs(p.discrepancy), 0) / part.length;
  });
  return { points, regions };
}

export function calibrationExample(slopeWeight) {
  // Trapezoid quadrature of ∫(f-theta*x)^2 + w*(f'-theta)^2 dx.
  const steps = 1000;
  const points = Array.from({ length: steps + 1 }, (_, i) => {
    const x = i / steps;
    return { x, y: x + 0.3 * Math.sin(2 * Math.PI * x),
      derivative: 1 + 0.6 * Math.PI * Math.cos(2 * Math.PI * x),
      weight: (i === 0 || i === steps ? 0.5 : 1) / steps };
  });
  const numerator = points.reduce((s, p) => s + p.weight * (p.x * p.y + slopeWeight * p.derivative), 0);
  const denominator = points.reduce((s, p) => s + p.weight * (p.x ** 2 + slopeWeight), 0);
  const loss = theta => points.reduce((s, p) => s + p.weight *
    ((p.y - theta * p.x) ** 2 + slopeWeight * (p.derivative - theta) ** 2), 0);
  return { theta: numerator / denominator, points, loss };
}

export function contextCollisions(collectionA, collectionB, width) {
  const contexts = text => {
    const tokens = text.split(/\s+/);
    const first = new Map();
    for (let i = width; i < tokens.length; i++) {
      const context = tokens.slice(i - width, i).join(' ');
      if (!first.has(context)) first.set(context, tokens[i]);
    }
    return first;
  };
  const A = collectionA.map(contexts), B = collectionB.map(contexts);
  let total = 0;
  const matches = new Set();
  for (const a of A) for (const b of B) for (const [context, next] of a) {
    if (b.get(context) === next) { total++; matches.add(`${context} → ${next}`); }
  }
  return { total, score: A.length && B.length ? total / (A.length * B.length) : 0, matches: [...matches] };
}
