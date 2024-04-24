var languages = [
    {
      name: 'JavaScript',
      releaseDate: 1995,
      fileExtension: '.js',
      creator: 'Brendan Eich',
    },
    {
      name: 'Java',
      releaseDate: 1995,
      fileExtension: '.java',
      creator: 'James Gosling',
    },
    {
      name: 'PHP',
      releaseDate: 1995,
      fileExtension: '.php',
      creator: 'Rasmus Lerdorf',
    },
    {
      name: 'C++',
      releaseDate: 1985,
      fileExtension: '.cpp',
      creator: 'Bjarne Stroustrup',
    },
  ];

  function tableCreator(dataArray, targetElement) {
    // Crea els elements de la taula
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    table.style.border = "1px solid";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%"
  
    let th1 = document.createElement('th');
    th1.innerHTML = "Nom";
    th1.style.border = "1px solid";
    headerRow.appendChild(th1);
    let th2 = document.createElement('th');
    th2.innerHTML = "Data Llançament";
    th2.style.border = "1px solid";
    headerRow.appendChild(th2);
    let th3 = document.createElement('th');
    th3.innerHTML = "Extensió de Fitxer";
    th3.style.border = "1px solid";
    headerRow.appendChild(th3);
    let th4 = document.createElement('th');
    th4.innerHTML = "Creador";
    th4.style.border = "1px solid";
    headerRow.appendChild(th4);

    thead.appendChild(headerRow);

    table.appendChild(tbody);
    table.appendChild(thead);

    dataArray.forEach(element => {
        const tr = document.createElement('tr');
        let td = "";

        const values = Object.values(element);
        
        values.forEach((value) =>{
            td = document.createElement('td');
            td.innerHTML = value;
            td.style.border = "1px solid"

            tr.appendChild(td);
        });
        tbody.appendChild(tr);

    });



    targetElement.appendChild(table)

  }
  
  // Crida a la funció
  tableCreator(languages, document.getElementById('table-container'));
