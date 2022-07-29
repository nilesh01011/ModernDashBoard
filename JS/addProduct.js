let tableData = document.querySelector('#tableDetails');

function AddTableDetailsRow() {
  let col = 'col-md-5 col-sm-6 col-12 mb-md-0 mb-3';

  let createDivRow = document.createElement('div');

  let createDivCol_1 = document.createElement('div');
  let createTableHeadInput = document.createElement('input');

  let createDivCol_2 = document.createElement('div');
  let createTableHeadInput_2 = document.createElement('input');

  let createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn =
    document.createElement('div');

  let createAddAboutDetailsRow = document.createElement('button');

  let DeleteAboutDetailsRow_Btn = document.createElement('button');

  let spanDelete = document.createElement('span');
  let spanAdd = document.createElement('span');

  createDivRow.className = 'row tableDataRow d-flex align-items-center';
  createDivCol_1.className = col;
  createTableHeadInput.className = 'form-control';
  createTableHeadInput.setAttribute('type', 'text');
  createTableHeadInput.setAttribute('placeholder', 'Table head');

  createDivCol_2.className = col;

  createTableHeadInput_2.className = 'form-control';
  createTableHeadInput_2.setAttribute('type', 'text');
  createTableHeadInput_2.setAttribute('placeholder', 'Table description');

  createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn.className =
    'col-md-2 col-12 d-flex gap-2 px-md-0';

  createAddAboutDetailsRow.id = 'AddAboutDetailsRow';

  DeleteAboutDetailsRow_Btn.id = 'DeleteAboutDetailsRow';

  DeleteAboutDetailsRow_Btn.setAttribute('type', 'button');
  createAddAboutDetailsRow.setAttribute('type', 'button');

  createAddAboutDetailsRow.setAttribute('onclick', 'AddTableDetailsRow()');
  DeleteAboutDetailsRow_Btn.setAttribute('onclick', 'RemoveTableDetailsRow()');

  spanDelete.className = 'material-icons';

  spanDelete.innerText = 'delete_outline';

  spanAdd.className = 'material-icons';

  spanAdd.innerText = 'add';

  tableData.appendChild(createDivRow);

  createDivRow.appendChild(createDivCol_1);
  createDivCol_1.appendChild(createTableHeadInput);

  createDivRow.appendChild(createDivCol_2);
  createDivCol_2.appendChild(createTableHeadInput_2);

  createDivRow.appendChild(createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn);
  createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn.appendChild(
    createAddAboutDetailsRow
  );

  createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn.appendChild(
    DeleteAboutDetailsRow_Btn
  );
  createAddAboutDetailsRow.appendChild(spanAdd);
  DeleteAboutDetailsRow_Btn.appendChild(spanDelete);
}

function RemoveTableDetailsRow() {
  let dataRowRemove = document.querySelectorAll('.tableDataRow');
  dataRowRemove.forEach((ele) => {
    ele.addEventListener('click', () => {
      tableData.removeChild(ele);
    });
  });
}

RemoveTableDetailsRow();

// -----------------Table Details End------------------

let aboutDetails = document.querySelector('#aboutDetails');

function AddAboutRow() {
  let col = 'col-md-5 col-sm-6 col-12 mb-md-0 mb-3';

  let createDivRow = document.createElement('div');

  let createDivCol_1 = document.createElement('div');
  let createTableHeadInput = document.createElement('input');

  let createDivCol_2 = document.createElement('div');
  let createTableHeadInput_2 = document.createElement('input');

  let createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn =
    document.createElement('div');

  let createAddAboutDetailsRow = document.createElement('button');

  let DeleteAboutDetailsRow_Btn = document.createElement('button');

  let spanDelete = document.createElement('span');
  let spanAdd = document.createElement('span');

  createDivRow.className = 'row dataRow d-flex align-items-center';
  createDivCol_1.className = col;
  createTableHeadInput.className = 'form-control';
  createTableHeadInput.setAttribute('type', 'text');
  createTableHeadInput.setAttribute('placeholder', 'Table head');

  createDivCol_2.className = col;

  createTableHeadInput_2.className = 'form-control';
  createTableHeadInput_2.setAttribute('type', 'text');
  createTableHeadInput_2.setAttribute('placeholder', 'Table description');

  createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn.className =
    'col-md-2 col-12 d-flex gap-2 px-md-0';

  createAddAboutDetailsRow.id = 'AddAboutDetailsRow';

  DeleteAboutDetailsRow_Btn.id = 'DeleteAboutDetailsRow';

  DeleteAboutDetailsRow_Btn.setAttribute('type', 'button');
  createAddAboutDetailsRow.setAttribute('type', 'button');

  createAddAboutDetailsRow.setAttribute('onclick', 'AddAboutRow()');
  DeleteAboutDetailsRow_Btn.setAttribute('onclick', 'RemoveAboutRow()');

  spanDelete.className = 'material-icons';

  spanDelete.innerText = 'delete_outline';

  spanAdd.className = 'material-icons';

  spanAdd.innerText = 'add';

  aboutDetails.appendChild(createDivRow);

  createDivRow.appendChild(createDivCol_1);
  createDivCol_1.appendChild(createTableHeadInput);

  createDivRow.appendChild(createDivCol_2);
  createDivCol_2.appendChild(createTableHeadInput_2);

  createDivRow.appendChild(createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn);
  createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn.appendChild(
    createAddAboutDetailsRow
  );

  createAddAboutDetailsRow_DeleteAboutDetailsRow_Btn.appendChild(
    DeleteAboutDetailsRow_Btn
  );
  createAddAboutDetailsRow.appendChild(spanAdd);
  DeleteAboutDetailsRow_Btn.appendChild(spanDelete);
}

function RemoveAboutRow() {
  let dataRowRemove = document.querySelectorAll('.dataRow');
  dataRowRemove.forEach((ele) => {
    ele.addEventListener('click', () => {
      aboutDetails.removeChild(ele);
    });
  });
}

RemoveAboutRow();

// ----------------About Data End------------------
