let request = [];
const getValues = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let estate = {
        id: Date.now(),
        costMin: document.getElementById('costMin').value,
        costMax: document.getElementById('costMax').value,
        floorMin: document.getElementById('floorMin').value,
        floorMax: document.getElementById('floorMax').value,
        district: document.getElementById('district').value
    }
    request.push(estate);
    fetch("/district", {
        redirect: "follow",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(estate)
    }).then(res => {
        return res.text();
    }).then(function (html) {
        document.write(html);
    });

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getValues);
});
