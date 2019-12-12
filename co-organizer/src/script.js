function cleanModal() {
    document.getElementById("question-textarea").value = "";
    document.getElementById("answer-textarea").value = "";
    document.getElementById("question-id").value = "0";
    document.getElementById("faqModalLabel").innerHTML = "Add a question";
}

function editModal(event) {
    document.getElementById("question-textarea").value = event.parentNode.parentNode.parentNode.children[1].innerHTML;
    document.getElementById("answer-textarea").value = event.parentNode.parentNode.parentNode.children[2].innerHTML;
    document.getElementById("question-id").value = event.parentNode.parentNode.parentNode.children[0].innerHTML;
    document.getElementById("faqModalLabel").innerHTML = "Edit a question";
}

function searchFAQ(id) {
    let idClasses = document.getElementsByClassName("question-identifier");
    let found;

    for (var i = 0; i < idClasses.length; i++) {
        if (idClasses[i].innerHTML == id) {
            found = idClasses[i].parentNode;
            break;
        }
    }
    return found;
}

function saveModal() {
    let question = document.getElementById("question-textarea").value;
    let answer = document.getElementById("answer-textarea").value;
    let id = document.getElementById("question-id").value;

    let questionRow = searchFAQ(id);

    if (questionRow == null) {
        let faqTable = document.getElementById("faq-table");
        questionRow = document.createElement("tr");

        let idClasses = document.getElementsByClassName("question-identifier");
        id = parseInt(idClasses[idClasses.length - 1].innerHTML) + 1;

        let idTd = document.createElement("td");
        idTd.innerHTML = id;
        idTd.classList.add("question-identifier");
        questionRow.appendChild(idTd);

        let questionTd = document.createElement("td");
        questionRow.appendChild(questionTd);

        let answerTd = document.createElement("td");
        questionRow.appendChild(answerTd);

        let buttonsTd = document.createElement("td");
        buttonsTd.innerHTML = '<div class="btn-group">' + 
                                  '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#faqModal" onclick="editModal(this)">Edit</button>' +
                                  '<button class="btn btn-default btn-danger" onclick="deleteRow(this)">Delete</button>' +
                              '</div>';
        buttonsTd.classList.add("fit");
        questionRow.appendChild(buttonsTd);

        faqTable.appendChild(questionRow);
    }

    questionRow.children[1].innerHTML = question;
    questionRow.children[2].innerHTML = answer;
}
function togglePublic(event) {
    let isPublic;
    isPublic = event.parentNode.parentNode.parentNode.children[3].innerHTML;
    let newIsPublic;
    newIsPublic = (isPublic == "Yes") ? "No" : "Yes";
    event.parentNode.parentNode.parentNode.children[3].innerHTML = newIsPublic;
}

function editAnswer(event) {
    document.getElementById("question-textarea").value = event.parentNode.parentNode.parentNode.children[0].innerHTML;
    document.getElementById("answer-textarea").value = event.parentNode.parentNode.parentNode.children[1].innerHTML;
}

function searchQuestion(question) {
    let tdTags = document.getElementsByTagName("td");
    let found;

    for (var i = 0; i < tdTags.length; i++) {
        if (tdTags[i].innerHTML == question) {
            found = tdTags[i].parentNode;
            break;
        }
    }
    return found;
}

function saveAnswer() {
    let question = document.getElementById("question-textarea").value;
    let answer = document.getElementById("answer-textarea").value;

    let questionRow = searchQuestion(question);

    questionRow.children[1].innerHTML = answer;
    questionRow.children[2].innerHTML = "Answered";
}

function deleteRow(event) {
    event.parentNode.parentNode.parentNode.remove();
}