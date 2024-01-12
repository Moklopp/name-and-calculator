function ShowName() {
    let name = document.getElementById("name").value

    str = `Привет, ${name}.`
    console.log(str)

    document.getElementById("result").innerText = str
}