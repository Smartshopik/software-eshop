function random(length: number = 5) {
    return Math.random().toString(36).slice(2, 2 + length);
}

export default {
    random,
}