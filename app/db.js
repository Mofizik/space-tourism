
export async function destinations() {
    const res = await fetch("@public/data.json");
    return res.json().destinations;
}
export async function crew() {
    const res = await fetch("@public/data.json");
    return res.json().crew;
}
export async function technologies() {
    const res = await fetch("@public/data.json");
    return res.json().technology;
}