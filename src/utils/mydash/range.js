function range(start, end, step, isRight) {
    if (!end && start) {
        end = start;
        start = 0;
    }

    const stepSize = (step === 0 || step === undefined) ? 1 : step;
    step = step ? step : 1;

    if (end < start && step > 0) {
        step = step * -1
    }

    const size = Math.abs(Math.ceil((end - start) / stepSize));
    if (!size) {
        return []
    }

    const incrementStep = (x, y) => (step === 0) ? start : x + y * step;

    const result = Array(size)
        .fill(start)
        .map(incrementStep);

    return isRight ? result.reverse() : result;
}
