var data = [
    {by:"Korsør", postnr: 4500, adresse:"Hej123", beskrivelse: "pærer", tidspunkt: "25/9-22 kl 15-20" , telefon: 12345678},
    {by:"Herning", postnr: 9999, adresse:"Nej 32", beskrivelse: "pærer", tidspunkt: "28/9-22 kl 15-20" , telefon: 99877653} 
]

function insertData() {
    var table = document.getElementById("informationsTable");
    table.innerHTML="";
    var tr="";
 data.forEach(x => {
     tr+='<tr>';
     tr+='<td>'+x.by+'</td>'+'<td>'+x.postnr+'</td>'+'<td>'+x.tidspunkt+'</td>' +'<td>'+x.telefon+'</td>'
     tr+='</tr>'

  })
  table.innerHTML+=tr;
}

