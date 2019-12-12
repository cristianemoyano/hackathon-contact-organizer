function cleanModal() {
    document.getElementById("question-textarea").value = "";
    document.getElementById("answer-textarea").value = "";
    document.getElementById("faqModalLabel").innerHTML = "Add a question";
}

function editModal(event) {
    document.getElementById("question-textarea").value = event.parentNode.parentNode.parentNode.children[0].innerHTML;
    document.getElementById("answer-textarea").value = event.parentNode.parentNode.parentNode.children[1].innerHTML;
    document.getElementById("faqModalLabel").innerHTML = "Edit a question";
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