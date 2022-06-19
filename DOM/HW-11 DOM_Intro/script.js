function btnClick() {
    const input = document.getElementById("text").value;
    console.log(input)
    document.getElementById('span-block').innerText = `Hello ${input}`;
    const click = document.getElementById('main');
    click.classList.toggle("main-d-none")
}
