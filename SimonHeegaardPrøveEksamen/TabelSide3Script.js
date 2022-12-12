
const container = document.querySelector('.datas')

const renderKunder = async () => {
    let uri = "http://localhost:8000/kunder"
    
    const res = await fetch(uri);
    const kunder = await res.json();
    console.log(kunder)

    let template = "";
    
    kunder.forEach(kunde => {
        template += `
        <div class="sank">
            <tr>
                <td>${kunde.by}<td/>
                <td>${kunde.postnr}<td/>
                <td>${kunde.adresse}<td/>
                <td>${kunde.beskrivelse}<td/>
                <td>${kunde.tidspunkt}<td/>
                <td>${kunde.telefon}<td/>
            <tr>
        </div>
        `
    });

    container.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderKunder());
