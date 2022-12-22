document.addEventListener("DOMContentLoaded", ()=>{
    $.ajax({
        type: "POST",
        url: "https://localhost:7021/Gadgets/Insert",
        data: JSON.stringify({
          name: $("#enterName").val(),
          price: $("#enterPrice").val()
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function(data) {
            alert(data);
            }
        });

    $.ajax({
        type: "GET",
        url: "https://localhost:7021/Gadgets/Output",
        success: function (response) {
            console.log(response);
            for(const item of response)
            {
                let card = document.createElement('div');
                card.className = "card";

                let header2 = document.createElement(`h2`);
                header2.innerText = item['id'];
                card.append(header2);

                let header3 = document.createElement(`h3`);
                header3.innerText = item['name'];
                card.append(header3);

                let header4 = document.createElement(`h4`);
                header4.innerText = item['price'];
                card.append(header4);
                $('.container').append(card);
            }
        },
        error: function(){
            console.log('error');
        }
    });
});